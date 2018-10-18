<template>
  <div id="app" class="bg">
    <img src="https://gdurl.com/OMAt" alt="Girl">
    <Panel/>
    <Player/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Panel from './components/Panel.vue'
import Player from './components/Player.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Panel,
    Player
  }
}
</script>

<style>
@font-face {
  font-family: 'Pixel';
  src: url('./assets/fonts/depixelbreit-webfont.eot');
  src: url('./assets/fonts/depixelbreit-webfont.eot?#iefix') format('embedded-opentype'),
    url('./assets/fonts/depixelbreit-webfont.woff') format('woff'),
    url('./assets/fonts/depixelbreit-webfont.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}


#app {
  font-family: 'Pixel';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

html, body, #app, section.section {
  height: 100%;
  margin: 0%;
}

.bg { 
  /* background-image: url(https://gdurl.com/L8Hl);  */
  background-image: url(https://gdurl.com/5b8J);
  height: 100%; 
  background-position: center;
  background-repeat: repeat;
}
</style>
