<template>
   <div class="bg-[#202124] h-[80vh] rounded-3xl w-[80%] mx-auto shadow-[#202124] shadow-2xl">
      <div class="flex justify-center items-center h-full">
         <div class="w-1/2">
            <img src="../assets/google.png" alt="Google logo" class="mb-4 w-fit mx-auto">
            <input v-model="busqueda" type="text" class="border border-gray-400 rounded-full py-2 px-4 w-[75%] text-black"
               placeholder="Buscar en Google o escribir una URL">
            <div class="flex justify-center mt-8">
               <button @click="buscar" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                  Buscar con Google
               </button>
               <a href="https://http.cat/404" target="_blank"
                  class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md ml-4">
                  Voy a tener suerte
               </a>
            </div>
         </div>
      </div>
   </div>
   <router-link to="/">Volver a inicio</router-link>
</template>
 
<script>
export default {
   setup() {
      document.title = "Google Search";
   },
   name: 'BuscadorGoogle',
   data() {
      return {
         busqueda: ''
      }
   },
   methods: {
      buscar() {
         window.location.href = 'https://www.google.com/search?q=' + this.busqueda;
      }
   }
}
</script>
 
<style scoped>
#app {
   text-align: center;
   color: #2c3e50;
}
</style>
 