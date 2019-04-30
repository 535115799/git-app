<template>
	<view class="player" v-if="detail.songs" @click="musicPg">
		<view>
			<img :src="detail.songs[0].al.picUrl+ '?param=65y65' ">
		</view>
		<view class="name">
			<!-- 歌曲名称 -->
			<p>{{detail.songs[0].name}}</p>
			<!-- 歌手名字 -->
			<p class='singer'>{{detail.songs[0].ar[0].name}}</p>
		</view>
		<view class="icon" @click.stop="playd">
			<view class="nextPrev" @click.stop='prevIndex'>
				<cmd-icon type="prev" size="30" color="#21252b" ></cmd-icon>
			</view>
			<view class="nextPrev" @click.stop='nextIndex'>
				<cmd-icon type="next" size="30" color="#21252b" ></cmd-icon>
			</view>
			<view class="mdcg" @click.stop='modeChange' style="margin-right: 20upx;">
				<cmd-icon type="shuffle-play" size="25" color="#21252b" style='vertical-align: middle;'></cmd-icon>
				<view  style='line-height: 1; font-size: 25upx;'>
					模式:{{mode === 0 && '单曲' || mode === 1 && '顺序' || mode === 2 && '随机' || '默认'}}
				</view>
			</view>
			<view style="margin-right: 30upx;" @click.stop="download">
				<cmd-icon type="download" size="20" color="#21252b" style='vertical-align: middle;'></cmd-icon>
			</view>
			<cmd-icon :type="paused ?'pause' :'play' " size="30" color="#21252b"></cmd-icon>
		</view>
	</view>
</template>


<script>
	import Vuex from 'vuex';
	import cmdIcon from "@/components/cmd-icon/cmd-icon.vue"
	
	export default{
		components:{cmdIcon},
		computed:{
			...Vuex.mapState(['detail','paused','mode','audio','history','musicIndex','timer'])
		},
		methods:{
			...Vuex.mapMutations(['pause','playd','modeChange','addIndex','lastIndex','play','playItem','getLyric']),
			
			musicPg(){
				uni.navigateTo({
					url:"../musicPage/musicPage",
					success: () => {
						
					}
				})
			},
			download(){
				uni.downloadFile({
					url:this.audio.src,
					success: (res) => {
						uni.saveFile({
							tempFilePath:res.tempFilePath
						})
					}
				})
			},
			
			nextIndex(){
				this.addIndex()
				this.play(this.history[this.musicIndex].src)
				this.playItem(this.history[this.musicIndex].item)
				/* this.getLyric(self.history[self.musicIndex].ric) */
			},
			
			prevIndex(){
				this.lastIndex()
				this.play(this.history[this.musicIndex].src)
				this.playItem(this.history[this.musicIndex].item)
				/* this.getLyric(self.history[self.musicIndex].ric) */
			}
		}
	}
</script>

<style>
	.nextPrev uni-view{
		margin-right: 20upx;
		vertical-align: middle;
	}
	.player view.icon{
		padding: 50upx 30upx 0 0;
		float:right;
	}
	.singer{
		color: #666;
	}
	.player{
		overflow: hidden;
		padding-left: 10upx;
		padding-top: 10upx;
		position: fixed;
		bottom: 0upx;
		width: 100%;
		background-color: rgba(200,200,200,.7);
	}
	.player img{
		border-radius: 50%;
	}
	.player view{
		float: left;
	}
	.name{
		padding-left: 10upx;
		max-width: 190upx;
		max-height: 135upx;
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
