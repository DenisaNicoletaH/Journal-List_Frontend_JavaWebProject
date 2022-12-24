import { useEffect, useState } from 'react';
import Journal from './Journal';
import axios from 'axios'
import ReactTimeago from 'react-timeago';
import TimeAgo from './TimeAgo';

function JournalSquare() {

    const [items, setItems] = useState([]);
    const [friends, setFriends] = useState([]);

    const loadTodosFromAPI = (id) => {
        //GET
        //get the request messages
        axios.get('http://localhost:8080/api/messages')
            .then((response) => {
                if (response.status === 200) {
                    setItems(response.data);
                    console.log(response);
                }
            })
            .catch(function (error) {
                console.log(error.status)
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
                console.log(error.status)
            })


        //get messages + friends
        axios.get('http://localhost:8080/api/friends/' + id + '/messages')
            .then((response) => {
                if (response.status === 200) {
                    setItems(response.data);
                    console.log(response);
                }
            })
            .catch(function (error) {
                console.log(error.status)
            })
    }

    useEffect(() => {
        loadTodosFromAPI();

    }, []);


    //POST
    const addItem = (item, id) => {

        axios.post('http://localhost:8080/api/friends/' + id + '/messages', item)

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
                console.log(error.status);
            })
    }

    useEffect(() => {
        loadTodosFromAPI();

    }, []);

    //PUT
    const setComplete = (friendId, complete) => {
        axios.put('http://localhost:8080/api/friends' + friendId, { complete: complete })
            .then((response) => {
                if (response.status == 200) {
                    loadTodosFromAPI();
                }
            })
            .catch(function (error) {
                console.log(error.status)
            })


    }

    const submitForm = (event) => {
        event.preventDefault();
        var messageDescription = event.target.elements.description.value;
        var userId = event.target.elements.name.value;
        const a = { message: messageDescription, image: event.target.elements.url.value };
        addItem(a, userId);

        event.target.elements.description.value = "";

    }
    const friendsForm = (event) => {
        event.preventDefault();
        const friendName = event.target.elements.name.value;
        const x = { userName: friendName };
        addFriends(x);

        event.target.elements.name.value = " ";

    }

    //get friend name for dropdown
    const friendsDropdown = (event) => {
        event.preventDefault();
        const friendSelect = event.target.elements.name.value;
        const friendId = event.target.elements.id.value;

        const pickFriend = { id: friendId, userName: friendSelect };
        addFriends(pickFriend);

        event.target.elements.name.value = "";
        event.target.elements.id.value = "";


    }

    const deleteMessage = (id) => {
        axios.delete('http://localhost:8080/api/messages/' + id)
            .then((response) => {
                if (response.status == 200) {
                    loadTodosFromAPI()
                }
            })
            .catch(function (error) {
                console.log("error" + error.status)

            })



    }

    return (
        <>
            <div className='container'>
                <div className='row'>

                    <div className='col-2  border-4' style={{ borderColor: 'black', borderStyle: 'solid' }}>

                        Last Journal modification was <span> </span>
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
                                                    <button onClick={() => {
                                                        deleteMessage(item.id);
                                                    }}>Delete</button>
                                                </div>

                                            );
                                        })

                                    }
                                </ul>
                            </div>

                        </form>
                    </div>
                    <div className='col-10'>



                        <div style={{
                            backgroundColor: "white", height: 500, overflowY: 'auto', overflowx: 'hidden', border: '2px', borderColor: 'black', borderStyle: 'solid', textAlign: 'center'
                        }}
                        >
                            {
                                items.map((item) => {
                                    return (
                                        <div className='border'>
                                            <ul>
                                                <Journal item={item} />
                                            </ul>
                                            <div className='deleteButton'>
                                                <button onClick={() => {
                                                    deleteMessage(item.id);
                                                }}>Delete</button>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>

                        <br></br>
                        <form onSubmit={submitForm} style={{ textAlign: 'center' }}>
                            <textarea required name="description" className="w-75" placeholder="Enter a message here">
                            </textarea>
                            <div className='urlInput'>
                                <input name='url' required maxLength={255} placeholder='Enter a url for an image' />
                                <select name='name' className='' >
                                    {
                                        friends.map((item) => {
                                            return (

                                                <option value={item.id}>
                                                    {item.userName}
                                                </option>
                                            );
                                        })

                                    }
                                </select>
                            </div>

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
