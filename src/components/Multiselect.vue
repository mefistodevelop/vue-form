<template>
  <div class="multiselect-wrapper">
    <label class="multiselect__label" title="Чтобы выбрать несколько вариантов нажмите Ctrl">
      <span class="multiselect__header">
        Группа клиентов
        <span class="multiselect__star">*</span>
        <small class="multiselect__error" v-if="v.$error && !v.$required">
          Это поле обязательно для заполнения
        </small>
      </span>
      <select class="multiselect__group" name="client-group" v-model="fieldValue"
        @change="v.$touch()" multiple>
        <option class="multiselect__option" value="VIP">VIP</option>
        <option class="multiselect__option" value="Проблемные">Проблемные</option>
        <option class="multiselect__option" value="ОМС">ОМС</option>
      </select>
    </label>
    
  </div>
</template>

<script>
  export default {
    name: 'Multiselect',
    props: {
      value: {
        type: Array,
      },
      v: {
        type: Object,
        required: true,
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
  @import '../utils/_variables';

  .multiselect {
    &__header {
      @include label-header;
    }
    &__label {
      @include field-label;
      display: flex;
      flex-direction: column;
    }

    &__star {
      @include required-mark;
    }

    &__error {
      color: #ff0000;
    }

    &__group {
      margin-top: .7rem;
      padding: .5rem;
      border: 1px solid $inactive;
      border-radius: 4px;
      overflow-y: auto;

      &:hover,
      &:focus {
        border-color: $hovered-field;
      }
    }
  }
</style>