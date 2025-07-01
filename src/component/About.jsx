
import React, { useEffect, useRef, useState } from 'react';
import img2 from '../ImageFood/img2.jpg';

const About = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  // Detect scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div ref={sectionRef} className='min-h-[620px] flex justify-center items-center py-10 border'>
      <div className='container'>
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>

          {/* Image Section */}
          <div className={`flex items-center justify-center ${visible ? 'show about-img' : 'about-img'}`}>
            <img
              src={img2}
              alt="burger"
              className='max-w-[450px] w-full mx-auto shadow-2xl rounded-full border-4 border-red-500'
            />
          </div>

          {/* Text Section */}
          <div className={`flex flex-col justify-center gap-6 sm:pt-0 ${visible ? 'show about-text' : 'about-text'}`}>
            <p className='font-serif text-3xl text-red-500 uppercase'>About</p>
            <h1 className='text-5xl font-bold text-primary font-cursive'>Burger</h1>
            <p className='mt-3 text-sm leading-6 tracking-wide text-gray-600'>
              At <span className="font-semibold text-red-500">Burger Bliss</span>, we’re not just serving burgers — we’re crafting a flavorful experience that celebrates real ingredients, bold flavors, and community love. What started as a small grill on the corner has become a favorite destination for burger lovers who crave quality, creativity, and comfort in every bite.
              <br /><br />
              Every burger that leaves our kitchen is handcrafted with passion — from our seasoned, flame-grilled patties to our soft, butter-toasted buns, and fresh toppings sourced daily. We don’t cut corners. Instead, we stack our burgers high with the good stuff: farm-fresh lettuce, ripe tomatoes, melty cheese, crispy onions, and sauces you’ll want to dip everything in.
              <br /><br />
              Whether you’re into classic beef, crave spicy chicken, or want a juicy plant-based alternative, our menu is built to satisfy every craving. Pair your burger with our golden fries and a chilled milkshake, and you’ve got the full Burger Bliss experience.
              <br /><br />
              But beyond the food, we’re here for the moments. The late-night cravings, the lunch breaks, the family dinners, the first dates, and the everyday “just because” meals. We’re here to bring people together over good food made with care.
              <br /><br />
              So pull up a seat, bring your appetite, and bite into something special. This is burger joy. This is Burger Bliss.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
