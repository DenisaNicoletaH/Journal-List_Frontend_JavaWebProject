
import React, { useState, useEffect } from "react";
import { Placeholder } from "react-bootstrap";
import axios from "axios";
import ToWriteMessage from './ToWriteMessage'


function FormMessages() {
    const [message, setMessage] = useState([]);
    /*
    
    
        //get the API
        axios.get('https:/api/user')
            .then((messageX) => {
                if (messageX.status === 200) {
                    setMessage(messageX.data);
                }
            })
            .catch(function (error) {
                console.log(error.status)
            })
    
    
    
    
        //add with the API
        /* const loadMessagesFromAPI = () => {
            addMessage();
         }
    const addMessage = (Addmessage) => {
        axios.post('https:/api/user', Addmessage)

            .then(function (messageX) {
                loadMessagesFromAPI();
            })
            .catch(function (error) {
                console.log("there is an error");
            })
    }
    
    useEffect(() => {
        loadMessagesFromAPI();

    }, []);


    //const [messagesC, setCompletedMessages] = useState({ id: " ", description: " ", complete: false });
    //Checks if the message is complete or not
    const setMessageComplete = (id, complete) => {
        axios.put('https:/api/user' + id, { complete: complete })
            .then((messageX) => {
                if (messageX.status == 200) {
                    loadMessagesFromAPI();
                }
            })
            .catch(function (error) {
                console.log("there is an error")
            })

    }

    //delete the message
    const deleteMessage = (id) => {
        axios.delete('https: /api/user' + id)
            .then((messageX) => {
                if (messageX.status == 200) {
                    loadMessagesFromAPI();
                }
            })
            .catch(function (error) {
                console.log("there is an error")

            })
    }

*/



    const submitForm = (event) => {
        event.preventDefault();
        var messageDescription = event.target.elements.description.value;

        event.target.elements.description.value = "";


    }

    return (
        <>
            <form onSubmit={submitForm}>
                <textarea name="description" className="w-100" placeholder="Enter a message here">
                </textarea>
            </form>



        </>
    );


}




export default FormMessages;
/*
                        <ul>
                            <ToWriteMessage key={AddMessage.id}
                                AddMessage={AddMessage.input}
                                setMessageComplete={AddMessage.setMessageComplete}
                                deleteMessage={AddMessage.deleteMessage}>

                            </ToWriteMessage>
                        </ul>

                        */