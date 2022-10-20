import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../styles/SharedLayout.css';




const Home = () => {
  const [musics, setMusics] = useState([]);
 
  const getData = () => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then((res) =>{
      // console.log(res.data);
      setMusics(res.data)
    })
  }

  useEffect(() => {
    getData();
  }, [musics])

  // const [id, albumId, title, url] = musics;

  // const options = {
  //   method: 'GET',
  //   url: 'https://spotify81.p.rapidapi.com/tracks',
  //   params: {id: '4WNcduiCmDNfmTEz7JvmLv'},
  //   headers: {
  //     'X-RapidAPI-Key': '40d1032632mshda3c84c837afc5ap12a269jsnf3bf560cef23',
  //     'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
  //   }
  // };
  
  // axios.request(options).then(function (response) {
  //   console.log(response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });

  if(musics.length < 1){
    return(
      <div className='text-white'>Please Wait</div>
    )
  }

  return (
    <main className='text-white p-4'>
      
      {
        // JSON.stringify(musics)
        musics.map((music) =>(
          <ul key={music.id}>
            <li>
                <img src={music.albumId} alt={music.title}/>
                <a href={music.url}>Know More</a>
            </li>
          </ul>
        ))
      }

    </main>
  )
}

export default Home