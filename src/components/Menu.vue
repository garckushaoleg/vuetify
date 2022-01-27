<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-list>
      <v-list-item-group
        v-model="model"
        mandatory
        color="indigo"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
/* eslint-disable */
  export default {
    data: () => ({
      items: [
        {
          icon: 'mdi-wifi',
          text: 'Menu 1',
        },
        {
          icon: 'mdi-bluetooth',
          text: 'Menu 2',
        },
        {
          icon: 'mdi-chart-donut',
          text: 'Menu 3',
        },
      ],
      model: 1,
    }),
  }
</script>