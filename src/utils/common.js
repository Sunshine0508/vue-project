export default {
  //公共参数
  socket:'',
  testData:'测试数据',
  //清除表单
  clearFiles(formName){
    this.$refs[formName].resetFields();
  },
  //清楚校验
  clearValidate(formName){
    this.$refs[formName].clearValidate();
  }
}


