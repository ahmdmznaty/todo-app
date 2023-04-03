import comket from "../dependencies/comket.js"

export default function ListCard(obj) {
    let parent = comket.div({
        class: "list-card",
        text: "List Component"
    })
    return parent
}