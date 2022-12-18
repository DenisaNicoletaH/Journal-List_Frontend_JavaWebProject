import React, { useEffect, useState } from 'react';
import { Slider, Sketch, Material, Colorful, Compact, Circle, Wheel, Block, Github, Chrome } from '@uiw/react-color';
import { Alpha, Hue, ShadeSlider, Saturation, Interactive, hsvaToHslaString } from '@uiw/react-color';
import { EditableInput, EditableInputRGBA, EditableInputHSLA } from '@uiw/react-color';

function Settings() {
    const [hex, setHex] = useState(document.body.style.backgroundColor);
    const [toggle, setToggle] = useState(true);
    //I want 100
    useEffect(() => {
        document.body.style.backgroundColor = hex;
    }, [hex]);
    return (

        <>
            <div>
                <button className="ColorChangebtn" onClick={() => { setToggle(!toggle); }}>Change Color </button>
                {toggle && <Sketch
                    style={{ marginLeft: 20 }}
                    color={hex}
                    onChange={(color) => {
                        setHex(color.hex);
                    }}
                />}

            </div>

            <div>
                <button className="FontSizebtn"> Font Size </button>
            </div>

            <div>
                <button className="Timebtn">Modify Time</button>
            </div>

        </>
    );
}

export default Settings;