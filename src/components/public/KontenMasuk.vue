<template>
  <section class="ui grid stackable">
    <div class="eight wide column grey-text" align="center">
      <img src="/src/assets/images/carousel-2.png" class="ui image medium"/>
    </div>
    <div class="eight wide column grey-text">
      <h2 class="primary-color">Login</h2><br/>
      <form class="ui form">
        <div class="field">
          <div>Email</div>
          <input type="text" name="email" autocomplete="email" placeholder="Your email to login" v-model="email"/>
        </div>
        <div class="field">
          <div>Password</div>
          <input type="password" name="password" autocomplete="password" placeholder="Your password to login" v-model="sandi"/>
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
