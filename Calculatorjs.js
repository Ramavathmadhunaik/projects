 
 // for taking input name
 
 
 function mode(){
    var toggleb = document.getElementById("modeId");
    var bodyElt = document.querySelector("body");
    bodyElt.classList.toggle("light");


    if(bodyElt.classList.toggle("light")){
        toggleb.innerHTML ="mode";
        // bodyElt.style.backgroundColor = "#fff";
        // bodyElt.style.color = "#000";
        bodyElt.style.cssText = "background-color: #000; color: #fff; height: 760px;"

        
    }
    else{
        toggleb.innerHTML = "";
        bodyElt.style.cssText = "background-color: #fff; color: #000;"
        
    }  
}

var val =document.getElementById("cal")
var calc = document.getElementsByClassName("btn");
    for(let i=0; i<calc.length; i++){
        calc[i].addEventListener("click", function (){
            val.value+=calc[i].innerHTML
        })
    }

    var eql = document.getElementById("equal")
        eql.addEventListener("click", function(){
            
        val.value= eval(val.value);
        })


        var emt= document.getElementById("c")
            emt.addEventListener("click", function (){
                val.value = "";
            })

            var ceb =document.getElementById("ce")
                ceb.addEventListener("click", ()=>{
                    val.value = val.value.slice(0, -1)
                })




 var fname;
 var b =document.getElementById("inputName");



 function onLoad() {
    var fname = String(prompt("Enter your Name"));

    if(fname!= null){
        document.getElementById("inputName").innerHTML = "Hi, "+fname+" Calculate Something";
    }
    else{
        return "Idiot";
    }

    b.style.cssText = "color: #fff; display: flex; justify-content: center; padding-top: 7px; background-color: transparent;"


}

//end


//  dark/light mode

var modeing = document.getElementById("modeId");
    modeing.style.cssText = "text-align: center;"




