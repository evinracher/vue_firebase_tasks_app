<template>
  <h1>Edit {{ task.name }}</h1>
  <form @submit.prevent="updateTaskAction(task)">
    <Input :task="task" />
  </form>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Input from "../components/Input.vue";

export default {
  components: { Input },
  computed: {
    ...mapState(["task"]),
  },
  methods: {
    ...mapActions(["setTaskAction","updateTaskAction"]),
  },
  created() {
    this.setTaskAction(this.$route.params.id);
  },
};
</script>

<style>
</style>