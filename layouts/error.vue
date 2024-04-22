<template>
  <main class="r-container">
    <Error :error="error"/>
  </main>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error'
}
</script>
