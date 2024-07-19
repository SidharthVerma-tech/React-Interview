import React from 'react'
import {useState, useEffect} from 'react'
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'
import './images.css'
const ImageSlider = (props) => {
    const {url, limit,page} = props
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null)
    const [slide, setSlide] = useState(0)
    const fetchImages = async(url) => {
        try{
            setLoading(true)
            const response = await fetch(url)
            const data = await response.json()
            if(data){
                setLoading(false)
                setImages(data)
            }
            
        }catch(error){
            setErrorMsg(error.message)
        }
        
    }
    console.log(images)
    useEffect(()=>{
        if(url !== '') fetchImages(`${url}?page=${page}?limit=${limit}`)
    }, [url])
    if(loading){
        return <div>
            Please wait 
        </div>
    }
    if(errorMsg !== null){
        return <div>
            Internal Server Error 
        </div>
    }
    const showNext = () => {
        setSlide(slide >= images.length - 1 ? 0 : slide + 1);
      };
      
      const showPrevious = () => {
        setSlide(slide <= 0 ? images.length - 1 : slide - 1);
      };
  return (

    <div className='container'>
        <BsArrowLeftCircleFill className='arrow arrow-left' onClick={()=>showPrevious()}/>
        {images.map((imageItem, idx)=>{
            return <img 
            src={imageItem.download_url} 
            alt={imageItem.download_url} 
            key={idx} 
            className={slide === idx ? 'slide' : 'slide-hidden'}
            />
        })}
        <BsArrowRightCircleFill className='arrow arrow-right' onClick={()=>showNext()}/>
        <span className='indicators'>
            {images.map((_,idx)=>{
                return <button 
                key={idx} 
                onClick={()=>setSlide(idx)}
                className={slide === idx ? 'indicator' : 'grey-indicator'}
                ></button>
            })}
        </span>
    </div>
  )
}

export default ImageSlider