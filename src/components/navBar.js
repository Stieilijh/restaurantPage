export default function createNavBar(){
    const navBar = document.createElement("ul")
    
    const homeButton = document.createElement("li")
    homeButton.textContent="Home"
    homeButton.style.color="white"
    navBar.appendChild(homeButton)  

    const menuButton = document.createElement("li")
    menuButton.textContent="Menu"
    menuButton.style.color="white"
    navBar.appendChild(menuButton)

    const aboutButton = document.createElement("li")
    aboutButton.textContent="About"
    aboutButton.style.color="white"
    navBar.appendChild(aboutButton)

    navBar.style.listStyleType="none"
    navBar.style.display="flex"
    navBar.style.justifyContent="space-between"
    navBar.style.margin="0px"
    navBar.style.gap="20%"
    navBar.style.fontSize="1.6em"
    navBar.style.alignItems="center"

    navBar.style.paddingInlineStart="0"
    return navBar
}
