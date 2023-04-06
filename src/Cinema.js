import React from 'react'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { IconButton } from '@mui/material';
import db from './firebase';
function Cinema({ name, image, id ,marked }) {
  function del() {
    const res = prompt('Are you really want to delete');
    if (res === 'yes'|| res==='YES'|| res==='Yes')
    {
      db.collection('movies').doc(id).delete();
     
    }
    
        
  }
  function mark(){
        db.collection('movies').doc(id).update({
            marked:true,
        })
    }
  return (
    <div className={'acard '}>
      
              <div className={marked?'mocard fade':'mocard'}>

                <img src={image} alt=''/>
                  </div>
                  <h4>{name}</h4>
       <div>
        <div>
          <p className='Status'>{ marked?'watched':'to be watched'}</p>
        </div>
        <div>
          
                <IconButton disabled={marked} onClick={mark} className='mark1'><DoneAllIcon className='mar'/></IconButton>
                <IconButton onClick={ del} className='mark2'><DeleteSweepIcon className='de'/></IconButton>
        </div>
                  </div>
              </div>
  )
}

export default Cinema