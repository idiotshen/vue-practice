<template>
  <div class="new-vendor-wrapper">
    <div class="new-vendor-header">
      <div class="new-vendor-title">
        <h3>新建供应商</h3>
      </div>
    </div>
    <div class="new-vendor-panel-wrapper">
      <el-tabs tab-position="left" style="height: 500px;">
        <el-tab-pane label="供应商基础信息">
          <basic-info-panel :vendor="vendor"></basic-info-panel>
        </el-tab-pane>
        <el-tab-pane label="物料信息">
          <material-info-panel :vendor="vendor"></material-info-panel>
        </el-tab-pane>
        <el-tab-pane label="联系人信息">
          <contact-info-panel :vendor="vendor"></contact-info-panel>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="new-vendor-action-wrapper">
      <el-button style="float: right;">保存</el-button>
      <el-button style="float: right;" type="primary">新建</el-button>
    </div>
  </div>
</template>

<script>
import BasicInfoPanel from './BasicInfoPanel';
import MaterialInfoPanel from './MaterialInfoPanel';
import ContactInfoPanel from './ContactInfoPanel';

export default {
  name: 'NewVendor',

  components: {
    'basic-info-panel': BasicInfoPanel,
    'material-info-panel': MaterialInfoPanel,
    'contact-info-panel': ContactInfoPanel,
  },

  data() {
    return {
      vendor: {
        domestic: '',
      },
    };
  },
};
</script>

<style scoped>
.new-vendor-wrapper {
  height: 100%;
}

.new-vendor-header {
  height: 10%;
}

.el-tab-pane {
  padding: 0px 250px 0px 15px;
}

.new-vendor-action-wrapper {
  padding-right: 250px;
}

.new-vendor-action-wrapper .el-button{
  float: right;
  margin-left: 20px;
}
</style>
