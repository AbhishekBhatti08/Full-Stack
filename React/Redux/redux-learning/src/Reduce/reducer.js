const initialiseState={
    counter: 1,
    isLogged: true,
}

const reducer = (state=initialiseState,action) =>{
    if(action.type=="INCREMENT") {
        return {
            ...state,
            counter:state.counter+1
        }
    }
    if(action.type=="DECREMENT") {
        return {
            ...state,
            counter:state.counter-1
        }
    }

    return state;

}

export default reducer;