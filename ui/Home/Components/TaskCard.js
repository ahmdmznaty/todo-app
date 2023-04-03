import comket from "../dependencies/comket.js"

export default function TaskCard(obj) {
    let parent = comket.div({
        class: "task-card",
        text: "Task Component"
    })
    return parent
}