<template>
  <div id="app-maker">
    <img alt="Vue logo" src="../assets/icon_100.png">
    <HelloWorld/>
    <footer>
      <Footer/>
    </footer>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue'
import Footer from './Footer.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Footer,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>