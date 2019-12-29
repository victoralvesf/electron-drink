<template>
  <div class="wrapper">
    <Header />
    <Sidebar />
    <Content>
      <router-view />
    </Content>
  </div>
</template>

<script>
import Header from './Layout/Header';
import Sidebar from './Layout/Sidebar';
import Content from './Layout/Content';

export default {
  name: 'Layout',
  components: {
    Header,
    Sidebar,
    Content,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=PT+Sans:400,700&display=swap');

body {
  font-family: 'PT Sans', sans-serif;
}

.wrapper {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 50px calc(100vh - 50px);
  grid-template-areas:
    "header header"
    "sidebar content"
  ;
}
</style>
