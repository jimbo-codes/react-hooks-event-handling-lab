// Code Keypad Component Here
function Keypad(){
    return(
        <input onChange={watchIt} type="password" />
    )
}

function watchIt(event){
console.log('Entering password...')
}
export default Keypad