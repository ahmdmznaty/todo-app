import comket from "../dependencies/comket.js"

export default function CompletedSection() {
    let parent = comket.div({
        class: "completed-tasks",
        text: "Completed Tasks Toggle"
    })
    return parent
}