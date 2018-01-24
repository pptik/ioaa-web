<template>
  <span>
    <div align="center" style="background: linear-gradient(to right, rgba(73,155,234,1) 0%, rgba(32,124,229,1) 100%);color:#FFFFFF;" class="ui segment grey-text"><i class="user icon"></i>Profile</div>
    <div class="ui segment grey-text">

      <form class="ui form">
        <div class="ui grid">
            <div class="sixteen wide column">
              <div class="field">
                <h2>Change Password</h2>
              </div>
            </div>
        </div>
        <div class="ui grid">
            <div class="sixteen wide column">
              <div class="field">
                <label>Current Password</label>
                <input type="password" placeholder="Your current password" autocomplete="current_password"/>
              </div>
            </div>
            <div class="sixteen wide column">
             <div class="field">
                <label>New Password</label>
                <input type="password" placeholder="Your new password" autocomplete="new_password"/>
              </div>
            </div>
            <div class="sixteen wide column">
              <div class="field">
                <button type="button"
                        style="background: linear-gradient(141deg, #2ecc71 10%, #27ae60 51%, #27ae60 75%);color:#FFFFFF;"
                        v-on:click.prevent="add_moderation" class="medium ui button button-submit">Submit</button>
              </div>
            </div>
          </div>
        </form>
    </div>
  </span>
</template>

<script>
  import global_json from '../../../assets/js/globalVariable.json';

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

      }
    }
  }
</script>

<style scoped>

</style>
