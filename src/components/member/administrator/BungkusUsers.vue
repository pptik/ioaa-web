<template>
  <section class="ui container">
    <navigasi :highlight1="true" :highlight2="false"></navigasi>
    <div class="ui stackable sixteen column grid">
      <div class="three wide column">
        <div class="ui segment">
          <div class="ui middle aligned divided list">
            <div style="padding:1em;" class="item">
              <div class="content"><router-link to="/administrator/users" class="primarytext"><i class="user icon"></i>Users</router-link></div>
            </div>
            <div style="padding:1em;" class="item">
              <div class="content"><router-link to="/administrator/questions" class="grey-text"><i class="write icon"></i>Questions</router-link></div>
            </div>
            <div style="padding:1em;" class="item">
              <div class="content"></div><router-link to="/administrator/moderation" class="grey-text"><i class="talk outline icon"></i>Moderation</router-link>
            </div>
            <div style="padding:1em;" class="item">
              <div class="content"></div><router-link to="/administrator/grades" class="grey-text"><i class="newspaper icon"></i>Grades</router-link>
            </div>
            <div style="padding:1em;" class="item">
              <div class="content"></div><router-link to="/administrator/accessing" class="grey-text"><i class="newspaper icon"></i>Accessing</router-link>
            </div>
            <div style="padding:1em;" class="item">
              <div class="content"></div><router-link to="/administrator/olympiad_time" class="grey-text"><i class="hourglass end icon"></i>Olympiad Time</router-link>
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
            <div style="padding:1em;" class="item">
              <a href="#" v-on:click.prevent="create_user" class="content grey-text"><i class="add icon"></i>Create User</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hak-cipta></hak-cipta>
    <div class="ui modal create-user"><i class="close icon"></i>
      <div class="header">Create User</div>
      <div class="content">
        <form class="ui form">
          <div class="field">
            <label>Privilege</label>
            <select class="ui dropdown">
              <option>Select Privilege</option>
              <option>Jury</option>
              <option>Participant</option>
              <option>Team Leader</option>
            </select>
          </div>
          <div class="field">
            <label>Name</label>
            <input type="text" placeholder="Name"/>
          </div>
          <div class="field">
            <label>Email</label>
            <input type="email" placeholder="Email"/>
          </div>
          <div class="field">
            <label>Country</label>
            <select class="ui dropdown">
              <option>Select Country</option>
              <option>Indonesia</option>
            </select>
          </div>
          <div class="field">
            <label>Code</label>
            <input type="text" placeholder="Code"/>
          </div>
          <div class="field">
            <label>Gender</label>
            <select class="ui dropdown">
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div class="field">
            <label>Salutation</label>
            <select class="ui dropdown">
              <option>Select Salutation</option>
              <option>Mr</option>
              <option>Ms</option>
              <option>Mrs</option>
            </select>
          </div>
          <div class="field">
            <label>Birthday</label>
            <input type="date" placeholder="Birthday" id="datepicker"/>
          </div>
          <div class="field">
            <button type="button"
                    style="background: linear-gradient(141deg, #2ecc71 10%, #27ae60 51%, #27ae60 75%);color:#FFFFFF;"
                    class="ui button" v-on:click.prevent="tambah_universitas_proses">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
    import '../../../assets/js/slick.min.js'
    import Navigasi from './Navigasi';
    import KontenUtama from './KontenUsers';

    import global_json from '../../../assets/js/globalVariable.json';



    export default {
        name: "index",
        created () {

          if(this.$session.get('user_type') != 'administrator'){
            alert("You have no permit to access this page")
            this.$router.push({path:'/'})
          }

          document.title = 'IOAA | Home';
        },
        mounted(){
          $( "#datepicker" ).datepicker({
            changeMonth: true,
            changeYear: true,
            yearRange: '1930:2010'
          });
        },
        methods : {
          create_user: function () {
            $('.ui.modal.create-user')
              .modal('show')
          }
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
