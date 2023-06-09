<script setup>

import {ref} from "vue";
import {useCounterStore} from "@/stores/counter";
import CardCompent from "@/components/cardCompent.vue";

</script>

<template>
  <p>home</p>
 <card-compent title="卡片1" operateType="副标题1"/>
 <card-compent title="卡片2" operateType="副标题2"/>

</template>

<style scoped>

</style>
