import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import './home.css';

const Home = () =>{
    const [movie,setmovies] = useState([])
    const [set,setisset] = useState(false)
    useEffect(()=>{
        fetch("https://api.tvmaze.com/search/shows?q=all")
        .then(res=>res.json())
        .then(data=>{setmovies(data),setisset(true)})
        
    },[])
    return(
        <>
                {set && <><div className="heading" style={{ paddingTop: 100, fontSize: 50 }}>
                    <center>BOOK MOVIE TICKETS</center>
                </div><div className="movies">
                        <div className="images">
                            <img src={movie[0].show.image.original} style={{ height: 300, width: 200, paddingRight: 80 }} />
                            <Link to="movie/0"><div className="more"><button className="sm">More Details</button></div></Link>
                        </div>
                        <div className="images">
                            <img src={movie[1].show.image.original} style={{ height: 300, width: 200, paddingRight: 80 }} />
                            <Link to="movie/1"><div className="more"><button className="sm">More Details</button></div></Link>
                        </div>
                        <div className="images">
                            <img src={movie[2].show.image.original} style={{ height: 300, width: 200, paddingRight: 80 }} />
                            <Link to="movie/2"><div className="more"><button className="sm">More Details</button></div></Link>
                        </div>
                        <div className="images">
                            <img src={movie[3].show.image.original} style={{ height: 300, width: 200, paddingRight: 80 }} />
                            <Link to="movie/3"><div className="more"><button className="sm">More Details</button></div></Link>
                        </div>
                        <div className="images">
                            <img src={movie[4].show.image.original} style={{ height: 300, width: 200, paddingRight: 80 }} />
                            <Link to="movie/4"><div className="more"><button className="sm">More Details</button></div></Link>
                        </div>
                    </div><div className="movies">
                        <div className="images">
                            <img src={movie[5].show.image.original} style={{ height: 300, width: 200, paddingRight: 80 }} />
                            <Link to="movie/5"><div className="more"><button className="sm">More Details</button></div></Link>
                        </div>
                        <div className="images">
                            <img src={movie[6].show.image.original} style={{ height: 300, width: 200, paddingRight: 80 }} />
                            <Link to="movie/6"><div className="more"><button className="sm">More Details</button></div></Link>
                        </div>
                        <div className="images">
                            <img src={movie[7].show.image.original} style={{ height: 300, width: 200, paddingRight: 80 }} />
                            <Link to="movie/7"><div className="more"><button className="sm">More Details</button></div></Link>
                        </div>
                        <div className="images">
                            <img src={movie[8].show.image.original} style={{ height: 300, width: 200, paddingRight: 80 }} />
                            <Link to="movie/8"><div className="more"><button className="sm">More Details</button></div></Link>
                        </div>
                        <div className="images">
                            <img src={movie[9].show.image.original} style={{ height: 300, width: 200, paddingRight: 80 }} />
                            <Link to="movie/9"><div className="more"><button className="sm">More Details</button></div></Link>
                        </div>
                    </div></>}
        </>
    )
}

export default Home