<template>
  <span>
    <div align="center" style="background: linear-gradient(to right, rgba(73,155,234,1) 0%, rgba(32,124,229,1) 100%);color:#FFFFFF;" class="ui segment grey-text"><i class="info icon"></i>General Information</div>
    <div class="ui segment grey-text">
      <form class="ui form">
          <div class="ui grid">
            <!--
            <div class="five wide column">
              <div class="field">
                <label>Jury ID</label>
                <input type="text" placeholder="Jury ID"/>
              </div>
            </div>
            <div class="five wide column">
             <div class="field">
                <label>Participant ID</label>
                <input type="text" placeholder="Participant ID"/>
              </div>
            </div>
            -->
          </div>
        </form>
        <br>
        <table class="ui compact table" style="font-size: 0.8rem">
          <thead>
            <tr>
              <th>Participant</th>
              <th>Grade</th>
              <th>Final Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="grade in grades">
              <th>{{grade.kode_participant}}</th>
              <th>
                <span v-for="g in grade.nilai_juri">Jury Code: {{g.kode_juri}}<br/> Score: {{g.nilai}}</span>
                <br/>
              </th>
              <th>{{grade.nilai_final}}</th>
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
        grades: []
      }
    },
    created(){
      this.$http.post(global_json.general_url + global_json.api.grades_list, {
        SessID: this.$session.get('sess_id')
      }).then(function (data) {
        if (data.body.success == true) {
          console.log('grades: '+JSON.stringify(data.body))
          this.grades = data.body.listgrade;
          //console.log('grades: '+JSON.stringify(data.body.listgrade))
        } else if (data.body.success == false) {
          console.log('M: Gagal mengembalikan daftar nilai: '+JSON.stringify(data.body))
        }
      });
    },
    methods: {
      masuk:function () {

      }
    }
  }
</script>

<style scoped>

</style>
