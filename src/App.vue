<template>
  <div id="app">
    <img src="./assets/bg.png" class="u-app-bg"/>
    <div class="c-app-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app' 
}
</script>
<style lang="scss">
html, body {
  width: 680px;
  height: 1210px;
  margin: auto;
}
#app {
  background-color: black;
  font-family: '微软雅黑';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 680px;
  height: 1210px;
  position: relative;
  overflow: hidden;
  .u-app-bg {
    width: 680px;
    height: 1210px;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    z-index: 0;
  }
  .c-app-container {
    position: relative;
    z-index: 2;
    height: 100%;
    width: 100%;
  }
}
body, dl, dd, ul, ol, h1, h2, h3, h4, h5, h6, p, form, input, textarea, button, th, td { margin: 0; padding: 0; }
img, iframe { border: 0 none; }
table { border-collapse: collapse; border-spacing: 0; table-layout: fixed; }
ol, ul { list-style: none outside none; }
h1, h2, h3, h4, h5, h6 { font-size: 100%; font-weight: bold; }
em, strong { font-style: normal; font-weight: bold; }
body, textarea, select, input { color: #000; }
a, button { cursor: pointer; text-decoration: none; }
body { position: relative; }
img[src=""] { opacity: 0; filter: alpha(opacity=0); }
* { -webkit-tap-highlight-color: transparent; }
::-ms-clear, ::-ms-reveal { display: none; }
input { outline: none; border: 0; }
html { font-size: 14px; }
::-webkit-input-placeholder { color: #aaa; }
::-moz-placeholder { color: #aaa; }
:-ms-input-placeholder { color: #aaa; }
input:-moz-placeholder { color: #aaa; }
*:not(input) { -webkit-user-select: none; }
.f-shadow {
  text-shadow: 0 0 20px rgba(0,0,0,.6);
}
</style>
