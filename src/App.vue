<template>
  <div id="app" v-bind:class="{ 'dark': darkMode, 'light': !darkMode }">
    <img src="./assets/images/girl-1.png">
    <Panel/>

    <div>
      <p>
        <span style="cursor: default" @click="play">play</span>
        <span> / </span>
        <span style="cursor: default" @click="pause">pause</span>
      </p>
      <p style="cursor: default" @click="darkMode = !darkMode">invert</p>
    </div>

    <img v-if="!show" src="./assets/images/rain.gif" @click="show = true">
    <p v-else>you found me uwu</p>

    <Player ref="player"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Panel from './components/Panel.vue'
import Player from './components/Player.vue'

import { EventBus } from './main'

export default {
  data() {
    return {
      darkMode: true,
      show: false
    }
  },
  components: {
    HelloWorld,
    Panel,
    Player
  },
  methods: {
    play() {
      EventBus.$emit('play')
    },
    pause() {
      EventBus.$emit('pause')
    }
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
  
}

html, body, #app, section.section {
  height: 100%;
  margin: 0%;
}

.light { 
  /* background-image: url("./assets/images/bg-1.png"); */
  height: 100%; 
  background-position: center;
  background-repeat: repeat;
  color: black;
}

.dark { 
  background-image: url("./assets/images/bg-2.png");
  height: 100%; 
  background-position: center;
  background-repeat: repeat;
  color: white;
}
</style>
