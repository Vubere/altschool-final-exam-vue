<template>
  <div class="db-product">
    <h2>{{ product.title }}</h2>
    <p class="brand">{{ product.brand }}</p>
    <p>{{ product.description }}</p>
    <ul class="details">
      <li>Price: {{product.price}}</li>
      <li>Discount: {{product.discountPercentage}}%</li>
      <li>Category: {{product.category}}</li>
      <li>Prize: {{product.rating}}</li>
    </ul>
    <div class="img">
      <img v-if="product.images" :src="product?.images[current]" alt="" />
    </div>
    <ul>
      <template v-for="item in product?.images?.length" :key="item">
        <li :class="{ current: item == current + 1 }"></li>
      </template>
    </ul>
    <div class="btn">
      <button @click="prev">prev</button>
      <button @click="next">next</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductPage",
  props: ["id"],
  data() {
    return {
      product: {},
      current: 0,
    };
  },
  beforeCreate() {
    this.$store.dispatch("getProductById", this.id).then((res) => {
      this.product = res;
      
    });
  },
  methods: {
    next() {
      if (this.current == this.product?.images.length - 1) this.current = 0;
      else
      this.current++;
    },
    prev() {
      if (this.current == 0) this.current = this.product?.images.length - 1;
      else
      this.current--;
    },
  },
};
</script>
<style>
.db-product {
  min-height: 80vh;
  padding: 34px;
  max-width: 700px;
  margin: 0 auto;
  background-color: #000;
  display: flex;
  gap: 10px;
  flex-direction: column;
}
.db-product .brand {
  font-style: italic;
  text-decoration: underline;
  text-align: center;
}
.db-product>ul.details{
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin-bottom: 30px;
}
.db-product>ul.details>li{
  display: flex;
  width: auto;
  text-decoration: none;
  background-color: transparent;
}
.db-product h2 {
  color: #fff;
  text-align: center;
}
.db-product .img {
  width: 80%;
  margin: 0 auto;
  height: 300px;
  overflow: auto;
}
.db-product img{
  max-width: 100%;
}
.db-product ul {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-direction: row;
}
.db-product li {
  width: 5px;
  list-style-type: none;
  height: 5px;
  background-color: #fff;
  border-radius: 50%;
}
.db-product li.current {
  width: 8px;
  height: 8px;
}
.db-product .btn {
  display: flex;
  justify-content: center;
}
.db-product button {
  color: #000;
  padding: 5px;
}
</style>
