<template>
  <span>
    <div align="center" style="background: linear-gradient(to right, rgba(73,155,234,1) 0%, rgba(32,124,229,1) 100%);color:#FFFFFF;" class="ui segment grey-text"><i class="hourglass end icon"></i>Set Timer</div>
    <div class="ui segment grey-text">
      <form class="ui form">
        <div class="field">
            <label>Date of Moderation</label>
            <input type="date" placeholder="Date of moderation" id="datepicker"/>
        </div>
        <div class="field">
            <label>Start Time</label>
            <input type="text" placeholder="Example: 08:00:00"/>
        </div>
        <div class="field">
            <label>Duration Minutes</label>
            <input type="text" placeholder="Example: 60"/>
        </div>
        <div class="field">
            <button type="button"
                    style="background: linear-gradient(141deg, #2ecc71 10%, #27ae60 51%, #27ae60 75%);color:#FFFFFF;"
                    class="ui button" v-on:click.prevent="tambah_universitas_proses">Submit</button>
            <button type="button"
                    style="background: linear-gradient(141deg, #e74c3c 10%, #c0392b 51%, #c0392b 75%);color:#FFFFFF;"
                    class="ui button" v-on:click.prevent="tambah_universitas_proses">Clear</button>
        </div>
      </form>
    </div>
  </span>
</template>

<script>
  import global_json from '../../../assets/js/globalVariable.json';

  export default {
    name: "konten",
    mounted(){
      $( "#datepicker" ).datepicker({
      });
    },
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
