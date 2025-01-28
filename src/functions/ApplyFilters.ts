let filtersArray: string[] = [];

export function applyFilters(filter: string) {

  let filtersArray : string[] = []

  if (!filtersArray.includes(filter)) {
    filtersArray.push(filter);
  } else {
    filtersArray = filtersArray.filter(item => item !== filter);
  }

  const allProjects = document.querySelectorAll(".project")

  allProjects.forEach((project) => { (project as HTMLElement).style.display = "none"; });

  console.log("Filters Array: ", filtersArray);

  for (const stack of filtersArray) {

    const visibleProjects = Array.from(document.querySelectorAll(".stack"))
      .filter((element) => element.textContent?.includes(stack));

    for (const element of visibleProjects) {
      const project = element.closest(".project");

      if (project instanceof HTMLElement) {

        project.style.display = "flex";


        // show active filters
        const allFilters = document.querySelectorAll(".filter-button")
        //
        allFilters.forEach((filter) => {
          (filter as HTMLElement).classList.remove("active")
        })

        const activeFilters = Array.from(allFilters)
          .filter((element) => element.textContent?.includes(stack));
        activeFilters.forEach((filter) => {
          if(!filter.classList.contains("active")){
            (filter as HTMLElement).classList.add("active")
          }else{
            (filter as HTMLElement).classList.remove("active")
          }
        })


      }
      console.log(visibleProjects.length, visibleProjects);
      if (visibleProjects.length == 1) {
        allProjects.forEach((project) => { (project as HTMLElement).style.width = "auto"; });
      } else if (visibleProjects.length == 2) {
        allProjects.forEach((project) => { (project as HTMLElement).style.width = "auto"; });
        document.querySelectorAll(".main").forEach((project) => { (project as HTMLElement).style.margin = "0"; });
      }else{
        allProjects.forEach((project) => { (project as HTMLElement).style.width = ""; });
      }

    }
  }


}


export const resetFilters = () => {
  document.querySelectorAll(".project").forEach((project) => {
    (project as HTMLElement).style.display = "flex";
  })
  // filtersArray = []
}