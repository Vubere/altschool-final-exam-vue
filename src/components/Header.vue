<template>
  <header class="lp-header">
    <h1>
      <img src="../assets/logo.svg" alt="logo" />
    </h1>
    <nav>
      <ul v-if="windowWidth > 768">
        <li><router-link to="/">Home</router-link></li>
        <template v-if="user">
          <li><router-link to="/dashboard">Dashboard</router-link></li>
          <button @click="logout">Logout</button>
        </template>
        <template v-else>
          <li><router-link to="/login">Login</router-link></li>
          <li><router-link to="/signup">Signup</router-link></li>
        </template>
      </ul>
      <div class="hamburger" @click="toggle" v-else>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <ul class="mobile" v-if="show && windowWidth <= 768">
        <li><router-link to="/">Home</router-link></li>
        <template v-if="user">
          <li><router-link to="/dashboard">Dashboard</router-link></li>
          <button @click="logout">Logout</button>
        </template>
        <template v-else>
          <li><router-link to="/login">Login</router-link></li>
          <li><router-link to="/signup">Signup</router-link></li>
        </template>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  name: "HeaderComponent",
  data: function () {
    return {
      isAuth: this.$store.state.user ? true : false,
      user: this.$store.state.user,
      currentPage: this.$store.state.path,
      windowWidth: window.innerWidth,
      show: false,
    };
  },
  methods: {
    logout: function (e) {
      e.preventDefault();
      this.$store.commit("logout");
      window.location.reload();
    },
    toggle: function () {
      this.show = !this.show;
    },
    windowWidthMethod: function () {
      this.windowWidth = window.innerWidth;
    },
    closeOnBlur: function (e) {
      if (e.target.className !== "hamburger") {
        if (e.target.className !== "line") {
          if (e.target.className !== "mobile") this.show = false;
        }
      }
    },
  },
  mounted: function () {
    window.addEventListener("resize", this.windowWidthMethod);
    window.addEventListener("click", this.closeOnBlur);
  },
  unmounted: function () {
    window.removeEventListener("resize", this.windowWidthMethod);
    window.removeEventListener("click", this.closeOnBlur);
  },
};
</script>
<style>
.lp-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  background-color: #000;
  max-height: 70px;
  box-shadow: 0 2px 4px rgba(255, 255, 255, 0.1);
}
.lp-header h1 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
}
.lp-header h1 img {
  width: 100px;
  height: 50px;
}
.lp-header nav ul {
  display: flex;
  list-style: none;
  gap: 15px;
  align-items: center;
}
.lp-header nav ul li {
  font-size: clamp(0.8rem, 2.5vw, 1.2rem);
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  padding-right: 10px;
}

.lp-header nav ul li a {
  text-decoration: none;
  color: #fff;
}
.lp-header nav ul li a:hover,
.lp-header nav ul li a:active,
.lp-header nav ul li a:focus {
  color: #fff8;
  text-decoration: underline;
  display: block;
  transform: scale(1.1);
}
.lp-header ul.mobile {
  position: fixed;
  top: 50px;
  padding: 10px;
  padding-top: 30px;
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
.lp-header button {
  background-color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px;
  color: #000;
  font-weight: bold;
  cursor: pointer;
}
.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20px;
  width: 30px;
  cursor: pointer;
}
.hamburger div {
  height: 3px;
  width: 100%;
  background-color: #fff;
}
</style>
