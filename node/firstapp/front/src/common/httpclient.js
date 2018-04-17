/**
 * Created by 胡林云 on 2017/9/25.
 */
function checkStatus(res){
  console.log(res);
  console.log(res.headers.get('Content-Type'));
  console.log(res.headers.get('date'));
  console.log(res.headers.get('content-length'));
  console.log(res.headers.get('x-powered-by'))
  if(res.status >= 200 && res.status <400){
    return res;
  }else{
    let error = new Error( res.statusText );
    error.response = res ;
    throw error;
  }
}

function parseJson(res){
  return res.json();
}

const HttpClient = {
  get: ( url , resolve , reject ) => {
    fetch(url)
      .then(checkStatus)
      .then(parseJson)
      .then(data => {
        resolve(data);
      }).catch(e =>{
      reject(e);
    })
  },
  post: (url , data={}, resolve , reject) => {
    fetch(url,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(checkStatus)
      .then(parseJson)
      .then(data => {
        resolve(data);
      }).catch(e =>{
      reject(e);
    })
  }
};
export default HttpClient ;




