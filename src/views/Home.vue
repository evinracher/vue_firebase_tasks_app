<template>
  <form @submit.prevent="processForm">
    <Input :task="task" />
  </form>
  <hr />
  <TaskList />
</template>

<script>
import Input from "../components/Input.vue";
import TaskList from "../components/TaskList.vue";
import { mapActions } from "vuex";

const shortid = require("shortid");
export default {
  name: "Home",
  components: { Input, TaskList },
  data() {
    return {
      task: {
        id: "",
        name: "",
        categories: [],
        state: "",
        number: 0,
      },
    };
  },
  methods: {
    ...mapActions(["addTaskAction", "loadTasksAction"]),
    processForm() {
      if (this.task.name === "") {
        return;
      }
      // Generate id
      this.task.id = shortid.generate();

      // Sent data
      this.addTaskAction(this.task);
      this.task = {
        id: "",
        name: "",
        categories: [],
        state: "",
        number: 0,
      };
    },
  },
  created() {
    this.loadTasksAction();
  },
};
</script>
