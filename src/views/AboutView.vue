<template>
   <div class="about">
      <h1>This is an about page</h1>
   </div>
   <div class="max-w-2xl mx-auto px-10 bg-[#433b3b] py-6 rounded-lg">
      <div class="items-start justify-between sm:flex">
         <div>
            <h4 class=" text-xl font-semibold">Esto es una prueba</h4>
            <p class="mt-2  text-base sm:text-sm">He usado Tailwind CSS en esta prática para probar.</p>
         </div>
         <a href="javascript:void(0)"
            class="inline-flex items-center justify-center gap-1 py-2 px-3 mt-2 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg sm:mt-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="w-6 h-6">
               <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
            </svg>
            Y esto es un componente
         </a>
      </div>
      <ul class="mt-12 divide-y">
         <li class="py-5">
            <div class="flex gap-3">
               <img src="https://unavatar.io/github/sergio-d-vico-pineda" class="flex-none w-12 h-12 rounded-full"
                  alt="John lorin's avatar">
               <div>
                  <span class="block text-sm font-semibold">Sergio David Vico Pineda</span>
                  <span class="block text-sm">servicpin2@alu.edu.gva.es</span>
               </div>
            </div>
         </li>
      </ul>
   </div>
   <router-link to="/">Volver a inicio</router-link>
</template>

<script>
export default {
   setup() {
      document.title = "About";
   }
}
</script>