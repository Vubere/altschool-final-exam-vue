import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export function useUser() {
  const user = ref(null);
  const $store = useStore();
  const $router = useRouter();

  user.value = JSON.parse(localStorage.getItem("user"));
  if (user.value?.login) {
    $store.commit("setUser", user.value);
  } else {
    $router.push("/login");
  }
  
  return { user};
}
