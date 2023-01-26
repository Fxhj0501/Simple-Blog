<template>
  <ContentBase>
    <div class="row justify-content-md-center">
      <div class="col-3">
        <form @submit.prevent="register">
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
          <div class="mb-3">
            <label for="Password_Confirm" class="form-label">Confirm Password</label>
            <input
              v-model="password_confirm"
              type="password"
              class="form-control"
              id="Password_Confirm"
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
import $ from "jquery";
import { useStore } from "vuex";
import router from "@/router/index";
export default {
  name: "RegisterView",
  components: {
    ContentBase,
  },
  setup() {
    let username = ref("");
    let password = ref("");
    let password_confirm = ref("");
    let error_message = ref("");
    const store = useStore();
    const register = () => {
      error_message.value = "";
      
      $.ajax({
        url:"https://app165.acapp.acwing.com.cn/myspace/user/",
        type:"POST",
        crossDomain:true,
        data:{
          username:username.value,
          password:password.value,
          password_confirm:password_confirm.value
        },
        success(resp){
          if(resp.result === "success"){
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
          }else{
            error_message.value = resp.result;
          }
          
        }
      })
      };
    return {
      username,
      password,
      error_message,
      register,
      password_confirm
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