<template>
  <div class="phone-field">
    <label class="phone-field__label">
     <span class="phone-field__label-header">
        <span class="phone-field__label-text">{{ label }}</span>
        <span class="phone-field__star" v-if="required">*</span>
        <small class="phone-field__error" v-show="v.$error && !v.$required">
          Это поле обязательно для заполнения
        </small>
        <small class="phone-field__error" v-show="!v.length">
          Номер телефона должен быть 11 цифр
        </small>
        <small class="phone-field__error" v-show="!v.firstCharIs">
          Номер телефона должен начинаться с 7
        </small>
     </span>
     
      <input
        class="phone-field__input"
        type="number"
        :name="name" 
        :placeholder="placeholder"
        v-model="fieldValue"
        @change="v.$touch()"
      >
    </label>
  </div>
</template>


<script>
  export default {
    name: 'PhoneField',
    props: {
      value: {
        type: String,
        default: '',
      },
      v: {
        type: Object,
        required: true,
      },
      label: {
        type: String,
        default: '',
      },
      name: {
        type: String,
        default: '',
      },
      placeholder: {
        type: String,
        default: 'placeholder',
      },
      required: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      fieldValue: {
        get() {
          return this.value;
        },
        set(value) {
          this.$emit("input", value);
        },
      },
    },
  };
</script>


<style lang="scss" scoped>
  @import '../utils/_variables.scss';
  
  .phone-field {
    min-width: 25.8rem;
    max-width: 40rem;

    &__label {
      @include field-label;
      display: flex;
      flex-direction: column;
    }

    &__label-header {
      display: flex;
      flex-wrap: wrap;
    }

    &__label-text {
      padding-bottom: 1.5rem;
    }

    &__star {
      @include required-mark;
    }

    &__error {
      @include required-warning;
    }

    &__input {
      @include form-field;
    }
  }
</style>