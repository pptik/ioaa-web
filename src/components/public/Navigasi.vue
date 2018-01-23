<template>
  <nav class="ui secondary pointing menu">
    <router-link to="/" class="item">
      <span v-bind:class="{primarytext:highlight1}">IOAA 2018</span>
    </router-link>
    <div class="right menu">
      <router-link to="/login" class="item grey-text">
        <aside>
          <span v-bind:class="{primarytext:highlight2}">Login</span>
        </aside>
      </router-link>
    </div>
  </nav>
</template>

<script>
  export default {
    props: {
      highlight1: {
        type: Boolean,
        required: true
      },
      highlight2: {
        type: Boolean,
        required: true
      }
    },
   data (){
     return{
      //highlight:false
     }
   }
  }
</script>

<style scoped>

</style>
