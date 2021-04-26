<template>
  <mavon-editor :toolbars="toolbars"
                :subfield="false"
                :scrollStyle="true"
              :value="value" 
                v-bind="$attrs"
                @change="changeval"
                ref="md"
                @imgAdd="$imgAdd"
                @imgDel="$imgDel"
                @save="saveFn" />
</template>

<script>
import * as $upload from "@/api/upload";
export default {
  data () {
    return {
      artcleVal: "",
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        // superscript: true, // 上角标
        // subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        // subfield: true, // 单双栏模式
        preview: true, // 预览
      },
    }
  },
  methods: {
    $imgAdd (pos, $file) {
      var formdata = new FormData();
      formdata.append("file", $file);
      this.$axios($upload
        .uploadeditor(formdata)).then((res) => {
          this.$refs.md.$img2Url(pos, this.$baseURL  + res.data.src);
        })
        .catch((err) => err);
    },
    $imgDel (pos) {
      this.$axios($upload
        .deleteupload({ originalname: pos[1].name }))
        .then((res) => { })
        .catch((err) => err);
    },
    changeval (val) {
      this.$emit("input", val)
    },
    saveFn () {
  
      this.$emit("saveFn")
    }

  },
  props: {
    value: { type: String, required: true, default: '' }
  }

}
</script>

<style>
.v-note-wrapper {
  height: 100%;
}
</style>