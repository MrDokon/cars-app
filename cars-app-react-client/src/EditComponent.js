import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import {SERVER_URL} from "./constant";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function EditComponent({car, handleClick}) {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

        function openModal() {
            setIsOpen(true);
        }

        function afterOpenModal() {
            subtitle.style.color = '#f00';
        }

        function closeModal() {
            setIsOpen(false);
        }

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
                    closeModal();
                })
        }

return (
    <div>
        <button onClick={openModal}>Edycja</button>
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal">
            <button className='close-edit-button' onClick={closeModal}>x</button>
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>
            <div>Wprowadź wartość</div>
            <form onSubmit={handleSubmit}>
                <input hidden name='id' defaultValue={car.id}/>
                <input name='brand' defaultValue={car.brand}/>
                <input name='model' defaultValue={car.model}/>
                <input name='year' defaultValue={car.year}/>
                <button type='submit'>Zapisz</button>
            </form>
        </Modal>
    </div>
    );
}

export default EditComponent;