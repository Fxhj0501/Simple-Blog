<template>
  <div class="home">
    <div class="container">
      <div class="card">
        <div class="card-body"></div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ContentBase",
};
</script>
<style scoped>
.container {
  margin-top: 20px;
}
</style>
