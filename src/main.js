import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import { createStore } from "vuex";

/* components */
import LandingPageLayoutVue from "./layouts/LandingPageLayout.vue";
import LandingPage from "./pages/LandingPage.vue";
import LogIn from "./pages/Login.vue";
import SignUp from "./pages/Signup.vue";

import DashboardLayout from "./layouts/DashboardLayout.vue";
import Dashboard from "./pages/Dashboard.vue";
import ProductPage from "./pages/Product.vue";
import Products from "./pages/Products.vue";
import NotFoundVue from "./pages/NotFound.vue";
import Profile from "./pages/Profile.vue";

const store = createStore({
  state() {
    return {
      user: JSON.parse(localStorage.getItem("user"))?.login
        ? JSON.parse(localStorage.getItem("user"))
        : null,
      products: null,
      path: window.location.pathname.slice(1),
      pagination: {
        limit: 10,
        skip: 0,
        total: 0,
        currentPage: 1,
      },
    };
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    setProducts(state, products) {
      state.products = products;
      state.pagination.total = products.total;
    },
    logout(state) {
      localStorage.setItem(
        "user",
        JSON.stringify({ ...state.user, login: false })
      );
      state.user = null;
    },
  },
  actions: {
    async fetchProducts({ commit }, { limit, skip }) {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      );
      const data = await response.json();

      commit("setProducts", data);
      return data;
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    async getProductById(_, id) {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      return data;
    },
    async getPagination({ state }) {
      return state.pagination;
    },
    async next({ state }) {
      if (
        state.pagination.currentPage ===
        Math.ceil(state.pagination.total / state.pagination.limit)
      )
        return;
      state.pagination.skip =
        state.pagination.currentPage * state.pagination.limit;
      state.pagination.currentPage++;
    },
    async prev({ state }) {
      if (state.pagination.currentPage === 1) return;
      state.pagination.currentPage--;
      state.pagination.skip =
        (state.pagination.currentPage - 1) * state.pagination.limit;
    },
    async changePage({ state }, { page }) {
      if (page === state.pagination.currentPage) return;
      state.pagination.currentPage = page;
      state.pagination.skip = (page - 1) * state.pagination.limit;
    },
  },
});
const routes = [
  {
    path: "/",
    component: LandingPageLayoutVue,
    children: [{ path: "", component: LandingPage }],
  },
  { path: "/login", component: LogIn },
  { path: "/signup", component: SignUp },
  {
    path: "/dashboard",
    component: DashboardLayout,
    children: [
      {
        path: "",
        component: Dashboard,
      },
      {
        path: "products",
        component: Products,
      },
      {
        path: "product/:id",
        component: ProductPage,
        props: true,
      },
      {
        path: "profile",
        component: Profile,
      },
    ],
  },
  { path: "/:pathMatch(.*)*", component: NotFoundVue },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(store);
app.use(router);

app.mount("#app");
