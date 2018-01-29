<template>
  <section class="ui container">
    <navigasi :highlight1="true" :highlight2="false" :highlight3="false"></navigasi>
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
              <div class="content"><router-link to="/team_leader/accessing" class="primarytext"><i class="write icon"></i>Accessing</router-link></div>
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
              <div class="content">You are logged as <b>{{username}}</b></div>
            </div>
          </div>
        </div>
        <div align="center" style="background: linear-gradient(to right, rgba(73,155,234,1) 0%, rgba(32,124,229,1) 100%);color:#FFFFFF;" class="ui segment grey-text"><i class="write icon"></i>Grade</div>
        <div class="ui segment">
          <form class="form ui">
            <div class="field">
              <label>Question Number</label>
              <select class="ui dropdown">
                <option>Select Question Number</option>
              </select>
            </div>
            <div class="field">
              <label>Score</label>
              <input type="number" placeholder="Insert score here" autocomplete="score"/>
            </div>
            <div class="field">
              <button type="button"
                      style="background: linear-gradient(141deg, #2ecc71 10%, #27ae60 51%, #27ae60 75%);color:#FFFFFF;"
                      class="medium ui button button-submit">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <hak-cipta></hak-cipta>
  </section>
</template>

<script>
    import '../../../assets/js/slick.min.js'
    import Navigasi from './Navigasi';
    import KontenUtama from './KontenAccessing';

    import global_json from '../../../assets/js/globalVariable.json';

    export default {
        name: "index",
        created () {

          if(this.$session.get('user_role') != 1){
            alert("You have no permit to access this page")
            this.$router.push({path:'/'})
          }

          document.title = 'IOAA | Accessing';
        },
        data(){
          return{
            username: this.$session.get('username')
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
