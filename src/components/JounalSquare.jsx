import { useEffect, useState } from 'react';
import Journal from './Journal';
import axios from 'axios'
import ReactTimeago from 'react-timeago';
import TimeAgo from './TimeAgo';



function JournalSquare() {


    const [messages, setMessages] = useState([]);
    const [friends, setFriends] = useState([]);
    const [favourite, setFavourite] = useState([])

    const loadMessageFromAPI = (id) => {
        //GET
        //get the request messages
        axios.get('http://localhost:8080/api/messages')
            .then((response) => {
                if (response.status === 200) {
                    setMessages(response.data);
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
                }
            })
            .catch(function (error) {
                console.log(error.status)
            })

    }

    useEffect(() => {
        loadMessageFromAPI();

    }, []);


    //POST
    const addItem = (message, id) => {
        if (id != null && id != "") {
            axios.post('http://localhost:8080/api/friends/' + id + '/messages', message)

                .then(function (response) {
                    loadMessageFromAPI();

                })
                .catch(function (error) {
                    console.log(error);
                })
        } else {
            axios.post('http://localhost:8080/api/messages', message)

                .then(function (response) {
                    loadMessageFromAPI();

                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }


    const addFriends = (friend) => {

        axios.post('http://localhost:8080/api/friends', friend)

            .then(function (response) {
                loadMessageFromAPI();

            })
            .catch(function (error) {
                console.log(error.status);
            })
    }

    useEffect(() => {
        loadMessageFromAPI();

    }, []);

    //PUT
    const setComplete = (friendId, favourite, userName) => {
        axios.put('http://localhost:8080/api/friends/' + friendId, {
            userName: userName,
            favourite: !favourite
        })
            .then((response) => {
                if (response.status == 200) {
                    loadMessageFromAPI();
                }
            })
            .catch(function (error) {
                console.log(error.status)
            })


    }

    //Delete

    const deleteMessage = (id) => {
        axios.delete('http://localhost:8080/api/messages/' + id)
            .then((response) => {
                if (response.status == 200) {
                    loadMessageFromAPI()
                }
            })
            .catch(function (error) {
                console.log(error.status)

            })
    }

    const deleteFriend = (friendId) => {
        axios.delete('http://localhost:8080/api/friends/' + friendId)
            .then((response) => {
                if (response.status == 200) {
                    console.log(response)
                    loadMessageFromAPI()
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





    return (
        <>
            <div className='container'>
                <div className='row'>


                    <div className='col-12 col-md-2  border-4' style={{ borderColor: 'black', borderStyle: 'solid' }}>

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

                            </div>

                        </form>
                        <ul>
                            {

                                friends.map((friend) => {
                                    console.log(friend.id)
                                    return (

                                        < div className='border'  >

                                            <li onClick={() => {
                                                setComplete(friend.id, friend.favourite, friend.userName);
                                            }}>
                                                {friend.userName}
                                                {friend.favourite && <div> is a favourite</div>}
                                            </li>
                                            <div className='DeleteMessagebtn'>
                                                <button onClick={() => {
                                                    deleteFriend(friend.id)
                                                }} style={{ backgroundColor: 'red' }}>Delete</button>
                                            </div>
                                        </div>

                                    );
                                })

                            }
                        </ul>
                    </div>
                    <div className='col-12 col-md-10'>



                        <div style={{
                            backgroundColor: "white", height: 500, overflowY: 'auto', overflowx: 'hidden', border: '2px', borderColor: 'black', borderStyle: 'solid', textAlign: 'center'
                        }}
                        >
                            {
                                messages.map((messages) => {
                                    return (
                                        <div className='border'>
                                            <ul>
                                                <Journal item={messages} />
                                            </ul>
                                            <div className='deleteButton'>
                                                <button onClick={() => {
                                                    deleteMessage(messages.id);
                                                }} style={{ backgroundColor: 'red', textAlign: 'center', marginLeft: '93%' }}>Delete</button>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>

                        <br></br>
                        <form onSubmit={submitForm} style={{ textAlign: 'center' }}>
                            <textarea required name="description" className="w-75" placeholder="Enter a message here" style={{ borderColor: 'black' }}>
                            </textarea>
                            <br></br>
                            <div className='urlInput'>
                                <input name='url' required placeholder='Enter a url for an image' style={{ width: '100%', borderColor: 'black' }} />
                                <br></br>
                                <select name='name' className='SelectFriend'>
                                    <option value={""}>None</option>
                                    {
                                        friends.map((message) => {
                                            return (

                                                <option value={message.id}>
                                                    {message.userName}
                                                </option>
                                            );
                                        })

                                    }
                                </select>
                            </div>

                            <div className="ButtonPadding" >
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
            </div >

        </>
    );

}

export default JournalSquare;
