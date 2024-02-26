export const transitionGroup = (name: string = "root", type : "old" | "new" = "old") => {
    return `::view-transition-${type}(${name})`
}