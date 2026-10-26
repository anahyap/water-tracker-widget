import { useState } from "react";

function Profile() {

    const [name, SetName] = useState("Anahya");
    const [age, SetAge] = useState(31);
    const [favColor, SetFavColor] = useState("Brown");
    const [status, SetStatus] = useState("Enrolled");

    return (
        <>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Favorite Color: {favColor}</p>
        <p>Status: {status}</p>

        <button onClick = {() => SetName("AP")}>
        Nickname?
        </button>

        <button onClick = {() => SetAge(age + 10)}>
        Age 10 Years
        </button>

        <button onClick = {() => SetFavColor("Pink")}>
        New Color?
        </button>

        <button onClick = {() => SetStatus("Not Enrolled")}>
        New Status?
        </button>
        
        </>
    )
}

export default Profile