<script>
	import Vuex from 'vuex';
	export default {
		onLaunch: function () {
			console.log('App Launch')
			const self = this;
			self.audio.onEnded(()=>{
				if(self.mode === 0){
					self.audio.play()
				}else if(self.mode === 1){
					self.addIndex()
					self.play(self.history[self.musicIndex].src)
					self.playItem(self.history[self.musicIndex].item)
					/* self.getLyric(self.history[self.musicIndex].ric) */
				}else if(self.mode === 2){
					const index = Math.floor(Math.random() * self.history.length)
					self.play(self.history[index].src)
					self.playItem(self.history[index].item)
					/* self.getLyric(self.history[index].ric) */
				}
			})
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		},
		computed:{
			...Vuex.mapState(['audio','mode','musicIndex','history'])
		},
		methods:{
			...Vuex.mapMutations(['play','playItem','getLyric','addIndex'])
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("./common/uni.css");
	.musicTitle{
		font-weight: bold;
		font-size: 33upx;
		text-indent: 1rem;
		margin-top: 30upx;
		color: #333333;
	}
</style>
