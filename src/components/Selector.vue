<template>
  <div class="selector">
    <label class="selector__label" title="Чтобы выбрать несколько вариантов нажмите Ctrl">
      <span class="selector__header">
        {{ placeholder }}
        <span class="selector__star" v-if="required">*</span>
        <small class="selector__error" v-if="v.$error && !v.$required">
          Это поле обязательно для заполнения
        </small>
      </span>
      <select
        class="selector__group"
        :class="{'selector__group_multiple': multiple}"
        name="client-group"
        v-model="fieldValue"
        @change="v.$touch()"
        :multiple="multiple"
      >
        <option
          class="selector__option"
          v-for="(option, index) in options"
          :key="index"
          :value="option"
        >
          {{ option }}
        </option>
      </select>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'selector',
    props: {
      value: {
        type: [Array, String],
        default() {
          if (this.multiple) return [];
          return '';
        },
      },
      v: {
        type: Object,
        required: true,
      },
      options: {
        type: Array,
        default() {
          return [];
        },
      },
      required: {
        type: Boolean,
        default: false,
      },
      multiple: {
        type: Boolean,
        default: false,
      },
      placeholder: {
        type: String,
        default: '',
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

  .selector {
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

      &:hover,
      &:focus {
        border-color: $hovered-field;
      }

      &_multiple {
        min-height: 10rem;
        overflow-y: auto;
      }
    }

    &__option {
      margin: .5rem;
      padding: .5rem;
    }
  }
</style>