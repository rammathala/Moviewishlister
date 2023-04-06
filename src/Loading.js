import React from 'react'
import './Loading.css'
import handp from './Images/hand.png'
function Loading() {
    return (
        <div className='Loading'>
            <div className='loadd'>
                <h1 className='M'>M</h1>
                 <div class="loader">
                <div class="loader__container">
		<div class="loader__film">
			<img class="loader__film-img" src="https://www.dropbox.com/s/o4p5i3nfw92rhfz/film.png?raw=1" alt="" />
			<img class="loader__film-img" src="https://www.dropbox.com/s/o4p5i3nfw92rhfz/film.png?raw=1" alt="" />
		</div>
		<img class="loader__camera" src="https://www.dropbox.com/s/348z6yvtt9hbos2/camera.png?raw=1" alt="" />
	</div>
                </div>
                <img className='handpl' src={handp}/>
            </div>
            <div className='Loading_names'>
                   <h5 className='h5load'>Loading...</h5>
   <h4 className='h4load'>movie whishlister</h4>
           </div>
            </div>
  )
}

export default Loading;