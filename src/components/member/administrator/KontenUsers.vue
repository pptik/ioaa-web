<template>
  <span>
    <div align="center" style="background: linear-gradient(to right, rgba(73,155,234,1) 0%, rgba(32,124,229,1) 100%);color:#FFFFFF;" class="ui segment grey-text"><i class="users icon"></i>Users List</div>
    <div class="ui segment grey-text">

      <!--<div class="sixteen wide column">
        <form class="ui form">
          <div class="field">
            <input type="text" placeholder="Tulis pencarian berdasarkan email" style="width:100%;" v-model="search"/>
          </div>
        </form>
      </div>-->
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
