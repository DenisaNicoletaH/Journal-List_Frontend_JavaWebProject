import React, { useState } from 'react'

function Journal() {

    //Initial values = empty strings
    const initalMessage = [{ id: " ", message: " ", complete: true }];

    const [message, setMessage] = useState(initalMessage);

    const toggleMessage = (id) => {
        //calls the initialmessage
        const toggleMessage = [...message];
        toggleMessage.map((messageList) => {
            //sets the id
            if (messageList.id == id) {
                message.complete
            }
            else if (message == "") {
                complete = false;


            }

        })
        setMessage(toggleMessage);


    }


    return (
        <> </>

    )
}
export default Journal;