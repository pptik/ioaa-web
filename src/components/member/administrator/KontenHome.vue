<template>
  <span>
    <div align="center" style="background: linear-gradient(to right, rgba(73,155,234,1) 0%, rgba(32,124,229,1) 100%);color:#FFFFFF;" class="ui segment grey-text"><i class="info icon"></i>General Information</div>
    <div class="ui segment grey-text">
      <p>
        Please use the navigation menu on the left side of this section to control all functions.
      </p>
    </div>
  </span>
</template>

<script>
  import global_json from '../../../assets/js/globalVariable.json';

  export default {
    name: "konten",
    data(){
      return{
        email: '',
        sandi: ''
      }
    },
    methods: {
      masuk:function () {

      }
    }
  }
</script>

<style scoped>

</style>
