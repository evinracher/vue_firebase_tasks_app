<template>
  <h1 class="my-5">User login</h1>
  <div class="alert alert-danger" v-if="error.type !== null">
    {{ error.message }}
  </div>
  <form @submit.prevent="processForm">
    <input
      class="form-control my-2"
      type="email"
      placeholder="email"
      v-model.trim="email"
      :class="[error.type === 'login_failed' ? 'is-invalid' : '']"
    />
    <input
      class="form-control my-2"
      type="password"
      placeholder="password"
      v-model="password"
      :class="[error.type === 'login_failed' ? 'is-invalid' : '']"
    />
    <button
      class="btn btn-primary btn-block"
      type="submit"
      :disabled="isSumbitBlocked"
    >
      Login
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
    };
  },
  computed: {
    ...mapState(["error"]),
    isSumbitBlocked() {
      if (!this.email.includes("@")) {
        return true;
      }
      if (this.password.length > 5) {
        return false;
      }
      return true;
    },
  },
  methods: {
    ...mapActions(["userLogin"]),
    async processForm() {
      await this.userLogin({ email: this.email, password: this.password });
      if (this.error.type === null) {
        this.email = "";
        this.password = "";
      }
    },
  },
};
</script>