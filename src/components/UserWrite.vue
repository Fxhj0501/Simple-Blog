<template>
  <div class="card edit-field">
    <div class="card-body">
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Write a Post
        </label>
        <textarea
          v-model="content"
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
        <button
          @click="submitPost"
          type="button"
          class="btn btn-primary btn-sm"
        >
          Post
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import $ from "jquery";
import { useStore } from "vuex";
export default {
  name: "UserWrite",
  setup(props, context) {
    const store = useStore();
    let content = ref("");
    const submitPost = () => {
      $.ajax({
        url: "https://app165.acapp.acwing.com.cn/myspace/post/",
        type: "POST",
        crossDomain: true,
        data: {
          content: content.value,
        },
        headers: {
          Authorization: "Bearer " + store.state.user.access,
        },
        success(resp) {
          if (resp.result === "success") {
            context.emit("submitPost", content.value);
            content.value = "";
          }
        },
      });
    };
    return {
      content,
      submitPost,
    };
  },
};
</script>
<style scoped>
.card {
  margin-top: 10px;
  margin-bottom: 10px;
}
button {
  margin-top: 10px;
}
</style>