<template>
  <section>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'Content',
};
</script>

<style scoped>
  section {
    grid-area: content;
    padding: 15px;
  }
</style>