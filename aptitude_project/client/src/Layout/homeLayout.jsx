import React from 'react'
import Hero from '../components/hero';
import TestBar from '../components/testBar';
import WhyChooseUs from '../components/whyChooseUs';
import NewsNarticles from '../components/newsNarticles';

const HomeLayout = () => {
  return (
    <div>
        <Hero/>
        <TestBar/>
        <WhyChooseUs/>
        <NewsNarticles/>
    </div>
    
  )
}

export default HomeLayout;