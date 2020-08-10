<template>
  <form class="form" @submit.prevent="submit">
    <h1 class="form__title">Новый клиент</h1>
    <div class="form__wrapper">
      <section class="form__section">
        <h2 class="visually-hidden">Основные данные</h2>

        <div class="form__section-content">
          <div class="form__row">
            <div class="form__element">
              <FormField
                type="text"
                label="Фамилия"
                name="last-name"
                placeholder="Фамилия"
                v-model="form.lastName"
                :v="$v.form.lastName"
                required
              />
            </div>

            <div class="form__element">
              <FormField 
                label="Имя"
                name="name"
                placeholder="Имя"
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
                placeholder="Отчество"
                v-model="form.middleName"
                :v="$v.form.middleName"
              />
            </div>
          </div>

          <div class="form__row form__row_left">
            <div class="form__element form__element_left">
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
              <PhoneField
                label="Телефон"
                name="phone"
                placeholder="7 123 456 78 90"
                v-model="form.phone"
                :v="$v.form.phone"
                required
              />
            </div>
          </div>

          <div class="form__row">
            <div class="form__element">
              <GenderRadio />
            </div>
          </div>

          <div class="form__row form__row_selectors">
            <div class="form__element">
              <Selector
                v-model="form.clientGroup"
                :v="$v.form.clientGroup"
                :options="groups"
                placeholder="Группа клиентов"
                required
                multiple
              />
            </div>

            <div class="form__element">
              <Selector
                v-model="form.clientDoctor"
                :v="$v.form.clientDoctor"
                :options="doctors"
                placeholder="Лечащий врач"
              />
            </div>
          </div>

          <div class="form__element">
            <Checkbox />
          </div>
        </div>
      </section>
    

      <section class="form__section">
        <h2 class="form__subtitle">Адрес</h2>

        <div class="form__section-content">
          <div class="form__row">
            <div class="form__element">
              <FormField
                type="number"
                label="Индекс"
                name="zip-code"
                placeholder="123456"
                v-model="form.zipCode"
                :v="$v.form.zipCode"
              />
            </div>

            <div class="form__element">
              <FormField
                type="text"
                label="страна"
                name="country"
                placeholder="Страна"
                v-model="form.country"
                :v="$v.form.country"
              />
            </div>
            
            <div class="form__element">
              <FormField
                type="text"
                label="область"
                name="region"
                placeholder="Область"
                v-model="form.region"
                :v="$v.form.region"
              />
            </div>
          </div>

          <div class="form__row">
            <div class="form__element">
              <FormField
                type="text"
                label="город"
                name="city"
                placeholder="Город"
                v-model="form.city"
                :v="$v.form.city"
                required
              />
            </div>

            <div class="form__element">
              <FormField
                type="text"
                label="улица"
                name="street"
                placeholder="Улица"
                v-model="form.street"
                :v="$v.form.street"
              />
            </div>

            <div class="form__element">
              <FormField
                type="text"
                label="дом"
                name="building"
                placeholder="Дом"
                v-model="form.building"
                :v="$v.form.building"
              />
            </div>
          </div>
        </div>
      </section>


      <section class="form__section">
        <h2 class="form__subtitle">Паспорт</h2>

        <div class="form__section-content">
          <div class="form__row">
            <div class="form__element">
              <Selector
                v-model="form.documentType"
                :v="$v.form.documentType"
                :options="documentTypes"
                placeholder="тип документа"
                required
              />
            </div>

            <div class="form__element">
              <FormField
                type="text"
                label="серия"
                name="series"
                placeholder="Серия"
                v-model="form.series"
                :v="$v.form.series"
              />
            </div>

            <div class="form__element">
              <FormField
                type="number"
                label="номер"
                name="number"
                placeholder="Номер"
                v-model="form.number"
                :v="$v.form.number"
              />
            </div>
          </div>

          <div class="form__row form__row_left">
            <div class="form__element">
              <FormField
                type="text"
                label="кем выдан"
                name="issuedBy"
                placeholder="Кем выдан"
                v-model="form.issuedBy"
                :v="$v.form.issuedBy"
              />
            </div>

            <div class="form__element">
              <FormField
                type="date"
                label="Дата выдачи"
                name="releaseDate"
                v-model="form.releaseDate"
                :v="$v.form.releaseDate"
                required
              />
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="form__footer">
      <button class="form__button" type="submit">Создать клиента</button>
    </div>

    <Popup :isVisible="isPopupVisible" v-on:close-popup="closePopup" />
  </form>
