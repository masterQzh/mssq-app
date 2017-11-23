<template>
  <!--主体内容区域-->
  <div class="mainSection">
    <!--左边栏-->
    <div class="asideBar">
      <!--首页-->
      <div class="asideCommonCss homepage">
        <img src="../assets/images/icon_home.png" alt="">
        <span>首页</span>
      </div>
      <!--服务管理-->
      <div class="serviceManageContent">
        <div class="asideCommonCss serviceManage">
          <img src="../assets/images/icon_service.png" alt="">
          <span>服务管理</span>
        </div>
        <el-row class="block-col-2">
          <el-col :span="12">
            <!--<span class="demonstration">click 激活</span>-->
            <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        发布管理<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>新增服务</el-dropdown-item>
                <el-dropdown-item>草稿箱</el-dropdown-item>
                <el-dropdown-item>服务审核</el-dropdown-item>
                <el-dropdown-item>服务发布</el-dropdown-item>
                <el-dropdown-item>跟踪管理</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
        <el-row class="block-col-2">
          <el-col :span="12">
            <!--<span class="demonstration">click 激活</span>-->
            <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        报名管理<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>居民报名审核</el-dropdown-item>
                <el-dropdown-item>报名审核一栏表</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
        <div>
          <router-link to="/serviceConclusion">服务总结</router-link>
        </div>
      </div>
      <!--统计分析-->
      <div class="totalAnalyzeContent">
        <div class="asideCommonCss totalAnalyze">
          <img src="../assets/images/icon_tongji.png" alt="">
          <span>统计分析</span>
        </div>
        <div>
          <router-link to="/serviceTypeAnalyze">服务类型占比分析</router-link>
          <br>
          <router-link to="/serviceHotAnalyze">服务热度分析</router-link>
        </div>
      </div>
      <!--信息发布-->
      <div class="infoPublishContent">
        <div class="asideCommonCss infoPublish">
          <img src="../assets/images/icon_publish.png" alt="">
          <span>信息发布</span>
        </div>
        <div>
          <router-link to="/serviceInfoSend">社区信息发布</router-link>
          <br>
          <router-link to="/infoSend">服务信息发布</router-link>
        </div>
      </div>
      <!--社区管理-->
      <div class="communityManageContent">
        <div class="asideCommonCss communityManage">
          <img src="../assets/images/icon_citizen.png" alt="">
          <span>社区管理</span>
        </div>
        <div class="communityManageDropdown">
          <router-link to="/registerApprove">居民注册认证</router-link>
          <br>
          <router-link to="/addWorker">新增工作人员</router-link>
          <br>
          <router-link to="/workerAdmin">工作人员账户管理</router-link>
          <br>
          <router-link to="/addService">新增服务机构</router-link>
          <br>
          <router-link to="/serviceOrganizationManage">服务机构管理</router-link>
        </div>
      </div>



    </div>
    <!--右边显示区-->
    <div class="routerView">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mainSection',
    data() {
      return {
        msg: 'welcome to my service'
      }
    }
  }
</script>


<style scoped>
  .mainSection {
    width: 1200px;
    height: 1200px;
    background-color: navy;
    margin: 14px auto;
  }

  .mainSection .asideBar {
    width: 200px;
    height: 100%;
    background-color: greenyellow;

  }
  .mainSection .asideBar .asideCommonCss{
    width:100%;
    height: 36px;
    line-height: 36px;
    background-color: #E1E1E1;
  }
  .mainSection .asideBar .homepage{
    background-color: darkred;
  }
  .mainSection .asideBar .asideCommonCss img{
    width: 18px;
    height: 18px;
    vertical-align: middle;
    margin: 0 10px 3px 10px;
  }
  .mainSection .asideBar .asideCommonCss span{

  }
</style>
