
var strictUriEncode = function (str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
        return '%' + c.charCodeAt(0).toString(16);
    });
};
define(function () {
    return {
        extract: function (str) {
            return str.split('?')[1] || '';
        },

        parse: function (str) {
            if (typeof str !== 'string') {
                return {};
            }

            str = _.trim(str).replace(/^(\?|#|&)/, '');

            if (!str) {
                return {};
            }

            return _.reduce(str.split('&'), function (ret, param) {
                var parts = param.replace(/\+/g, ' ').split('=');
                // Firefox (pre 40) decodes `%3D` to `=`
                // https://github.com/sindresorhus/query-string/pull/37
                var key = parts.shift();
                var val = parts.length > 0 ? parts.join('=') : undefined;

                key = decodeURIComponent(key);

                // missing `=` should be `null`:
                // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
                val = val === undefined ? null : decodeURIComponent(val);

                if (!ret.hasOwnProperty(key)) {
                    ret[key] = val;
                } else if (Array.isArray(ret[key])) {
                    ret[key].push(val);
                } else {
                    ret[key] = [ret[key], val];
                }

                return ret;
            }, {});
        },

        stringify: function (obj) {
            return obj ?_.filter(_.map( _.keys(obj).sort(), function (key) {
                var val = obj[key];

                if (val === undefined) {
                    return '';
                }

                if (val === null) {
                    return key;
                }

                if (_.isArray(val)) {
                    return _.map(val.sort(), function (val2) {
                        return strictUriEncode(key) + '=' + strictUriEncode(val2);
                    }).join('&');
                }

                return strictUriEncode(key) + '=' + strictUriEncode(val);
            }), function (x) {
                return x.length > 0;
            }).join('&') : '';
        }
    };
});
