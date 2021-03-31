<template>
  <div class="w-full">
    <Sum />
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import Sum from "../components/Sum.vue";
@Options({
  name: "Home",
  components: {
    Sum,
  },
})
export default class HelloWorld extends Vue {}
</script>

<style></style>
