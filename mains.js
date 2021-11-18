const $ = document.querySelector.bind(document)
const batdau= $('.start')
const bandau= $('.grid')

const cahoi1= $('.cauhoi1')
const ca1hoi1= $('.tl1c1')
const ca2hoi1= $('.tl2c1')
const ca22hoi1= $('.tl22c1')

const cahoi2= $('.cauhoi2')
const ca1hoi2= $('.tl1c2')
const ca2hoi2= $('.tl2c2')
const ca22hoi2= $('.tl22c2')

const cahoi3= $('.cauhoi3')
const ca1hoi3= $('.tl1c3')
const ca2hoi3= $('.tl2c3')
const ca22hoi3= $('.tl22c3')

const hpbd1s= $('.HPBD')
const trais= $('.sangtrai')
const hpbd2s= $('.HPBD2')

batdau.onclick=function(){
    cahoi1.style.display="block";
    bandau.style.display="none";
}
ca2hoi1.onclick=function(){
    ca2hoi1.style.display="none";
    ca22hoi1.style.display="block";
}
ca22hoi1.onclick=function(){
    ca22hoi1.style.display="none";
    ca2hoi1.style.display="block";
}
ca1hoi1.onclick=function(){
    cahoi1.style.display="none";
    cahoi2.style.display="block";
}


ca2hoi2.onclick=function(){
    ca2hoi2.style.display="none";
    ca22hoi2.style.display="block";
}
ca22hoi2.onclick=function(){
    ca22hoi2.style.display="none";
    ca2hoi2.style.display="block";
}
ca1hoi2.onclick=function(){
    cahoi2.style.display="none";
    cahoi3.style.display="block";
}


ca2hoi3.onclick=function(){
    ca2hoi3.style.display="none";
    ca22hoi3.style.display="block";
}
ca22hoi3.onclick=function(){
    ca22hoi3.style.display="none";
    ca2hoi3.style.display="block";
}
ca1hoi3.onclick=function(){
    cahoi3.style.display="none";
    hpbd1s.style.display="block";
}

trais.onclick=function(){
    hpbd1s.style.display="none";
    hpbd2s.style.display="block";
}
