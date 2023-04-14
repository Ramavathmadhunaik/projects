let cod_display=document.getElementById("code-display");
let bodyelement=document.querySelector("body");
let btnelement = document.getElementById("btn");
btnelement.addEventListener("click" , ()=>{
    let color ="#";
    let colorchar ="0123456789abcdef"
    for(let i=0;i<6;i++)
    {
       let randomnumber = Math.trunc(Math.random()*16);
        color += colorchar[randomnumber];
        bodyelement.style.backgroundColor =color;
        cod_display.innerText =color
    }
})