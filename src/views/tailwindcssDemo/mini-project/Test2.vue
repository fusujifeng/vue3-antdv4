<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Test2"
})
</script>

<template>
  <div class="bg-zinc-800 w-screen  h-screen ">
    <div class="flex flex-row justify-between items-center space-y-12">
      <div class="w-80 h-96 bg-zinc-800  border-8 rounded-2xl border-gray-500">
        <div class="flex flex-col justify-center space-y-3">
          <p class="text-white font-sans text-md text-center">BASIC</p>
          <p class="text-white font-mono text-4xl text-center">100GB</p>
          <p class="text-white font-mono text-4xl text-center">$1.99/Month</p>
          <div class="flex flex-row justify-center">
            <button class="btn btn-outline btn-secondary">Secondary</button>          </div>
          <p class="text-white font-mono text-md text-center">100 GB of storage</p>
          <p class="text-white font-mono text-md text-center">$Option to add members</p>
          <p class="text-white font-mono text-md text-center">Extra member benefits</p>
        </div>
      </div>
      <div class="w-80 h-96 bg-zinc-800  border-8 rounded-2xl border-purple-500">
        <div class="flex flex-col justify-center space-y-3">
          <p class="text-white font-sans text-md text-center">BASIC</p>
          <p class="text-white font-mono text-4xl text-center">100GB</p>
          <p class="text-white font-mono text-4xl text-center">$1.99/Month</p>
          <div class="flex flex-row justify-center">
            <button class="bg-zinc-800 text-white w-20 h-12 rounder-2xl border-4 border-purple-500 hover:bg-blue-900 my-3">Purchase</button>
          </div>
          <p class="text-white font-mono text-md text-center">100 GB of storage</p>
          <p class="text-white font-mono text-md text-center">$Option to add members</p>
          <p class="text-white font-mono text-md text-center">Extra member benefits</p>
        </div>
      </div>
      <div class="w-80 h-96 bg-zinc-800  border-8 rounded-2xl border-gray-500">
        <div class="flex flex-col justify-center space-y-3">
          <p class="text-white font-sans text-md text-center">BASIC</p>
          <p class="text-white font-mono text-4xl text-center">100GB</p>
          <p class="text-white font-mono text-4xl text-center">$1.99/Month</p>
          <div class="flex flex-row justify-center">
            <button class="bg-zinc-800 text-white w-20 h-12 rounder-2xl border-4 border-purple-500 hover:bg-blue-900 my-3">Purchase</button>
          </div>
          <p class="text-white font-mono text-md text-center">100 GB of storage</p>
          <p class="text-white font-mono text-md text-center">$Option to add members</p>
          <p class="text-white font-mono text-md text-center">Extra member benefits</p>
        </div>
      </div>

    </div>
  </div>


</template>

<style scoped>

</style>
