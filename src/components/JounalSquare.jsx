import { useEffect, useState } from 'react';
import FormMessages from './FormMessage';
import Journal from './Journal';
import axios from 'axios'


function JournalSquare() {
    //const initalMessage = [{ id: id, message: message, complete: false }];

    const [items, setItems] = useState([]);
    const loadTodosFromAPI = () => {
        //get the request
        axios.get('http://localhost:8080/api/messages')
            .then((response) => {
                if (response.status === 200) {
                    setItems(response.data);
                    console.log(response);
                }
            })
            .catch(function (error) {
                console.log("This is an error" + error.status)
            })



    }
    useEffect(() => {
        loadTodosFromAPI();

    }, []);
    /*
    const formMessages = (event) => {
        event.preventDefault();
        var description = event.target.elements.description.value;
        if (description.length >= 1) {
            const a = { description: description };
            console.log(a);
        }
        else {
            console.log("Error,Needs to be more than one character");
 
        }
        event.target.elements.description.value = "";
 
        return (
            <>
                <form onSubmit={formMessages}>
                    <div className='MessageInput'>
                        <input name='description' placeholder='Message' />
 
                    </div>
                    <button type='submit' className='btnSubmit'>Submit to Journal!</button>
 
 
 
                </form>
                */


    return (
        <>

            <div style={{
                backgroundColor: "pink", height: 500, overflowY: 'auto', overflowx: 'hidden'
            }} >{
                    items.map((item) => {
                        return (
                            <ul>

                                <Journal item={item} />
                            </ul>
                        );
                    })
                }
            </div>





        </>



    );

}
export default JournalSquare;
