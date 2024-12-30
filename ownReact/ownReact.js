function customRender(reactElement, container){
    /*
    const Element = document.createElement(reactElement.type)
    Element.innerHTML = reactElement.childern
    Element.setAttribute('href', reactElement.props.href)
    Element.setAttribute('target', reactElement.props.target)

    container.appendChild(Element)
    */

    const Element = document.createElement(reactElement.type)
    Element.innerHTML = reactElement.childern
    for (const prop in reactElement.props) {
        Element.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(Element)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.linkedin.com/in/ayush-kevadiya-0a1213303/',
        target: '_blank'
    },
    childern: 'Click here to visit linkedin profile'
}

const maincontainer = document.querySelector("#root")

customRender(reactElement, maincontainer)