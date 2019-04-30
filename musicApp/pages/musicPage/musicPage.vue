<template>
	<view class="m-body">
		<view class="bgBody">
			<img :src="detail.songs[0].al.picUrl + '?param=220y220'" alt="" :style="'border-radius: 50%;' + 'margin-top: 45%;'+ 'transform: rotate('+ degs + 'deg)'">
		</view>
		<!-- <view style='padding: 200upx 0; height: 250upx; overflow: hidden;'>
			<ul :style= '"margin-top: -"+ 27*index + "px; transition: margin 1.5s"'>
				<li v-for='(item ,i) in arr' :key='i' :style=' i===index && "color:red"'>
					{{item.text}}
				</li>
			</ul>
		</view> -->
		<player></player>
		<view class="slideBt">
			<view>
				{{start}}
			</view>
			<view style="width: 80%;">
				<slider @change="adjust" @changing="timeState" :value="value" activeColor="#b82525" backgroundColor="#6D6D72" />
			</view>
			<view>
				{{end}}
			</view>
		</view>
		
	</view>
</template>

<script>
	import Vuex from 'vuex';
	import player from '../player/player.vue';
	export default{
		components:{
			player
		},
		data(){
			return{
				start:'',
				end:'',
				value:0,
				timeUpdate:true,
				arr:[0],
				index:-1
			}
		},
		computed:{
			...Vuex.mapState(['detail','audio','lyric','paused','degs']),
		},
		mounted() {
			let self = this
			// 播放页标题
			uni.setNavigationBarTitle({
				title:self.detail.songs[0].name
			})
			// 播放进度
			self.audio.onTimeUpdate(self.jindu)
			/* self.ricUpdate() */
			self.audio.onEnded(function(){
				/* self.index = -1; */
				uni.setNavigationBarTitle({
					title:self.detail.songs[0].name
				});
				/* self.ricUpdate() */
			})
		},
		methods:{
			...Vuex.mapMutations(['degsadd']),
			jindu(){
				let ing = this.audio.currentTime ;
				let all = this.audio.duration;
				let startS = Math.floor(ing / 60);
				let startM = Math.floor(ing % 60);
					startS = startS.toString().length === 1 ? ('0'+ startS) : startS
					startM = startM.toString().length === 1 ? ('0'+ startM) : startM
				let endS = Math.floor(all / 60);
				let endM = Math.floor(all % 60);
					endS = endS.toString().length === 1 ? ('0'+ endS) : endS
					endM = endM.toString().length === 1 ? ('0'+ endM) : endM	
				
				this.start = `${startS}:${startM}`;
				this.end =  `${endS}:${endM}`;
				
				if(this.timeUpdate){
					this.value = (ing / all) * 100;
				}
				/* if(this.start > this.arr[this.index +1].time){
					this.index++
				} */
				
			},
			adjust(e){
				//相当于 audio的currentTime设置当前进度
				this.audio.seek( e.detail.value * this.audio.duration / 100)
				this.timeUpdate = true;
				
				/* let ing = this.audio.currentTime;
				let startS = Math.floor(ing / 60);
				let startM = Math.floor(ing % 60);
					startS = startS.toString().length === 1 ? ('0'+ startS) : startS
					startM = startM.toString().length === 1 ? ('0'+ startM) : startM
				let newS = `${startS}:${startM}`;	
				let self = this;
					self.index = -1; */
					
				/* (function s(){
					if(newS > self.arr[self.index+1].time){
						self.index++
						s()
					}
				})() */
			},
			
			timeState(){
				this.timeUpdate = false;
			},
			
			/* ricUpdate(){
				//歌词格式化
				let lyricArr = this.lyric.split('\n');
				
				let arr = lyricArr.map((e,i)=>{
					let tempArr = e.split(']');
				
					return {time:tempArr[0].slice(1,tempArr[0].length-1),text:tempArr[1]}
				})
				this.arr = arr;	
				this.arr.push({time:null})
			} */
		}
	}
</script>

<style>
	.bgBody{
		width: 100vw;
		height: 83%;
		text-align: center;
		background-color: rgba(24,26,29,.9);
	}
	uni-page-body{
		height: 100%;
	}
	.m-body{
		text-align: center;
		height: 100%;
	}
	.m-body li{
		list-style: none;
	}
	.slideBt{
		width: 100vw;
		height: 100upx;
		position: fixed;
		bottom: 100upx;
	}
	.slideBt view{
		display: inline-block;
	}
</style>
