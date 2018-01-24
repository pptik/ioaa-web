<template>
  <div class="ui grid stackable">
    <div class="eight wide column white-text">
      <h1>Welcome to</h1>
      <p>International Olympiad On Astronomy And Astrophysics</p>
      <form class="ui form">
        <div class="required field">
          <input type="email" placeholder="Your code to login" autocomplete="code" v-model="kode"/>
        </div>
        <div class="required field">
          <input type="password" autocomplete="password" placeholder="Your password to login" v-model="password"/>
        </div>
        <div class="required field">
          <button type="button"
                  style="background: linear-gradient(141deg, #2ecc71 10%, #27ae60 51%, #27ae60 75%);color:#FFFFFF;"
                  v-on:click.prevent="masuk" class="huge ui button button-submit">Submit</button>
        </div>
      </form>
    </div>

    <div  class="eight wide column" align="center">
      <div><img src="/src/assets/images/carousel-1.png" class="ui image medium"/></div>
        <!-- <span class="white-text"><b>Ambil Kelompok</b></span></div>-->
    </div>

  </div>

</template>

<script>
  import global_json from '../../assets/js/globalVariable.json';

  export default {
    name: "konten",
    data(){
      return{
        kode: '',
        password: ''
      }
    },
    methods: {
      masuk:function () {
        this.$http.post(global_json.general_url+global_json.api.login,{
          Kode: this.kode,
          Password: this.password
        }).then(function (data) {
          if(data.body.success == true){//Login Succeed
            //alert(data.body.message)
            this.$session.set('sess_id',data.body.sessionid)
            this.$session.set('user_id',data.body.profile._id)
            this.$session.set('user_role',data.body.profile.privilege)
            this.$session.set('username',data.body.profile.name)

            this.$router.push({path:'/home'})

          }else if(data.body.success == false){
            alert(data.body.message)
            this.$router.push({path:'/login'})
          }
        });
      }
    }
  }




</script>

<style scoped>

</style>
