<template>
  <div class="dashboard">
    <HeaderComponent />
    <div class="container">
      <router-view />
    </div>
    <FooterComponent />
  </div>
</template>
<script>
import HeaderComponent from "@/components/DashboardHeader.vue";
import FooterComponent from "@/components/Footer.vue";
import {useUser} from "../composables/useUser";
export default {
  name: "DashboardLayOut",
  data: () => {
    return {
      user: null,
    };
  },
  components: {
    HeaderComponent,
    FooterComponent,
  },
  mounted() {
    const {user} = useUser();
    this.user = user
  },
};
</script>
<style>
.dashboard {
  background-color: #f5f5f5;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.container{
  padding-top: 70px;
}
</style>
