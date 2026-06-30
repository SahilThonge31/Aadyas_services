import React from 'react'
import Hero from '../components/Hero'
import ServicesSection from '../components/ServicesSection'
import StatsSection from '../components/StatsSection'
import CTASection from '../components/CTASection'
import ServicesHighlight from '../components/ServicesHighlight'

const Home = () => {
  return (
    <>
    <title>Aadyas Services | Education, Manpower & Industrial Solutions</title>
    <meta
    name="description"
    content="Aadyas Services provides expert solutions in Education, Manpower, and Industrial Services to empower businesses, communities, and individuals across India."
    />
      <Hero />
      <ServicesHighlight />
      <ServicesSection />
      <StatsSection />
      <CTASection />
    </>
  )
}

export default Home
