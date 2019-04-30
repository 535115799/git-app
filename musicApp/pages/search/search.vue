<template>
	<view>
		<view class="musicTitle">
			热门搜索
		</view>
		<view v-for="(item, index) in hotList" :key="index" class='unitag' @click="hotsReust(item.first)">
			<uni-tag :text="item.first" circle="true">
			</uni-tag>
		</view>
		<view class="musicTitle">
			搜索历史
		</view>
		<view>
			<view v-for="(item, index) in tagHistory" :key="index" class='unitag' @click="hotsReust(item)">
				<uni-tag :text="item" circle="true" >
				</uni-tag>
			</view>
			<view v-if="tagHistory.length" class="clearHistory">
				<text @click="clear">
					清除历史x 
				</text>
			</view>
		</view>
		<view class="musicTitle">
			搜索结果
		</view>
		<view>
			<view v-for="(item, index) in resultList" :key='index' @click="getSrc(item)">
				<view class="serachResult" >
					<view class="listResult max">{{item.name}}</view>
					<view class="listResult min">{{item.artists[0].name}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniTag from "@/components/uni-tag/uni-tag.vue"
	import Vuex from "vuex"
	export default{
		components:{
			uniTag
		},
		data(){
			return{
				hotList:[],
				tagHistory:[],
				resultList:[]
			}
		},
		mounted() {
			uni.request({
				url:"https://api.wulv5.com/music/search/hot",
				success: (res) => {
					this.hotList = res.data.result.hots;					
				}
			})
		},
		methods:{
			...Vuex.mapActions(['getSrc']),
			hotsReust(str){
				if(this.tagHistory.indexOf(str) === -1){
					this.tagHistory.push(str);
				}
				uni.request({
					url:`https://api.wulv5.com/music/search?keywords= ${str}`,
					success: (res) => {
						this.resultList = res.data.result.songs;
					}
				})
			},
			clear(){
				this.tagHistory = [];
			},
		},
		onNavigationBarButtonTap() {
			uni.redirectTo({
				url:"../index/index",
				success: (e) => {}
			})
		},
		onNavigationBarSearchInputConfirmed(e) {
			let str = e.text;
			this.hotsReust(str)
		}
	}
</script>

<style>
	.clearHistory{
		text-indent: 1rem;
		font-size: 25upx;
		color: #929292;
		border-bottom: 0.5px #929292 solid;
		cursor: pointer;
	}
	.serachResult{
		padding-left: 1rem;
		padding-right: 1rem;
	}
	.unitag{
		display: inline-block;
		margin: 10upx;
	}
	.max{
		font-size:32upx;
		color: #3C3E49;
	}
	.min{
		color: #888888;
		font-size: 25upx;
		border-bottom: 1px solid #C0C0C0;
	}
</style>
