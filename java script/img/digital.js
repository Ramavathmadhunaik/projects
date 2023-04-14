function digitalClock()
{
    let dateObj = new Date()

    let curhours = dateObj.getHours()
    let curMin = dateObj.getMinutes()
    let cursec = dateObj.getSeconds()

    let selectedElem = document.getElementsByTagName('span')
    selectedElem[0].innerText = curhours
    selectedElem[1].innerText = curMin
    selectedElem[2].innerText = cursec

    let curdate = dateObj.getDate()
    let curmon = dateObj.getMonth()+1
    let curyear = dateObj.getFullYear()

    selectedElem[3].innerText = curdate
    selectedElem[4].innerText = curmon
    selectedElem[5].innerText = curyear

    let curday = dateObj.getDay()+1
    selectedElem[6].innerText = curday

}