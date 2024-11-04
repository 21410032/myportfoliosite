var typed = new Typed(".typing", {
    strings: ["Web Developer", "Software Developer"],
    typeSpeed: 50,
    backSpeed: 60,
    loop: true
});

const lists = document.querySelector(".list");
const list = lists.querySelectorAll("li");
const totlist = list.length;
const section = document.querySelectorAll(".section");
const totsection = section.length;
const maincontent = document.querySelector(".maincontent"); // Corrected selector

for (let i = 0; i < totlist; i++) { // Use let instead of var
    const a = list[i].querySelector("a");
    a.addEventListener("click", function () {
        for (let i = 0; i < totlist; i++) {
            section[i].classList.remove("backsection"); // Ensure removal from section elements
        }
        for (let j = 0; j < totlist; j++) {
            if (list[j].querySelector("a").classList.contains("active")) {
                section[j].classList.add("backsection"); // Corrected to add class to section
            }
            list[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
    });
}

function showSection(element) {
    const target = element.getAttribute("href").split("#")[1];
    for (let i = 0; i < totsection; i++) {
        section[i].classList.remove("animate");
    }
    document.querySelector("#" + target).classList.add("animate");
}

const togglebar = document.querySelector(".togglebar");
const sidebar = document.querySelector(".sidebar");

togglebar.addEventListener("click", () => {
    sidebartoggler();
});

function sidebartoggler() {
    sidebar.classList.toggle("open");
    togglebar.classList.toggle("open");
    maincontent.classList.toggle("openn"); // Toggling class on maincontent
}
