<template>
  <div class="card">
    <dic class="card-body">
      <div v-for="post in posts.posts" :key="post.id">
        <div class="card single-post">
          <div class="card-body">
            {{ post.content }}
          </div>
        </div>
      </div>
    </dic>
  </div>
</template>
<script>
export default {
  name: "UserPosts",
  props: {
    posts: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
.single-post {
  margin-bottom: 10px;
}
</style>