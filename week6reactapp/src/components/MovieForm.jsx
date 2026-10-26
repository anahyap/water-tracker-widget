import { useState } from "react";

function MovieForm() {

const [movie, setMovie] = useState({
    title: "",
    year: "",
    rating: ""
});    

function handleChange(e) {
    setMovie({...movie, [e.target.name]: e.target.value})
}

function handleSubmit(e) {
    e.preventDefault();

    if (movie.title === "") {
        alert("No Title Entered");
        return;
    }

    console.log(movie);

    setMovie({
        title: "",
        year: "",
        rating: ""
    })
}

    return (
        <>
        
        <form onSubmit={handleSubmit}>
        <input name="title" type="text" value={movie.title} placeholder="Title" onChange={(e) => {handleChange(e)}} />
        <input name="year" type="text" value={movie.year} placeholder="Year" onChange={(e) => {handleChange(e)}} />
        <input name="rating" type="text" value={movie.rating} placeholder="Rating" onChange={(e) => {handleChange(e)}} />
        <button type="submit">Submit</button>
        </form>

        </>
    )
}

export default MovieForm 