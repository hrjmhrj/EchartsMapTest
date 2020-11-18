import Vue from 'vue'
import Element from 'element-ui'
import '../element-variables.scss'

Vue.use(Element)

export function failedTip(message,time) {
  this.$message({
    showClose: true,
    message: message == null?'未知错误':message,
    type: 'error',
    duration: time == null?2000:time
  });
}

export function successTip(message,time) {
  this.$message({
    showClose: true,
    message: message == null?'操作成功':message,
    type: 'success',
    duration: time == null?2000:time
  });
}
