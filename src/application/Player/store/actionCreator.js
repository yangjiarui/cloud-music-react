import * as actionTypes from "./actionTypes"
import {fromJS} from "immutable"
import {getSongDetailRequest} from "api/request"

/* 
  改变当前的播放歌单的数据
*/
export const changePlayList = (data) => ({
  type : actionTypes.CHANGE_PLAY_LIST,
  data : fromJS(data)
});

export const changeSequecePlayList = (data) => ({
  type: actionTypes.SET_SEQUECE_PLAYLIST,
  data: fromJS(data)
});
/* 
  改变当前选中歌曲的下标
*/
export const changeCurrentIndex = (data) => ({
  type : actionTypes.CHANGE_CURRENT_INDEX,
  data
});

/* 
  改变当前播放的歌曲
*/
export const changeCurrentSong = data => ({
  type : actionTypes.CHANGE_CURRENT_SONG,
  data : fromJS(data)
})

export const insertSong = (data) => ({
  type: actionTypes.INSERT_SONG,
  data : fromJS(data)
});

export const changePlayingState = data => ({
  type : actionTypes.CHANGE_PLAYING,
  data
})


export const getSongsDetail = id => {
  return async(dispatch) => {
    let res = await getSongDetailRequest(id)
    if(!res){
      return
    }
    let song = res.songs[0];
    dispatch(insertSong(song));
  }
}

// 改变播放列表的状态
export const changePlayListStatus = data => {
  return {
    type: actionTypes.CHANGE_PLAY_LIST_STATUS,
    data
  }
}
export const changeMode = data => {
  return {
    type: actionTypes.CHANGE_MODE,
    data
  }
}
// 删除某一个歌曲
export const deleteSong = data => {
  return {
    type: actionTypes.DELETE_SONG,
    data
  }
}
export const changeFullScreen = data => {
  return {
    type: actionTypes.CHANGE_FULL_SCREEN,
    data
  }
}

export const changeSpeed = data => {
  return {
    type: actionTypes.CHANGE_SPEED,
    data
  }
}