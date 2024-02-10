<template>
   <div>
      <h1>Pokemon</h1>
      <!-- <h2>{{ $route.params.name }}</h2> -->
      <picture>
         <img id="imga" draggable="false" class="mx-auto" :src="srcimg" alt="pokemon">
      </picture>
      <div class="flex justify-center gap-3 mb-5">
         <button class="bg-gray-700/80 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" @click="back">
            Pokemon anterior
         </button>
         <button class="bg-gray-700/80 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" @click="next">
            Pokemon siguiente
         </button>
      </div>
      <button class="bg-gray-700/80 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
         <router-link to="/">Volver a inicio</router-link>
      </button>
   </div>
</template>

<script>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router'

export default {
   setup() {
      const route = useRoute(), router = useRouter();

      document.title = 'Pokedex'
      let num = route.params.name == "" ? 1 : route.params.name;
      let srcimg = ref(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${num}.png`)

      function next() {
         if (num == 1025) return
         num++;
         srcimg.value = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${num}.png`
         router.push(`/pokedex/${num}`)
      }

      function back() {
         if (num == 1) return
         num--;
         srcimg.value = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${num}.png`
         router.push(`/pokedex/${num}`)
      }

      return { srcimg, next, back }
   }
}
</script>

<style scoped>
button {
   @apply py-2 px-3
}
</style>