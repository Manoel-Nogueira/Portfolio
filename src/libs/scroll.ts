
  
export function ScrollToAnchor (sectionId: string) {

    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "center" })

}