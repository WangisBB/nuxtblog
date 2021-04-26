<template>
  <ul class="menubox clear">
    <template v-for="el in menulist">
      <li :class="activeid == el.path ? 'active' : 'menuitem'"
          @click="activefn(el.path)"
          :data-id="el.path">
        <nuxt-link :to="el.path"> {{ el.menuname }}</nuxt-link>
        <div class="line"><span></span><span></span><span></span></div>
      </li>
    </template>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      theme1: "light",
      activeid: "",

    };
  },
  methods: {
    activefn (val) {
      this.activeid = val;
    },
  },
  mounted () {

    this.activeid = this.$route.path

  },
  props: {
    menulist: { type: Array }
  }

}
</script>
<style lang="scss" scoped>
@import "@/assets/style/defualt.scss";

.menubox {
  > li {
    float: left;

    > a {
      display: block;
      padding: 0 12px;
      line-height: 60px;
    }
  }
}
.line {
  display: flex;
  line-height: 100%;
  justify-content: space-around;
  width: 0;
  height: 0;
  overflow: hidden;
  transition: all 1s;

  span {
    background-color: $theme-color;
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
  }
}
// .menubox a:hover ~ .line,
.active .line {
  width: 100%;
  height: auto;
}
.menuitem .line {
  width: 0;
  height: 0;
  transition: all 1s;
}
</style>
