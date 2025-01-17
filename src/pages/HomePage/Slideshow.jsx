import React, { useEffect } from 'react'
import { Link } from 'react-router'

export default function Slideshow() {
    // useEffect(() =>{
    //     addSlideshowEffect();
    // },[])
  return (
    <div className=' mt-[100px] max-h-[800px] px-[3vw]'>
        <div className="owl-carousel owl-theme owl-loaded">
    <div className="owl-stage-outer">
        <div className="owl-stage">
            <div className="owl-item"><img src="https://www.a-ma-maniere.com/cdn/shop/files/AMMDESK1_13ed674d-efe5-431e-914c-f1735f8c6805.jpg?v=1735835301"/></div>
            <div className="owl-item"><img src='https://www.a-ma-maniere.com/cdn/shop/files/DSC07430_copy2_copy.jpg?v=1726761956'/></div>
            <div className="owl-item"><img src='https://www.a-ma-maniere.com/cdn/shop/files/JAQD3.jpg?v=1721328704'/></div>
        </div>
    </div>
    <div className="owl-nav">
        <div className="owl-prev">prev</div>
        <div className="owl-next">next</div>
    </div>
    <div className="owl-dots">
        <div className="owl-dot active"><span></span></div>
        <div className="owl-dot"><span></span></div>
        <div className="owl-dot"><span></span></div>
    </div>
</div>
    </div>
  )
}

// function addSlideshowEffect(){
//         // End drag

//         const slides = document.querySelector('.slideshow');
//         const slideCount = document.querySelectorAll('.slide').length;
        
//         const slideWidth = slides.clientWidth; // Get container width
//         let currentIndex = 0;
//         let startX = 0;
//         let currentX = 0;
//         let isDragging = false;
    
//         // Start drag
//         slides.addEventListener('mousedown', startDrag);
//         slides.addEventListener('touchstart', startDrag);
    
        
    
//         // Dragging
//         slides.addEventListener('mousemove', drag);
//         slides.addEventListener('touchmove', drag);
//         slides.addEventListener('mouseup', endDrag);
//         slides.addEventListener('touchend', endDrag);
      
//     function startDrag(e) {
//         isDragging = true;
//         startX = e.touches ? e.touches[0].clientX : e.clientX;
//         slides.style.transition = 'none'; // Disable animation during drag
//         }
//     function drag(e) {
//         if (!isDragging) return;
//         currentX = (e.touches ? e.touches[0].clientX : e.clientX) - startX;
//         slides.style.transform = `translate3d(${currentX - currentIndex * slideWidth}px, 0, 0)`;
//         }
//     function endDrag() {
//         isDragging = false;
//         slides.style.transition = 'transform 0.7s ease-in-out'; // Re-enable animation
    
//         // Snap to closest slide
//         if (Math.abs(currentX) > slideWidth / 4) {
//             currentIndex = currentX > 0 ? currentIndex - 1 : currentIndex + 1;
//         }
    
//         // Prevent out-of-bound indices
//         currentIndex = Math.max(0, Math.min(currentIndex, slideCount - 1));
    
//         // Apply final transform
//         slides.style.transform = `translate3d(${-currentIndex * slideWidth}px, 0, 0)`;
    
//         // Reset
//         currentX = 0;
//         }
    
    
// }