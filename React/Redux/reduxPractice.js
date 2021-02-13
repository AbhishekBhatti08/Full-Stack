const redux = require('redux');

//creating store maker
const createStore = redux.createStore;

//initialising state
const initialiseState = {
    counter:0

}

//initialising reducer
// it returns new state if anything is changed, otherwise the old state
// takes 2 argument, old state and the action.
const reducer = (state=initialiseState, action)=>{
    if(action.type == "INC_COUNTER"){
        return {
            ...state,
            counter:action.value
        };
    }
    if(action.type == "ADD_COUNTER"){
        return {
            ...state,
            counter:state.counter + action.value
        };
    }
    return state;
}

const store = createStore(reducer);
// console.log(store.getState());

//subscribing
store.subscribe(()=>{
    console.log("[Subscribe] ", store.getState());
})

// dispatching
//takes object as an argument, defining what to do.
store.dispatch({type:"INC_COUNTER",value:1});
store.dispatch({type:"ADD_COUNTER",value:10});

// console.log(store.getState());