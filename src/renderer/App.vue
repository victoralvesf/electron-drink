<template>
  <div id="app">
    <Layout />
  </div>
</template>

<script>
import Layout from './components/Layout';

export default {
  name: 'eaichat',
  components: { Layout },
};
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
    -webkit-user-select: none;
  }

  #app {
    width: 100%;
    height: 100%;
  }
</style>
