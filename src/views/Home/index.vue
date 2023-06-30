
<template>
  <div class=" flex flex-col lg:flex-row">
    <div class="p-10 border border-blue-400 bg-green-400"></div>
    <div class="p-10 border border-blue-400 bg-green-400"></div>
    <div class="p-10 border border-blue-400 bg-green-400"></div>
    <div class="p-10 border border-blue-400 bg-green-400"></div>
    <div class="p-10 border border-blue-400 bg-green-400"></div>
     <el-button class="ease-in-out transition" type="primary">按钮</el-button>
    <button class="ease-out duration-300 hover:animate-spin">Button B</button>


  </div>
</template>
<script>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
export default {
  name: 'EChartsDemo',
  setup() {
    const chart = ref(null);
    onMounted(() => {
      const myChart = echarts.init(chart.value);
      myChart.setOption({
        title: {
          text: 'ECharts 5 Demo',
        },
        xAxis: {
          type: 'category',
          data: ['A', 'B', 'C', 'D', 'E'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [10, 20, 30, 40, 50],
            type: 'bar',
          },
        ],
      });
    });
    return {
      chart,
    };
  },
};
</script>
<style>
/* Add any necessary styles here */
</style>
