import createLogo from "./components/js/logo"
import createNavBar from "./components/js/navBar"
import './style.css'

const fullContent=document.querySelector('#content')
const navBar=createNavBar()
//Top content
const topCont = document.createElement('div')
topCont.id="topCont"
topCont.appendChild(createLogo())
topCont.appendChild(navBar)
fullContent.appendChild(topCont)

//tab
const tabContent=document.createElement('div')
tabContent.id='tabContent'
fullContent.appendChild(tabContent)

//adding actionlistners to navBar
let listItems = Array.from(navBar.childNodes)
listItems.forEach((item)=>{
    item.addEventListener('click',()=>{
        tabContent.innerHTML=""
        if(item.id==="menu")
            tabContent.appendChild(createMenuTab())
        else if(item.id==="home")
            tabContent.appendChild(createHomeTab())
        else if(item.id==="about")
            tabContent.appendChild(createAboutTab())
    })
})



