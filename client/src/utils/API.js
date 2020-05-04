import axios from "axios";

export default {
    getAPIHeroes: function (heroSearch) {
        return axios.get ("https://ringsdb.com/api/public/cards/");
    }
};