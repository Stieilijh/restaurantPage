import img from '../images/indian_food.jpeg'
export default function createHomeTab(){
    const homeTab = document.createElement('div')
    homeTab.id='homeTab'
    //componentrs of the hometab
    const header = document.createElement('h1')
    header.id='header'
    homeTab.appendChild(header)

    const h3msg = document.createElement('h3')
    h3msg.id='h3msg'
    homeTab.appendChild(h3msg)

    const smallPara = document.createElement('p')
    smallPara.id='smallPara'
    homeTab.appendChild(smallPara)

    const image= new Image ()
    image.src=img
    const foodImage = document.createElement("div")
    foodImage.id="foodImage"
    foodImage.appendChild(image)
    homeTab.appendChild(foodImage)

    const bigPara = document.createElement('p')
    bigPara.id='bigPara'
    homeTab.appendChild(bigPara)

    //text content
    header.textContent='Home'
    h3msg.textContent=' Welcome to our website !!'
    smallPara.textContent='We have all kinds of food . Our restaurant'+
    ' is famous for it\'s world class quality indian food specifically. '+
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. orporis provident.';
    bigPara.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nulla minima eum illum necessitatibus perspiciatis et rem possimus itaque? Excepturi sapiente autem accusamus modi soluta sit, cumque, nobis nihil aperiam, quo sunt velit perferendis animi quaerat amet molestias optio inventore."+
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In beatae fugit animi dicta perferendis, quaerat illum tempora minima distinctio officiis aliquam repudiandae odit assumenda, consequatur consequuntur sapiente magnam, impedit porro laboriosam dolorem esse sunt facere expedita. Debitis libero, est provident quasi autem alias labore rerum nihil. Consequatur recusandae ipsa cum ipsum quaerat dolores architecto at sequi suscipit illum, exercitationem odit vitae dicta facere natus? Laborum voluptatum asperiores, deleniti inventore sunt corporis doloremque eos praesentium nam rerum perferendis cumque blanditiis adipisci similique dolorem repellendus quia maxime explicabo sequi? Dignissimos excepturi earum illum? Esse quia blanditiis explicabo, veniam maxime laborum obcaecati recusandae!"+
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda alias veniam quod harum perspiciatis laudantium voluptates, maxime deleniti quasi reiciendis, nisi labore sint accusantium, ipsam modi deserunt? Deleniti quaerat amet fugit repellat. Dicta recusandae blanditiis perferendis quos, dolores ipsam doloribus iure illo harum tempora, dolorem illum aperiam. Accusamus nihil at provident harum fugiat voluptates similique nisi debitis porro delectus doloremque ipsum tenetur iusto quisquam, eaque quaerat aliquam cumque magnam modi!";
    return homeTab
}