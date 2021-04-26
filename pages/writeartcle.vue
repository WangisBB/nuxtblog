<template>
  <div>
    <el-row>
      <el-col :xs="24" :md="4" :lg="4">
        <div class="menu">
          <div class="backbtn"><nuxt-link to="/admin">返回管理</nuxt-link></div>

          <div @click="addartclemenu" class="addartclname">
            <i class="iconfont icon-xinzeng"></i> 新建文集
          </div>
          <Menuleft
            :arraylist="firstmenulist"
            v-if="firstmenulist && firstmenulist.length"
            v-model="activename"
            @change="menuchange"
          >
            <template v-slot:default="slotProps">
              <div style="float: right">
                <el-button
                  type="text"
                  icon="iconfont icon-xiugai"
                  title="修改文集"
                  @click.stop="editmenu(slotProps.el)"
                ></el-button>
                <el-button
                  type="text"
                  icon="iconfont icon-shanchu"
                  title="删除文集"
                  @click.stop="delmenu(slotProps.el)"
                ></el-button>
              </div>
            </template>
          </Menuleft>
        </div>
      </el-col>
      <el-col :xs="24" :md="4" :lg="4">
        <div class="menu">
          <div style="background-color: #fff; height: 100vh">
            <Artcleleft
              :arraylist="artclelist"
              v-if="artclelist && artclelist.length"
              v-model="artactcle"
              @change="artclechange"
            ></Artcleleft>
            <!-- <ul class="secondmenu">
              <li>文章名称</li>
            </ul> -->
            <div @click="addartcle" class="addartclname">
              <i class="iconfont icon-xinzeng"></i> 新增文章
            </div>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :md="16" :lg="16">
        <client-only>
          <div
            style="
              padding: 20px;
              box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 12px 0px;
            "
          >
            <el-row :gutter="20">
              <el-col :xs="24" :sm="24" :lg="18">
                <el-input
                  placeholder="请输入文章标题"
                  v-model="saveform.artTitle"
                  clearable
                >
                </el-input
              ></el-col>
           
              <el-col :xs="24" :sm="24" :lg="6">
                <el-select
                  v-model="saveform.tag"
                  placeholder="请选择标签"
                  clearable
                >
                  <el-option
                    v-for="item in artcletaglist"
                    :key="item.id"
                    :label="item.menuname"
                    :value="item.id"
                  >
                  </el-option> </el-select
              ></el-col>
                 <el-col :xs="24" :sm="24" :lg="18">
                <el-input
                  placeholder="请输入摘要"
                  v-model="saveform.abstract"
                  clearable
                >
                </el-input
              ></el-col>
            </el-row>
          </div>

          <Markdown
            v-model="saveform.content"
            style="height: calc(100vh - 90px)"
            @saveFn="saveFn"
          ></Markdown>
        </client-only>
      </el-col>
    </el-row>

    <addartcle-menu
      :type="typeartclemenu"
      v-model="menuform"
      :dialogtitle="dialogtitle"
      :isshow.sync="FormVisible"
      v-if="FormVisible"
      @successupdate="getartcle"
    >
    </addartcle-menu>
  </div>
</template>

<script>
import * as $article from "@/api/article";
import * as $$upload from "@/api/upload";
import Markdown from "@/components/sys/markdown";
import Menuleft from "@/components/artcle/menuleft";
import Artcleleft from "@/components/artcle/artcleleft";
import AddartcleMenu from "@/components/artcle/addartclemenu";

export default {
  middleware: "auth",
  layout: "writeartcle",
  data() {
    return {
      dialogtitle: "",
      typeartclemenu: 1,
      menuform: {},

      activename: "",
      artactcle: null,
      firstmenulist: [],
      artcletaglist: [],
      artclelist: [],
      FormVisible: false,
      saveform: {
        artTitle: "",
        content: "",
      },
    };
  },
  methods: {
    /* init */

    menuchange(id) {
      this.$axios($article
        .getarticlelist({ menuid: id })).then((res) => {
          this.artclelist = res.data;
          if (res.data.length) {
            this.artactcle = res.data[0].id;
          }
        })
        .catch((err) => err);
    },
    artclechange(artclerow) {
      this.saveform = {};
      this.saveform = Object.assign({}, artclerow);

  

      this.resetartcle();
    },
    addartclemenu() {
      this.typeartclemenu = 1;
      this.dialogtitle = "新增文集";
     this.FormVisible = true;
    },
    editmenu(row) {
   
      this.typeartclemenu = 2;
      this.dialogtitle = "修改文集";
      this.FormVisible = true;
      this.menuform = row;
    },
    delmenu(row) {
   
      this.$confirm("确认删除, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$axios($article
            .delarticleMenu(row.id)) .then((res) => {
              if (res.data && res.data.msg) {
                this.$message({
                  type: "success",
                  showClose: true,
                  message: res.data.msg,
                });
                this.getartcle();
              }
            })
            .catch((err) => err);
        })
        .catch(() => {});
    },

    getartcle() {
    this.$axios($article
        .getarticleMenuapi({ type: 1 })
        ) .then((res) => {
          this.firstmenulist = res.data;
          this.activename = res.data[0].id;
        })
        .catch((err) => err);
    },
    getartcletag() {
    this.$axios($article
        .getarticleMenuapi({ type: 2 }))  
        .then((res) => {
          this.artcletaglist = res.data;
        })
        .catch((err) => err);
    },
    addartcle() {
      let newdate = new Date().toLocaleDateString();
      if(this.activename){
          this.postarticle(
        Object.assign({ menuid: this.activename, artTitle: newdate })
      );
      }else{
          this.$notify({
              type: "warning",
              showClose: true,
              message: "请选择对应文集后新建文章",
            });
      }

    
    },
    resetartcle() {},

    saveFn() {
      this.putarticle(
        Object.assign({ menuid: this.activename }, this.saveform)
      );
    },
    putarticle(params) {
      this.$axios($article
        .putarticle(params))
        .then((res) => {
          if (res) {
            this.$message({
              type: "success",
              showClose: true,
              message: res.data.msg,
            });
            this.menuchange(this.activename);
          }
        })
        .catch((err) => err);
    },
    postarticle(params) {
      this.$axios( $article.postarticle(params)).then((res) => {
          if (res) {
            this.$message({
              type: "success",
              showClose: true,
              message: res.data.msg,
            });
            this.menuchange(this.activename);
          }
        })
        .catch((err) => err);
    },
  },
  mounted() {
    this.getartcle();
    this.getartcletag();
  },
  beforeDestroy() {
    // sessionStorage.setItem("activemenuname",null);
  },
  watch: {},

  components: {
    Markdown,
    Menuleft,
    Artcleleft,
    AddartcleMenu,
  },
};
</script>
<style scoped lang="scss">
.menu {
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: $theme-color;
  color: #8f8f8f;
  a {
    color: #f2f2f2;
  }
  li {
    line-height: 40px;
    list-style: none;
    font-size: 15px;
    color: #f2f2f2;
    background-color: $theme-color;
    padding: 0 15px;
    cursor: pointer;
  }
  .active {
    color: goldenrod;
  }
  .secondmenu {
    background-color: #fff;
    li {
      color: $theme-color;
      background-color: #f2f2f2;
    }
  }
}
.addartclname {
  cursor: pointer;
  text-align: center;
  padding: 10px 0;
}
.backbtn {
  cursor: pointer;
  text-align: center;
  padding: 10px 0;
  border-radius: 30px;
  border: 1px solid;
  width: 80%;
  margin: 10px auto 0;
}
</style>

