<template>
  <div>
    <header class="headmenu">
      <Menu style="float:left;"
            :menulist="menulist"></Menu>
      <div class="writeartcle">
        <nuxt-link to="/writeartcle">写文章</nuxt-link>
      </div>
    </header>
<div class="adminbox">
 <nuxt />
</div>
   
  </div>

</template>

<script>
import Menu from "~/components/menu/menu";
export default {
  middleware: "auth",
  layout: "admin",
  data () {
    return {
      menulist: [
        { menuname: "统计", path: "/admin" },
        { menuname: "标签管理", path: "/admin/tag" },
        { menuname: "文集管理", path: "/admin/artclemenu" },
        { menuname: "评论管理", path: "/admin/comment" },
      ],
    };
  },
  components: {
    Menu
  }
};
</script>

<style scoped lang="scss">
.headmenu {
  margin-bottom: 15px;
  overflow: hidden;
  padding: 0 120px;
}
.writeartcle {
  float: right;

  line-height: 60px;
}
.adminbox{
   margin-bottom: 15px;
  overflow: hidden;
  padding: 0 120px;
}
</style>
