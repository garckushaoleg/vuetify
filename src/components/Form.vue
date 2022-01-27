<template>
  <validation-observer
    ref="observer"
    v-slot="{ invalid }"
  >
    <form v-on:submit.prevent="submit">
      <validation-provider
        v-slot="{ errors }"
        name="Name"
        rules="required|min:3|regex:^([A-Z])([a-z])+$"
      >
        <v-text-field
          v-model="name"
          v-bind:counter="10"
          v-bind:error-messages="errors"
          label="Name"
          required
        ></v-text-field>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        name="age"
        rules="required: true|integer|min_value: 18"
      >
        <v-text-field
          v-model="age"
          v-bind:counter="7"
          v-bind:error-messages="errors"
          label="Age"
          required
        ></v-text-field>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        name="select"
        rules="required"
      >
        <v-select
          v-model="select"
          v-bind:items="items"
          v-bind:error-messages="errors"
          label="Select"
          data-vv-name="select"
          required
        ></v-select>
      </validation-provider>

      <v-btn
        class="mr-4"
        type="submit"
        v-bind:disabled="invalid"
      >
        submit
      </v-btn>
      <v-btn v-on:click="clear">
        clear
      </v-btn>
    </form>
  </validation-observer>
</template>

<script>
  import { required, min, regex, min_value, integer } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
  import Vue from 'vue'
  import VueToast from 'vue-toast-notification';
  import 'vue-toast-notification/dist/theme-sugar.css';

  Vue.use(VueToast);

  setInteractionMode('eager')

  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })

  extend('min', {
    ...min,
    message: '{_field_} may not be greater than {length} characters',
  })

  extend('regex', {
    ...regex,
    message: '{_field_} {_value_} does not match {regex}',
  })

  extend('min_value', {
    ...min_value,
    message: '{_value_} of {_field_} may not be less than 18',
  })

  extend('integer', {
    ...integer,
    message: '{_value_} of {_field_} should be integer',
  })

  export default {
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      name: '',
      age: '',
      items: [
        'male',
        'female',
        'non-binary',
      ],
      select: null,
    }),

    methods: {
      submit () {
        this.$refs.observer.validate();
        this.$emit('submit', {
          name: this.name,
          age: this.age,
          gender: this.select,
        });

        Vue.$toast.open({
          message: 'Form has been sent!',
          position: 'top',
          type: 'success'
        })
      },
      clear () {
        this.name = ''
        this.age = ''
        this.select = null
        this.$refs.observer.reset()
      },
    },
  }
</script>

<style scoped>
form {
  width: 600px;
}
</style>