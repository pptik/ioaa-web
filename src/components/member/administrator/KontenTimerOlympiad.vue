<template>
  <span>
    <div align="center" style="background: linear-gradient(to right, rgba(73,155,234,1) 0%, rgba(32,124,229,1) 100%);color:#FFFFFF;" class="ui segment grey-text"><i class="hourglass end icon"></i>Olympiad Timer</div>
    <div class="ui segment grey-text">
      <table class="ui compact table" style="font-size: 0.8rem">
        <thead>
          <tr>
            <th>Start date</th>
            <th>End date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </span>
</template>

<script>
  import global_json from '../../../assets/js/globalVariable.json';
  import moment from 'moment'

  export default {
    name: "konten",
    data(){
      return{
        StartDate: '',
        JamMulai: '',
      }
    },
    created(){
      this.$http.post(global_json.general_url + global_json.api.moderation_schedule_active, {
        SessID: this.$session.get('sess_id')
      }).then(function (data) {
        if(data.body.schedule != null){
          this.StartDate = moment(data.body.schedule.start_time).format('MM-DD-YYYY HH:mm');
          this.JamMulai = moment(data.body.schedule.end_time).format('MM-DD-YYYY HH:mm');
        }
      });
    },
    mounted(){
      $( "#datepicker" ).datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: '2018:2019'
      });

      $( "#datepicker2" ).datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: '2018:2019'
      });
    },
    methods: {
      olympiad_timer_update:function () { //olympiad_timer_update
        var startDate = $('#datepicker').val().split('/');
        var endDate = $('#datepicker2').val().split('/');

        this.$http.post(global_json.general_url + global_json.api.olympiad_timer_update, {
          SessID: 'opensession',
          StartDate: startDate[1]+'/'+startDate[0]+'/'+startDate[2],
          JamMulai: this.JamMulai,
          EndDate: endDate[1]+'/'+endDate[0]+'/'+endDate[2],
          JamSelesai: this.JamSelesai
        }).then(function (data) {
          alert(data.body.message);
          window.location.href = "/administrator/timer_olympiad"
        });
      }
    }
  }
</script>

<style scoped>

</style>
