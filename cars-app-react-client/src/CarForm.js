import {SERVER_URL} from "./constant";
import async from "async";

function CarForm({handleClick}) {

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const formJson = Object.fromEntries(formData.entries());

        const requestOptions = {
            method : "POST",
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formJson)
        }

        fetch(SERVER_URL + '/car', requestOptions)
            .then(async response => {
            if(!response.ok) {
                console.log("Wystąpił błąd")
            }
            handleClick();
        })

    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="brand" placeholder="Enter car brand"/>
            <input name="model" placeholder="Enter car model"/>
            <input name="year" placeholder="Enter car year"/>
            <button type="submit">Dodaj</button>
        </form>
    )
}

export default CarForm;