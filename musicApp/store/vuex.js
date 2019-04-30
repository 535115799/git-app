 import Vue from 'vue'
 import Vuex from 'vuex'
 
 
 Vue.use(Vuex)
 
 export default new Vuex.Store({
	 state:{
		 audio: uni.createInnerAudioContext(),
		 detail:'',
		 paused: false,
		 lyric:'',
		 history:[],
		 mode:1, // 0 单曲 1顺序 2 随机
		 musicIndex:0,
		 timer:null,
		 degs:0
	 },
	 mutations:{
		 degsadd(state){
			function a(){
				state.degs++
				state.timer = requestAnimationFrame(a)
			}
			requestAnimationFrame(a)
		 },
		 //播放
		 play(state,src){
			 cancelAnimationFrame(state.timer)
			 state.audio.src = src
			 state.audio.play()
			 state.paused = true;
			 function a(){
			 	state.degs++
			 	state.timer = requestAnimationFrame(a)
			 }
			 requestAnimationFrame(a)
		 },
		 
		 //歌曲信息更新
		 playItem(state,item){
			 state.detail = item;
		 },
		 
		  //歌词
		/* getLyric(state,item){
		 	state.lyric = item;
		 }, */

		 
		 //开始
		 playd(state){
			 if(state.paused){
				  state.audio.pause();
				  state.paused = false;
				  cancelAnimationFrame(state.timer)
			 }else{
				 state.audio.play()
				 state.paused = true;
				 function a(){
					state.degs++
					state.timer = requestAnimationFrame(a)
				}
				requestAnimationFrame(a)
			 }
			 
			 
		 },
		  
	
		//历史纪录
		addHistory(state,data){
			let deweight =	state.history.findIndex((item)=>{
				return item.id === data[2]
			});
			if(deweight === -1){
				state.history.unshift({
					src:data[0],
					item:data[1],
					/* ric:data[2], */
					id:data[2]
				})	
			}
		},
		
		// 下一首
		addIndex(state){
			state.musicIndex++
			if(state.musicIndex > state.history.length-1){
				state.musicIndex = 0;
			}
		},
		
		//上一首
		lastIndex(state){
			state.musicIndex--
			if(state.musicIndex < 0){
				state.musicIndex = state.history.length-1;
			}
		},
		
		//切换模式
		modeChange(state){
			state.mode++
			state.mode %= 3
		}
	 },
	 actions:{
		 
		 getSrc({commit,dispatch},item){
			 
			 Promise.all([
				 new Promise((next,err)=>{
					  //mp3 地址
					 uni.request({
					 	url:`https://api.wulv5.com/music/song/url?id=${item.id}`,
					 		success: (res) => {
					 		commit('play',res.data.data[0].url)
							next(res.data.data[0].url);
					 	}
					 });
				 }),
				 
				 new Promise((next,err)=>{
					 //歌曲详情
					 uni.request({
					 	url:`https://api.wulv5.com/music/song/detail?ids=${item.id}`,
					 		success: (res) => {
							commit('playItem',res.data)
							next(res.data)
					 	}
					 });
				 })
				 
				/* new Promise((next,err)=>{
					  //歌词
					 uni.request({
					 	url:`https://api.wulv5.com/music/lyric?id=${item.id}`,
					 		success: (res) => {
					 			commit('getLyric',res.data.lrc.lyric);
								next(res.data.lrc.lyric);
					 		}
					 })
				 }), */
			 ]).then(function(data){ 
				data[2] = item.id; 
				commit('addHistory',data);
			 })
			 
			 
		 },
		
	 },
	 
 })
 