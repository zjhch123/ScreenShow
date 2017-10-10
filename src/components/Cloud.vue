<template>
  <div class="c-cloud" :class="{back: back}" @click="fBack">
    <div class="u-mask"></div>
    <div class="m-back">
    </div>
    <div class="m-front">
      <div class="m-content">
        <div class="u-qr">
          <img :src="QRcode"/>
        </div>
        <div class="u-title">
          <p>扫一扫</p>
          <p>查看全部云摄影图库</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import router from '../router';
import {basePath, AjaxUrl} from '../config';

export default {
  name: 'Cloud',
  data () {
    return {
      back: false,
      photoInterval: 0,
      photolist:[],
      QRcode:''
    }
  },
  methods: {
    _getRandom: function(range, count) {
      let arr = [], ret = [];
      for (let i = 0; i < range; i++) {
        arr.push(i);
      }
      for (let i = 0; i < count; i++) {
        const num = Math.floor(Math.random() * arr.length);
        ret.push(arr.splice(num, 1)[0]);
      }
      return ret;
    },
    fBack: function() {
      this.back = true;
      setTimeout(() => {
        router.push('/index');
      }, 1200);
    },
    getUrlParam: function(_str, _name) {
      let self = this;
      let _reg = new RegExp('(^|&|\\?)' + _name + '=([^&]*)(&|$)'),
          _r = _str.replace(/script|%22|%3E|%3C|'|"|>|<|\\/g,'_').match(_reg);

      if (_r != null) return decodeURIComponent(_r[2]); return '';
    }
  },
  created: function() {
  }, 
  mounted: function() {
    let that = this;
    let index;
    let photoDom;
    let temp = 0;
    const ROTATE_COUNT = 6;
    let topic_id = that.getUrlParam(window.location.search, 'id').split('/')[0] || 15
    fetch(AjaxUrl.cloud, {
        method: 'POST',
        headers: {
          "Content-type": "application/x-www-form-urlencoded"
        },
        dataType: 'json',
        body: 'topic_id=' + topic_id
      }).then(function (response) {
        return response.json();
      }).then((json) => {
        that.QRcode = basePath + '/' + json.data.QRCode
        for(let i = 0; i < json.data.imageUrls.length ; i++){
          json.data.imageUrls[i] = basePath + json.data.imageUrls[i]
        }
        if(json.data.imageUrls.length < 15 && json.data.imageUrls.length!=0) {
          that.photolist = json.data.imageUrls
          for (let i = json.data.imageUrls.length; i < 15 ;i++) {
            that.photolist[i] = json.data.imageUrls[temp]
            temp++
          }
        } else {
          that.photolist = json.data.imageUrls
        }
        if(json.data.imageUrls.length!=0) {
          photoDom = document.querySelector('.m-back')
          for(let i = 0; i < 15; i++) {
            photoDom.innerHTML += 
            `<div class="u-photo J_photo">
              <div class="u-front">
                <img src='${that.photolist[i]}'/>
              </div>
              <div class="u-back"></div>
            </div> `
          }
        }
        this.photoInterval = setInterval(() => {
          this._getRandom(15, ROTATE_COUNT).map(function(id) {
            return document.querySelectorAll('.J_photo')[id]
          }).forEach(function(ele) {
            ele.classList.add('rotate');
            setTimeout(function() {
              ele.classList.remove('rotate');
            }, 5000);
          })
        }, 5000);
     }).catch((err) => {
      console.log(err)
    })
  },
  beforeDestroy: function() {
    clearInterval(this.photoInterval);
  }
}
</script>

<style lang="scss">
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.c-cloud {
  width: 100%;
  height: 100%;
  position: relative;
  .back {
    .m-front {
      transition: all .4s;
      opacity: 0;
    }
    .m-back {
      opacity: 0;
      transition: all .4s .8s;;
    }
  }
  .u-mask {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.6);
    z-index: 0;
  }
  .m-back, .m-front {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .m-back {
    animation: fadeIn .4s;
    font-size: 0;
    padding: 80px 30px;
    text-align: justify;
    box-sizing: border-box;
    pointer-events: none;
    z-index: 1;
    &:after {
      width: 100%;
      height: 1px;
      content: '';
      display: inline-block;
    }
    .u-photo {
      margin-bottom: 35px;
      display: inline-block;
      width: 322px;
      height: 322px;
      backface-visibility: hidden;
      position: relative;
      transform-style:preserve-3d;
      perspective: 1000px;
      .u-front, .u-back {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        transform-style: preserve-3d;
      }
      .u-front {
        z-index: 2;
        transition: transform .4s .4s linear;
        img {
          position: absolute;
          height: 100%;
          display: block;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .u-back {
        background-color: black;
        transition: transform .4s linear;
        transform: rotate3d(1, 0, 0, -90deg);
        z-index: 1;
      }
    }
    .u-photo {
      &.rotate {
        .u-front {
          transition: transform .4s linear;
          transform: rotate3d(1, 0, 0, -90deg);
        }
        .u-back {
          transition: transform .4s .4s linear;
          transform: rotate3d(1, 0, 0, -180deg);
        }
      }
    }
  }
  .m-front {
    pointer-events: auto;
    animation: fadeIn .8s 1.6s;
    animation-fill-mode: backwards;
    background-color: rgba(41,41,79,.6);
    transform: translateZ(500px);
    z-index: 9;
    &:before {
      width: 1px;
      height: 100%;
      vertical-align: middle;
      content: '';
      display: inline-block;
    }
    .m-content {
      display: inline-block;
      vertical-align: middle;
      pointer-events: none;
    }
    .u-qr {
      margin-top: 133px;
      background-color: white;
      padding: 8px;
      display: inline-block;
      img {
        display: block;
        width: 322px;
        height: 322px;
      }
    }
    .u-title {
      font-size: 49px;
      color: #3df6ff;
      font-weight: bold;
    }
  }
}

</style>
