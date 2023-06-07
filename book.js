import React ,{useState,useEffect} from 'react'
import { useParams} from 'react-router-dom'
import './book.css'
const Book = () =>{
    const [movie,setmovies] = useState([])
    const [set,setisset] = useState(false)
    const handleSubmit = (e) =>{
        e.preventDefault()
        alert("your ticket booking is underprocess for payment please check your mail")
        window.location.href="/"
    }
    useEffect(()=>{
        fetch("https://api.tvmaze.com/search/shows?q=all")
        .then(res=>res.json())
        .then(data=>{setmovies(data),setisset(true)})
    },[])
    let { id }= useParams()
    const x = parseInt(id,10)
    return (
        <>
            {set && <><h1 className='header'><center>Booking Ticket For "{movie[x].show.name}" show</center></h1>
            <div className="form-container">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="number">Number:</label>
                        <input type="text" id="number" name="number" placeholder="Enter your number" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div></>}
        </>
    )
}

export default Book