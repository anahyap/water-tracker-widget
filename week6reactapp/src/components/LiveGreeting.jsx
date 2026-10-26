import { useState } from "react";

function LiveGreeting() {
    const [name, setName] = useState("");

    return (
        <>
        <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Type your name"
            />
            <p>Hello {name || "Stranger"}</p>
            <p>Your name has {name.length} characters</p>
        
        </>
    )
}

export default LiveGreeting 