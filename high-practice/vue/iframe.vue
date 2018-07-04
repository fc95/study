<template>
  <div>
    <iframe ref="container" frameborder="0" width="100%" :height="height + 'px'"></iframe>
  </div>
</template>

<script>
/* eslint-disable */
import {
  getBohCookie,
  jumpTo
} from '@/deps/utils'

export default {
  data() {
    let token = getBohCookie('BOH_ACCOUNT_TOKEN') || ''
    let { onlineUrl } = this.$route.query
    let urlSrc = `${decodeURIComponent(onlineUrl)}&BOH_ACCOUNT_TOKEN=${token}`
    // console.log(urlSrc)
    return {
      urlSrc: urlSrc,
      // urlSrc: 'https://crmkb.yazuo.com/',
      height: 200
    }
  },
  created() {
    this.setFrameHeight()
  },
  mounted() {
    const crmUrl = this.urlSrc;
    const container = this.$refs.container;
    const containerWindow = container.contentWindow || container.contentDocument.document || container.contentDocument;
    const doc = containerWindow.document;
    doc.open();
    doc.write(
      `<script>
        window.onload = function () {
          this.name = 'ecrmFrameInBoh';
          // alert(window.name);
          location.href = '${crmUrl}';
        };
      <\/script>`
    );
    doc.close();
  },
  methods: {
    setFrameHeight() {
      const _this = this
      // 注册消息事件监听，对来自 iframe 框架的消息进行处理
      window.addEventListener('message', function (e) {
        try {
          if (typeof e.data === 'string') {
            let data = JSON.parse(e.data)
            _this.height = data.pageHeight || 200
          } else {
            let data = e.data
            // console.log('=============== data ===============', data)
            if (data.ecrmFrameInBoh) {
              jumpTo('online-activitylist')
            }
          }
        } catch (e) {
          console.log(e.toString())
          _this.height = 200
        }
      }, false)
    }
  }
}
</script>

