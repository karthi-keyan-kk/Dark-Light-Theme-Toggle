function theme(){
    var body = document.body;
    let button = document.querySelector('.btn');
    button.innerHTML = button.innerHTML === "Light" ? "Dark" : "Light";
    button.classList.toggle('dark-btn');
    body.classList.toggle('dark');
}