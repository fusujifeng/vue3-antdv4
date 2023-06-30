<script>
import {defineComponent, ref} from 'vue'
import { defineEmits, defineProps } from "vue";



defineProps({
  title: {
    type:String
  },
  operateType:{
    type:String
  }
})
export default defineComponent({
  name: "cardCompent"
})
</script>

<template>

  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>{{ title }}</span>

      </div>
    </template>
    <slot></slot>
     <button class="btn btn-success w-2">{{ 按钮 }}</button>
    {{operateType}}
  </el-card>
</template>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>
