<script setup>
import {computed, ref, watch} from "vue";
import _ from 'lodash'
const count= ref("0")

const handleClick=()=>{
  count.value++
}

const name=ref(['s','e','d'])

const changeName=()=>{
  name.value=_.reverse(name.value)
}
const originList =ref([0,1,2,3,4,5,6,7,8,9,10])

const multList=computed(()=>{
  return originList.value.filter(item=>originList.value.includes(item*item)
  )
})

//TODO

watch([count,name],([newVal,newName],[oldVal,oldName])=>{
  console.log('new and old',newVal,newName,oldVal,oldName)
},{immediate:true,deep:true})

</script>

<template>
<p>name:{{name}}</p>
<p>count:{{ count }}</p>
<p>原始数组{{ originList }}</p>
<p>乘数组{{ multList }}</p>
   <button class="btn btn-success" @click="handleClick">按钮</button>
   <button class="btn btn-green btn-ghost small" @click="changeName">按钮</button>
</template>

<style scoped>

</style>
