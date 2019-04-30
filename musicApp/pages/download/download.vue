<template>
	<view style="text-align: center;">
		<ul>
			<li v-for='(item,i) in list' :key='i'>
				{{item.filePath}}
			</li>
		</ul>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				list:[]
			}
		},
		onReady() {
			uni.getSavedFileList({
				success: (res) => {
					this.list = res.fileList
				}
			})
		}
	}
</script>

<style>
</style>
