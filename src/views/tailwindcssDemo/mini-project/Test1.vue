html
<template>
  <div class="flex justify-center items-center h-screen bg-zinc-700">
   <div class="flex flex-col md:flex-row transform duration-300 p-2 mx-6 bg-zinc-800 rounded-2xl">
    <img class="object-fit h-80 md:h-64 hover:scale-105 rounded-xl" src="../../../assets/mini-projects/email-subscribe/images/image.jpg" alt="">
   <div class="p-6 md:p-12 text-white">
     <h2 class=" text-xl text-center md:text-left font-medium font-sans">Get diet and fitness tips in your inbox</h2>
     <p class="text-white max-w-xs tracking-wide my-4">Eat better and exercise better. Sign up for the Diet&Fitness newsletter.</p>
       <div class="flex flex-col md:flex-row p-2 px-4 text-center text-white
        space-y-4 md:space-x-3 mx-5 md:space-y-0 justify-center items-center">
         <input type="text" placeholder="Enter your email address"
                class="text-xs p-4 px-4 rounded-xl  bg-zinc-800 border border-zinc-600
placeholder:text-center placeholder:md:text-left"/>
          <button class=" px-5 py-3 bg-green-400 rounded-md hover:bg-green-900 duration-500">subrcibe</button>
       </div>
   </div>
   </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: 'Hello, Vue 3!'
    };
  }
};
</script>
<style>

</style>
