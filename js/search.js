const searchInput =
document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup", () => {

    const search =
    searchInput.value.toLowerCase();

    const commands =
    document.querySelectorAll(".command");

    commands.forEach(command => {

        const content =
        command.innerText.toLowerCase();

        command.style.display =
        content.includes(search)
        ? "block"
        : "none";

    });

});

}