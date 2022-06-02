export default function createNavBar(){
    const navBar = document.createElement("ul")
    
    const homeButton = document.createElement("li")
    homeButton.textContent="Home"
    navBar.appendChild(homeButton)  

    const menuButton = document.createElement("li")
    menuButton.textContent="Menu"
    navBar.appendChild(menuButton)

    const aboutButton = document.createElement("li")
    aboutButton.textContent="About"
    navBar.appendChild(aboutButton)

    return navBar
}
