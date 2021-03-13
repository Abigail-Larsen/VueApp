<template>
  <v-app>
    <v-app-bar
      app
      color="purple"
      dark
    >
      <v-toolbar-title>Abigail Thelin - Vue3-Todo-App</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <v-row
          align="center"
          justify="center"
        >
          <todo-list></todo-list>
        </v-row>
      </v-container>
    </v-content>

    <v-footer
      app
      color="purple"
    >
      <v-spacer></v-spacer>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import TodoList from './components/TodoList.vue';

export default {
  name: 'App',

  components: {
    TodoList,
  },
};
</script>
