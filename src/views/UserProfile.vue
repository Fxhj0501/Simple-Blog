<template>
  <ContentBase>
    <div class="row">
      <div class="col-3">
        <UserInfo @follow="follow" @unfollow="unfollow" :user="user" />
        <UserWrite @submitPost="submitPost"></UserWrite>
      </div>
      <div class="col-9">
        <UserPosts :posts="posts"> </UserPosts>
      </div>
    </div>
  </ContentBase>
</template>

<script>
import { reactive } from "@vue/reactivity";
import ContentBase from "../components/ContentBase.vue";
import UserInfo from "../components/UserInfo.vue";
import UserPosts from "../components/UserPosts.vue";
import UserWrite from "../components/UserWrite.vue";
import { useRoute } from "vue-router";
export default {
  components: {
    ContentBase,
    UserInfo,
    UserPosts,
    UserWrite,
  },
  setup() {
    const route = useRoute();
    console.log(route.params.userId);
    const user = reactive({
      firstname: "Zijian",
      lastname: "Feng",
      isfollowed: false,
      follower: 233,
    });
    const posts = reactive({
      count: 3,
      posts: [
        { id: 1, content: "今天上了Vue,在重装环境后解决了所有问题" },
        { id: 2, content: "明天上date science" },
        { id: 3, content: "明天开始Spring Boot" },
      ],
    });
    const follow = () => {
      if (user.isfollowed) return;
      user.isfollowed = true;
      user.follower = user.follower + 1;
    };
    const unfollow = () => {
      if (!user.isfollowed) return;
      user.isfollowed = false;
      user.follower = user.follower - 1;
    };
    const submitPost = (content) => {
      posts.count++;
      posts.posts.unshift({
        id: posts.count,
        content: content,
      });
    };
    return {
      posts,
      follow,
      unfollow,
      user: user,
      submitPost,
    };
  },
};
</script>
<style scoped>
</style>