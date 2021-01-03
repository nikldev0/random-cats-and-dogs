class UI {
    constructor() {
        this.init();
    }
    init() {
        //display images in placeholders
        this.printCatImages()
        this.printDogImages()
        this.printCatFacts()
        this.randomiser()
    }

    printCatImages() {
        const catImages = cat.getImagesAPI()
            .then(cat => {
                const catSubmit = document.getElementById("catSubmit")
                    catPlaceholder.src = cat.file;
            })
            .catch(err => {
                console.log(err);
            })
    }

    printDogImages() {
        const dogImages = dog.getImagesAPI()
            .then(dog => {
                const dogSubmit = document.getElementById("dogSubmit")
                    dogPlaceholder.src = dog.url;
            })
            .catch(err => {
                console.log(err);
            })
    }

    randomiser(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    printCatFacts() {
        const catFacts = cat.getFactsAPI()
            .then(cat => {
                const catSubmit = document.getElementById("catSubmit")
                const catText = document.getElementById("catText");
                catText.innerHTML = cat[ui.randomiser(5)].text;
                console.log(cat[ui.randomiser(5)]);
            })
            .catch(err => {
                console.log(err);
            })
    }
}

