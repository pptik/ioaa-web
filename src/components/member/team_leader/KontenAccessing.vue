<template>
  <span>
    <div align="center" style="background: linear-gradient(to right, rgba(73,155,234,1) 0%, rgba(32,124,229,1) 100%);color:#FFFFFF;" class="ui segment grey-text"><i class="write icon"></i>Accessing</div>
    <div class="ui segment grey-text">
      <form class="ui form">
          <div class="ui grid">
            <div class="eight wide column">
              <div class="field">
                <label>Participant Id</label>
                <select class="ui dropdown">
                  <option>Select Participant Id</option>
                </select>
              </div>
            </div>
          </div>
        </form>
        <br>
        <br>
        <p>Notes:

            &nbsp;
            <a class="item">
              <div class="ui grey horizontal label"><span style="visibility: hidden;">Label</span></div>
              No Answer
            </a>
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            <a class="item">
              <div class="ui green horizontal label"><span style="visibility: hidden;">Label</span></div>
              1<sup>st</sup> Answer
            </a>
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            <a class="item">
              <div class="ui red horizontal label"><span style="visibility: hidden;">Label</span></div>
              2<sup>nd</sup> Answer
            </a>
        </p>
        <table class="ui compact celled striped table" style="font-size: 0.8rem">
          <thead>
            <tr>
              <th>Question Number</th>
              <th>Problem</th>
              <th>Participant's Answer</th>
            </tr>
          </thead>
          <tbody>
            <tr style="background-color: grey">
              <td>1</td>
              <td>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</td>
              <td></td>
            </tr>
            <tr style="background-color: green">
              <td>2</td>
              <td>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</td>
              <td>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </td>
            </tr>
            <tr style="background-color: red">
              <td>3</td>
              <td>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</td>
              <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</td>
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
