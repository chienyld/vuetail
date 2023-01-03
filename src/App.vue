<template>
  <div>
    <Navigation/>
    <div class="">
      <span>ipsum asd asd sd as</span>
    </div>
    <RouterView />
  </div>
</template>
<script setup>
import {RouterView} from "vue-router";
import Navigation from "./components/Navigation.vue";
</script>