const displaycontent=(content)=>{
    //result id od input tag
    result.value +=content
}

const clearScreen=()=>{
    result.value=" "
}
const finaloutput=()=>{
    try {
        result.value=eval(result.value)
        
    } catch (error) {
        result.value="error"
        
    }
}
const deleteinp=()=>{
    result.value=result.value.slice(0,-1)
}