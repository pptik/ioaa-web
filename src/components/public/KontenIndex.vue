<template>
  <div class="ui grid stackable">
    <div class="eight wide column white-text">
      <h1>Welcome to</h1>
      <p>International Olympiad On Astronomy And Astrophysics</p>
      <form class="ui form">
        <div class="required field">
          <input type="text" placeholder="Email" autocomplete="email" v-model="email"/>
        </div>
        <div class="required field">
          <input type="password" autocomplete="password" placeholder="Password" v-model="sandi"/>
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
        email: '',
        sandi: ''
      }
    },
    methods: {
      masuk:function () {
        if(this.email == 'administrator' && this.sandi == 'administrator'){
          this.$session.set('user_type','administrator')
          this.$router.push({path:'/home'})
        }else if(this.email == 'jury' && this.sandi == 'jury'){
          this.$session.set('user_type','jury')
          this.$router.push({path:'/home'})
        }else if(this.email == 'team_leader' && this.sandi == 'team_leader'){
          this.$session.set('user_type','time_leader')
          this.$router.push({path:'/home'})
        }else if(this.email == 'participant' && this.sandi == 'participant'){
          this.$session.set('user_type','time_leader')
          this.$router.push({path:'/home'})
        }else{
          alert('Sorry, email or password not registered in our database')
          this.$router.push({path:'/login'})
        }
      }
    }
  }




</script>

<style scoped>

</style>
