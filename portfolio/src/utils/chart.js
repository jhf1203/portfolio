import axios from "axios"

export default {
    getList:  function () {
        return axios.get(`api/lastfm`)
    }
};