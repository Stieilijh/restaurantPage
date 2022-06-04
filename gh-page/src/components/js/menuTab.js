import img from '../images/placeholder.jpeg'
import '../css/menuTab.css'


export default function createMenuTab(){
    const menuTab = document.createElement('div')
    menuTab.id='menuTab'
    //components of the menu tab
    const header = document.createElement('h1')
    header.id='header'
    menuTab.appendChild(header)

    const h5msg = document.createElement('h5')
    h5msg.id='h5msg'
    menuTab.appendChild(h5msg)

    const h3msg = document.createElement('h3')
    h3msg.id='h3msg'
    menuTab.appendChild(h3msg)

    const menuList = document.createElement('div')
    menuList.id="menuList"
    menuList.appendChild(createMenuList())
    menuTab.appendChild(menuList)

    const h3msg2 = document.createElement('h3')
    h3msg2.id='h3msg2'
    menuTab.appendChild(h3msg2)

    const picAndPara=createPicAndPara()
    menuTab.appendChild(picAndPara)

    // text content
    header.textContent="Menu";
    h5msg.textContent="We have a huge menu comprising of your favourite dishes. Choose any from the list below";
    h3msg.textContent="BESTSELLERS"
    h3msg2.textContent="RECOMMENDATIONS"
    return menuTab
}

function createMenuList(){
    const menuList = document.createElement('ul')
    menuList.id="ulMenu"
    for(let i =0;i<6;i++){
        let listItem=document.createElement('li')
        listItem.id="li"+i;
        listItem.textContent="MenuItem-"+i;
        menuList.appendChild(listItem)
    }
    return menuList
}

function createPicAndPara(){
    const picAndPara = document.createElement('div')
    picAndPara.id='picAndParaDiv'
    for(let i=0;i<4;i++){
    const smallPara = document.createElement('div')
    smallPara.id='smallPara'+i
    picAndPara.appendChild(smallPara)
    smallPara.textContent=i+1+") Lorem ipsum dolor sit amet."

    const image= new Image ()
    image.src=img
    const foodImage = document.createElement("div")
    foodImage.id="foodImage"+i
    foodImage.appendChild(image)
    picAndPara.appendChild(foodImage)
    }
    return picAndPara
}