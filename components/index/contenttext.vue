<template>
    <div class="container">
        <nuxt-link :to="'artcle/'+content.id">
          <div class="title"  v-if="content.artTitle">
           {{content.artTitle}}
          </div>
          <div class="textcontent" v-if="content.abstract">
              {{content.abstract}}
          </div>
          </nuxt-link>
          <div class="box-footer">
            <span><i class="iconfont icon-biaoqian"></i>{{content.tag}}</span>
            <span v-if="content.discuss"><i class="iconfont icon-pinglun"></i>{{content.discuss}}</span>
            <!-- <span> <i class="iconfont icon-buoumaotubiao17"></i>{{content.like}}</span> -->
          </div>
        </div>
</template>

<script>
export default {
    props:{
        content:{
            type:Object,
            default:()=>{
                return{}
            }
        }
    }

}
</script>

<style lang="scss" scoped>
.container{
     a{
      color: #333;
      
  }
  padding: 15px 0;
    border-bottom: 1px solid $bordercolor;
}
.title{
      margin: -7px 0 4px;
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
}
.textcontent{
  margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;

}
.box-footer{
  span{
    display: inline-block;
    margin-right: 10px;
  }
  i{
    font-size: 12px;
    margin-right: 4px;
  }

    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
}

</style>