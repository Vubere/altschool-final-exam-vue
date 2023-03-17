<template>
  <div>
    <HeaderComponent />
    <router-view></router-view>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/Header.vue";
import FooterComponent from "@/components/Footer.vue";
export default {
  name: "LayOut",
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>