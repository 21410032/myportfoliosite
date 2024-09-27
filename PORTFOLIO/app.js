// Initialize typing animation
var typed = new Typed(".typing", {
    strings: ["Web Developer", "Software Developer"],
    typeSpeed: 50,
    backSpeed: 60,
    loop: true
});

// Query all necessary elements
const lists = document.querySelector(".list");
const list = lists.querySelectorAll("li");
const totlist = list.length;
const sections = document.querySelectorAll(".section");
const togglebar = document.querySelector(".togglebar");
const sidebar = document.querySelector(".sidebar");

// Function to scroll smoothly to a specific section
function showSection(element) {
    const target = element.getAttribute("href").split("#")[1];
    const targetSection = document.querySelector("#" + target);

    // Smooth scroll to the target section
    targetSection.scrollIntoView({ behavior: "smooth" });

    // Add 'animate' class to trigger animation
    sections.forEach(section => section.classList.remove("animate"));
    targetSection.classList.add("animate");
}

// Handle click events for each list item
for (let i = 0; i < totlist; i++) {
    const a = list[i].querySelector("a");
    a.addEventListener("click", function (e) {
        e.preventDefault();  // Prevent default anchor behavior

        // Remove 'backsection' class from all sections
        sections.forEach(section => section.classList.remove("backsection"));

        // Manage active classes
        list.forEach(li => {
            li.querySelector("a").classList.remove("active");
        });
        this.classList.add("active");

        // Show the selected section
        showSection(this);
    });
}

// Sidebar toggle functionality
togglebar.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    togglebar.classList.toggle("open");

    // Toggle sidebar state for sections
    sections.forEach(section => section.classList.toggle("openn"));
});
