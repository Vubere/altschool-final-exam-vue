<template>
  <main class="lp">
    <h1>AltSchool Final Exam</h1>
    <div>
      <img :src="exam" alt="exam" />
      <p>
        <span class="intro"> Call me Victor. </span>
        I'm a software engineer based in Owerri. I'm currently a student at
        <a href="https://www.altschoolafrica.com/" target="_blank">AltSchool</a
        >. This is a simple app for my final examination that simulates fake
        authentication experience using vuex and vue router.
      </p>
    </div>
  </main>
</template>
<script>
import exam from "../assets/exam.png";
export default {
  name: "LandingPage",
  data() {
    return {
      exam,
    };
  },
};
</script>
<style>
.lp {
  color: #fff;
  width: 100%;
  height: 80vh;
  padding: 2rem;
  text-align: center;
  padding-top: 100px;
}
.lp h1 {
  font-size: 2rem;
  font-weight: 700;
}
.lp div {
  display: flex;
  align-items: center;
}
.lp div img {
  width: 50%;
  height: 50%;
  margin-right: 1rem;
}
.lp div p {
  font-size: clamp(22px, 2.6vw, 48px);
  font-weight: 400;
  width: 50%;
  text-align: left;
}
@media screen and (max-width: 768px) {
  .lp div{
    flex-direction: column;
  }
  .lp{
    height: auto;
  }
  .lp div img {
    width: 100%;
    height: 100%;
    margin-right: 0;
  }
  .lp div p {
    width: 100%;
    text-align: center;
  }

  
}
</style>
