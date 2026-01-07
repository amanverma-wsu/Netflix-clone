import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { UserAuth } from '../context/AuthContext'; 
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Movie = ({item}) => {
    const [like, setlike]= useState(false);
    const [message, setMessage] = useState('');
    const {user} = UserAuth();
    const navigate = useNavigate();

    const saveShow= async () => {
      if(user?.email){
        const movieID = doc(db, 'users', `${user?.email}`)
        try {
          setlike(!like);
          await updateDoc(movieID, {
            savedShows:arrayUnion({
              id: item.id,
              title: item.title,
              img: item.backdrop_path
            }) 
          })
          setMessage('Added to My List!');
          setTimeout(() => setMessage(''), 2000);
        } catch (error) {
          console.log(error);
          setMessage('Failed to save. Try again.');
          setTimeout(() => setMessage(''), 2000);
        }
      }else{
        navigate('/login');
      }
    }

  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
        {message && <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded z-20'>{message}</p>}
        <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item.title}</p>
                <p onClick={saveShow}>{like ? <FaHeart className='absolute top-4 left-4 text-gray-300' /> : <FaRegHeart className='absolute top-4 left-4 text-gray-300' />}</p>
        </div>
    </div>
  )
}

export default Movie