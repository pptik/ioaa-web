<template>
  <section class="ui container">
    <navigasi :highlight1="true" :highlight2="false"></navigasi>
    <main style="padding: 3em 4em 3em 4em;background:linear-gradient(to right, rgba(73,155,234,1) 0%, rgba(32,124,229,1) 100%);" class="ui segment">
        <konten-utama></konten-utama>
    </main>
    <hak-cipta></hak-cipta>
  </section>
</template>

<script>
    import '../../assets/js/slick.min.js'
    import Navigasi from './Navigasi';
    import KontenUtama from './KontenIndex';

    export default {
        name: "index",
        data(){
          return{

          }
        },
        created () {
          document.title = 'IOAA 2018 | Welcome to International Olympiad On Astronomy And Astrophysics.';
          if(this.$session.get('user_role') != null){//Mencek apakah pengguna mengakses sebagai member
            this.$router.push({path:'/home'})
          }
        },
        components: {
          'navigasi' : Navigasi,
          'konten-utama' : KontenUtama
        }
    }
</script>

<style>
  @import '../../assets/css/custom.css';

</style>
