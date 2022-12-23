import { useEffect, useState } from 'react';
import Journal from './Journal';
import axios from 'axios'
import ReactTimeago from 'react-timeago';
import TimeAgo from './TimeAgo';

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


    const addItem = (item) => {

        axios.post('http://localhost:8080/api/messages', item)

            .then(function (response) {
                loadTodosFromAPI();

            })
            .catch(function (error) {
                console.log('This is an error' + error);
            })
    }



    const submitForm = (event) => {
        event.preventDefault();
        var messageDescription = event.target.elements.description.value;
        const a = { message: messageDescription };
        addItem(a);

        event.target.elements.description.value = "";




    }


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
            <div className='container'>
                <div className='row'>

                    <div className='col-2  border-4' style={{ borderColor: 'black', borderStyle: 'solid' }}>
                        <p>
                            Last Journal entry was <span> </span>
                            <ReactTimeago date={Date.now()} />
                        </p>
                    </div>
                    <div className='col-10'>
                        <div className='border border-4 col-2'
                            style={{ borderColor: 'black' }}>


                        </div>

                        <div style={{
                            backgroundColor: 'white', height: 500, overflowY: 'auto', overflowx: 'hidden', border: '2px', borderColor: 'black', borderStyle: 'solid'
                        }}
                        >

                            {

                                items.map((item) => {
                                    return (
                                        <div className='border'>

                                            <ul>
                                                <Journal item={item} />
                                            </ul>
                                        </div>
                                    );
                                })

                            }





                        </div>





                        <br></br>
                        <form onSubmit={submitForm}>

                            <textarea name="description" className="w-100" placeholder="Enter a message here">

                            </textarea>


                            <div className="ButtonPadding">
                                <button
                                    type='submit'
                                    style={{ width: '100%', backgroundColor: 'black', color: 'white', boxShadow: '100%' }}
                                >
                                    Submit
                                </button>





                            </div>

                        </form>



                    </div>
                </div>
            </div>
        </>



    );

}
export default JournalSquare;
