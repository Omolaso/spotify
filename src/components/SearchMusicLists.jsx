import React from 'react';
import '../styles/SharedLayout.css';


const SearchMusicLists = ({ musics }) => {
  
    if(!musics.length){
      return(
        <div className="wait-loader"></div>
      )
    };

  return (
    <main>
        <h3 className='font-bold text-3xl my-8'>Browse all</h3>
        <div className='grid grid-cols-3 md:grid-cols-5 gap-8'>
            {
                // JSON.stringify(musics)
                musics.map((music) =>(
                    <ul key={music.id}>
                        <li>
                            <img src={music.thumbnailUrl} alt={music.title} className='rounded-md cursor-pointer'/>
                            {/* <a href={music.url} target='_blank' rel="noreferrer">Know More</a> */}
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