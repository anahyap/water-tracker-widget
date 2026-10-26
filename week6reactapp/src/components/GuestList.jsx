import { useState } from "react";

function GuestList() {
    const [name, setName] = useState()
    const [guests, setGuests] = useState([]);


    function handleSubmit(e) {
        e.preventDefault()
        if (guests.name === "") {
            alert("Please Enter Name")
            return;
        }
        setGuests([...guests, name])
        setName("")
    }

    return (
        <>
         <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        value={name} 
        placeholder="Enter a Name" 
        onChange={(e) => {handleChange(e)}} 
        />

        </form>
        
        </>
    )
}