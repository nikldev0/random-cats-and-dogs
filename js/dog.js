class Dog {
    constructor() {
        this.base = 'woof.json';
    }

    // Get images from API

    async getImagesAPI() {
        // Query the API
        const response = await fetch(`https://random.dog/${this.base}`)

        //hold for response and then return as json
        const images = await response.json();

        return images
    }
}