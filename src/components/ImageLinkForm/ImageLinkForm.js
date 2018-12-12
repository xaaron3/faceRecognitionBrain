import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = (props) => {
   return (
      <div>
         <p className='f3'>
            {'Enter an image link below and this app will detect a face within the image!'}
         </p>
         <div className='center'>
            <div className='form center pa4 br3 shadow-5'>
               <input 
                  className='f4 pa2 w-70 center' 
                  type='text'
                  onChange={props.onInputChange} />
               <button 
                  className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                  onClick={props.onPictureSubmit}
                  >Detect</button>
            </div>
         </div>
      </div>
   )
}

export default ImageLinkForm;