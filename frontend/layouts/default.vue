<template>
  <div>
    <HeaderComponent/>
    <Nuxt/>
    <FooterComponent/>
  </div>
</template>

<script>
import HeaderComponent from "~/components/base/HeaderComponent.vue";
import FooterComponent from "~/components/base/FooterComponent.vue";

export default {
  name: "default",
  components: {FooterComponent, HeaderComponent}
}
</script>

<style scoped>

</style>
