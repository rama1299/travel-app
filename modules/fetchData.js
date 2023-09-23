import axios from "axios";
async function fecthDataInstagram() {
    try {
        const response = await axios.get('https://datasekolahapi.herokuapp.com/api/data/sd');
        const data = response.data

        return data
    } catch (error) {
        console.log(error)
    }
}

export default fecthDataInstagram