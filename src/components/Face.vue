<template>
  <div class="c-face" :class="{back: back}">
    <div class="u-mask"></div>
    <div class="c-face-container"> 
      <div class="u-bg">
        <img src="../assets/p5-bg.png" />
      </div>
      <div class="m-content">
        <div class='m-circle m-circle1'>
          <div class="u-border"></div>
          <div class="u-circle"></div>
        </div>
        <div class='m-circle m-circle2'>
          <div class="u-border"></div>
          <div class="u-circle"></div>
        </div>
        <div class='m-circle m-circle3'>
          <div class="u-border"></div>
          <div class="u-circle"></div>
        </div>
        <div class="u-inner" :class='{showText: showText, hideText: hideText}'>
          <p>{{greeting}}</p>
        </div>
      </div>
      <div class="m-btn-group">
        <a class="u-btn u-back f-shadow" @click="fBack">返回</a>
      </div>
    </div>
  </div>
</template>
<script>
import router from '../router';
export default {
  name: 'Face',
  data () {
    return {
      back: false,
      greeting: '',
      showText: false,
      hideText: false,
      socket: null,
      name: null
    }
  },
  methods: {
    setMsg: function(msg) {
      this.showText = false;
      this.hideText = true;
      setTimeout(() => {
        this.greeting = msg;
        this.hideText = false;
        this.showText = true;
      }, 600);
    },
    fBack: function() {
      this.back = true;
      setTimeout(() => {
        router.push('/index');
      }, 1000);
    },
    showName: function() {
      let that = this
      setTimeout(() => {
        setTimeout(() => {
          this.setMsg('您好');
        }, 1000);
        setTimeout(() => {
          this.setMsg(that.name);
        }, 2800);
        setTimeout(() => {
          this.setMsg('请入座');
        }, 6000);
        setTimeout(() => {
          this.setMsg('欢迎您');
        }, 8000);
      }, 2000);
    }
  },
  created: function() {
    this.socket = new WebSocket('ws://192.168.2.120:9998');
    this.setMsg('欢迎您');
  },
  mounted: function() {
    let that = this
    this.socket.onopen= function(){
        that.socket.send('get_names');
    }
    this.socket.onmessage = function(data){
        if(that.name == null) {
          that.name = data.data
          that.showName()
        } else if(that.name !== data.data) {
          that.name == data.data
          that.showName()
          that.name = null
        }
        that.socket.send('get_names');
    }
  },
  destoryed: function() {
    this.socket.close()
  }
  
}
</script>
<style scoped lang="scss">
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(.9)
  }
  to {
    opacity: 1;
  }
}
@keyframes transformIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
  }
}
.back {
  .c-face-container {
    transition: all .8s;
    opacity: 0;
    transform: scale(.9);
  }
}
.c-face {
  position: relative;
  width: 100%;
  height: 100%;
}
.u-mask{
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.6);
  z-index: 1;
}
.c-face-container {
  animation: fadeIn .8s;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2;
  .u-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  .m-content {
    position: absolute;
    left: 0;
    right: 0;
    top: 180px;
    width: 600px;
    height: 600px;
    margin-left: auto;
    margin-right: auto;
    .u-inner {
      animation: transformIn .8s .8s;
      animation-fill-mode: both;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -154px;
      margin-left: -154px;
      background-image: url('../assets/p5-inner.png');
      width: 308px;
      height: 308px;
      background-size: 100% auto;
      display: inline-block;
      line-height: 308px;
      font-size: 60px;
      color: white;
      font-weight: bold;
      z-index: 999;
      p {
        transition: all .6s;
      }
      &.showText {
        p {
          opacity: 1;
          transform: translateY(0);
        }
      }
      &.hideText {
        p {
          opacity: 0;
          transform: translateY(-20px);
        }
      }
    }
  }
  .m-btn-group {
    font-size: 0;
    position: absolute;
    z-index: 3;
    top: 1000px;
    left: 0;
    right: 0;
    text-align: center;
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
      background-image: url('../assets/p3-back-btn.png');
    }
    .u-save {
      background-image: url('../assets/p3-save-btn.png');
    }
  }
}
@keyframes moveover {
  0%   {transform:rotate(0deg);}
  100% {transform:rotate(360deg);}
}
.m-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .u-border {
    width: 100%;
    height: 100%;
    position: absolute;
    background-repeat: no-repeat;
    top: 0;
    left: 0;
  }
  .u-circle {
    margin: auto;
    background-repeat: no-repeat;
    background-size: auto 100%;
    top: 0;
    left: 0;
    position: absolute;
    animation: moveover 3s linear infinite reverse;
  }
}
.m-circle1 {
  width: 403px;
  height: 403px;
  .u-border {
    background-image: url('../assets/p5-border1.png');
  }
  .u-circle {
    width: 402px;
    height: 402px;
    background-image: url('../assets/p5-circle1.png');
  }
}
.m-circle2 {
  width: 508px;
  height: 508px;
  .u-border {
    background-image: url('../assets/p5-border2.png');
  }
  .u-circle {
    width: 510px;
    height: 510px;
    background-image: url('../assets/p5-circle2.png');
  }
}
.m-circle3 {
  width: 609px;
  height: 610px;
  .u-border {
    background-image: url('../assets/p5-border3.png');
  }
  .u-circle {
    width: 610px;
    height: 610px;
    background-image: url('../assets/p5-circle3.png');
  }
}
</style>










