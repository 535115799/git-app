
								实战总结
	1.顶部导航按钮可用 text 或者 "fontSrc":"./static/uni.ttf"  设置
	
	2.uni-app image 自带组件
	
	3.提示第一个list标签组件  提示第三个list class样式组件 要引入 app.vue全局css
	
	4. 抽屉 @import uniDcawer from "@/components/uni-drawer/uni-drawer.vue"  <uni-drawer></uni-drawer> 

	5.import uniTag from "@/components/uni-tag/uni-tag.vue"  tag标记 <uni-tag></uni-tag>
	
	6.vuex 里的 actions 函数里的第一个参数 里的 commit 用来执行mutations函数 dispatch 用来执行actions 里其他函数
	
	7. icon 图标先下载 import cmdIcon from "@/components/cmd-icon/cmd-icon.vue"  <cmd-icon :type="" size="30" color=""></cmd-icon>

	8.<img :src="detail.url + '?param=65y65' ">   '?param=65y65' 改变图片大小
	