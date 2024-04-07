export const createElement = (type, props, ...children) => {
    const element = document.createElement(type)
    for (let key in props) {
        element.setAttribute(key, props[key])
    }
    element.append(...children)
    return element
}
