import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'

const SearchForm = ()=> {
  const [album_id, setAlbum_id] = useState('');
  const [redirect, setRedirect] = useState(false);
  const handleSubmit = (e)=>{
     e.preventDefault();
      if(album_id !== '') {
        setRedirect(true);
      }else {
        setRedirect(false);
      }
     
  }
  const handleChange = (e)=>{
    setAlbum_id(e.target.value);
    setRedirect(false);
  }
   return (
            <>
              <form>
                <input 
                  name= "album_id"
                  className="search_input" 
                  type='text' 
                  placeholder="Enter the album id"
                  value= {album_id}
                  onChange= {handleChange}
                  required
                />
                <button onClick= {handleSubmit}>Get Album photos by Id</button>
              </form>
              {redirect && <Redirect to={`/${album_id}`}/>}
            </>
            
    
             
                    
   )
}

export default SearchForm;