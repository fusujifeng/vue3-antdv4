<script setup>
import {computed, onMounted, ref, watch} from "vue";
import _ from 'lodash'
const ref1= ref("0")

onMounted(()=>{
  console.log(ref1.value)
})
</script>

<template>

<h1 ref="ref1">我是h1标题</h1>

</template>

<style scoped>

</style>
