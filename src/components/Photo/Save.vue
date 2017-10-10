<template>
  <div class="c-save" :class="{saved: saved}">
    <div class="g-in">
      <div class="m-photo">
        <div class="u-border"></div>
        <div class="m-container">
          <div class="u-inner">
            <img :src="img"/>
          </div>
        </div>
      </div>
      <div class="m-btn-group">
        <a class="u-back u-btn f-shadow" @click="fBack">重拍</a>
        <a class="u-save u-btn f-shadow" @click="savePhoto">保存</a>
      </div>
    </div>
  </div>
</template>
<script>
import router from '../../router/';
import {base64, basePath, AjaxUrl} from '../../config';

export default {
  name: 'TakePhoto',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      saved: false,
      img: null,
      canClick: true
    }
  },
  methods: {
    getBlobBydataURI: function (dataURI,type) { 
      var binary = atob(dataURI.split(',')[1]); 
      var array = []; 
      for(var i = 0; i < binary.length; i++) { 
        array.push(binary.charCodeAt(i)); 
      } 
      return new Blob([new Uint8Array(array)], {type:type }); 
    },

    savePhoto: function() {
      if (!this.canClick) return;
      let that = this
      let $Blob = that.getBlobBydataURI(that.img)
      var formData = new FormData();
      formData.append("file", $Blob ,"file_"+Date.parse(new Date())+".jpg"); 
      let body = formData
      this.canClick = false;
      fetch(AjaxUrl.upload, {
        method: 'POST',
        body: body
      }).then(function (response) {
        return response.json();
      }).then((data)=> {
        console.log(data)
        localStorage.setItem('imageurl', basePath + data.data.imageurl)
        localStorage.setItem('QRcode', basePath + '/' + data.data.QRcode)
        setTimeout(() => {
          this.saved = true;
          setTimeout(() => {
            router.push('/photo/share');
          }, 200);
        }, 1000);
      })
      this.canClick = true;
    },
    fBack: function() {
      if (!this.canClick) return;
      router.push('/photo');
    }
  },
  created: function() {
    this.img = localStorage.getItem('img')
  },
  destroyed: function() {
    localStorage.removeItem('img')
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

.saved {
  .g-in {
    .m-photo {
      .u-border {
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,255,0);
        background-image: linear-gradient(45deg,#21feff,#7e01cd);
      }
      .m-container {
        border: 0px;
      }
    }
  }
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
    margin: 90px auto 25px auto;
    width: 980px;
    height: 1560px;
    .u-border {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      margin: auto;
      z-index: 1;
      background-color: rgba(0,51,255,1);
      width: 970px;
      height: 1550px;
      transition: all .1s;
    }
    .m-container {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: 2;
      width: 955px;
      height: 1535px;
      box-sizing: border-box;
      padding: 24px;
      overflow: auto;
      margin: auto;
      background-color: black;
      transition: all .8s;
      &::-webkit-scrollbar {
        display: none;
      }
      .u-inner {
        width: 100%;
        img {
          display: block;
          width: 100%;
        }
      }
    }
  }
  .m-btn-group {
    font-size: 0;
    .u-btn {
      display: inline-block;
      width: 298px;
      line-height: 129px;
      text-align: center;
      background-repeat: no-repeat;
      background-size: 100% auto;
      font-size: 48px;
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


