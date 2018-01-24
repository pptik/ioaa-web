<template>
  <section class="ui container">
    <navigasi :highlight1="false" :highlight2="false" :highlight3="true"></navigasi>
    <div class="ui stackable sixteen column grid">
      <div class="three wide column">
        <div class="ui segment">
          <div class="ui middle aligned divided list">
            <div style="padding:1em;" class="item">
              <div class="content"></div><router-link to="/team_leader/grades" class="grey-text"><i class="newspaper icon"></i>Grades</router-link>
              <!--<div class="content"><router-link to="/administrator/users" class="grey-text"><i class="user icon"></i>Users</router-link></div>-->
            </div>
            <div style="padding:1em;" class="item">
              <div class="content"></div><router-link to="/team_leader/moderation" class="grey-text"><i class="talk outline icon"></i>Moderation</router-link>
              <!--<div class="content"><router-link to="/administrator/questions" class="grey-text"><i class="write icon"></i>Questions</router-link></div>-->
            </div>
            <div style="padding:1em;" class="item">
              <!--<div class="content"></div><router-link to="/administrator/moderation" class="grey-text"><i class="talk outline icon"></i>Moderation</router-link>-->
              <div class="content"><router-link to="/team_leader/accessing" class="grey-text"><i class="write icon"></i>Accessing</router-link></div>
            </div>
            <div style="padding:1em;" class="item">
              <!--<div class="content"></div><router-link to="/administrator/moderation" class="grey-text"><i class="talk outline icon"></i>Moderation</router-link>-->
              <div class="content"><router-link to="/team_leader/translate" class="grey-text"><i class="write icon"></i>Translate</router-link></div>
            </div>
          </div>
        </div>
      </div>
      <div class="ten wide column">
        <konten-utama></konten-utama>
      </div>
      <div class="three wide column">
        <div class="ui segment">
          <div class="ui middle aligned divided list">
            <div style="padding:1em;" class="item">
              <div class="content">You are logged as {{user_type}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hak-cipta></hak-cipta>
  </section>
</template>

<script>
    import '../../../assets/js/slick.min.js'
    import Navigasi from './Navigasi';
    import KontenUtama from './KontenProfile';

    import global_json from '../../../assets/js/globalVariable.json';

    export default {
        name: "index",
        created () {

          if(this.$session.get('user_type') != 'team_leader'){
            alert("You have no permit to access this page")
            this.$router.push({path:'/'})
          }

          document.title = 'IOAA | Profile';
        },
        data(){
          return{
            user_type: this.$session.get('user_type')
          }
        },
        components: {
          'navigasi' : Navigasi,
          'konten-utama' : KontenUtama
        }
    }
</script>

<style>
  @import '../../../assets/css/custom.css';

</style>
