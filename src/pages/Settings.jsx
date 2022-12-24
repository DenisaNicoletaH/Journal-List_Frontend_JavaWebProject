import React, { useEffect, useState } from 'react';
import { Slider, Sketch, Material, Colorful, Compact, Circle, Wheel, Block, Github, Chrome } from '@uiw/react-color';
import { Alpha, Hue, ShadeSlider, Saturation, Interactive, hsvaToHslaString } from '@uiw/react-color';
import { EditableInput, EditableInputRGBA, EditableInputHSLA } from '@uiw/react-color';

function Settings() {
    const [hex, setHex] = useState(document.body.style.backgroundColor);
    const [toggle, setToggle] = useState(true);


    const [fontToggle, setFontToggle] = useState(false);



    const [fontSize, setFontSize] = useState("15px");

    const [fontWeight, setFontWeight] = useState('400');

    const [userInput, setUserInput] = useState(true);


    //I want 100

    useEffect(() => {
        document.body.style.backgroundColor = hex;
    }, [hex]);

    useEffect(() => {
        document.body.style.fontSize = fontSize;
    }, [fontSize]);

    useEffect(() => {
        document.body.style.fontWeight = fontWeight;
    }, [fontWeight]);


    return (

        <>

            <div className='SettingsButtons'>
                <div>
                    <button className="ColorChangebtn" onClick={() => { setToggle(!toggle); }}>Change Color </button>
                    {toggle && <Sketch
                        style={{ textAlign: 'center', width: '100%', }}

                        color={hex}
                        onChange={(color) => {
                            setHex(color.hex);
                        }}
                    />}


                </div>




                <div>
                    <br />
                    <button className="FontSizebtn" onClick={() => { setFontToggle(!fontToggle) }}> Font Size </button>
                    {fontToggle &&
                        <div>
                            <br></br>
                            <button onClick={() => {
                                setFontSize("10px");
                            }}>Small Font</button>
                            <br />


                            <br></br>
                            <button onClick={() => {
                                setFontSize("30px");
                            }}>Medium Font</button>
                            <br />

                            <br></br>
                            <button onClick={() => {
                                setFontSize("50px");
                            }}>Large Font</button>
                            <br />

                        </div>}

                </div>






                <div>
                    <br></br>
                    <button className="FontWeight" onClick={() => { setFontWeight(!fontWeight) }}> FontWeight</button>
                    {fontWeight &&
                        <div>

                            <div className='ButtonsFontWeight'>
                                <br></br>
                                <button onClick={() => {
                                    setFontWeight('100');
                                }}>Light</button>
                                <br />

                                <br></br>
                                <button onClick={() => {
                                    setFontWeight('400');
                                }}>Normal</button>
                                <br />

                                <br></br>
                                <button onClick={() => {
                                    setFontWeight('700');
                                }}> Bold</button>
                                <br />

                            </div>
                        </div>
                    }

                </div>


            </div>
        </>
    );
}

export default Settings;