import axios from "axios";

export default {
    getAPIHeroes: function (heroSearch) {
        return axios.get (`https://ringsdb.com/public/cards/`)
    }
};