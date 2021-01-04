<template>
  <NavBar />
  <div class="container pb-5">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import NavBar from "./components/Navbar";
export default {
  components: { NavBar },
  methods: {
    ...mapActions(["loadTasksAction"]),
  },
  created () {
    this.loadTasksAction();
  },
};
</script>