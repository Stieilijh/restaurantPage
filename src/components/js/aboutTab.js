export default function createAboutTab(){
    const aboutTab = document.createElement('div')
    aboutTab.id='aboutTab'
    //components
    const header = document.createElement('h1')
    header.id='header'
    aboutTab.appendChild(header)

    const para1 = document.createElement('div')
    para1.id='para1'
    aboutTab.appendChild(para1)

    const para2 = document.createElement('div')
    para2.id='para2'
    aboutTab.appendChild(para2)

    //text content
    header.textContent="About us"
    para1.textContent="We are international spies and our identity and information is available to no one!!";
    para2.textContent="If you really wanna see us we will meet you in heaven hehehahah"
    return aboutTab
}