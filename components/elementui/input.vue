<template>
  <div>
      <el-input
        placeholder="请输入内容"
        :value="value"
        v-on:input="value = $event.target.value"
        v-bind="attrs"
        clearable>
        </el-input>
  </div>
</template>

<script>
export default {
    name:"input",
    props:{
        value:{type:String,required:true,default:""}
    }

}
</script>

<style>

</style>