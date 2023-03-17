<template>
  <div class="dh">
    <h1>Welcome, {{user.name}}</h1>
    <p>This is your dashboard, how are you doing?</p>
    <ul>
      <li>
        <router-link to="/dashboard/products">See Products</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DashBoard',
  data() {
    return {
      user: this.$store.state.user,
    }
  },
}
</script>
<style>
.dh {
  height: 80vh;

  padding: 20px;
  width: 100%;
  background-color: #000;
}
.dh h1 {
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  padding: 0;
}
.dh p {
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  margin-top: 10px;
  padding: 0;
}
.dh ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.dh ul li a{
  height: 40px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  background-color: #fff;
  border-radius: 10px;
  color: #000;
  font-size: 22px;

  font-weight: 700;
  text-decoration: none;
}
</style>