</template>

<script>
  import { required } from 'vuelidate/lib/validators';
  // import { length, firstCharIs } from '../utils/validators';
  import FormField from './FormField';
  import PhoneField from './PhoneField';
  import GenderRadio from './GenderRadio';
  import Selector from './Selector';
  import Checkbox from './Checkbox';
  import Popup from './Popup';

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
          clientGroup: [],
          clientDoctor: '',
          zipCode: '',
          country: '',
          region: '',
          city: '',
          street: '',
          building: '',
          documentType: '',
          series: '',
          number: '',
          issuedBy: '',
          releaseDate: '',
        },
        groups: ['VIP', 'Проблемные', 'ОМС'],
        doctors: ['Иванов', 'Захаров', 'Чернышева'],
        documentTypes: ['Паспорт', 'Свидетельство о рождении', 'Вод. удостоверение'],
        isPopupVisible: false,
      };
    },
    components: {
      FormField, PhoneField, GenderRadio,
      Selector, Checkbox, Popup,
    },
    validations: {
      form: {
        lastName: { required },
        name: { required },
        middleName: {},
        birthdate: { required },
        phone: { 
          required,
          // length: length(11),
          // firstCharIs: firstCharIs(7),
        },
        clientGroup: { required },
        clientDoctor: {},
        zipCode: {},
        country: {},
        region: {},
        city: { required },
        street: {},
        building: {},
        documentType: { required },
        series: {},
        number: {},
        issuedBy: {},
        releaseDate: { required },
      },
    },
    methods: {
      closePopup() {
        this.isPopupVisible = false;
      },
      submit() {
        this.$v.$touch();
        if (this.$v.$invalid) return;
        this.isPopupVisible = true;
      },
    },
  };
</script>

<style scoped lang="scss">
  @import '../utils/_variables';

  .form {
    border: 1px solid rgba(0,0,0,.12);
    box-shadow: 0 0 25px rgba(0,0,0,.2);
    border-radius: 4px;
    background-color: #fff;

    &__title {
      font-size: 3rem;
      color: $font-title;
      text-align: center;
    }

    &__wrapper {
      padding: 1rem;
      min-width: 28rem;

      @media (min-width: 375px) {
        padding: 1rem 4rem;
      }

      @media (min-width: 890px) {
        padding: 1rem 2rem;
      }
    }

    &__section {
      margin-bottom: 2rem;
    }

    &__section-content {
      display: flex;
      flex-direction: column;
    }

    &__row {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 3rem;

      @media (min-width: 668px) {
        flex-direction: row;
        align-items: inherit;
        flex-wrap: wrap;
        justify-content: space-between;

        &_left {
          justify-content: flex-start;
        }
      }

      &:last-child {
        margin-bottom: 0;
      }

      &_selectors {
        flex-direction: row;
        flex-wrap: wrap;
        align-items: inherit;
        justify-content: space-between;
        max-width: 50rem;
      }
    }

    &__subtitle {
      margin: 0;
      margin-bottom: 1.5rem;
      color: $font-title;
    }

    &__element {
      max-width: 26rem;
      margin-bottom: 2rem;

      @media (min-width: 668px) {
        margin-right: 1.5rem;

        &:last-child {
          margin-right: 0;
        }
      }

      &_left {
        @media (min-width: 890px) {
          margin-right: 2rem;
        }
      }
    }

    &__footer {
      display: flex;
      justify-content: center;
      margin-bottom: 6rem;
    }

    &__button {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      padding: 0 6rem;
      height: 4.4rem;
      border: none;
      border-radius: 2.2rem;
      font-weight: 700;
      font-size: 1.2rem;
      line-height: 1.2rem;
      text-transform: uppercase;
      background: linear-gradient(180deg,#bc9cff,#8ba4f9);
      color: #fff;
      text-align: center;
      text-decoration: none;
    }
  };
</style>