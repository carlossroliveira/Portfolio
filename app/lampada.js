function toggleDL() {
            const sectAbout = document.getElementById("sectionbg");
            const currentClass = sectAbout.className;
            sectAbout.className = currentClass == "sectionAbout" ? "darkMode" : "sectionAbout";
        }