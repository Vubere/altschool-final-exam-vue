<template>
  <div class="profile">
    <h1>Profile</h1>
    <div>
      <form @submit="setUser" v-if="user">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="user.name" />
        <label for="email">Email</label>
        <input type="email" id="email" v-model="user.email" />
        <label for="password">Password</label>
        <input type="password" id="password" v-model="user.password" />
        <label for="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          v-model="user.confirmPassword"
        />
        <button >Update</button>
      </form>
    </div>
  </div>
</template>
<script >
import { useUser } from "../composables/useUser";
export default {
  name: "ProfilePage",
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    const {user} = useUser();
    this.user = user;
  },
  methods: {
    setUser: function(e){
      e.preventDefault()
      this.$store.commit("setUser", this.user);
      window.location.reload();
    },
  },
};
</script>
<style>
.profile {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  height: 100vh;
}
.profile form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.profile form input {
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  color: #000;
}
.profile form input::placeholder{
  color: #000;
}
.profile form button {
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  background-color: #fff2;
  color: #fff;
  cursor: pointer;
}
</style>
