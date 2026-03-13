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