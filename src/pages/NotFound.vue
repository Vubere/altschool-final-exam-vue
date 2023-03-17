<template>
  <div>
    <h1>
      Page Not Found
      <span to="-1" @click="()=>$router.go(-1)">Go Back</span>
    </h1>
  </div>
</template>
<script>
export default {
  name: "NotFound",
};
</script>
<style scoped>
h1 {
  color: #fff;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
h1 span{
  color: #fff;
  text-decoration: underline;
  font-size: 1.2rem;
  font-weight: 700;
}
</style>
