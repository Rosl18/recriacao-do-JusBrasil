var closeButton = document.querySelector('.close-butt')
var buttonHa = document.querySelector('#btn-Hamb')
var menuLateral = document.querySelector('.menu-lateral')
var gradient = document.querySelector('.gradient')

buttonHa.addEventListener('click' ,() =>{
    menuLateral.style.display = 'flex'
    gradient.style.display = 'flex'
})

closeButton.addEventListener('click',() =>{
    menuLateral.style.display = 'none'
    gradient.style.display = 'none'
})

var Process = document.querySelector(".const-Process")
var PRimg= document.querySelector(".constPR-img")
var filll = document.querySelector(".filll")
     Process.addEventListener('mouseover', () =>{
        filll.setAttribute('style', 'fill: #007a5f')
    })
    Process.addEventListener('mouseout',() =>{
        filll.setAttribute('style', 'fill: #151A1F')
    })    
var jurispru = document.querySelector(".jurispru")
var jurispruImg = document.querySelector(".jurispru-img")
var filll1 = document.querySelector(".filll1")
    jurispru.addEventListener('mouseover', () =>{
        filll1.setAttribute('style', 'fill: #007a5f')
    })
    jurispru.addEventListener('mouseout',() =>{
        filll1.setAttribute('style', 'fill: #151A1F')
    })
var doutri = document.querySelector(".doutrina")
var doutriImg = document.querySelector(".doutri-img")
var filll2 = document.querySelector(".filll2")
    doutri.addEventListener('mouseover', () =>{
        filll2.setAttribute('style', 'fill: #007a5f')
    })
    doutri.addEventListener('mouseout',() =>{
        filll2.setAttribute('style', 'fill: #151A1F')
    })   
var diaOf = document.querySelector(".diarioOficiais")
var diaOfImg = document.querySelector(".diarioOF-img")
var filll3 = document.querySelector(".filll3")
    diaOf.addEventListener('mouseover', () =>{
        filll3.setAttribute('style', 'fill: #007a5f')
    })
    diaOf.addEventListener('mouseout',() =>{
        filll3.setAttribute('style', 'fill: #151A1F')
    })  
var pecas = document.querySelector(".pecas")
var pecasImg = document.querySelector(".pecas-img")
var filll4 = document.querySelector(".filll4")
    pecas.addEventListener('mouseover', () =>{
        filll4.setAttribute('style', 'fill: #007a5f')
    })
    pecas.addEventListener('mouseout',() =>{
        filll4.setAttribute('style', 'fill: #151A1F')
    })   
var model = document.querySelector(".modelo")
var modelImg = document.querySelector(".modelo-img")
var filll5 = document.querySelector(".filll5")
    model.addEventListener('mouseover', () =>{
        filll5.setAttribute('style', 'fill: #007a5f')
    })
    model.addEventListener('mouseout',() =>{
        filll5.setAttribute('style', 'fill: #151A1F')
    })           
var legisl = document.querySelector(".legislacao")
var legislImg = document.querySelector(".legisl-img")
var filll6 = document.querySelector(".filll6 ")
    legisl.addEventListener('mouseover', () =>{
        filll6.setAttribute('style', 'fill: #007a5f')
    })
    legisl.addEventListener('mouseout',() =>{
        filll6.setAttribute('style', 'fill: #151A1F')
    })  

var artigo = document.querySelector(".artigo")
var artigoImg = document.querySelector(".artigo-img")
var filll7 = document.querySelector(".filll7")
    artigo.addEventListener('mouseover', () =>{
        filll7.setAttribute('style', 'fill: #007a5f')
    })
    artigo.addEventListener('mouseout',() =>{
        filll7.setAttribute('style', 'fill: #151A1F')
    })   
    
var noticia = document.querySelector(".noticia")
var noticiaImg = document.querySelector(".noticia-img")
var filll8 = document.querySelector(".filll8")
    noticia.addEventListener('mouseover', () =>{
        filll8.setAttribute('style', 'fill: #007a5f')
    })
    noticia.addEventListener('mouseout',() =>{
        filll8.setAttribute('style', 'fill: #151A1F')
    })

var eupa = document.querySelector(".eupa")
var eupaImg = document.querySelector(".eupa-img")
var fill9 = document.querySelector(".filll9")
    eupa.addEventListener('mouseover', () =>{
        fill9.setAttribute('style', 'fill: #007a5f')
    })
    eupa.addEventListener('mouseout',() =>{
        fill9.setAttribute('style', 'fill: #151A1F')
    })  


var msgCha = document.querySelector(".msg-Cha")
var ballCha = document.querySelector(".fillBall")
var chatAD = document.querySelector(".chatAD")
    chatAD.addEventListener("mouseover", ()=>{
        msgCha.setAttribute('style','color: #007a5f')
        ballCha.setAttribute('style','fill: #007a5f')
    })
    chatAD.addEventListener("mouseout", ()=>{
        msgCha.setAttribute('style','color: black')
        ballCha.setAttribute('style','fill: black')
    })