<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container">
      <span class="navbar-brand">Simulador de Tweets</span>
      <button class="btn pl-4 pr-4" @click="openCloseForm" :class="{'btn-success': !showForm, 'btn-light': showForm }">
        Nuevo Tweet
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    openCloseForm: Function,
    showForm: Boolean,
  },

};
</script>

<style></style>
