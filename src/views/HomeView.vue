<template>
   <div class="home">
      <HelloWorld msg="Apruébame por favor" />
   </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
   setup() {
      document.title = "Home";
   },
   name: 'HomeView',
   components: {
      HelloWorld
   }
}
</script>
