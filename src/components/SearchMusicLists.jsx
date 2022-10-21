import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../styles/SharedLayout.css';




const SearchMusicLists = () => {
    const [musics, setMusics] = useState([]);
 
    const getData = () => {
      axios.get('https://jsonplaceholder.typicode.com/photos')
      .then((res) =>{
        console.log(res.data);
        setMusics(res.data)
      })
    }
  
    useEffect(() => {
      getData();
    }, [musics]);
  
    if(musics.length < 1){
      return(
        <div class="wait-loader"></div>
      )
    }
  
    // const [id, thumbnailUrl, title, url] = musics; destructuring.


  return (
    <main className=''>
        <h3>Browse all</h3>
        <div className='grid grid-cols-5 gap-8'>
            {
                // JSON.stringify(musics)
                musics.map((music) =>(
                    <ul key={music.id}>
                        <li>
                            <img src={music.thumbnailUrl} alt={music.title} className='rounded-md'/>
                            <a href={music.url} target='_blank' rel="noreferrer">Know More</a>
                            <p>{music.title}</p>
                        </li>
                    </ul>
                ))
            }
        </div>
    </main>
  )
}

export default SearchMusicLists
