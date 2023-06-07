import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {Link} from "react-router-dom"
import './details.css'

const Details = () =>{
    const [movie,setmovies] = useState([])
    const [set,setisset] = useState(false)
    useEffect(()=>{
        fetch("https://api.tvmaze.com/search/shows?q=all")
        .then(res=>res.json())
        .then(data=>{setmovies(data),setisset(true)})
    },[])
    let { id }= useParams()
    const x  = parseInt(id,10)
    return (
        <>
            {set && <div className="m">
                <img src={movie[x].show.image.original} style={{height:700,width:700,paddingTop:20}}/>
                <div className="details">
                    <h1 className="mn">{movie[x].show.name}</h1><br/>
                    <h2>Type:  {movie[x].show.type}</h2><br/>
                    <h2>Language:  {movie[x].show.language}</h2><br/>
                    <h2>Genres:  {movie[x].show.genres}</h2><br/>
                    <h2>Runtime:  {movie[x].show.runtime}</h2><br/>
                    <h2>Rating:  {movie[x].show.rating.average}</h2><br/>
                    {x==0 && (<><h2>Synopsis: </h2><br/><h3>When a rising high school football player from South Central
                    <br/>L.A. is recruited to play for Beverly Hills High, the wins,
                    <br/>losses and struggles of two families from vastly different worlds — Compton
                    <br/> and Beverly Hills — begin to collide. Inspired by the life of pro football player Spencer Paysinger.</h3></>)}<br/>
                    {x==1 && (<><h2>Synopsis: </h2><br/><h3> Follow All Rise is a courthouse drama that follows the chaotic,
                    <br/>hopeful and sometimes absurd lives of its judges, prosecutors and<br/>
                    public defenders, as they work with bailiffs, clerks and cops to get<br/>
                    justice for the people of Los Angeles amidst a flawed legal process.<br/>
                    Among them is newly appointed Judge Lola Carmichael, a highly regarded<br/>
                    and impressive deputy district attorney who doesn't intend to sit back on<br/>
                    the bench in her new role, but instead leans in, immediately pushing the boundaries and challenging the expectations of what a judge can be.</h3></>)}<br/>
                    {x==2 && (<><h2>Synopsis: </h2><br/><h3>After their graduation, the class of 2018 gathers to celebrate their last night together at their local rec center for "Grad Night," an all-night party with dancing, karaoke, games—and a rule that no one can come in or out for twelve full hours. For most the night signals their last chance to accomplish some high school dream: Nerdy Cody wants to make his mark on the school, and popular Roni wants to finally lose her virginity to her boyfriend Oz. Valedictorian Melinda plans to sneakily sell alcohol to her classmates at the party to pay her tuition, and every-girl Deanna gets ready to finally admit her feelings for her best friend Fig, who only has eyes for Roni. As the night goes on, the kids' quests overlap, intertwine, and -in some cases- implode. What would you do with your last night in high school?</h3></>)}
                    {x==3 && (<><h2>Synopsis: </h2><br/><h3> Follow All That is an American live-action, sketch comedy-variety show that aired on the Nickelodeon cable television network featuring short comedic sketches and weekly musical guests. ork.</h3></>)}<br/>
                    {x==4 && (<><h2>Synopsis: </h2><br/><h3>The new kids of comedy bring the funny as All That, America's #1 kid's sketch comedy show, returns with a new cast and a few familiar faces. From Executive Producers Kenan Thompson and Kel Mitchell.</h3></>)}<br/>
                    {x==5 && (<><h2>Synopsis: </h2><br/><h3>All Access is an exclusive Showtime TV documentary series of 30-minute specials that chronicles the lives of athletes in unarmed combat sports.</h3></>)}<br/>
                    {x==6 && (<><h2>Synopsis: </h2><br/><h3>All Saints follows the lives of the staff at All Saints Western General Hospital. Until its closure in 2004, the show primarily focused on the staff in Ward 17. Known as the "garbage ward" as it took all the overflow from the other wards.</h3></>)}<br/>
                    {x==7 && (<><h2>Synopsis: </h2><br/><h3>In a haunted Boston hospital called All Souls Hospital, Dr. Mitchell Grace's tries to find out the truth about the hauntings that dated as far back as the civil war. All Souls Hospital's lower levels used to be a mental asylum, and are haunted by ghosts of dead patients. The ghosts notably include Lazarus, an orderly who has been benevolently haunting the hospital since his days working with Dr. Ambrosius after the Civil War.</h3></>)}<br/>
                    {x==8 && (<><h2>Synopsis: </h2><br/><h3>Carlos finds himself unemployed, broke, and in debt. When he finally manages to bring home a woman for a one-night stand, everything gets even worse.</h3></>)}<br/>
                    {x==9 && (<><h2>Synopsis: </h2><br/><h3>As a kid, all Kim In Ha ever did was follow his uncle around and help him cheat in gambling. As a high school student, he hung out with his friends at the basement of a theater. As Kim In Ha gets to know Choi Jeong Won, a model student and also the son of a very rich family, In Ha tries to tempt him into doing mischevious deeds.</h3></>)}<br/>
                    <Link to={`movie/book/${x}`}><button className="book">BOOK TICKETS</button></Link>
                </div>
            </div>
            }
        </>
    )
}

export default Details