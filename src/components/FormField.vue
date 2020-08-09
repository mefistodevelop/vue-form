<template>
  <div class="form-field">
    <label class="form-field__label">
     <span class="form-field__label-header">
        {{ label }}
        <span class="form-field__star" v-if="required">*</span>
        <small class="form-field__error" v-if="v.$error && !v.$required" >
          Это поле обязательно для заполнения
        </small>
     </span>
     
      <input
        class="form-field__input"
        :type="type"
        :name="name" 
        :placeholder="placeholder"
        v-model.trim="fieldValue"
        @input="v.$touch()"
      >
    </label>
  </div>
</template>


<script>
  export default {
    name: 'FormField',
    props: {
      value: {
        type: String,
        default: ""
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
      type: {
        type: String,
        default: 'text',
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

  .form-field {
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

    &__star {
      @include required-mark;
    }

    &__error {
      color: #ff0000;
    }

    &__input {
      @include form-field;
    }
  }
</style>