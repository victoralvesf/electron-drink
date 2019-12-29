<template>
  <header>
    <h2>Drink</h2>
    <div class="user">
      <div class="info">
        <img src="https://identity.tbs.com/users/CTC/14b0e016-e668-42b9-b51a-d71c12659dd9/avatar" alt="">
        <span>Victor</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
  header {
    grid-area: header;
    width: 100%;
    height: 50px;
    background: #0D5CCF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;

    h2 {
      padding: 0 10px;
      margin: 0;
    }
  }

  .user {
    height: 100%;
    cursor: pointer;

    .info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: rgba(#fff, 0.3);
      height: 100%;
      padding: 0 15px;
      
      img {
        width: 30px;
        border: 2px solid #fff;
        border-radius: 50%;
        margin-right: 5px;
      }

      span {
        font-weight: 700;
      }
    } 
  }
</style>