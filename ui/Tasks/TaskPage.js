import comket from "../dependencies/comket.js"

export default function TaskPage(id) {
    let parent = comket.div({
        class: "task-page",
        text: "Task Page"
    })
    return parent
}