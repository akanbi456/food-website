import React from 'react'
import img2 from '../ImageFood/img2.jpg'

const About = () => {
  return (
    <div className='min-h-[620px] flex justify-center items-center py-10 border'>
        <div className='container'>
            <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
                <div className='flex items-center justify-center'>
                    <img src={img2} alt="" className='max-w-[450px] w-full mx-auto shadow-lg rounded-full '/>
                </div>
                <div className='flex-col justify-center gap-6 sm:pt-0'>
                    <p className='font-serif text-3xl uppercase text-drak'>About</p>
                    <h1 className='text-5xl font-bold text-primary font-cursive'>Burger</h1>
                    <p className='mt-3 text-sm leading-5 tracking-wide text-gray-600'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor in ea impedit perferendis nam qui temporibus molestiae! Commodi, natus vel iusto fugit quibusdam odio veritatis facere incidunt omnis sit sed ipsum maxime optio explicabo officiis, delectus similique. Eos quo beatae, nobis atque magni dicta facilis alias, possimus veritatis odit maiores laboriosam. Ducimus, aspernatur quod adipisci iusto, velit blanditiis voluptatem est eum architecto aperiam accusamus odit fuga minima ipsam. Architecto cum quae commodi repudiandae nemo? Ratione nisi, voluptate amet at porro debitis quaerat eaque reiciendis ex placeat ad! Est, commodi. Suscipit dolorem porro accusamus minima, sint veritatis autem ipsum perferendis ea!</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default About