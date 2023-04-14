function validate()
{
    let fname = document.getElementsByName('etm')[0].value;
    let iname = document.getElementsByName('ept')[0].value;
    if(fname === "" || fname === null)
    {
        let x = document.getElementsByName('etm')
        x[0].style.border = "solid 1px red"

        let msz = document.getElementsByClassName("text")
        msz[0].innerText = "please enter the mail"
        msz[0].style.color = "red" 
        return false;
    }
    else if(iname === "" || iname === null)
    {
        let x = document.getElementsByName('ept')
        x[0].style.border = "solid 1px red"

        let msz = document.getElementsByClassName("text")
        msz[0].innerText = "please enter the password"
        msz[0].style.color = "red" 
        return false;
    }
                                                                                                    

}