<template>
  <client-only>
    <b-container fluid="xl" class="">
      <b-row>
        <b-col md="8">
          <template v-for="el in articlelist">
            <ContentText :content="el"></ContentText>
          </template>
        </b-col>
        <b-col md="3"  offset-md="1">
          <div class="tag-box">
              <ul v-if="alltaglist && alltaglist.length>0">
            <li v-for="el in alltaglist" :style="`background: ${colorlists[Math.floor(Math.random() * colorlists.length)]}`" >
              {{el.menuname}}
            </li>
          </ul>
          </div>
          </b-col>
      </b-row>
    </b-container>
  </client-only>
  <!-- {{articlelist}} -->
</template>

<script>
import { getarticlepage, getarticleMenuapi } from "~/api/article";

import ContentText from "~/components/index/contenttext";
export default {
  async asyncData({ $axios }) {
    const articlelist = await getarticlepage($axios, {
      pageSize: 10,
      pageNum: 1,
    }).then((data) => {
      if (data && data.list) return data.list;
    });
    return { articlelist };
  },
  data() {
    return {
      // articlelist: []
      alltaglist:[],
       colorlists: [
        '#264653',
        '#2a9d8f',
        '#e9c46a',
        '#f4a261',
        '#e76f51'
      ]
      // randomcolor:()=>{
      //   return {
      //     "background-color":"red"
      //   }
      // }
    };
  },
  methods: {
   
      
    getalltag() {
      
      this.$axios(getarticleMenuapi({ type: 2 }))
        .then((res) => {
          this.alltaglist=res.data
        })
        .catch((err) => err);
    },
  },
  computed: {
     randomcolor() {
        // let R = Math.floor(Math.random() * 255);
        // let G = Math.floor(Math.random() * 255);
        // let B = Math.floor(Math.random() * 255);
       
      
      },
  },
  mounted() {
    this.getalltag()
    console.log(this.articlelist);
  },
  head() {
    return {
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content:
            "个人博客，学习，资源收藏，技术总结，javascript，vue，node，nest.js,element-ui",
        },
        {
          hid: "description",
          name: "description",
          content: "王的博客，技术总结，学习总结",
        },
      ],
    };
  },
  components: {
    ContentText,
  },
};
</script>
<style lang="scss" scoped>
.container {
  color: $theme-color;
}

.tag-box ul{
 &>li{
  padding: 0 10px;
    line-height: 30px;
    background-color: gainsboro;
    display: inline-block;
    margin-right: 15px;
    margin-bottom: 12px;
    border-radius:$min-radius;
color: #fff;
 }
}
</style>
