<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app' 
}
</script>
<style>
#app {
  font-family: '微软雅黑', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body, dl, dd, ul, ol, h1, h2, h3, h4, h5, h6, p, form, input, textarea, button, th, td { margin: 0; padding: 0; }
img, iframe { border: 0 none; }
table { border-collapse: collapse; border-spacing: 0; table-layout: fixed; }
ol, ul { list-style: none outside none; }
h1, h2, h3, h4, h5, h6 { font-size: 100%; font-weight: bold; }
em, strong { font-style: normal; font-weight: bold; }
html { font-family: PingFangSC-Light,helvetica,"Helvetica Neue", STHeiTi, "Microsoft YaHei", sans-serif !important; -webkit-text-size-adjust: 100%; text-size-adjust: 100%; font-size: 366.211%; }
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
</style>
