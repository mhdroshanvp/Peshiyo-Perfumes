import React from 'react'
import './Blog.css'
import perfume1 from '../../../assets/bannerImg1.png'

function Blog() {
  return (
    <>
    <div className='Blog-container'>
        <div className='Blog-box'>
            <img src={perfume1} alt="perfume1" />
            <p className='blog-text'>
                Fragrance is more than just a pleasant aroma—it's an art form, a science, and an intimate expression of identity. Each scent carries its own story, evoking emotions, unlocking cherished memories, and leaving a lasting impression. Whether you are captivated by the timeless elegance of classic perfumes or drawn to the bold creativity of modern blends, the world of perfumery offers an endless journey of discovery. The right fragrance becomes an extension of who you are, reflecting your personality, mood, and aspirations. So embrace the power of scent, find the one that resonates with your soul, and wear it with confidence—because every fragrance has a story, and yours is waiting to be told.
            </p>
        </div>
    </div>
    </>
  )
}

export default Blog