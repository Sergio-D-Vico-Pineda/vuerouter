<template>
   <h1>Error 404</h1>
   <picture>
      <img class="mx-auto" src="https://http.cat/404" alt="404">
   </picture>
   <h2>No se ha encontrado la página.</h2>
</template>
<script>
export default {
   setup() {
      document.title = "Error 404";
   },
   name: 'NotFound'
}
</script>