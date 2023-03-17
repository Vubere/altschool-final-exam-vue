<template>
  <div class="pagination">
    <ul>
      
      <template v-for="(item, index) in paginationArray" :key="index">
        <li
          @click="
            () => {
              if (typeof item == 'string') return;
              changePage(item);
            }
          "
          :class = " {current: pagination.currentPage == item }"
        >
          {{ item }}
        </li>
      </template>
    </ul>
    <ul class="second">
      <li
        @click="
          () => {
            if (pagination.currentPage == 1) return;
            prev();
          }
        "
        :class=" {current: pagination.currentPage == 1 }"
      >Prev</li>
      <li
        @click="
          () => {
            if (pagination.currentPage == pages) return;
            next();
          }
        "
        :class=" {current: pagination.currentPage == pages }"
      >next</li>

    </ul>
  </div>
</template>
<script>
export default {
  name: "PaginationComponent",
  data() {
    return {
      pagination: {},
      pages: 10,
      paginationArray: [],
    };
  },
  mounted() {
    this.$store.dispatch("getPagination").then((res) => {
      this.pagination = res;
    });
  },
  methods: {
    changePage(page) {
      this.$store.dispatch("changePage", { page });
      this.$store.dispatch('scrollToTop')
    },
    next() {
      this.$store.dispatch("next");
      this.$store.dispatch('scrollToTop')
    },
    prev() {
      this.$store.dispatch("prev");
      this.$store.dispatch('scrollToTop')
    },
    setPages() {
      this.pages = Math.ceil(this.pagination.total / this.pagination.limit);
      this.$store.dispatch('scrollToTop')
    },

  },
  watch: {
    pagination: {
      handler() {
        if (this.pagination.currentPage <5) {
          this.paginationArray = [1, 2, 3, 4, 5, "...", this.pages];
        } else if (
          this.pagination.currentPage > 4 &&
          this.pagination.currentPage < this.pages - 3
        ) {
          this.paginationArray = [
            1,
            "...",
            this.pagination.currentPage - 1,
            this.pagination.currentPage,
            this.pagination.currentPage + 1,
            "...",
            this.pages,
          ];
        } else if (this.pagination.currentPage >= this.pages - 3) {
          this.paginationArray = [
            1,
            "...",
            this.pages - 4,
            this.pages - 3,
            this.pages - 2,
            this.pages - 1,
            this.pages,
          ];
        }
      },
      deep: true,
    },
  },
};
</script>
<style>
.pagination {
  background-color: #000;
  padding: 10px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  margin: 0 auto;
}
.pagination ul{
  display: flex;
  gap: 3px;
  margin: 0 auto;
}
.pagination ul li{
  list-style: none;
  padding: 8px;
  cursor: pointer;
  color: #000;
  background-color: white;
  border-radius: 5px;
  height: 30px;
  width: 30px;
}
.pagination ul li.current{
  background-color: #000;
  color: white;
}
.pagination ul li:hover{
  background-color: #000;
  color: white;
}
.pagination ul.second{
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
.pagination ul.second li{
  display: flex;
  justify-content: center;
  width: 70px;
}
</style>
