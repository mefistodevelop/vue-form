<template>
 <div class="popup" v-if="isVisible">
  <div class="popup__card">
    <div class="popup__inner">
      Новый клиент успешно создан

      <button type="button" class="popup__button" @click="$emit('close-popup')">
        &times;
      </button>
    </div>
   
  </div>
 </div>
</template>

<script>
  export default {
    name: 'Popup',
    props: {
      isVisible: {
        type: Boolean,
        default: false,
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import '../utils/_variables';

  .popup {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .5);
    z-index: 1;

    &__inner {
      position: relative;
    }

    &__card {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: center;
      align-items: center;

      width: 30rem;
      height: 10rem;
      padding: 2rem;

      font-weight: 700;
      color: $font-title;

      border: 1px solid rgba(0,0,0,.12);
      box-shadow: 0 0 25px rgba(0,0,0,.2);
      border-radius: 4px;
      background-color: #fff;
    }

    &__button {
      position: absolute;
      top: -4.9rem;
      right: -3.8rem;

      margin: 0;
      padding: 0;
      width: 4rem;
      height: 4rem;

      font-size: 4rem;
      border: none;
      background: none;
      outline: none;

      &:focus {
        color: red;
      }
    }
  }
</style>