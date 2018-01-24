<template>
  <span>
    <div align="center" style="background: linear-gradient(to right, rgba(73,155,234,1) 0%, rgba(32,124,229,1) 100%);color:#FFFFFF;" class="ui segment grey-text"><i class="write icon"></i>Translate</div>
    <div class="ui segment grey-text">
      <form class="ui form">
          <div class="ui grid">
            <div class="sixteen wide column">
             <div class="field">
                <label>Question in English</label>
                <vue-editor></vue-editor>
              </div>
            </div>
            <div class="sixteen wide column">
              <button  type="button" style="color: white; background: linear-gradient(141deg, #2ecc71 10%, #27ae60 51%, #27ae60 75%);color:#FFFFFF;" class="ui button">Auto Translate</button>
            </div>
          </div>
        </form>
      <br>
      <hr/>
      <br>
      <form class="ui form">
          <div class="ui grid">
            <div class="sixteen wide column">
             <div class="field">
                <label>Question in </label>
                <vue-editor></vue-editor>
              </div>
            </div>
            <div class="sixteen wide column">
              <button  type="button" style="color: white; background: linear-gradient(141deg, #2ecc71 10%, #27ae60 51%, #27ae60 75%);color:#FFFFFF;" class="ui button">Submit</button>
            </div>
          </div>
        </form>
    </div>

  </span>
</template>

<script>
  import { VueEditor } from 'vue2-editor'
  import global_json from '../../../assets/js/globalVariable.json';

  export default {
    name: "konten",
    components: {
      VueEditor
    },
    data(){
      return{
        email: '',
        sandi: ''
      }
    },
    methods: {
      add_moderation:function () {
        $('.ui.modal.add-moderation')
          .modal('show')
      }
    }
  }
</script>

<style scoped>

</style>
