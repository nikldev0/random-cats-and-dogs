//Instantiate Classes

const cat = new Cat();
const dog = new Dog();
const ui = new UI();


const catPlaceholder = document.getElementById('catPlaceholder');
const catSubmit = document.getElementById("catSubmit");
const catText = document.getElementById("catText");
const dogPlaceholder = document.getElementById('dogPlaceholder');
const dogSubmit = document.getElementById("dogSubmit")


catSubmit.addEventListener('click', ui.printCatImages);
catSubmit.addEventListener('click', ui.printCatFacts);
dogSubmit.addEventListener('click', ui.printDogImages);