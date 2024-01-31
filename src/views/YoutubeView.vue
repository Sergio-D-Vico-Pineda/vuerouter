<template>
   <div class="bg-[#0f0f0f] h-[80vh] rounded-3xl w-[80%] mx-auto shadow-[#564e4e] shadow-2xl">
      <div class="flex justify-center items-center h-full">
         <div class="w-1/2">
            <YoutubeLogo class="mb-12" />
            <input v-model="searchQuery" type="text"
               class="border border-gray-400 rounded-full py-2 px-4 w-full text-black" placeholder="Buscar en YouTube">
            <div class="flex justify-center mt-8">
               <button @click="search" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                  Search
               </button>
            </div>
         </div>
      </div>
   </div>
   <router-link to="/">Volver a inicio</router-link>
</template>
 

<script>
import YoutubeLogo from '../components/YoutubeLogo.vue'
export default {
   setup() {
      document.title = "Youtube Search";
   },
   name: 'YoutubeView',
   components: {
      YoutubeLogo
   },
   data() {
      return {
         searchQuery: '',
      };
   },
   methods: {
      search() {
         if (this.searchQuery) {
            window.location.href = `https://www.youtube.com/results?search_query=${this.searchQuery}`;
         }
      },
   },
}
</script>