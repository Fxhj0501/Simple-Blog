<template>
  <ContentBase>
    <div class="row justify-content-md-center">
      <div class="col-3">
        <form @submit.prevent="login">
          <div class="mb-3">
            <label for="Username" class="form-label">Username</label>
            <input
              v-model="username"
              type="text"
              class="form-control"
              id="Username"
            />
          </div>
          <div class="mb-3">
            <label for="Password" class="form-label">Password</label>
            <input
              v-model="password"
              type="password"
              class="form-control"
              id="Password"
            />
          </div>
          <div class="error-message">{{ error_message }}</div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </ContentBase>
</template>

<script>
import ContentBase from "../components/ContentBase.vue";
import { ref } from "vue";
import { useStore } from "vuex";
import router from "@/router/index";
export default {
  name: "LoginView",
  components: {
    ContentBase,
  },
  setup() {
    const store = useStore();
    let username = ref("");
    let password = ref("");
    let error_message = ref("");
    const login = () => {
      error_message.value = "";
      store.dispatch("login", {
        username: username.value,
        password: password.value,
        success() {
          router.push({ name: "userlist" });
        },
        error() {
          error_message.value = "wrong username/password";
        },
      });
    };
    return {
      username,
      password,
      error_message,
      login,
    };
  },
};
</script>
<style scoped>
.form-label {
  font-size: 20px;
  font-weight: bold;
}
button {
  margin-bottom: 10px;
  width: 100%;
}
.error-message {
  color: red;
}
</style>