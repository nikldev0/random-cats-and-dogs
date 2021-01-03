class Cat {
    constructor() {
        this.base = 'meow';
        this.info = 'facts';
    }

    // Get images from API

    async getImagesAPI() {
        // Query the API
        const response = await fetch(`https://aws.random.cat/${this.base}`)

        //hold for response and then return as json
        const images = await response.json();

        return images
    }

    // Get fact from API

    
    async getFactsAPI() {
        // Query the API
        const response = await fetch(`https://cat-fact.herokuapp.com/${this.info}`)

        //hold for response and then return as json
        const facts = await response.json();

        return facts
    }
}