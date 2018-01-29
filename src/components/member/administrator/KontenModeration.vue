<template>
  <span>
    <div align="center" style="background: linear-gradient(to right, rgba(73,155,234,1) 0%, rgba(32,124,229,1) 100%);color:#FFFFFF;" class="ui segment grey-text"><i class="list icon"></i>Active Moderation</div>
    <div class="ui segment grey-text">
        <table class="ui compact table" style="font-size: 0.8rem" v-if="moderationId != '' ">
        <thead>
          <tr>
            <th>Start date</th>
            <th>End date</th>
            <th>Session numbers</th>
            <th>Duration per session</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{moderationStartTime}}</td>
            <td>{{moderationEndTime}}</td>
            <td>{{moderationSessionNumbers}}</td>
            <td>{{moderationDuration}}</td>
            <td><a v-on:click.prevent="deactive_moderation" href="#">Deactive Moderation</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </span>
</template>

<script>
  import { VueEditor } from 'vue2-editor'
  import moment from 'moment'
  import global_json from '../../../assets/js/globalVariable.json';

  export default {
    name: "konten",
    components: {
      VueEditor
    },
    data(){
      return{
        moderationStartTime: '',
        moderationEndTime: '',
        moderationDuration: '',
        moderationSessionNumbers: '',
        moderationId: ''
      }
    },
    created(){
      this.$http.post(global_json.general_url + global_json.api.moderation_schedule_active, {
        SessID: this.$session.get('sess_id')
      }).then(function (data) {
        if(data.body.schedule != null){
          this.moderationStartTime = moment(data.body.schedule.start_time).format('MM-DD-YYYY HH:mm');
          this.moderationEndTime = moment(data.body.schedule.end_time).format('MM-DD-YYYY HH:mm');
          this.moderationDuration = data.body.schedule.durasi;
          this.moderationSessionNumbers = data.body.schedule.jumlah_sesi;
          this.moderationId = data.body.schedule._id;
        }
      });
    },
    methods: {
      deactive_moderation: function () {
        this.$http.post(global_json.general_url+global_json.api.moderation_schedule_expired,{
          SessID: this.$session.get('sess_id'),
          ModerationScheduleID: this.moderationId
        }).then(function (data) {
          if(data.body.success == true){
            console.log('DK: '+JSON.stringify(data));
            alert(data.body.message)
            //this.$router.push({path:'/home'})
            window.location.href = "/administrator/moderation"
          }else if(data.body.success == false){
            alert(data.body.message)
            //this.$router.push({path:'/login'})
          }
        });
      }
    }
  }
</script>

<style scoped>

</style>
