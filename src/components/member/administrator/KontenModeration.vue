<template>
  <span>
    <div align="center" style="background: linear-gradient(to right, rgba(73,155,234,1) 0%, rgba(32,124,229,1) 100%);color:#FFFFFF;" class="ui segment grey-text"><i class="write icon"></i>Create Question</div>
    <div class="ui segment grey-text">
        <form class="ui form">
          <div class="ui grid">
            <div class="eight wide column">
              <div class="field">
                <label>Reset Count</label>
                <select class="ui dropdown">
                    <option>Select Leader ID</option>
                </select>
                <br>
                <button  type="button" style="color: white; background: linear-gradient(141deg, #2ecc71 10%, #27ae60 51%, #27ae60 75%);color:#FFFFFF;" class="ui button">Reset</button>
              </div>
            </div>
            <div class="eight wide column">
             <div class="field">
                <label>Delete All Schedule</label>
                <button  type="button" style="color: white; background: linear-gradient(141deg, #2ecc71 10%, #27ae60 51%, #27ae60 75%);color:#FFFFFF;" class="ui button">Delete</button>
              </div>
            </div>
            <div class="sixteen wide column">
             <div class="field">
                <label>Create Mode</label>
             </div>
              <div class="field">
                <label>Start Time</label>
                <label>Hour</label>
                <input type="text" placeholder="Hour"/>
                <label>Minute</label>
                <input type="text" placeholder="Minute"/>
             </div>
              <div class="field">
                <label>End Time</label>
                <label>Hour</label>
                <input type="text" placeholder="Hour"/>
                <label>Minute</label>
                <input type="text" placeholder="Minute"/>
             </div>
              <div class="field">
                <label>End Time</label>
                <label>Hour</label>
                <input type="text" placeholder="Hour"/>
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
    <br>
    <div align="center" style="background: linear-gradient(to right, rgba(73,155,234,1) 0%, rgba(32,124,229,1) 100%);color:#FFFFFF;" class="ui segment grey-text"><i class="list icon"></i>Create Moderation Schedule</div>
    <div class="ui segment grey-text">
        <form class="ui form">
          <div class="ui grid">
            <div class="eight wide column">
              <div class="field">
                <label>Start Time</label>

              </div>
            </div>
            <div class="eight wide column">
             <div class="field">
                <label>End Time</label>

              </div>
            </div>
            <div class="eight wide column">
             <div class="field">
                <label>Duration</label>

              </div>
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
