<script setup>
import {computed, ref, watch} from "vue";

const count= ref("0")

const handleClick=()=>{
  count.value++
}

const originList =ref([0,1,2,3,4,5,6,7,8,9,10])

const multList=computed(()=>{
  return originList.value.filter(item=>originList.value.includes(item*item)
  )
})

//TODO

watch(count,(newVal,oldVal)=>{
  console.log('new and old',newVal,oldVal)
})

</script>

<template>
<p>count:{{ count }}</p>
<p>原始数组{{ originList }}</p>
<p>乘数组{{ multList }}</p>
   <button class="btn btn-success" @click="handleClick">按钮</button>
</template>

<style scoped>

</style>
