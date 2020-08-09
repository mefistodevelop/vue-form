<template>
  <div id="app">
    <div class="app__container">
      <Form />
    </div>   
  </div>
</template>

<script>
import Form from './components/Form';

export default {
  name: 'App',
  data() {
    return {};
  },
  components: {
    Form,
  },
}
</script>

<style lang="scss" scoped>
  .app {
    &__container {
      max-width: 1200px;
      width: 100%;
      height: 100vh;
      margin: 0 auto;
      padding: 2rem;
      font-size: 1.6rem;
      background-color: rgb(163, 228, 222);
    };
  };
</style>
