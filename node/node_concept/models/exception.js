/**
 * Created by 胡林云 on 2017/4/10.
 */
module.exports = {
  expdExe :function(flag){
    if(flag == 0){
      throw [1,2,3,4,4,5]
    }
    return 'success'
  },
}