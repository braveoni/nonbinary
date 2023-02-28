<template>
  <div class="main-page">
    <div class="glitch-wrapper">
      <h1 class="title glitch">
        Non Binary Tree
      </h1>
      <h1 class="title glitch">
        Non Binary Tree
      </h1>
      <h1 class="title glitch">
        Non Binary Tree
      </h1>
    </div>
    <p class="subtitle">
      Coming soon
    </p>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style lang="scss" scoped>
.main-page {
  height: 100vh;
  width: 100vw;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title {
  font-size: 8vw;
  color: white;
}

.subtitle {
  margin-top: 5vw;
  font-size: 3vw;
  color: white;
}

.glitch {
  text-align: center;
  color: #fff;
  font-weight: 400;
  line-height: 0;

  animation: glitch1 2.5s infinite;

  &:nth-child(2) {
    color: #67f3da;
    animation: glitch2 4.5s infinite;
  }

  &:nth-child(3) {
    color: #f16f6f;
    animation: glitch3 4.5s infinite;
  }
}
</style>
