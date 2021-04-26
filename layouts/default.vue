<template>
<div>
   
   <div class="headcolor">
       <b-container >
      <Header></Header>
</b-container>
   </div>

  <b-container >
        <div class="content-box">  <nuxt /></div>
</b-container>
</div>

</template>

<script>
import  Header   from "~/components/header.vue";
export default {
    components: {
    Header
  }
}
</script>
<style lang="scss" scoped>


.content-box{

margin-top: 60px;

}
@media all and (max-width:1000px) {

}
.headcolor{
  background-color: #17a2b8 ;
}
</style>
