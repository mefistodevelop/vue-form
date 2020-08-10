<template>
  <fieldset class="gender-radio">
    <legend class="gender-radio__legend">пол</legend>
    <label class="gender-radio__label">
      <input type="radio" class="gender-radio__input" name="gender" value="male">
      <span class="gender-radio__checkmark"></span>
      Мужской
    </label>
    <label class="gender-radio__label">
      <input type="radio" class="gender-radio__input" name="gender" value="female">
      <span class="gender-radio__checkmark"></span>
      Женский
    </label>    
  </fieldset>
</template>

<script>
  export default {
    name: 'GenderRadio',
  };
</script>

<style lang="scss" scoped>
  @import '../utils/_variables';

  .gender-radio {
    padding: 0;
    border: none;

    &__legend {
      @include field-label;
      margin-bottom: .7rem;
    }

    &__label {     
      position: relative;
      padding-left: 3rem;
      font-weight: 400;
      font-size: 1.4rem;
      cursor: pointer;

      &:first-of-type {
        margin-right: 3rem;
      }
    }

    &__checkmark {
      @include checkmark;
      &::after {
        top: .3rem;
        left: .3rem;
        width: 1.2rem;
        height: 1.2rem;
        background: $accent-gradient;
        border-radius: 50%;  
      }
    }

    &__input {
      @include hide-input;

      &:checked ~ .gender-radio__checkmark {
        border-color: $hovered-field;
      }
      &:checked ~ .gender-radio__checkmark::after {
        display: block;
      }
      &:focus  ~ .gender-radio__checkmark {
        box-shadow: 0 0 2px 2px $accent;
      }
    }
  }
</style>