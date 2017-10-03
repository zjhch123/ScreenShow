<template>
  <div class="c-index">
    <div class="u-mask"></div>
    <div class="g-title">
      <p class="u-title">人工智能·终端机</p>
      <p class="u-subtitle">Artificial intelligence</p>
    </div>
    <div class="g-in">
      <div class="m-function m-photo">
        <router-link to="/photo" class="u-link">
          <div class="u-content">
              <label class="icon"></label>
              <p class="u-text f-shadow">现场拍照</p>
          </div>
        </router-link>
      </div>
      <div class="m-function m-face">
        <router-link to="/face" class="u-link">
          <div class="u-content">
            <label class="icon"></label>
            <p class="u-text f-shadow">人脸识别</p>
          </div>
        </router-link>
      </div>
      <div class="m-function m-cloud">
        <router-link to="/cloud" class="u-link">
          <div class="u-content">
            <label class="icon"></label>
            <p class="u-text f-shadow">云摄影</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import router from '../router';
export default {
  name: 'Index',
  data () {
    return {
      
    }
  },
  created: function() {
    
  }
}
</script>
<style scoped lang="scss">
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
  }
}
.c-index {
  position: relative;
  width: 100%;
  height: 100%;
}
.u-mask {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.6);
  z-index: 1;
}
.g-title {
  position: relative;
  z-index: 2;
  display: block;
  text-align: center;  
  color: white;
  transform: translate3d(0, 70px, 0) scale(.7) !important;
  text-shadow: 0 0 20px rgba(0,0,0,.6);
  .u-title {
    font-size: 60px;
  }
  .u-subtitle {
    font-size: 28px;
    line-height: 60px;
  }
}
.g-in {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  animation: fadeIn 2s;
  .m-function {
    display: block;
    position: absolute;
    background-size: 100% auto;
    background-repeat: no-repeat;
    text-align: center;
    transition: transform 1s;
    white-space: nowrap;
    .u-link {
      display: block;
      width: 100%;
      height: 100%;
      position: relative;
      color: white;
      &:before {
        width: 1px;
        height: 100%;
        content: '';
        display: inline-block;
        vertical-align: middle;
      }
    }
    .u-content {
      display: inline-block;
      vertical-align: middle;
      .icon {
        display: block;
        background-size: 100% auto;
        background-repeat: no-repeat;
        margin-left: auto;
        margin-right: auto;
      }
    }
    &:active {
      transform: scale(.9);
    }
  }
  .m-photo {
    background-image: url('../assets/p1-ball1.png');
    width: 254px;
    height: 254px;
    font-size: 31px;
    right: 30px;
    top: 240px;
    .icon {
      background-image: url('../assets/p1-photo.png');
      width: 91px;
      height: 71px;
      margin-bottom: 8px;
    }
  }
  .m-face {
    background-image: url('../assets/p1-ball2.png');
    width: 350px;
    height: 350px;
    font-size: 34px;
    left: 75px;
    top: 505px;
    .icon {
      background-image: url('../assets/p1-face.png');
      width: 117px;
      height: 116px;
      margin-bottom: 18px;
    }
  }
  .m-cloud {
    background-image: url('../assets/p1-ball3.png');
    width: 253px;
    height: 253px;
    font-size: 31px;
    right: 90px;
    top: 860px;
    .icon {
      background-image: url('../assets/p1-cloud.png');
      width: 71px;
      height: 71px;
      margin-bottom: 12px;
    }
  }
}
</style>










