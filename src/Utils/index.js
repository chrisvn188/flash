export const createElement = (type, props, ...children) => {
    const element = document.createElement(type)
    for (let key in props) {
        element.setAttribute(key, props[key])
    }
    if (children.length > 0) {
        children.forEach((node) => element.appendChild(node))
    }
    return element
}
