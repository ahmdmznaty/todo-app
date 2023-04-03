import comket from "../dependencies/comket.js"

export default function CreateButton() {
    let parent = comket.div({
        class: "create-task",
        text: "Create Task Button"
    })
    return parent
}