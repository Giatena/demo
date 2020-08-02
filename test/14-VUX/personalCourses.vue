<template>
	<div class="personalCourses">
		<br>
		<x-input title="导入" v-model="userStr"></x-input>
		<x-button mini plain @click.native="clickButton($event)">预览</x-button>
		<br><br>

    	<divider>mini</divider>
		<x-button mini>submit</x-button>
		<x-button mini type="primary">primary</x-button>
		<x-button mini type="warn">Delete</x-button>
		<br>
		<x-button mini plain>submit</x-button>
		<x-button mini plain type="primary">primary</x-button>
		<x-button mini plain type="warn">primary</x-button>
	</div>
</template>

<script>
import { Divider, XButton, XInput, FormPreview } from 'vux'

export default {
	components: {
		Divider,
		XButton,
		XInput,
		FormPreview
	},
	data () {
		return {
			userStr: '',
			str2: ''
		}
	},
	watch: {
		userStr() {
			// 实时监视变量userStr的变化，每输入一个字符，调用一次
			console.log("watch()");
		}
	},
	methods: {
		clickButton: function(event) {
			var str = {"GUID":"20200231230315","ticket":"20200231CW_ML_01","train":"999","compartment":"999999","category":"1","type":"5","description":"牵引轻级","action":"xxxxxxxx，工况正常。","replacement":"1","component":["PIM1","PIM2","IM"],"source":["电科","甲供","申南"],"old":["01","02","03"],"new":["1N","2N","3N"]}
			console.log("str(预设)：" + str);
			str = this.userStr
			console.log("userStr：" + this.userStr);
			if(typeof str == "object") {
				str = JSON.stringify(str);
			};
			navigator.clipboard.writeText(str);
			console.log("已导出到剪贴板：" + str);
		},
	},
}
</script>

<style>
</style>