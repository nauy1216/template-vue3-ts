<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-view /> -->
    <input v-model="a" />

    <div></div>
    <span>{{ a }}</span>
    <Home />
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import Home from "./views/Home.vue";
export default defineComponent({
  components: {
    Home
  },
  setup() {
    const data = reactive({ a: 1 });
    return data;
  }
});
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
