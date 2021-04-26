<template>
  <div>
    <!-- 新增 编辑 页面 -->
    <el-dialog
      :title="dialogtitle"
      @close="bianjioff('addForm')"
      :close-on-click-modal="false"
      :visible.sync="dialogvisible"
    >
      <el-form
        :model="addForm"
        label-width="100px"
        :rules="addFormRules"
        style="overflow: hidden"
        ref="addForm"
      >
        <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :lg="12">
            <el-form-item label="名称">
              <el-input
                v-model="addForm.menuname"
                autocomplete="off"
              ></el-input>
            </el-form-item>
          </el-col>

          <el-col :xs="24" :sm="24" :lg="12">
            <el-form-item label="排序">
              <el-input v-model.number="addForm.sort" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogvisible = false">取消</el-button>
        <el-button type="primary" @click="addSubmit" :loading="addLoading"
          >提交</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import * as $article from "@/api/article";

export default {
  data() {
    return {
      addLoading: false,
      dialogvisible: false,

      addForm: {},

      addFormRules: {
        //新增验证

        idcard: [
          { required: true, message: "请输入证件号", trigger: "blur" },
          {
            // pattern: $myregexp.idcard,
            message: "证件号不正确",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    addSubmit: function () {
      this.$refs.addForm.validate((valid) => {
        if (valid) {
          this.addLoading = true;
          if (this.type === 1) {
            this.axio_sorganization();
          } else {
            this.axio_EditSubmit();
          }
        }
      });
    },
    axio_sorganization() {
      this.$axios( $article
        .addarticleMenu(
          Object.assign(
            {
              sort: 0,
            },
            this.addForm
          )
        )) .then((res) => {
          if (res) {
            this.FormVisible = false;

            this.$message({
              type: "success",
              showClose: true,
              message: res.data.msg,
            });
        
            this.$emit("successupdate");
             this.dialogvisible=false
          }
        })
        .catch((err) => err).finally(()=>{
              this.addLoading = false;
        })
    },

    axio_EditSubmit() {
   
      this.$axios(   
         $article.putarticleMenu(
          Object.assign(
            {
              sort: 0,
            },
            this.addForm
          )
        )) .then((res) => {
          if (res) {
            this.FormVisible = false;
            this.$message({
              type: "success",
              showClose: true,
              message: res.data.msg,
            });
            this.addLoading = false;
            this.$emit("successupdate");
             this.dialogvisible=false
          }
        })
        .catch((err) => err).finally(()=>{
              this.addLoading = false;
        })
   
    },
    bianjioff(Form) {
      //关闭dialog 设置初始 addForm
      // this.addForm = {};
      this.$refs[Form].resetFields();
      this.$emit("update:isshow", false);
    },
  },
  mounted() {

    if (this.type === 1) {
      this.addForm = {};
    } else {
      this.addForm = this.value;
    }
    this.dialogvisible = this.isshow;
  },
  computed: {},
  props: {
    value: { type: Object },
    /**
     * type:1新增，2修改
     */
    type: { type: Number, default: 1, required: true },
    dialogtitle: { type: String, default: "", required: false },

    isshow: { type: Boolean, default: false, required: true },
  },
};
</script>

<style scoped lang="scss"></style>
