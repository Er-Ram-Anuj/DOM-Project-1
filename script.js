const btn=document.getElementById("CBtn");
btn.addEventListener("click", ram);
function ram(){
    document.getElementById("CBtn").innerText="Click For Another";
}
const randomColor=()=>{
    let val="0123456789ABCDEF";
    let cons="#";
    for(let i=0;i<6;i++){
        cons=cons+[Math.floor(Math.random()*16)];
    }
    return cons;
}
function changeRandomColor(){
    document.body.style.backgroundColor=randomColor();
}
btn.addEventListener("click",changeRandomColor);

