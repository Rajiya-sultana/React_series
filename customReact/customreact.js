
function customReact(reactElement, container){
    const createElement = document.createElement(reactElement.type)
    createElement.innerHTML = reactElement.Children
    createElement.setAttribute("href",reactElement.props.href)
    createElement.setAttribute("target",reactElement.props.target)
    container.appendChild(createElement)
}

const reactElement = {
    type : "a",
    props :{
       href : "https://www.google.com",
       target : "_blank"
    },
    Children:"this is the link of the website"
}

const mainContainer = document.querySelector("#root")

customReact(reactElement, mainContainer)

