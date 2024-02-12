import React, { useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout'
import { projectStorage } from "../firebase/config";
import './dashboard.css'


export default function Dashboard() {
    const { logout } = useLogout()
    const {user} = useAuthContext();
    console.log(user);
    const [thumbnailError, setThumbnailError] = useState(null)



    
  
    const handleFileChange = (e) => {
      let selected = e.target.files[0]
  
      if (!selected) {
        setThumbnailError('Please select a file')
        return
      }
      if (!selected.type.includes('image')) {
        setThumbnailError('Selected file must be an image')
        return
      }
      if (selected.size > 100000) {
        setThumbnailError('Image file size must be less than 100kb')
        return
      }

      const file = selected;
      const storageRef = projectStorage.ref();
      const fileRef = storageRef.child(file.name);
  
      fileRef.put(file)
      
      setThumbnailError(null)
      alert('Uploaded Successfully')
      console.log('thumbnail updated')
    }

  return (
    <div>
      <div className='dash'>
        <h1>Hello <span>{user.displayName}</span></h1>
        <p>Logged In with <span>{user.email}</span></p>
        <button onClick={logout }>Logout</button>
      </div>

      <div className='up_images'>
        <span></span>
          <span>Upload Images:</span>
          <input 
            required
            type="file"
            onChange={handleFileChange}
          />
          {thumbnailError && <div className="error">{thumbnailError}</div>}
        </div>
    </div>

  )
}
