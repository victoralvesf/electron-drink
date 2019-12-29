<template>
  <aside class="sidebar">
    <ul class="menu">
      <router-link to="/">
        <li>Dashboard</li>
      </router-link>
      <router-link to="/products">
        <li>Produtos</li>
      </router-link>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>

<style lang="scss" scoped>
  .sidebar {
    grid-area: sidebar;
    background: #2584FF;

    .menu {
      width: 100%;

      a {
        text-decoration: none;
        font-weight: 700;

        li {
          padding: 10px;
          color: #fff;

          &:hover {
            background: rgba(#fff, 0.3);
          }
        }
      }
    }
  }

  .router-link-exact-active li {
    background: rgba(#fff, 0.2);
  }
</style>