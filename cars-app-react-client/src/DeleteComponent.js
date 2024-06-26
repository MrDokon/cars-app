import {SERVER_URL} from "./constant";

function DeleteComponent({id, handleClick}) {

    function deleteCar() {
        const requestOptions = {
            method : "DELETE",
            headers: {'Content-Type' : 'application/json'},
        }

        let idObject = {id}
        fetch(SERVER_URL + '/car/' + idObject.id, requestOptions)
            .then(async response => {
                if(!response.ok) {
                    console.log("Wystąpił błąd")
                }
                handleClick();
            })
    }

    return (
        <button className="delete-button" onClick={deleteCar}>x</button>
    )
}

export default DeleteComponent;