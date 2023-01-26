<template>
  <ContentBase>
    <div class="row">
      <div class="col-3">
        <UserInfo @follow="follow" @unfollow="unfollow" :user="user" />
        <UserWrite v-if="isMe" @submitPost="submitPost"></UserWrite>
      </div>
      <div class="col-9">
        <UserPosts :posts="posts" :user="user" @delete="deletePost"> </UserPosts>
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
import $ from "jquery";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  components: {
    ContentBase,
    UserInfo,
    UserPosts,
    UserWrite,
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    const userId = route.params.userId;
    const user = reactive({});
    const posts = reactive({});

    $.ajax({
      url: "https://app165.acapp.acwing.com.cn/myspace/getinfo/",
      type: "GET",
      crossDomain: true,
      data: {
        user_id: userId,
      },
      headers: {
        Authorization: "Bearer " + store.state.user.access,
      },
      success(resp) {
        user.id = resp.id;
        user.username = resp.username;
        user.photo = resp.photo;
        user.followerCount = resp.followerCount;
        user.isfollowed = resp.is_followed;
      },
    });
    $.ajax({
      url: "https://app165.acapp.acwing.com.cn/myspace/post/",
      type: "GET",
      crossDomain: true,
      data: {
        user_id: userId,
      },
      headers: {
        Authorization: "Bearer " + store.state.user.access,
      },
      success(resp) {
        posts.count = resp.length;
        posts.posts = resp;
      },
    });
    const follow = () => {
      if (user.isfollowed) return;
      user.isfollowed = true;
      user.followerCount = user.followerCount + 1;
    };
    const unfollow = () => {
      if (!user.isfollowed) return;
      user.isfollowed = false;
      user.followerCount = user.followerCount - 1;
    };
    const submitPost = (content) => {
      posts.count++;
      posts.posts.unshift({
        post_id: posts.count,
        content: content,
      });
    };
    const deletePost =(post_id)=>{
      posts.posts = posts.posts.filter(post => post.id !== post_id);
      posts.count = posts.posts.length;

    }
    const isMe = computed(() => userId == store.state.user.id);
    return {
      posts,
      follow,
      unfollow,
      user: user,
      submitPost,
      deletePost,
      userId,
      isMe,
    };
  },
};
</script>
<style scoped>
</style>