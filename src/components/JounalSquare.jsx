import { useEffect, useState } from 'react';
import Journal from './Journal';
import axios from 'axios'
import ReactTimeago from 'react-timeago';
import TimeAgo from './TimeAgo';

function JournalSquare() {

    const [items, setItems] = useState([]);

    const [friends, setFriends] = useState([])



    const loadTodosFromAPI = () => {
        //get the request messages
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


        //get friends
        axios.get('http://localhost:8080/api/friends')
            .then((response) => {
                if (response.status === 200) {
                    setFriends(response.data);
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
                console.log(error);
            })
    }


    const addFriends = (friend) => {

        axios.post('http://localhost:8080/api/friends', friend)

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
    const friendsForm = (event) => {
        event.preventDefault();
        const friendName = event.target.elements.name.value;
        const x = { userName: friendName };
        addFriends(x);

        event.target.elements.name.value = " ";

    }

    return (
        <>
            <div className='container'>
                <div className='row'>

                    <div className='col-2  border-4' style={{ borderColor: 'black', borderStyle: 'solid' }}>

                        Last Journal entry was <span> </span>
                        <ReactTimeago date={Date.now()} />

                        <form onSubmit={friendsForm}>
                            <br></br>
                            <input type="text" name='name' placeholder="Enter friend here">

                            </input>

                            <div className="FriendButton">
                                <button
                                    type='submit'
                                    style={{ width: '100%', backgroundColor: 'black', color: 'white', boxShadow: '100%' }}
                                >
                                    Add
                                </button>
                                <ul>
                                    {
                                        friends.map((item) => {
                                            return (
                                                <div className='border'>

                                                    <ul>
                                                        {item.userName}
                                                    </ul>
                                                </div>
                                            );
                                        })

                                    }
                                </ul>
                            </div>

                        </form>
                    </div>
                    <div className='col-10'>

                        <div class="btn-group dropup">
                            <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Friend
                            </button>
                            <div class="dropdown-menu">
                                <a href=''/>
                            </div>
                        </div>

                        <div style={{
                            backgroundColor: 'pink', height: 500, overflowY: 'auto', overflowx: 'hidden', border: '2px', borderColor: 'black', borderStyle: 'solid'
                        }}
                        >
                            {
                                items.map((item) => {
                                    return (
                                        <div className='border'>
                                            <ul>
                                                <Journal item={item} friend={friends} />
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
