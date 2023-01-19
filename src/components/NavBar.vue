<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'home', params: {} }"
        >My Space</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'home', params: {} }"
              >首页</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'userlist', params: {} }"
              >好友列表</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'userprofile', params: {} }"
              >好友动态</router-link
            >
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'loginview', params: {} }"
              >登陆</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'registerview', params: {} }"
              >注册</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
<style scoped>
</style>