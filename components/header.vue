<template>
  <header>
    <!-- <div class="logo">
      logo
    </div>
    <Menu :menulist="menulist"></Menu> -->
     <b-navbar toggleable="lg" type="dark"  class="bnavbar">

  
    <b-navbar-brand href="#">
      <img src="https://placekitten.com/g/30/30" alt="Kitten">
    </b-navbar-brand>


    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <template  v-if="menulist">
        <b-nav-item :href="el.path" v-for="el in menulist" :key="el.path" >{{el.menuname}}</b-nav-item>
        </template>
    
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit"></b-button>
        </b-nav-form>


        <!-- <b-nav-item-dropdown right>
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown> -->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  </header>
</template>
<script>
import Menu from "./menu/menu";
export default {
  data () {
    return {
      menulist: [
        { menuname: "首页", path: "/" },
        { menuname: "归类", path: "/tag" },
        { menuname: "资源", path: "/link" },
        { menuname: "关于", path: "/about" },
      ],
    };
  },
  methods: {

  },
  mounted () {
 
  },
  components: {
    Menu,
  },
};
</script>
<style lang="scss" scoped>
.bnavbar{

  
  // width: 100%;

  z-index: 10000;
}

</style>
