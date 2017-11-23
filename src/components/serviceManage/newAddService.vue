<template>
  <div class="newAddService">
    <div class="newAddTitle title">
      <span >新增服务</span>
    </div>
    <!--基本信息-->
    <div class="baseInfo" style="clear: both;height:326px;border-bottom: solid 1px #999999;">
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
    <div class="timeInfo" style="clear: both;border-bottom: solid 1px #999999">
      <div class="timeInfo  title">
        <span>时间信息</span>
      </div>
      <div class="timeInfoFrom" style="width: 70%;padding-left: 25px;" >
        <el-form ref="form" :model="sizeForm" label-width="102px" size="small">
          <div style="width: 47%;float: left;" >
            <el-form-item label="报名截止日期">
              <el-col :span="14">
                <el-date-picker type="date" placeholder="2017/11/21" v-model="sizeForm.date1" style="width: 100%;"></el-date-picker>
              </el-col>
            </el-form-item>
          </div>
         <div style="width: 47%;float: left;margin-left: -86px;">
           <el-form-item label="服务截至日期">
             <el-col :span="14">
               <el-date-picker type="date" placeholder="选择日期" v-model="sizeForm.date1" style="width: 100%;"></el-date-picker>
             </el-col>
           </el-form-item>
         </div>

        </el-form>
      </div>
      <div class="serviceTimeFrom" >
        <div class="block">
          <!--<span class="demonstration">默认</span>-->
          <el-form ref="form" :model="sizeForm" label-width="102px" size="small">
 <div style="display: inline-block">
   <el-form-item label="服务时间">
     <el-date-picker
       size="small"
       v-model="value3"
       type="datetimerange"
       range-separator="至"
       start-placeholder="开始时间"
       end-placeholder="结束时间">
     </el-date-picker>
   </el-form-item>
 </div>
          </el-form>
        </div>
      </div>
    </div>
    <!--人员信息-->
    <div class="personInfo" style="clear: both;border-bottom:solid 1px #999999 ">
      <div class="timeInfo  title">
        <span>人员信息</span>
      </div>
      <div class="personInfoFrom" style="width: 58%;padding-left: 12px" >
        <el-form ref="form" :model="sizeForm"  size="small">
          <el-form-item label="需求志愿者数量:" label-width="130px">
            <el-input v-model="sizeForm.name" placeholder="输入需求志愿者数量"></el-input>
          </el-form-item>
          <div >
            <el-form-item label="服务人数:" label-width="90px" >
              <el-input  v-model="sizeForm.number" placeholder="20" style="width: 16%;"></el-input>
              <el-checkbox v-model="checked">不限&nbsp;&nbsp;&nbsp;</el-checkbox>
              <span style="color:#5a5e66 ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;年龄段:&nbsp;&nbsp;</span>
              <el-input  v-model="sizeForm.number" placeholder="20" style="width: 16%;"></el-input>
              <span style="color:#5a5e66 ">&nbsp;&nbsp;至&nbsp;&nbsp;</span>
              <el-input  v-model="sizeForm.number" placeholder="20" style="width: 16%;"></el-input>
              &nbsp;<el-checkbox v-model="sexChecked" fill="red">不限</el-checkbox>
            </el-form-item>
          </div>


        </el-form>
      </div>
      <div class="serviceTimeFrom" >

      </div>
    </div>
    <!--添加页-->
    <div class="addServicePage" style="width: 100%;text-align: center;">
      <ul style="list-style: none;
margin: 20px 50px;border: dashed 1px #999999;height: 180px;text-align: center;padding: 0;">
        <li style="border-right: dashed 1px #999999; float: left;height: 100%;width: 33%;">
          <a style="font-size: 80px;font-weight:100;">+</a><br>
          <span>服务详情页</span>
        </li>
        <li style="border-right: dashed 1px #999999;float: left;height: 100%;width: 33%">
          <a style="font-size: 80px;font-weight:100;">+</a><br>
          <span>服务详情页</span>
        </li>
        <li>
          <a style="font-size: 80px;font-weight:100;float: left;height: 100%;width: 33%">+</a><br>
          <span>服务详情页</span>
        </li>
      </ul>
      <div class="btn-saveNext">
        <el-button type="info" style="width: 100px;height: 38px;margin-top: 20px;">&nbsp;保存</el-button>
        <el-button type="primary" style="width: 100px;height: 38px;">下一步</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'newAddService',
    data() {
      return {
        checked: false,
        sexChecked: false,
        sizeForm: {
          name: '',
          number: '20',
          region: '',
          xingzhi:'',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        value3: [new Date(2017, 10, 10, 10, 10), new Date(2018, 10, 11, 10, 10)],
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
