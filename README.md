The project's title: **Journal List.**

The application consists of a personalized journal that a user can use and write their thoughts. It contains a Home and a Settings buttons for the navigation of the website.

**HOME PAGE**:

On the main page: Home,the user will be asked to input a name,so it specifies whom is using the journal.Also,on the same page,the user will be able to input their desired message as well as url(image) in texboxes. In addition to that,the user will be able to add friends,on the left border,underneath the avatar that is specific to the user.Delete buttons are included so the user can delete the messages desired as well as the friends. There is also a Heart Switch that,when clicked, it shows the current(live) time 

**SETTINGS PAGE**:

In the Settings Page, the possibility to change the color of the app, the font size and the font weight is present with the click of a button.


**Features**:

* Avatar 
* User's name on the Journal
* Add Friends
* Change the Color,the Font Size and the Font Weight of the app, in Settings.

**Back-End part of the project:** https://github.com/DenisaNicoletaH/JournalListFinalJavaWeb 

**Libraries Used**:

https://github.com/fel1xw/react-robohash

https://github.com/anatoliygatt/heart-switch

https://reactrouter.com/en/main

https://github.com/elrumordelaluz/coloreact

https://github.com/nmn/react-timeago

With the use of Visual Studio Code, the frontend  application was made using React.

It was built using components,props as well as hooks.It also contains Axios so the BackEnd makes the HTTP request to the frontend.The project contains 6 libraries: Robo-Hash(for the avatar), The Routing, the Heart Switch(For the time),TimeAgo(for the Latest Update Time) and the ColorReact(changes the pages color)

**Running the Application**:
In order to run the application,the BackEnd of the project must be running so the frontent can receive the HTTP requests.By inserting messages,url and adding friends since Axios has the possiblity to make many requests.

**Challenges Faced**:
The challenges faced was coming up with ideas of implementation as well as implementing certain functions such as implementing the name that displays on the title since I had no idea how.I did research in order to come to a conclusion. This is the solution implemented:

```
function Navbar() {
    const [checked, setChecked] = useState(false);
    const [person, setPerson] = useState(false);
    //for  displaying the robot avatar
    const [display, setDisplay] = useState(false);
    useEffect(() => {
        setPerson(prompt("Please enter your name"));
    }, []);
    
    const [RandomName, setRandom] = useState((Math.random() + 1).toString(36).substring(7));
    const [Type, setType] = useState("cat");



    return (
        <nav className="border" style={{ height: '100px', padding: '30px' }}>



            <div className="container">
                <div className="row">

                    <div className="col-2">
                        <button className="btn btn-secondary">
                            <Link style={{ textDecoration: 'none', color: "white" }} to="/">Home</Link>
                        </button>
                    </div>

                    <div className="col-7 text-center">

                        <h1 style={{}}>
                            Journal-List Of {person}
                        </h1>



                    </div>
```
If I had more time I would've tried to implement the time that the message was posted.  I tried doing it with the TimeAgo library but the time value would always reset whenever a new message was inputed.
