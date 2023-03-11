let value=JSON.parse(localStorage.getItem('initialState'));
export let initialState= value || false;
// localStorage.setItem('initialState',JSON.stringify(true));
export let reducer=(state,dispatch)=>{
if (dispatch.type==='true') {
    return dispatch.payload;
}
return state;
}