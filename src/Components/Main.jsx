import {useState, useEffect} from "react";


export default function Main (){

 const   [meme, setMeme] = useState({
        topText : "One does not simply",
        bottomText : "Walk into Mordor",
        imgUrl : "http://i.imgflip.com/1bij.jpg"
        
    })

    const [allMemes , setAllMemes] = useState([])

    function handelClick(event){

       const {value, name} = event.currentTarget
       setMeme((prevMeme)=>({
        ...prevMeme,
       [name] :value
       }))
    }

   
    function getMemeImage() {
        console.log("clicked")
        const randomNumber = Math.floor(Math.random() * allMemes.length)
       
        const newMemeUrl = allMemes[randomNumber].url
        console.log(newMemeUrl)
        setMeme(prevMeme => ({
            ...prevMeme,
            imgUrl: newMemeUrl
        }))
    }
    
    useEffect (()=>{
        fetch ("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then (data => setAllMemes(data.data.memes))
    }, [])

    return (
        <main>
             <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder= "One does not simply"
                        name="topText"
                        onChange={handelClick}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handelClick}
                    />
                </label>
                <button onClick={getMemeImage} >Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src= {meme.imgUrl} />
                <span className="top"> {meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}