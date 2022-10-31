const passwordText=document.querySelector(".display>p")
const passwordLength=document.querySelector(".pasword_length")
const generateBtn=document.querySelector("button")
const elements=document.querySelectorAll(".konta ul li input")
const[LOWERCASE,NUMBERS,SYMBOLS]=["qwertyuiopasdfghjklzxcvbnm","012356789","!@#$%^&*()_+<>?/"]
// const LOWERCASE="qwertyuiopasdfghjklzxcvbnm"
 const UPPERCASE=LOWERCASE.toUpperCase()
// const NUMBERS="012356789"
// const SYMBOLS="!@#$%^&*()_+<>?/"




const check={
    uppercase:false,
    lowercase:false,
    numbers:false,
    symbols:false
}



document.addEventListener("DOMContentLoaded",()=>elements.forEach(item=>check[item.id]=item.checked),passwordText.textContent="");

passwordLength.addEventListener("input",(event)=>document.querySelector(".flex>p").textContent=event.target.value);




elements.forEach(item=>{
    item.addEventListener("input",()=>{
        check[item.id]=item.checked
    })
})
generateBtn.addEventListener("click",()=>{
    generatePassword(checkScaner());
})
function generatePassword(characters) {
    let result=""
    if (characters.length>0) {
        for(let i=0;i<passwordLength.value;i++){
            result+=characters.charAt(Math.floor(Math.random()*characters.length))
        }
        passwordText.textContent=result;
        document.querySelector(".display>img").addEventListener("click",navigator.clipboard.writeText(passwordText.textContent));

    }else{
        console.log("Error")
    }

    
}
function checkScaner() {
    const result=(check.uppercase==true?UPPERCASE:"")+(check.lowercase==true?LOWERCASE:"")+(check.symbols==true?SYMBOLS:"")+(check.numbers==true?NUMBERS:"");
    return result;
}






















