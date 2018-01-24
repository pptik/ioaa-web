<template>
  <span>
    <div align="center" style="background: linear-gradient(to right, rgba(73,155,234,1) 0%, rgba(32,124,229,1) 100%);color:#FFFFFF;" class="ui segment grey-text"><i class="talk outline icon"></i>Moderation Management</div>
    <div class="ui segment grey-text">
        <form class="ui form">
          <div class="ui grid">
            <div class="eight wide column">
             <div class="field">
                <label>Delete All Schedule</label>
                <button  type="button" style="color: white; background: linear-gradient(141deg, #2ecc71 10%, #27ae60 51%, #27ae60 75%);color:#FFFFFF;" class="ui button">Delete</button>
              </div>
            </div>
            <br>
            <div class="sixteen wide column">
             <div class="field">
                <label>Create Moderation Schedule</label>
             </div>
              <div class="field">
                <label>Start Time</label>
                <label>Hour</label>
                <input type="text" placeholder="Hour"/>
                <label>Minute</label>
                <input type="text" placeholder="Minute"/>
             </div>
              <br>
              <div class="field">
                <label>End Time</label>
                <label>Hour</label>
                <input type="text" placeholder="Hour"/>
                <label>Minute</label>
                <input type="text" placeholder="Minute"/>
             </div>
              <br>
              <div class="field">
                <label>Duration</label>
                <label>Minute</label>
                <input type="text" placeholder="Minute"/>
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
      masuk:function () {

      }
    }
  }
</script>

<style scoped>

</style>
