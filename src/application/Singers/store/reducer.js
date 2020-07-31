import * as actionTypes from "./actionTypes"
import { fromJS } from "immutable"

const defaultStates = fromJS({
  category: "",
  singersList: [],
});

export default (state = defaultStates, action) => {
  switch(action.type){
    case actionTypes.CHANGE_CATEGORY:
      return state.merge({
        "category" : action.data,
      })
  }
}