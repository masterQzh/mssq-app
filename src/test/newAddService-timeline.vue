<template>
  <div class="newAddService">
    <div class="newAddTitle title">
      <span >新增服务</span>
    </div>
    <!--基本信息-->
    <div class="baseInfo" style="height:326px;border-bottom: solid 1px #999999;">
      <div class="baseTitle  title">
        <span>基本信息</span>
      </div>
      <div class="baseInfoForm" style="width: 50%; ">
        <el-form ref="form" :model="sizeForm" label-width="102px" size="small">
          <el-form-item label="服务名称">
            <el-input v-model="sizeForm.name" placeholder="请输入25字以内"></el-input>
          </el-form-item>
          <el-form-item label="服务时间">
            <el-input v-model="sizeForm.name"></el-input>
          </el-form-item>
          <el-form-item label="服务地址">
            <el-input v-model="sizeForm.name" placeholder="请输入25字以内"></el-input>
          </el-form-item>

          <el-form-item label="服务描述" >
          <el-input v-model="sizeForm.name" type="textarea" placeholder="请输入500字以内" ></el-input>
        </el-form-item>

          <!--<div style="width: 100%"></div>-->
          <div style="width: 50%;float: left">
            <el-form-item label="服务类型">
              <el-select v-model="sizeForm.region" placeholder="外来务工人员服务">
                <el-option label="服务1" value="服务人员10个"></el-option>
                <el-option label="服务2" value="服务人员20个"></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div style="width: 50%;float: left">
            <el-form-item label="服务性质">
              <el-select v-model="sizeForm.xingzhi" placeholder="免费服务">
                <el-option label="性质1" value="当天免费"></el-option>
                <el-option label="性质2" value="全年免费"></el-option>
              </el-select>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div>
    <!--时间信息-->
    <div class="timeInfo" style="clear: both">
      <div class="timeInfo  title">
        <span>时间信息</span>
      </div>
      <div class="timeInfoFrom" style="width: 70%;padding-left: 25px;" >
        <el-form ref="form" :model="sizeForm" label-width="102px" size="small">
          <div style="width: 50%;float: left;" >
            <el-form-item label="报名截止日期">
              <el-col :span="14">
                <el-date-picker type="date" placeholder="2017/11/21" v-model="sizeForm.date1" style="width: 100%;"></el-date-picker>
              </el-col>
            </el-form-item>
          </div>
         <div style="width: 50%;float: left;margin-left: -50px;">
           <el-form-item label="服务截至日期">
             <el-col :span="14">
               <el-date-picker type="date" placeholder="选择日期" v-model="sizeForm.date1" style="width: 100%;"></el-date-picker>
             </el-col>
           </el-form-item>
         </div>

        </el-form>
      </div>
      <div class="serviceTimeFrom" style="width: 70%;padding-left: 25px;" >
        <el-form ref="form" :model="sizeForm" label-width="102px" size="small">
          <div style="width: 50%;float: left;" >
            <el-form-item label="服务开始时间">
              <el-col :span="14">
                <el-date-picker type="fixed-time" placeholder="2017/11/21" v-model="sizeForm.date1" style="width: 100%;"></el-date-picker>
              </el-col>
            </el-form-item>
          </div>
         <div style="width: 50%;float: left;margin-left: -50px;">
           <el-form-item label="服务结束时间">
             <el-col :span="14">
               <el-date-picker type="fixed-time" placeholder="选择日期" v-model="sizeForm.date1" style="width: 100%;"></el-date-picker>
             </el-col>
           </el-form-item>
         </div>

        </el-form>
      </div>
    </div>
    <!--<div class="personInfo">-->
      <!--人员信息-->
    <!--</div>-->
  </div>
</template>

<script>
  export default {
    name: 'newAddService',
    data() {
      return {
        sizeForm: {
          name: '',
          region: '',
          xingzhi:'',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      };
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    },

  }
</script>

<style scoped>
  .newAddService{
    width: 100%;
    height: 100%;
    background-color: aquamarine;
  }
  .newAddService .title {
    line-height: 50px;
    width: 100%;
    height: 50px;
    background-color: white;
  }
  .newAddService .newAddTitle{
    border-bottom: solid 1px #999999;
    font-size: 18px;
    font-weight: 900;
  }

  .newAddService .title span{
    padding-left: 18px;
  }
</style>
