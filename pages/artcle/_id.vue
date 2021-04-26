<template>
  <div>
    <client-only>
<b-container >
  <el-row :gutter="20">
      <el-col :xs="24" :sm="16" :lg="18">
        <div class="artcle">
          <header>
             <h3 v-if="article.artTitle">{{article.artTitle}}</h3>
          </header>
          <section v-if="article.content">
            <Markdownshow v-model="article.content"></Markdownshow>
          </section>
                   
        </div>
      </el-col>
      <el-col :xs="24" :sm="{ span: 5, offset: 1 }" :lg="{ span: 5, offset: 1 }"
        ></el-col
      >
    </el-row>
</b-container>
  
    </client-only>
  </div>
</template>

<script>
import { getarticle } from "~/api/article";
import Markdownshow from "@/components/sys/markdownshow";
export default {
  validate({$axios, params }) {
    // 必须是number类型
    return /^\d+$/.test(params.id);
  },
  async asyncData({$axios,params}) {

    const article = await getarticle($axios,params.id).catch(err=>err)
    // console.log(article);
    // called every time before loading the component
    return { article: article };
  },
  mounted () {
 
  },
  components: {
    Markdownshow
  }
};
</script>

<style>
</style>