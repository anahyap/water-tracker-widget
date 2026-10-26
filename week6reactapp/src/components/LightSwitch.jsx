import { useState } from "react";

function LightSwitch() {

const [isOn, setSwitch] = useState(false)

    return (
        <>
         <p> {isOn ? "💡 ON" : "🌑 OFF"}</p>
        <button className="light-switch" type="button" onClick={() => setSwitch(!isOn)}>Toggle Light
        </button>
        </>
    )
}

export default LightSwitch 