import { WOW } from "wowjs";

export default class Wow {
    constructor() {
        this.init();
    }

    init () {
        const wow = new WOW();
        wow.init();
    }
}