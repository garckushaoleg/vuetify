<template>
<div class="page">
  <aside>
    <Menu />
  </aside>
  <main>
    <v-app>
    <Form @submit="onSubmit" />
    <hr/>
    <Table :users="users" />
    </v-app>
  </main>
</div>
</template>

<script>
import Menu from './components/Menu';
import Table from './components/Table';
import Form from './components/Form';

export default {
  name: 'App',

  components: {
    Menu,
    Table,
    Form
  },

  data: () => ({
      users: [
          {
            name: 'Danial',
            age: 19,
            gender: 'male',
          },
          {
            name: 'Matvey',
            age: 22,
            gender: 'female',
          },
          {
            name: 'Eclair',
            age: 55,
            gender: 'male',
          },
      ],
  }),

  methods: {
    onSubmit(user) {
      this.users.push(user);
    }
  }
};
</script>

<style scoped>
.page {
  display: flex;
  gap: 200px;
  width: 100%;
}

hr {
  height: 4px;
  background-color: black;
  width: 100%;
  margin: 40px 0;
}
</style>
