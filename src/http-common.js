import axios from "axios";
export default axios.create({
    // baseURL: "http://localhost:8080/api",
    baseURL: "notesappbackend.herokuapp.com/api/notes",
    Headers: {
        "Content-type":"application/json"
    }
})