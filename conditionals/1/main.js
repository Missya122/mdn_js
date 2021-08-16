const selectedPet = document.querySelector("#pet");
const petText = document.querySelector(".para");
const ageInput = document.querySelector("#age");
const btn = document.querySelector("#ageBtn");
const para2 = document.querySelector(".para2");

selectedPet.addEventListener("change", createText);

function createText() {

    if (selectedPet.value === "cat") {
        petText.textContent = "Cats are lazy bastards for single women";
    } else if (selectedPet.value === "dog") {
        petText.textContent = "Dogs are for ADHD freaks";
    } else if (selectedPet.value === "parrot") {
        petText.textContent = "Parrots poop everywhere";
    } else {
        petText.textContent = "";
    }

}


btn.addEventListener("click", age);

function age() {

    if (ageInput.value !== "") {

        let numberyAgeInput = Number(ageInput.value);

        switch (true) {
            case (numberyAgeInput < 18 && numberyAgeInput > 0):
                para2.textContent = "GTFO kid";
                break;
            case (numberyAgeInput >= 18 && numberyAgeInput < 28):
                para2.textContent = `Get some life looser noob computah programmer.
                Your homies are bangin' prime age chicks rn`;
                break;
            case (numberyAgeInput >= 28 && numberyAgeInput < 120):
                para2.textContent = "Lmao nasty old nigga";
                break;
            default:
                para2.textContent = "Enter some normal ass age"
                break;
        }
    } else {
        para2.textContent = "Enter some age fam";
        ageInput.focus();
    }
}