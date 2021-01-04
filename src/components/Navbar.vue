<template>
  <div class="navbar navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/">Task App</router-link>
    <div class="d-flex">
      <router-link class="btn btn-dark" to="/" v-if="authUser"
        >Tasks</router-link
      >
      <router-link class="btn btn-dark" to="/login" v-if="!authUser"
        >Sign in</router-link
      >
      <router-link class="btn btn-dark" to="/register" v-if="!authUser"
        >Sign up</router-link
      >
      <button class="btn btn-dark" @click="userLogout" v-if="authUser">Log out</button>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["authUser"]),
  },
  methods: {
    ...mapActions(["userLogout"]),
  },
};
</script>