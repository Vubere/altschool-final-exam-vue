<template>
  <header class="db-header">
    <h1>
      <router-link to="/dashboard">{{ userInitails }}</router-link>
    </h1>
    <nav class="links" v-if="windowWidth > 768">
      <router-link to="/">Home</router-link>
      <router-link to="/dashboard/profile">Profile</router-link>
      <router-link to="/dashboard/products">Products</router-link>
      <button @click="logout">Logout</button>
    </nav>
    <div v-else class="hamburgerDh" @click="toggle">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <nav class="mobileDh" v-if="windowWidth <= 768 && show">
      <router-link to="/">Home</router-link>
      <router-link to="/dashboard/profile">Profile</router-link>
      <router-link to="/dashboard/products">Products</router-link>
      <button @click="logout">Logout</button>
    </nav>
  </header>
</template>
<script>
export default {
  name: "DashboardHeader",
  data() {
    return {
      user: this.$store.state.user,
      userInitails: "",
      windowWidth: window.innerWidth,
      show: false,
    };
  },
  mounted() {
    if (this.user?.name) {
      this.userInitails = this.user?.name
        .split(" ")
        .map((item) => item[0])
        .join("")
        .toUpperCase();
    }
    window.addEventListener("resize", this.windowWidthMethod);
    window.addEventListener("click", this.closeOnBlur);
  },
  methods: {
    logout() {
      this.$store.commit("logout");
      this.$router.push("/login");
    },
    toggle: function () {
      this.show = !this.show;
    },
    windowWidthMethod: function () {
      this.windowWidth = window.innerWidth;
    },
    closeOnBlur: function (e) {
      if (e.target.className !== "hamburgerDh") {
        if (e.target.className !== "line") {
          if (e.target.className !== "mobileDh") this.show = false;
        }
      }
    },
  },

  unmounted: function () {
    window.removeEventListener("resize", this.windowWidthMethod);
    window.removeEventListener("click", this.closeOnBlur);
  },
};
</script>
<style>
.db-header {
  background-color: #000;
  padding: 10px;
  text-align: center;
  box-shadow: 0px 0px 0px 2px #fff3;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 70px;
  z-index: 23;
  justify-content: space-between;
}
.db-header .mobileDh {
  position: fixed;
  top: 50px;
  padding: 10px;
  padding-top: 30px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  background-color: #000;
  min-width: 100vw;
  left: 0;
  z-index: 23;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 1px 1px #fff3;
}
.db-header h1 {
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  padding: 0;
}
.db-header h1:hover {
  cursor: pointer;
  transform: scale(1.1);
  text-decoration: underline;
}
.db-header button {
  background-color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px;
  color: #000;
  font-weight: bold;
  cursor: pointer;
}
.db-header .links {
  display: flex;
  gap: 15px;
  align-items: center;
  padding-right: 10px;
}
.db-header .links a {
  color: #fff;
  text-decoration: none;
}
.hamburgerDh {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20px;
  width: 30px;
  cursor: pointer;
}
.hamburgerDh div {
  height: 3px;
  width: 100%;
  background-color: #fff;
}
</style>
