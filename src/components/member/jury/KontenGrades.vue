<template>
  <span>
    <div align="center" style="background: linear-gradient(to right, rgba(73,155,234,1) 0%, rgba(32,124,229,1) 100%);color:#FFFFFF;" class="ui segment grey-text"><i class="info icon"></i>General Information</div>
    <div class="ui segment grey-text">
      <form class="ui form">
          <div class="ui grid">
            <div class="five wide column">
             <div class="field">
                <label>Participant ID</label>
                <input type="text" placeholder="Participant ID"/>
              </div>
            </div>
            <br>
            <div class="five wide column">
             <div class="field">
                <label>Leader ID</label>
                <input type="text" placeholder="Leader ID"/>
              </div>
            </div>
          </div>
        </form>
        <br>
        <a href="">Download Grade <i class="download icon"></i></a>
        <table class="ui compact table" style="font-size: 0.8rem">
          <thead>
            <tr>
              <th>Participant</th>
              <th>Leader</th>
              <th>Final Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>2</th>
              <th>3</th>
              <th>4</th>
            </tr>
          </tbody>
        </table>
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
