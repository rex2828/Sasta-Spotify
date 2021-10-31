import React, { useEffect, useState } from 'react'
import './style.css'
const Lyrics = (props) => {
    const apiURL = 'https://api.lyrics.ovh';
    const [songObj, setsongObj] = useState({});
    const [lyrics, setlyrics] = useState("");

    const searchSongs = async (s) => {
        const res = await fetch(`${apiURL}/suggest/${s}`);
        let songData = await res.json();
        let songsArray = songData.data;
        let song = songsArray[0];
        let songObj = {
            title: song.title,
            artist: song.artist.name
        }
        console.log(songObj);
        setsongObj(await songObj);
    }

    const artist = songObj.artist;
    const songTitle = songObj.title;
    useEffect(() => {
        searchSongs(props.song);
    }, [props.song]);

    useEffect(() => {
        fetch(`${apiURL}/v1/${artist}/${songTitle}`).then(res => res.json()).then(data => {
            if (data.lyrics) {
                const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '\n');
                console.log(lyrics);
                setlyrics(lyrics);
            }
            else {
                setlyrics("No lyrics found");
            }
        })
    }, [songObj])

    return (
        <>
            <div id="container">
                <b>{songObj.title} - by {songObj.artist}</b><br /><br />
                {lyrics}
            </div>
        </>
    )
}
export default Lyrics;