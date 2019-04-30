<template>
	<view>
		<ul style='padding: 100upx;' class='list'>
			<li v-if='!history[0]' style='text-align: center; border: none; color: #B2B2B2;'>暂无历史记录...</li>
			<li v-for='(item, i) in history' :key='i' @click='go(item)'>
				<img :src="item.item.songs[0].al.picUrl+ '?param=80y80' " alt="">
				{{item.item.songs[0].name}} -----  {{item.item.songs[0].ar[0].name}}
			</li>
		</ul>
	</view>
</template>

<script>
	import Vuex from 'vuex';
	
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			...Vuex.mapMutations(['play','playItem','getLyric']),
			go(item){
				this.play(item.src)
				this.playItem(item.item)
				/* this.getLyric(item.ric) */
			}
		},
		computed:{
			...Vuex.mapState(['history'])
		}
	}
</script>

<style>
	.list li{
		border-bottom: #888888 1upx solid;
		margin-bottom: 28upx;
		list-style: none;
		color: #3C3E49;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.list li img{
		margin-right: 20upx;
		vertical-align: middle;
	}
</style>
