<template>
</template>

<script>

    export default {
        name: "index",
        created () {
          if(this.$session.get('user_type') == 'administrator'){
            this.$router.push({path:'/home/administrator'})
          }else if(this.$session.get('user_type') == 'jury'){
            this.$router.push({path:'/home/jury'})
          }else if(this.$session.get('user_type') == 'team_leader'){
            this.$router.push({path:'/home/team_leader'})
          }else if(this.$session.get('user_type') == 'participant'){
            this.$router.push({path:'/home/participant'})
          }
        }
    }
</script>

<style>

</style>
