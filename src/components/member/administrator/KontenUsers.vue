<template>
  <span>
    <div align="center" style="background: linear-gradient(to right, rgba(73,155,234,1) 0%, rgba(32,124,229,1) 100%);color:#FFFFFF;" class="ui segment grey-text"><i class="users icon"></i>Users List</div>
    <div class="ui segment grey-text">
        <form class="ui form">
          <div class="field">
            <select class="ui dropdown">
                <option>Select Privilege here to filter the list</option>
                <option>Jury</option>
                <option>Participant</option>
                <option>Team Leader</option>
            </select>
          </div>
        </form>
        <table class="ui compact table" style="font-size: 0.8rem">
        <thead>
          <tr>
            <th>Privilege</th>
            <th>Name</th>
            <th>Email</th>
            <th>Country</th>
            <th>Code</th>
            <th>Gender</th>
            <th>Salutation</th>
            <th>Birthday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Team Leader</td>
            <td>Muhammad Ilham Fadillah</td>
            <td>emilhamep@gmail.com</td>
            <td>Indonesia</td>
            <td>EE123</td>
            <td>M</td>
            <td>Mr</td>
            <td>01/01/1992</td>
          </tr>
        </tbody>
      </table>

    </div>
    <div align="center" style="background: linear-gradient(to right, rgba(73,155,234,1) 0%, rgba(32,124,229,1) 100%);color:#FFFFFF;" class="ui segment grey-text"><i class="flag outline icon"></i>Countries List</div>
    <div class="ui segment grey-text">
      <table class="ui compact table" style="font-size: 0.8rem">
        <thead>
          <tr>
            <th>Country Name</th>
            <th>Country Code</th>
            <th>Country Language</th>
            <th>Country Language Code</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Indonesia</td>
            <td>INA</td>
            <td>Bahasa</td>
            <td>BHS</td>
            <td>Main</td>
          </tr>
        </tbody>
      </table>
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
