/* eslint-disable @typescript-eslint/no-explicit-any */
<template>
  <div
    class="md:w-2/4 w-11/12 shadow-custom flex flex-col items-center justify-center mt-14 rounded-sm border border-solid border-black border-opacity-25 mx-auto p-8 pb-12"
  >
    <span class="font-sans text-gray-100">Enter the numbers</span>
    <input
      class="outline-none border w-60 border-gray-100 py-1 text-base text-gray-100 mt-2 px-2 rounded-sm"
      placeholder="number 1"
      type="number"
      v-model.number="number1"
    />
    <input
      class="outline-none border w-60 border-gray-100 py-1 text-base text-gray-100 mt-2 px-2 rounded-sm"
      placeholder="number 2"
      type="number"
      v-model.number="number2"
    />
    <button
      @click="handleSum"
      class="w-60 bg-current font-sans text-base outline-none text-white py-1.5 rounded-sm mt-4 font-thin"
    >
      Sum
    </button>
    <hr class="text-current w-10/12 mt-14 mb-10 md:w-full md:my-10" />
    <span class="font-sans text-gray-100">Results</span>
    <input
      :value="sum"
      :disabled="true"
      class="outline-none border w-60 border-current py-1 text-base text-gray-100 mt-2 px-2 rounded-sm"
      placeholder="Result"
      type="number"
    />
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Component } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
@Component
export default class Sum extends Vue {
  @Action("calculateSum") calculate: any;
  @Getter("getSum") sum: number;
  public number1: number;
  public number2: number;
  public handleSum(): void {
    this.calculate({ number1: this.number1, number2: this.number2 });
  }
}
</script>

<style></style>
