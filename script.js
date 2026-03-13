const allSkills = document.querySelectorAll(".skill");

allSkills.forEach(box => {
    // When mouse enters: Change to Image
    box.addEventListener('mouseenter', () => {

        const originalText = box.getAttribute('data-name');
        box.innerHTML = originalText;
    });
    // When mouse leaves: Change back to Text
    box.addEventListener('mouseleave', () => {
        const imgSrc = box.getAttribute('data-img');
        box.innerHTML = `<img src="${imgSrc}" alt="Logo" style="max-height: 100%; width: auto;">`;
    });
});

function sub() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("message", message);
    const modal = document.querySelector("#successSubmitalert");
    const closeBtn = document.querySelector("#closeBtn");

    // To show the alert:
    modal.showModal();

    // To close the alert:
    closeBtn.addEventListener("click", () => modal.close());
}