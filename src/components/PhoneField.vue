<template>
  <div class="phone-field">
    <label class="phone-field__label">
     <span class="phone-field__label-header">
        {{ label }}
        <span class="phone-field__star" v-if="required">*</span>
        <small class="phone-field__error" v-if="v.$error && !v.$required">
          Это поле обязательно для заполнения
        </small>
        <small class="phone-field__error" v-if="v.length">
          Номер телефона должен быть 11 цифр
        </small>
        <small class="phone-field__error" v-if="v.firstCharIs">
          Номер телефона должен начинаться с цифры 7
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
  .phone-field {
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