<template>
  <div class="db-products">
    <h1>Products</h1>
    <div class="container" v-if="products.products">
      <div v-for="item in products.products" :key="item.id" class="product-card">
        <router-link :to="'/dashboard/product/' + item.id">
          <h3>{{ item.title }}</h3>
          <img :src="item?.images[0]" alt="" /> 
        </router-link>
      </div>
    </div>
    <div v-else>
      <p>loading</p>
    </div>
    <Pagination/>
  </div>
</template>
<script>
import Pagination from '@/components/Pagination.vue';
export default {
  name: "ProductsPage",
  components: {
    Pagination,
  },
  data() {
    return {
      products: this.$store.products || {},
      pagination: this.$store.pagination || {},
    };
  },
  mounted() {
     this.$store.dispatch("getPagination").then((res) => {
      this.pagination = res
    });
  },
  watch: {
    pagination: {
      handler() {
        this.$store.dispatch("fetchProducts", {limit:this.pagination?.limit,skip:this.pagination?.skip}).then((res) => {
          this.products = res;
        });
      },
      deep: true,
    },
  },
};
</script>
<style scoped>
.db-products {
  min-height: 80vh;
  padding: 14px;
  background-color: #000;
  display: flex;
  gap: 10px;
  flex-direction: column;
}
.db-products h1{
  color: #fff;
  text-align: center;

}
.db-products .container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}
.db-products img{
  width: 100%;
  height: 80%;
  margin-top: 10px;
  border-radius: 5px;
  max-height: 300px;
  object-fit: cover;
}
.db-products .product-card{
  width: 200px;
  height: 250px;
  margin: 10px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 3px rgba(255, 255, 255, 0.8);
  overflow: hidden;
  background-color: #fff4;
  padding: 10px;
  
}
</style>
