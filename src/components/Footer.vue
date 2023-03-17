<template>
  <div>
    <footer>
      <h1>
        <a href="https://www.linkedin.com/in/victor-ubere-381b75110/"
          >LinkedIn</a
        >
        <a href="https://www.twitter.com/vubere">Twitter</a>
      </h1>
    </footer>
  </div>
</template>
<script>
export default {
  name: "FooterComponent",
};
</script>
<style>
footer {
  background-color: #000;
  color: #fff;
  box-shadow: 10px 10px 10px 10px #0005, -10px 0 0 0 #fff;
  padding: 1rem;
  padding-top: 30px;
  padding-bottom: 30px;
  min-height: 150px;
  display: flex;
  text-align: center;
}
footer h1 {
  font-size: clamp(18px, 3.5vw, 32px);
  font-weight: 700;
  display: flex;
  gap: 15px;
  color: #000;
}
</style>
