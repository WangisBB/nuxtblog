<template>
  <div class="login-box">
    <div class="form-signin">
      <h1 class="h3 mb-3 font-weight-normal">请 登 录</h1>
      <el-form
        :model="formInline"
        :rules="ruleInline"
        ref="formInline"
        label-width="100px"
        class="demo-formInline"
      >
        <el-form-item label="账号" prop="username">
          <el-input v-model="formInline.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formInline.password"   @keyup.enter.native="loginfn('formInline')"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="loginfn('formInline')"
            >立即创建</el-button
          >
         
        </el-form-item>
      </el-form>
      <!-- <Form ref="formInline"
            :model="formInline"
            :rules="ruleInline"
            inline>
        <Row :gutter="10">
          <Col :xs="24"
               :sm="24"
               :lg="24">
          <FormItem prop="username">
            <Input type="text"
                   v-model="formInline.username"
                   placeholder="Username">
            <Icon type="ios-person-outline"
                  slot="prepend"></Icon>
            </Input>
          </FormItem>
          </Col>
          <Col :xs="24"
               :sm="24"
               :lg="24">
          <FormItem prop="password">
            <Input type="password"
                   @keyup.enter.native="loginfn('formInline')"
                   v-model="formInline.password"
                   placeholder="Password">
            <Icon type="ios-lock-outline"
                  slot="prepend"></Icon>
            </Input>
          </FormItem>
          </Col>
          <Col :xs="24"
               :sm="24"
               :lg="24">
          <FormItem>
            <Button type="primary"
                    @click="loginfn('formInline')">登录</Button>
          </FormItem>
          </Col>
        </Row>

      </Form> -->
    </div>
  </div>
</template>

<script>
export default {
  layout: "login",
  data() {
    return {
      radio: "",
      formInline: {
        username: "",
        password: "",
      },
       rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          // region: [
          //   { required: true, message: '请选择活动区域', trigger: 'change' }
          // ],
          // date1: [
          //   { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          // ],
          // date2: [
          //   { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          // ],
          // type: [
          //   { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          // ],
        },
      ruleInline: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
      
        ],
      },
    };
  },
  mounted() {},
  methods: {
     loginfn(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(1)
             this.$store
            .dispatch("user/login",{axios:this.$axios,params: this.formInline})
            .then((res) => {
              // this.$message.success("success!");
              const query = this.$route.query;
              if (query && query.redirect) {
                this.$router.push(query.redirect);
              } else {
                this.$router.push("/");
              }
            })
            .catch((err) => {
              // this.$message.error(err);
            });
          } 
        });
      },

    
  },
};
</script>

<style scoped lang="scss">
.login-box {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
  height: 100vh;
  > div {
    // width: 50vw;
    text-align: center;
    width: 100%;
    max-width: 330px;
    padding: 15px;
    // margin: 0 auto;
  }
}
</style>
