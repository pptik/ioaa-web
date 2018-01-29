<template>
  <section class="ui grid stackable">
    <div class="eight wide column grey-text" align="center">
      <img src="/src/assets/images/carousel-2.png" class="ui image medium"/>
    </div>
    <div class="eight wide column grey-text">
      <h2 class="primary-color">Login</h2><br/>
      <form class="ui form">
        <div class="field">
          <div>Code</div>
          <input type="text" autocomplete="kode" placeholder="Your code to login" v-model="kode"/>
        </div>
        <div class="field">
          <div>Password</div>
          <input type="password" autocomplete="password" placeholder="Your password to login" v-model="password"/>
        </div>
        <div class="field">
          <button v-on:click.prevent="masuk" type="button" style="color: white; background: linear-gradient(141deg, #2ecc71 10%, #27ae60 51%, #27ae60 75%);color:#FFFFFF;" class="ui button">Submit</button>
        </div>
      </form>
    </div>
  </section>

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
          }
        });
      }
    }
  }




</script>

<style scoped>

</style>
