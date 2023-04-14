function madhu(){
    let color = prompt("Enter color name")

    if (color == "red") {
        document.getElementById('red').style.backgroundColor = "red";
    }
     else if (color == "yellow" || color == "yellow" || color == "YELLOW")
    {
        document.getElementById('yellow').style.backgroundColor = "yellow";
    }
     else if (color == "green" || color == "green" || color == "GREEN") 
    {
        document.getElementById('green').style.backgroundColor = "green";
    }
     else if (color == "blue" || color === "blue" || color == "BLUE") 
    {
        document.getElementById('blue').style.backgroundColor = "blue";
    } 
    else if (color == "black" || color == "black" || color == "BLACK") 
    {
        document.getElementById('black').style.backgroundColor = "black";
    }
     else if (color == "orange" || color === "orange" || color == "ORANGE") 
    {
        document.getElementById('orange').style.backgroundColor = "orange";
    } 
    else 
    {
        alert("this color is not hear")
    }
}