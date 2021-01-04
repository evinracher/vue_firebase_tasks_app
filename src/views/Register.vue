<template>
  <h1 class="my-5">User registration</h1>
  <div class="alert alert-danger" v-if="error.type !== null">
    {{ error.message }}
  </div>
  <form @submit.prevent="processForm">
    <input
      class="form-control my-2"
      type="email"
      placeholder="email"
      v-model.trim="email"
    />
    <input
      class="form-control my-2"
      type="password"
      placeholder="password"
      v-model="password"
    />
    <input
      class="form-control my-2"
      type="password"
      placeholder="confirm password"
      v-model="confirmPassword"
    />
    <button
      class="btn btn-primary btn-block"
      type="submit"
      :disabled="isSumbitBlocked"
    >
      Register
    </button>
  </form>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  computed: {
    ...mapState(["error"]),
    isSumbitBlocked() {
      if (!this.email.includes("@")) {
        return true;
      }
      if (this.password.length > 5 && this.password === this.confirmPassword) {
        return false;
      }
      return true;
    },
  },
  methods: {
    ...mapActions(["userRegister"]),
    async processForm() {
      await this.userRegister({ email: this.email, password: this.password });
      if (this.error.type === null) {
        this.email = "";
        this.password = "";
        this.confirmPassword = "";
      }
    },
  },
};
</script>