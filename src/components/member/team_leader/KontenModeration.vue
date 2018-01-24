<template>
  <span>
    <div align="center" style="background: linear-gradient(to right, rgba(73,155,234,1) 0%, rgba(32,124,229,1) 100%);color:#FFFFFF;" class="ui segment grey-text"><i class="info icon"></i>Moderation Management</div>
    <div class="ui segment grey-text">
      <form class="ui form">
          <div class="ui grid">
            <div class="five wide column">
              <div class="field">
                <label>Jury ID</label>
                <select class="ui dropdown">
                  <option>Select Jury Id</option>
                </select>
              </div>
            </div>
            <div class="five wide column">
             <div class="field">
                <label>Moderation Session</label>
                <select class="ui dropdown">
                  <option>Select Moderation Session</option>
                </select>
              </div>
            </div>
            <div class="five wide column">
              <div class="field">
                <label style="visibility: hidden;">Moderation Session</label>
                <button type="button"
                        style="background: linear-gradient(141deg, #2ecc71 10%, #27ae60 51%, #27ae60 75%);color:#FFFFFF;"
                        v-on:click.prevent="add_moderation" class="medium ui button button-submit"><i class="plus icon"></i>Add Moderation</button>
              </div>
            </div>
          </div>
        </form>
        <br>
        <br>
        <form class="ui form">
          <div class="field">
            <label>
              All Moderation Schedules
            </label>
          </div>
        </form>

        <table class="ui compact celled striped table" style="font-size: 0.8rem">
          <thead>
            <tr>
              <th>Session</th>
              <th>Team Leader</th>
              <th>Jury</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <th>A11F, A21F</th>
              <th>C11F, E11F</th>
            </tr>
            <tr>
              <th>2</th>
              <th>B12F, B22F</th>
              <th>D11F, F11F</th>
            </tr>
            <tr>
              <th>3</th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th>4</th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th>5</th>
              <th></th>
              <th></th>
            </tr>
          </tbody>
        </table>
    </div>
    <div class="ui modal add-moderation"><i class="close icon"></i>
      <div class="header">Add Moderation</div>
      <div class="content">
        <form class="ui form">
          <div class="field">
            <label>Session</label>
            <select class="ui dropdown">
              <option>Select Session</option>
            </select>
          </div>
          <div class="field">
            <label>Jury</label>
            <select class="ui dropdown">
              <option>Select Jury Code</option>
            </select>
          </div>
          <div class="field">
            <button type="button"
                    style="background: linear-gradient(141deg, #2ecc71 10%, #27ae60 51%, #27ae60 75%);color:#FFFFFF;"
                    class="ui button" v-on:click.prevent="tambah_universitas_proses">Submit</button>
          </div>
        </form>
      </div>
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
      add_moderation:function () {
        $('.ui.modal.add-moderation')
          .modal('show')
      }
    }
  }
</script>

<style scoped>

</style>
