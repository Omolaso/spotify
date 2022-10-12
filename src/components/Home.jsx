import React from 'react';
// import axios from 'axios';



const Home = () => {
 
  // const URL = 'https://api.spotify.com/v1/audio-analysis/6EJiVf7U0p1BBfs0qqeb1f'; 
  
  // axios.get(URL)
  // .then((res) =>{
  //   console.log(res.data);
  // })


//   fetch("https://api.spotify.com/v1/audio-analysis/6EJiVf7U0p1BBfs0qqeb1f", {
//   method: "GET",
//   headers: {
//     Authorization: `Bearer ${userAccessToken}`
//   }
// })
// .then(response => response.json())
// .then(({beats}) => {
//   beats.forEach((beat, index) => {
//     console.log(`Beat ${index} starts at ${beat.start}`);
//   })
// })

  return (
    <div className='text-white'>
      <h1>Home</h1>
    </div>
  )
}

export default Home