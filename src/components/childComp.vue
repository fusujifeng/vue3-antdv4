<script setup>
defineProps({
  childCounter:Number
})

const emit=defineEmits(['sonMessage'])

const sendMsg=()=>{
  emit('sonMessage','sendSonMessage')
}



  sendMsg()

</script>

<template>
<p>我是子组件</p>
  <button class="btn btn-error">{{ childCounter }}</button>
</template>

<style scoped>

</style>
