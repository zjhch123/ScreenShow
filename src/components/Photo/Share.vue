<template>
  <div class="c-share">
    <div class="u-mask"></div>
    <div class="g-in">
      <div class="m-title">
        <p class="u-title f-shadow">保存成功!</p>
      </div>
      <div class="m-photo">
        <div class="u-border"></div>
        <div class="m-container">
          <div class="u-inner">
            <img src="../../assets/temp.png"/>
          </div>
        </div>
      </div>
      <div class="m-func">
        <div class="u-qr">
          <img src="../../assets/t_qr.png"/>
        </div>
        <div class="m-content">
          <p><label class="icon icon-timeline"></label><span class="u-title">扫一扫</span></p>
          <p>立即分享到微信朋友圈</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TakePhoto',
  data () {
    return {
    }
  },
  methods: {
    
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
.c-share {
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
  .m-title {
    margin: 125px auto 50px auto;
    text-align: center;
    animation: fadeIn .8s;
    animation-fill-mode: both;
    .u-title {
      font-size: 52px;
      color: #54faff;
      font-weight: bolder;
    }
  }
  .m-photo {
    animation: fadeIn .8s .4s;
    animation-fill-mode: both;
    position: relative;
    width: 470px;
    height: 470px;
    margin-left: auto;
    margin-right:auto;
    .u-border {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      margin: auto;
      z-index: 1;
      background-image: linear-gradient(45deg,#21feff,#7e01cd);
      width: 100%;
      height: 100%;
      transition: all .1s;
    }
    .m-container {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: 2;
      width: 445px;
      height: 445px;
      box-sizing: border-box;
      overflow: hidden;
      margin: auto;
      background-color: black;
      transition: all .8s;
      &::-webkit-scrollbar {
        display: none;
      }
      .u-inner {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
        }
      }
    }
  }
  .m-func {
    animation: fadeIn .8s .8s;
    animation-fill-mode: both;
    margin: auto;
    .u-qr {
      width: 147px;
      height: 147px;
      display: inline-block;
      background-color: white;
      padding: 5px;
      margin: 50px auto 30px;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    .m-content {
      color: white;
      font-size: 31px;
      text-align: center;
      font-weight: bold;
      .icon {
        display: inline-block;
        vertical-align: middle;
      }
      .icon-timeline {
        background-image: url('../../assets/p4-timeline.png');
        width: 40px;
        height: 40px;
      }
      .u-title {
        display: inline-block;
        vertical-align: middle;
        margin-left: 10px;
      }
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


