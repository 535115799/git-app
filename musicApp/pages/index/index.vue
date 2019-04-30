<template>
	<view class="content">
		<!-- banner -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="2500" :duration="1000" circular="true" indicator-active-color="#E64344">
			<swiper-item v-for="(item,index) in banner" :key='index'>
				<view class="swiper-item" style="text-align: center;">
					<image :src="item.imageUrl" mode="widthFix"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="musicTitle">
			推荐歌单
		</view>
		<!-- 推荐歌单 -->
		<view class="uni-product-list">	
			<view class="uni-product" v-for="(item,index) in list" :key="index">
				<view class="image-view">
					<image class="uni-product-image" :src="item.picUrl"></image>
				</view>
				<view class="uni-product-title">{{item.name}}</view>
			</view>
		</view>
		<view>
			<uni-drawer :visible='visible' mode='left' @close='clserDrawer'>
				<uni-list>
					<uni-list-item @click='down' title="历史记录" note=""></uni-list-item>
					<uni-list-item @click='download'title="下载管理" note=""></uni-list-item>
				</uni-list>
			</uni-drawer>
		</view>
		<player></player>
	</view>
</template>

<script>
	import uniDrawer from '@/components/uni-drawer/uni-drawer.vue';
	import uniList from '@/components/uni-list/uni-list.vue';
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue';
	import player from '../player/player.vue';
	export default {
		components:{
			player,
			uniDrawer,
			uniList,
			uniListItem
		},
		data() {
			return {
				banner:[],
				list:[],
				visible:false
			}
		},
		onLoad() {
			uni.request({
				url:"https://api.wulv5.com/music/banner",
				success: (res) => {
					this.banner = res.data.banners
				}
			});
			
			uni.request({
				url:"https://api.wulv5.com/music/personalized",
				success: (res) => {
					this.list = res.data.result;
				}
			})
		},
		methods: {
			1(){
				uni.redirectTo({
					url:"../search/search",
				})
			},
			0(){
				this.visible = true;
			},
			clserDrawer(){
				this.visible = false;
			},
			down(){
				uni.navigateTo({
					url:"../history/history"
				})
			},
			download(){
				uni.navigateTo({
					url:"../download/download"
				})
			}
		},
		onNavigationBarButtonTap(e) {
			this[e.index]();
		},
		
	}
</script>

<style>
	uni-swiper-item .swiper-item uni-image{
		width: 100%;
		height: 100%;
	}
	uni-swiper-item{
		border-radius: 10upx;
	}
</style>
