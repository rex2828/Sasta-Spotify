import React, { useState } from 'react'
import youtubeApi from '../api/youtube'
function YoutubeData(props) {
    const [songData, setSong] = useState({
        videoMetaInfo: [],
        selectedVideoID: null
    });

    const [show, setShow] = useState(false);

    async function getVideo(keyword) {
        const res = await youtubeApi.get("/search", {
            params: {
                q: keyword
            }
        })
        setSong({
            videoMetaInfo: res.data.items,
            selectedVideoID: res.data.items[0].id.videoId
        })
        console.log(songData);
    }

    function generateLink() {
        if (songData.selectedVideoID) {
            return "https://www.yt-download.org/api/button/mp3/" + songData.selectedVideoID;
        }
        else {
            return "/"
        }
    }
    return (
        <div>
            <button type="button" className="btn btn-primary ml-3" onClick={() => {
                getVideo(props.song + "english song");
                setShow(!show);
            }
            }>Download Now</button>

            {
                show ? <a href={generateLink()} target="_blank">Click to Download</a> : null
            }
        </div >
    )
}

export default YoutubeData
