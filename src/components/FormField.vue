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
  .form-field {
    min-width: 25.8rem;
    max-width: 40rem;

    &__label {
      display: flex;
      flex-direction: column;
    }

    &__label-header {
      display: flex;
      flex-wrap: wrap;
    }

    &__star {
      color: #ff0000;
      margin: 0 .3rem;
    }

    &__error {
      color: #ff0000;
    }

    &__input {
      margin-top: .5rem;
      width: 100%;
      height: 4.4rem;
      padding: 0 1.2rem;
      border: 1px solid rgba(31,32,65,.25);
      border-radius: 4px;
      font-weight: 400;
      font-size: 14px;

      &::placeholder {
        color: rgba(31,32,65,.25);
      }

      &:hover,
      &:focus {
        border-color: rgba(31,32,65,.5);
      }
    }
  }
</style>