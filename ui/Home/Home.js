import comket from "../dependencies/comket.js"

export default function HomePage(label) {
    let parent = comket.div({
        class: "home-container",
        text: "Home Page"
    })
    document.body.innerHTML = ""
    document.body.append( parent )
}