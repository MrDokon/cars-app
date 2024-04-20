import {SERVER_URL} from "./constant";
import {useEffect, useState} from "react";
import CarForm from "./CarForm";
import DeleteComponent from "./DeleteComponent";
import EditComponent from "./EditComponent";

function Car() {

    const [cars, setCars] = useState()

    const getCars = async()=> {

        const response = await fetch(
            SERVER_URL + '/car'
        ).then((response) => response.json());

      setCars(response);
    }

    function handleClick() {
        getCars();
    }

    useEffect(() => {getCars()}, []);
    return (
        <>
        <table className="styled-table">
            <thead>
                <tr>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
            {cars && cars.map((car) =>
            <tr key={car.id}>
                <th>{car.brand}</th>
                <th>{car.model}</th>
                <th>{car.year}</th>
                <td><EditComponent car={car} handleClick={handleClick}></EditComponent></td>
                <td><DeleteComponent handleClick={handleClick} id={car.id}/></td>
            </tr>
            )}
            </tbody>
        </table>
        <CarForm handleClick={handleClick}/>
        </>
    );
}

export default Car;