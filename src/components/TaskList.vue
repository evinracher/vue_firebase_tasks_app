<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Category</th>
        <th scope="col">State</th>
        <th scope="col">Number</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="task in tasks" :key="task.id">
        <th scope="row">{{ task.id }}</th>
        <td>{{ task.name }}</td>
        <td>
          <span
            class="bg-warning rounded p-1 m-1"
            v-for="(category, index) in task.categories"
            :key="index"
          >
            {{ category }}
          </span>
          <!-- {{ index + 1 === task.categories.length ? "" : ", " }} -->
        </td>
        <td>{{ task.state }}</td>
        <td>{{ task.number }}</td>
        <td>
          <button
            class="btn btn-danger btn-sm m-1"
            @click="deleteTaskAction(task.id)"
          >
            Delete
          </button>
          <router-link
            class="btn btn-warning btn-sm m-1"
            :to="{
              name: 'Edit',
              params: { id: task.id },
            }"
          >
            Edit
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["tasks"]),
  },
  methods: {
    ...mapActions(["deleteTaskAction"]),
  },
};
</script>
