<template>
   <div>
       <NavBar></NavBar>
       <router-view></router-view>
   </div>
</template>

<script>
import NavBar from '@/components/nav';

export default {
  name: 'app',
  data() {
    return {
    };
  },
  components: {
    NavBar
  }
};
</script>

<style lang="sass" scoped>

</style>