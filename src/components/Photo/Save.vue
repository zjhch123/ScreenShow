<template>
  <div class="c-save">
    <div class="u-mask"></div>
    <div class="g-in">
      <div class="m-photo">
        <div class="u-inner">
        </div>
      </div>
      <div class="m-btn-group">
        <router-link to="/photo" class="u-back u-btn f-shadow">重拍</router-link>
        <a href="javascript:;" class="u-save u-btn f-shadow">保存</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TakePhoto',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
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
.c-save {
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
.g-in {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  .m-photo {
    position: relative;
    width: 610px;
    height: 1000px;
    border: 2px solid #0734e8;
    margin: 40px auto 47px auto;
    overflow: auto;
    background-color: black;
    &::-webkit-scrollbar {
      display: none;
    }
    .u-inner {
      width: 100%;
      height: 1440px;
      background: -webkit-gradient(linear, 0 0, 0 bottom, from(#ff0000), to(rgba(0, 0, 255, 0.5)));
    }
  }
  .m-btn-group {
    font-size: 0;
    .u-btn {
      display: inline-block;
      width: 195px;
      line-height: 83px;
      text-align: center;
      background-repeat: no-repeat;
      background-size: 100% auto;
      font-size: 31px;
      color: white;
      transition: transform .8s;
      &+.u-btn {
        margin-left: 90px;
      }
      &:active {
        transform: scale(.9);
      }
    }
    .u-back {
      background-image: url('../../assets/p3-back-btn.png');
    }
    .u-save {
      background-image: url('../../assets/p3-save-btn.png');
    }
  }
}
</style>


