<template>
  <div class="mine">
  	<h1>电子工单</h1>
    <group>
      <x-input title="质保工单" v-model="ticket" placeholder="xxxxxxxxCW_基地_xx"></x-input>
      <x-input title="列车编号" v-model="train" type="number"></x-input>
      <x-input title="车厢编号" v-model="compartment" type="number"></x-input>
      <x-input title="故障类别" v-model="category" readonly=true></x-input>
      <checker v-model="category" default-item-class="checker-item" selected-item-class="checker-item-selected">
        <checker-item value="辅逆">辅逆</checker-item>
        <checker-item value="牵引">牵引</checker-item>
        <checker-item value="列控">列控</checker-item>
      </checker>
      <x-input title="故障类别" v-model="type" readonly=true></x-input>
      <checker v-model="type" default-item-class="checker-item" selected-item-class="checker-item-selected">
        <checker-item value="救援">救援</checker-item>
        <checker-item value="清客">清客</checker-item>
        <checker-item value="掉线">掉线</checker-item>
        <checker-item value="换表">换表</checker-item>
        <checker-item value="无影响">无影响</checker-item>
        <checker-item value="均修">均修</checker-item>
      </checker>
      <x-textarea title="故障现象" v-model="description" :max="2000" autosize=true></x-textarea>
    </group>
    <group>
      <x-input title="故障位置" v-model="fault_compartment" type="number"></x-input>
      <x-textarea title="处理经过" v-model="action" :max="2000" autosize=true></x-textarea>
      <x-input title="分厂报单" v-model="user_ticket" type="number"></x-input>
      <x-input title="当班人员" v-model="member"></x-input>
    </group>
    <br><br>

      <popup-radio title="故障类别" :options="category_list1" v-model="category1"></popup-radio>
      <popup-picker title="故障类别" :data="category_list2" :value.sync="category2" inline-desc="提示性文字"></popup-picker>

  </div>
</template>

<script>
import { Group, Cell, XInput, XTextarea, Checker, CheckerItem, Divider, PopupPicker, PopupRadio } from 'vux'

export default {
  components: {
    Group,
    Cell,
    XInput,
    XTextarea,
    Checker,
    CheckerItem,
    Divider,
    PopupPicker,
    PopupRadio
  },
  data () {
    return {
		  ticket: '',
      ticket_checked: '',
      train: '',
      compartment: '',
      category: '',
      type: '',
      fault_compartment: '',
      fault_compartment_checked: false,
      description: '',
      action: '',
      user_ticket: '',
      member: '',
      demo1: '',
      category1: '',
      category_list1: ['辅逆', '牵引', '列控'],
      category2: [],
      category_list2: [["辅逆", "牵引", "列控"]],
		}
	}
}
</script>

<style scoped>
.box {
  padding: 0 15px;
}
.checker-item {
  border: 1px solid #ececec;
  padding: 5px 15px;
}
.checker-item-selected {
  border: 1px solid green;
}
</style>