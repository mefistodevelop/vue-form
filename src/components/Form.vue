<template>
  <form class="form" @submit.prevent="submit">
     <div class="form__element">
      <FormField
        type="text"
        label="Фамилия"
        name="last-name"
        placeholder="Ваша фамилия"
        v-model="form.lastName"
        :v="$v.form.lastName"
        required
      />
    </div>

    <div class="form__element">
      <FormField 
        label="Имя"
        name="name"
        placeholder="Ваше имя"
        v-model="form.name"
        :v="$v.form.name"
        required
      />
    </div>

    <div class="form__element">
      <FormField
        type="text"
        label="Отчество"
        name="middle-name"
        placeholder="Ваше отчество"
        v-model="form.middleName"
        :v="$v.form.middleName"
      />
    </div>
    <div class="form__element">
      <FormField
        type="date"
        label="Дата рождения"
        name="birthdate"
        v-model="form.birthdate"
        :v="$v.form.birthdate"
        required
      />
    </div>
    <div class="form__element">
      <FormField
        type="number"
        label="Телефон"
        name="phone"
        placeholder="Ваш номер телефона"
        v-model="form.phone"
        :v="$v.form.phone"
        required
      />
    </div>

    <button type="submit">push</button>
  </form>
</template>

<script>
  import { required } from 'vuelidate/lib/validators';
  import FormField from './FormField';

  export default {
    name: 'Form',
    data() {
      return {
       form: {
         lastName: '',
         name: '',
         middleName: '',
         birthdate: '',
         phone: '',
       },
      };
    },
    components: { FormField },
    validations: {
      form: {
        lastName: { required },
        name: { required },
        middleName: {},
        birthdate: { required },
        phone: { required },
      },
    },
    methods: {
      submit() {
        if (this.$v.$invalid) {
          this.$v.$touch();
          return;
        }
        alert('submited')
      },
    },
  };
</script>

<style scoped lang="scss">
  .form {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    // max-width: 30rem;
    min-width: 28rem;
    border: 1px solid black;
    background-color: #fff;

    > :not(:last-child) {
      margin-bottom: 1rem;
    }

    &__date {
      padding: .5rem;
      color: grey;
      border: 1px solid pink;
      border-radius: 4px;
      background-color: rgb(252, 236, 236);
    }
  };

  .error {
    color: red;
    border-color: red;
  };
</style>