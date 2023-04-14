function generaterOTP()
{
    let random =Math.floor(Math.random()*10000)
    let randomNum = Math.random()*10000
    let num = Math.floor(randomNum)

    if(num>=1000 && num<10000){
        console.log(num);
    }
    else{
        generaterOTP()
    }
}
