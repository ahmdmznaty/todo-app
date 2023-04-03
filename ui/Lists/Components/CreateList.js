import comket from "../dependencies/comket.js"

export default function CreateList() {
    let parent = comket.div({
        class: "create-list",
        text: "Create List Form"
    })
    return parent
}