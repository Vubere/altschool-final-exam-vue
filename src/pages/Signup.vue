<template>
  <div class="sign-up">
    <router-link to="/" class="back">home</router-link>
    <h1>Signup</h1>
    <form @submit="submit">
      <div>
        <label for="name">Name</label>
{{error.name}}
        <input
          type="text"
          placeholder="Name"
          name="name"
          @change="handleChange"
          :value="form.name"
        />
      </div>
      <div>
        <label for="email">Email</label>
{{error.email}}
        <input
          type="email"
          name="email"
          placeholder="Email"
          @change="handleChange"
          :value="form.email"
        />
      </div>
      <div>
        <label for="password">Password</label>
{{error.password}}
        <input
          type="password"
          placeholder="Password"
          name="password"
          @change="handleChange"
          :value="form.password"
        />
      </div>
      <div>
        <label for="confirm-password">Confirm Password</label>
{{error.confirmName}}
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          @change="handleChange"
          :value="form.confirmPassword"
        />
      </div>
      <button type="submit">Sign Up</button>
      <p>
        Already have an account?
        <router-link to="/login">Login</router-link>
      </p>
    </form>
  </div>
</template>
<script>
export default {
  name: "SignUp",
  methods: {
    submit(e) {
      e.preventDefault();
      if (this.validate()) {
     
        this.$store.commit("setUser", {...this.form, login: true});
        this.$router.push("/dashboard");
      }
    },
    validate() {
      let isValid = true;
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      const { name, email, password, confirmPassword } = this.form;
      if (!name) {
        this.error.name = "Name is required";
        isValid = false;
      }
      if (!email) {
        this.error.email = "Email is required";
        isValid = false;
      }
      if (!emailPattern.test(email)) {
        this.error.email = "Email is invalid";
        isValid = false;
      }
      if (!password) {
        this.error.password = "Password is required";
        isValid = false;
      }
      if (password.length < 6) {
        this.error.password = "Password must be at least 6 characters";
        isValid = false;
      }
      if (password !== confirmPassword) {
        this.error.confirmPassword = "Passwords do not match";
        isValid = false;
      }
      setTimeout(() => {
        this.error.name = "";
        this.error.email = "";
        this.error.password = "";
        this.error.confirmPassword = "";
      }, 2000);
      return isValid;
    },
    handleChange(e) {
      this.form[e.target.name] = e.target.value;
    },
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      error: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
};
</script>
<style>
.sign-up {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  gap: 34px;
}
.sign-up .back {
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 1.2rem;
  font-weight: 500;
  color: #004455;
  cursor: pointer;
}
.sign-up h1 {
  color: #004455;
  font-size: 2.5rem;
  font-weight: 500;
}
.sign-up form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 500px;
  height: 500px;
  width: 95vw;
  background-color: #fff0;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  justify-content: center;
  z-index: 5;
}
.sign-up form::before {
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
.sign-up form div {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.sign-up form div label {
  font-size: 1.2rem;
  font-weight: 500;
  color: #004455;
}
.sign-up form div input {
  height: 40px;
  padding: 0 10px;
  border-radius: 10px;
  background-color: transparent;
  border: 1px solid #0004;
}
.sign-up form div input:focus {
  outline: none;
  border: 1px solid #000;
}
.sign-up form button {
  min-height: 40px;
  border-radius: 10px;
  background-color: #004455;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
}
</style>
