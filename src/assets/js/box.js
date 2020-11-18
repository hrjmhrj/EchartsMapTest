export default {
  install(Vue) {
    Vue.prototype.getPx = (px) => {
      var myW = 3840;
      var pmW = window.screen.width;
      return px * (pmW / myW);
    },
    Vue.prototype.getVhToVw = (vh) => {
      var pmH = window.screen.height;
      var pmW = window.screen.width;
      return vh * (pmW / pmH);
    },
    Vue.prototype.getVwToVh = (vw) => {
      var pmH = window.screen.height;
      var pmW = window.screen.width;
      return vw * (pmW / pmH);
    },
    Vue.prototype.getVwToPx = (vw) => {
      var pmW = window.screen.width;
      return vw * (pmW / 100);
    },
    Vue.prototype.getPxToPxW = (px) => {
      var pmW = window.screen.width;
      var allW = 3840;
      return px*pmW/allW;
    }
    Vue.prototype.getPxToPxH= (px) => {
      var pmH = window.screen.height;
      var allH = 2160;
      return px*pmH/allH;
    }
  }
}
