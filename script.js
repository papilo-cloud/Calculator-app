
// Call all variables
var col = document.getElementsByClassName('equal')[0]
var btns = document.getElementsByClassName('btn')
var cols = document.getElementsByClassName('col')
var calc = document.getElementsByClassName('calc')[0]
var txt = document.getElementsByClassName('txt')[0]
var selec = document.getElementsByClassName('selector')[0]
var chng = document.getElementsByClassName('change-Bg')[0]
var bdy = document.getElementById('bdy')

// ### Theme 1
function myBtn1() {
    for (let i = 0; i < btns.length; i++) {
        btns[i].style.backgroundColor= 'hsl(45, 7%, 89%)'     
        btns[i].style.boxShadow= '0 4px hsl(35, 11%, 61%)'     
        btns[i].style.color= 'hsl(60, 10%, 19%)'     
    }
    for (let i = 0; i < cols.length; i++) {
        cols[i].style.backgroundColor= 'hsl(225, 21%, 49%)'     
        cols[i].style.boxShadow= '0 4px hsl(224, 28%, 35%)'     
        cols[i].style.color= 'hsl(0, 0%, 100%)'     
    }
    bdy.style.backgroundColor = 'hsl(222, 26%, 31%)'
    col.style.backgroundColor = 'hsl(6, 63%, 50%)'
    col.style.boxShadow = '0 4px hsl(6, 70%, 34%)'
    col.style.color = 'hsl(0, 0%, 100%)'
    calc.style.backgroundColor = 'hsl(223, 31%, 20%)'
    txt.style.backgroundColor = 'hsl(224, 36%, 15%)'
    txt.style.color = 'hsl(0, 0%, 100%)'
    chng.style.color = 'hsl(0, 0%, 100%)'
    selec.style.backgroundColor = 'hsl(223, 31%, 20%)'
}

// ### Theme 2
function myBtn2() {
    for (let i = 0; i < btns.length; i++) {
        btns[i].style.backgroundColor= 'hsl(45, 7%, 89%)'     
        btns[i].style.boxShadow= '0 4px hsl(35, 11%, 61%)'     
        btns[i].style.color= 'hsl(60, 10%, 19%)'     
    }
    for (let i = 0; i < cols.length; i++) {
        cols[i].style.backgroundColor= 'hsl(185, 42%, 37%)'     
        cols[i].style.boxShadow= '0 4px hsl(185, 58%, 25%)'     
        cols[i].style.color= 'hsl(0, 0%, 100%)'     
    }
    bdy.style.backgroundColor = 'hsl(0, 0%, 90%)'
    col.style.backgroundColor = 'hsl(25, 98%, 40%)'
    col.style.boxShadow ='0 4px hsl(25, 99%, 27%)'
    col.style.color = 'hsl(0, 0%, 100%)'
    calc.style.backgroundColor = 'hsl(0, 5%, 81%)'
    txt.style.backgroundColor = 'hsl(0, 0%, 93%)'
    txt.style.color = 'hsl(60, 10%, 19%)'
    chng.style.color = 'hsl(60, 10%, 19%)'
    selec.style.backgroundColor = 'hsl(0, 5%, 81%)'
}

// ### Theme 3
function myBtn3() {
    for (let i = 0; i < btns.length; i++) {
        btns[i].style.backgroundColor= 'hsl(268, 47%, 21%)'     
        btns[i].style.boxShadow= ' 0 4px hsl(290, 70%, 36%)'     
        btns[i].style.color= 'hsl(52, 100%, 62%'     
    }
    for (let i = 0; i < cols.length; i++) {
        cols[i].style.backgroundColor= 'hsl(281, 89%, 26%)'     
        cols[i].style.boxShadow= '0 4px hsl(285, 91%, 52%)'     
        cols[i].style.color= 'hsl(0, 0%, 100%)'     
    }
    bdy.style.backgroundColor = 'hsl(268, 75%, 9%)'
    col.style.backgroundColor = 'hsl(176, 100%, 44%)'
    col.style.boxShadow = '0 4px hsl(177, 92%, 70%)'
    col.style.color = 'hsl(198, 20%, 13%)'
    calc.style.backgroundColor = 'hsl(268, 71%, 12%)'
    txt.style.backgroundColor = 'hsl(268, 71%, 12%)'
    txt.style.color = 'hsl(52, 100%, 62%)'
    chng.style.color = 'hsl(52, 100%, 62%)'
    selec.style.backgroundColor = 'hsl(268, 71%, 12%)'
}
// ### function for deleting
    function delBtn() {
        var txt = document.getElementsByClassName('txt')[0]
        var str = txt.value.toString()
        str = str.substr(0, str.length - 1)
        txt.value = str
    }











