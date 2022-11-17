import axios from "axios";

const env = async() => {
    let result = await axios.get('http://localhost:8080/')
    /* console.log(result); */
    const {data, status} = result;
    console.log(data);
    console.log(status);
}

env();