<template>
  <div class="c-photo" :class="{back: back}">
    <div class="u-flash" :class="{take: take}"></div>
    <div class="g-in">
      <div class="u-title">
        <label class="icon"></label><span class="title f-shadow">现场拍照</span>
      </div>
      <div class="m-photo">
        <label class="u-border"></label>
        <div class="u-inner">
          <img class="u-image"/>
        </div>
      </div>
      <div class="m-btn-group">
        <a class="u-back u-btn f-shadow" @click="fBack">返回</a>
        <a class="u-save u-btn f-shadow" @click="fSave">拍照</a>
      </div>
    </div>
  </div>
</template>
<script>
import router from '../../router';
export default {
  name: 'TakePhoto',
  data () {
    return {
      init: true,
      back: false,
      take: false,
      pic: false,
      socket: null
    }
  },
  methods: {
    fBack: function() {
      this.back = true;
      setTimeout(() => {
        router.push('/index');
      }, 1000);
    },
    fSave: function() {
      this.take = true;
      this.pic = true;
      setTimeout(() => {
        router.push('/photo/save');
      }, 500);
    },
    upload(img) {
      localStorage.setItem('img',img)
    }
  },
  created: function() {
      this.socket = new WebSocket('ws://192.168.2.120:9998')
  },
  mounted: function() {
      let that = this
      let image = document.querySelector('.u-image')
      image.onload = function() {
        that.pic == true ? that.upload(image.src) : that.socket.send('get_frame')
      }
      this.socket.onopen = function(){
          that.socket.send('get_frame');
      }
      this.socket.onmessage = function(data){
          if(data.data.length<256){
              console.log(data.data)
          }
          else{
              image.src=data.data;
          }
      }
  },
  destroyed: function() {
    this.socket.close()
  }
  
}
</script>
<style scoped lang="scss">
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
  }
}
@keyframes nextTo {
  from {
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-100px);
  }
}
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes flash {
  0% {
    width: 680px;
    height: 1210px;
    opacity: 0;
  }
  50% {
    width: 680px;
    height: 1210px;
    opacity: 1;
  }
  100% {
    width: 680px;
    height: 1210px;
    opacity: 0;
  }
}
.c-photo {
  position: relative;
  width: 100%;
  height: 100%;
  &.back {
    transition: all .8s;
    opacity: 0;
  }
}
.u-flash {
  position: absolute;
  top: 50%;
  left: 50%;
  right: 0;
  bottom: 0;
  transform: translate(-50%, -50%);
  width: 0px;
  height: 0px;
  background-color: white;
  z-index: 999;
  &.take {
    animation: flash .4s ease-in;
  }
}
.g-in {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  &.add {
    animation: fadeIn .8s;
  }
  .u-title {
    margin-top: 60px;
    font-size: 42px;
    color: white;
    .icon {
      display: inline-block;
      vertical-align: middle;
      width: 74px;
      height: 60px;
      background-image: url('../../assets/p3-photo.png');
      background-size: 100% auto;
      background-repeat: no-repeat;
      margin-right: 20px;
    }
    .title {
      display: inline-block;
      vertical-align: middle;
    }
  }
  .m-photo {
    position: relative;
    width: 680px;
    height: 680px;
    margin: 65px 0 100px 0;
    .u-inner, .u-border {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      margin: auto;
    }
    .u-border {
      width: 599px;
      height: 600px;
      z-index: 3;
      background-image: url('../../assets/p3-photo-border.png');
    }
    .u-inner {
      width: 680px;
      height: 680px;
      background-color: black;
      overflow: hidden;
      img {
        width: 100%;
        display: block;
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


