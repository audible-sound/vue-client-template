<script>
import { mainStore } from "./store/mainStore";
import { mapWritableState} from "pinia";
export default {
  computed: {
    ...mapWritableState(mainStore, ['isLoggedIn']),
  },
  created() {
    const cookie = document.cookie;
    console.log(cookie);
    let name = "token" + "=";
    let ca = document.cookie.split(';');
    let token;
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        token = c.substring(name.length, c.length);
      }
    }
    if (token) {
      this.isLoggedIn = true;
    }
  }
}
</script>

<template>
  <router-view></router-view>
</template>
