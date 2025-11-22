import React from 'react'
import Header from '../components/Header/Header'
import HeroSection from '../components/HeroSection/HeroSection'
import CategoryCards from '../components/CategoryCards/CategoryCards'
import PopularCategories from '../components/PopularCategories/PopularCategories'
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts'
import BenefitsSection from '../components/BenefitsSection/BenefitsSection'
import Testimonials from '../components/Testimonials/Testimonials'
import NewsletterSignup from '../components/NewsletterSignup/NewsletterSignup'
import InstagramGallery from '../components/InstagramGallery/InstagramGallery'
import Footer from '../components/Footer/Footer'
import '../../styles/globals.css'
function Home() {
  return (
    <div>
       <Header />
       <HeroSection />
       <CategoryCards />
       <PopularCategories />
       <FeaturedProducts />
       <BenefitsSection />
       <Testimonials />
       <InstagramGallery />
       <NewsletterSignup />
       <Footer />
    </div>
  )
}

export default Home