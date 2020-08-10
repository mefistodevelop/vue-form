<template>
  <div class="checkbox">
    <label class="checkbox__label">
      <input type="checkbox" class="checkbox__input" name="don't-send-sms">
      <span class="checkbox__checkmark"></span>
      Не отправлять СМС
    </label>
  </div>
</template>

<script>
  export default {
    name: 'Checkbox',
  };
</script>

<style lang="scss" scoped>
  @import '../utils/_variables';
  
  .checkbox {
    &__label {
      position: relative;
      padding-left: 3rem;
      font-weight: 400;
      font-size: 1.4rem;
      cursor: pointer;
    }

    &__input {
      @include hide-input;

      &:checked ~ .checkbox__checkmark {
        border-color: $accent;
      }

      &:checked ~ .checkbox__checkmark::after,
      &:checked ~ .checkbox__checkmark::before{
        display: block;
      }

      &:focus ~ .checkbox__checkmark {
        box-shadow: 0 0 2px 2px $accent;
      }
    }

    &__checkmark {
      @include checkmark;
      top: -.2rem;
      border-radius: 4px;

      &::before {
        top: .7rem;
        left: .5rem;
        width: .2rem;
        height: .6rem;
        background: $accent-gradient;
        transform: rotate(-45deg);
      }

      &::after {
        top: .5rem;
        left: .9rem;
        width: .2rem;
        height: .8rem;
        background: $accent-gradient;
        transform: rotate(45deg);
      }
    }
  }
</style>