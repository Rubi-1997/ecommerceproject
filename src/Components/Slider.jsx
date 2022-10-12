import {React,useState} from 'react'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import {ApiSlides} from '../ApiFolder/SliderApi'
import './Slider.css'

function Slider() {
   const [slides]=useState(ApiSlides)
   const [activeSlides,setActiveSlide]=useState(0)
   
    const arrowStyle='rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer'
      const nextSlide=()=>{
    if(activeSlides===slides.length-1){
       setActiveSlide(0)
    }
   
   else{
    setActiveSlide(activeSlides+1)
   }
  }

  const prevSlide=()=>{
    if(activeSlides=== 0){
       setActiveSlide(slides.length-1)
    }
   
   else{
    setActiveSlide(activeSlides-1)
   }
  }
 
  return (
    <div className='parentDiv h-[540px] bg-white flex items-center justify-between'>
        {/* leftarrow div */}
        <div className={arrowStyle} >
            <ArrowLeftOutlinedIcon style={{fontSize:'50px'}} onClick={prevSlide}/>
        </div>
        {/* Slide div */}
        {/* Using Api */}
        {/* {console.log(slides)} */}
        {slides.map((slide,index)=>{
          if(index===activeSlides){
            return(
            <div className={`wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-lg border-[10px] overflow-hidden relative ` + slide.background}>
            <div className='slide flex items-center justify-center h-[100%]'>
             <div className='forImage flex flex-1 justify-center items-center h-[100%]'>
              <img className='h-[100%] object-cover' src={slide.src} alt="slide_image" />
             </div>
             <div className='des flex flex-1  flex-col place-items-start justify-center ml-11'>
           <h2 className='text-[55px]'>{slide.content.h2}</h2>
           <p className='text-[30px]'>{slide.content.p}</p>
           <button className='btn'>Shop now</button>
             </div>
            </div>
  
          </div>
          )
          }
        })}
        {/* right arrow div */}
        <div className={arrowStyle} >
            <ArrowRightOutlinedIcon style={{fontSize:'50px'}} onClick={nextSlide} />
        </div>

    </div>
  )
}

export default Slider