<template>
  <div class="login">
    <router-link to="/" class="back">home</router-link>
    <h1>Login</h1>
    <form @submit="submit">
      <div>
        <label for="email">Email</label>
        <p>{{ this.errors.email }}</p>
        <input type="email" id="email" v-model="form.email" name="email" />
      </div>
      <div>
        <label for="password">Password</label>
        <p>{{ this.errors.password }}</p>
        <input
          type="password"
          id="password"
          name="password"
          v-model="form.password"
        />
      </div>
      <button type="submit">Login</button>
      <p>
        Don't have an account?
        <router-link to="/signup">Sign Up</router-link>
      </p>
    </form>
  </div>
</template>
<script>
export default {
  name: "LogIn",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      errors: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    submit(e) {
      e.preventDefault();
      if (this.validate()) {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user?.name) {
          localStorage.setItem("user", { ...user, login: true });
          console.log(user);
          this.$store.commit("setUser", { ...user, login: true });
          this.$router.push("/dashboard");
        }
      }
    },

    validate() {
      let valid = true;
      let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailPattern.test(this.form.email)) {
        valid = false;
        this.errors.email = "Please enter a valid email";
      }
      if (this.form.password.length < 6) {
        valid = false;
        this.errors.password = "Password must be at least 6 characters";
      }
      let user = JSON.parse(localStorage.getItem("user"));
      if (!user?.email) {
        valid = false;
        this.errors.email = "Email is incorrect";
      } else {
        if (user?.email !== this.form.email) {
          valid = false;
          this.errors.email = "Email is incorrect";
        }
        if (user?.password !== this.form.password) {
          valid = false;
          this.errors.password = "Password is incorrect";
        }
      }
      setTimeout(() => {
        this.errors.email = "";
        this.errors.password = "";
      }, 3000);
      return valid;
    },
  },
  mounted() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.login) {
      this.$router.push("/dashboard");
    }
  },
};
</script>
<style>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  gap: 34px;
}
.login .back {
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 1.2rem;
  font-weight: 500;
  color: #004455;
  cursor: pointer;
}
.login h1 {
  color: #004455;
  font-size: 2.5rem;
  font-weight: 500;
}
.login form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 500px;
  height: 350px;
  width: 95vw;
  background-color: #fff0;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  justify-content: center;
  z-index: 5;
}
.login form::before {
  content: "";
  backdrop-filter: blur(10px);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  border: 1px solid #0008;
  background-color: #fff4;
  opacity: 0.2;
  border-radius: 15px;
}
.login form div {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.login form div label {
  font-size: 1.2rem;
  font-weight: 500;
  color: #004455;
}
.login form div input {
  height: 40px;
  border-radius: 10px;
  padding: 0 10px;

  background-color: transparent;
  border: 1px solid #0004;
}
.login form div input:focus {
  outline: none;
  border: 1px solid #000;
}
.login form button {
  height: 40px;
  border-radius: 10px;
  background-color: #004455;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
}
</style>
