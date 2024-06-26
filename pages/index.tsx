// import ButtonLink from 'components/atoms/Button/ButtonLink'
// import LineDivider from 'components/atoms/LineDivider'
// import FeatureCard from 'components/molecules/Card/FeatureCard'
// import PageSentence from 'components/molecules/PageSentence'
// import PricingCard from 'components/molecules/Card/PricingCard'
// import ProjectCard from 'components/molecules/Card/ProjectCard'
// import SectionSentence from 'components/molecules/SectionSentence'
// import LogoList from 'components/organisms/LogoList'
// import TestimonialList from 'components/organisms/TestimonialList'
// import PageTemplate from 'components/templates/PageTemplate'

// import Image from 'next/image'
// import TeamCard from 'components/molecules/Card/TeamCard'
import React from 'react'
import { FiFigma, FiCode, FiBox } from 'react-icons/fi'
// import CallOut from 'components/organisms/CallOut'
// import Footer from 'components/organisms/Footer'
// import Link from 'next/link'

import ButtonLink from '../components/atoms/Button/ButtonLink'
import LineDivider from '../components/atoms/LineDivider'
import FeatureCard from '../components/molecules/Card/FeatureCard'
import PageSentence from '../components/molecules/PageSentence'
import PricingCard from '../components/molecules/Card/PricingCard'
import ProjectCard from '../components/molecules/Card/ProjectCard'
import SectionSentence from '../components/molecules/SectionSentence'
import LogoList from '../components/organisms/LogoList'
import TestimonialList from '../components/organisms/TestimonialList'
import PageTemplate from '../components/templates/PageTemplate'
import Image from 'next/image'
import TeamCard from '../components/molecules/Card/TeamCard'
import CallOut from '../components/organisms/CallOut'
import Footer from '../components/organisms/Footer'
import Link from 'next/link'

const Home = () => {
  return (
    <>

    
        <PageTemplate title="Home - ICP HUB KE">
        {/* Banner Section */}
        <section className="hero-section" data-aos="">
          
        
          <div className="w-10/12 md:w-8/12 text-center page-sentence">
            <h1>
              Ushering A New Era Of Decentralized Applications
            </h1>

            <p>
              At the forefront of technology is ICP.Hub Kenya dedicated to advancing the Internet Computer ecosystem.
            </p>
            
            <div className="button-container">
              <Link href="/about" passHref>
                <ButtonLink 
                 value="Explore" 
                 href="/about"  
                />
              </Link>
            </div>
           
          </div>
        </section> 
        {/* Feature List */}
        <div
          className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center mx-auto text-black" // Added text-black class for better visibility on mobile
          data-aos=""
        >
          <PageSentence
            title="What We Offer"
          />
        </div>
        
        <section className="grid grid-cols-1 gap-5 md:grid-cols-3 mb-16">
  
          <div data-aos="">
            <FeatureCard
              title="Apply For Grants"
              description="We believe in nurturing innovation and empowering visionaries. Our grant services are designed to provide the financial support and resources needed to turn your groundbreaking ideas into reality."
              icon={<FiFigma />}
            />
          </div>
          <div
            data-aos=""
            style={{
              backgroundColor: "#FFEDED",
              transition: "background-color 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#FFE6E6";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#FFEDED";
            }}
          >
            <FeatureCard
              title="Education"
              description="Our educational programs are designed to empower individuals and organizations with the skills and expertise needed to navigate the the blockchain and Internet Computer ecosystem."
              icon={<FiCode style={{ color: "black" }} />}
            />
          </div>

          <div data-aos="">
            <FeatureCard
              title="Innovation Incubator"
              description="Our Incubator Program is at the heart of our mission to inspire creativity and drive progress within the blockchain and Internet Computer community."
              icon={<FiBox />}
            />
          </div>
          
        </section>
        {/* Logo List */}
        {/* <LogoList /> */}
        {/* How We Work */}
        <section className="grid grid-cols-1 gap-6 sm:gap-8 place-items-center lg:grid-cols-2">
        <aside className="video-container" data-aos="">
  <iframe
    className="video-iframe"
    src="https://www.youtube.com/embed/mqLoCgpDotI"
    title="Video"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</aside>

  <aside
    className="text-center sm:w-10/12 lg:text-left lg:w-full"
    data-aos=""
  >
    <SectionSentence
      title="What is the
      Vision of ICP blockchain?"
      paragraph="ICP's vision is that most of the world's software will be replaced by smart contracts. To realize that vision, ICP is designed to make smart contracts as powerful as traditional software."
      badge="WHAT WE DO"
    />
  </aside>
</section>
{/* <LogoList /> */}

        {/* Our Teams */}
        <section className="grid grid-cols-1 gap-6 sm:gap-8 place-items-center lg:grid-cols-2 px-4 sm:px-8 md:px-12 lg:px-0">
          <aside className="text-center sm:w-10/12 lg:text-left lg:w-full">
            <div className="space-y-12" data-aos="">
              <SectionSentence
                title="Working behind the scenes"
                paragraph="Our team is driven by a shared commitment to empowering individuals and businesses with the transformative potential of this groundbreaking technology."
                badge="OUR TEAM"
              />
              <Link href="/about" passHref>
                <ButtonLink
                  value="See Our Team"
                  size="small"
                  color="white"
                  style="light"
                  href="/about"
                />
              </Link>
            </div>
          </aside>
          <aside
            className="w-full h-[400px] relative sm:w-8/12 lg:w-full px-4 sm:px-8 md:px-12 lg:px-0"
            data-aos=""
          >
            <div className="w-full grid grid-cols-3 gap-8 mt-4 overflow-x-auto">
              <div className="w-32 h-32 shrink-0">
                <img src="/images/yvonne.png" alt="" />
              </div>
              <div className="w-32 h-32 shrink-0">
                <img src="/images/tevin.png" alt="" />
              </div>
              <div className="w-32 h-32 shrink-0">
                <img src="/images/Mary.png" alt="" />
              </div>
              <div className="w-32 h-32 shrink-0">
                <img src="/images/steve.png" alt="" />
              </div>
              <div className="w-32 h-32 shrink-0">
                <img src="/images/bella.png" alt="" />
              </div>
              <div className="w-32 h-32 shrink-0">
                <img src="/images/sammy.png" alt="" />
              </div>
              <div className="w-32 h-32 shrink-0">
                <img src="/images/maic.png" alt="" />
              </div>
              <div className="w-32 h-32 shrink-0">
                <img src="/images/orlah.png" alt="" />
              </div>
              <div className="w-32 h-32 shrink-0">
                <img src="/images/charles.png" alt="" />
              </div>
            </div>
          </aside>

        </section>
        <LineDivider />
       
      </PageTemplate>


      {/* Section with light background */}
      <PageTemplate title="Home - ICP HUB KE" light>
        <section data-light-section className="flex flex-col gap-16 items-center mt-0">
          <div 
            className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12 mt-0 mb-2 sm:mb-0" 
            data-aos=""
          >
            <SectionSentence 
              lightTitle="ICP has unique features" 
              lightBadge="WHAT ICP OFFERS TODAY" 
            />
          </div>
          <div className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-1 mt-2 sm:mt-0">
            <div data-aos="">
              <ProjectCard
                lightTitle="Dev friendliness"
                lightDescription="Developers can write  cansister smart contracts using popular languages like Rust, TypeScript, or Python and easily incorporate libraries from their respective ecosystem."
                imageSource="/images/DevFriendly2.png"
                imageAlt="ICP Developer languages"
              />
            </div>
            <div data-aos="">
              <ProjectCard
                lightTitle="Interoperability"
                lightDescription="ICP can interface with other smart contract blockchains and traditional (Web 2) internet resources via HTTP requests and signing capabilities. Chain-Key Cryptography has made this possible."
                imageSource="/images/Interopability.png"
                imageAlt="Interopability on ICP"
              />
            </div>
          </div>
          <div className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5 mt-0">
            <div data-aos="">
              <ProjectCard
                lightTitle="Everything On-Chain"
                lightDescription="ICP allows developers to host their applications fully on-chain (i.e frontend and smart contract), big thanks to the web-serving capability of canister smart contracts on ICP."
                imageSource="/images/Onchain2.png"
                imageAlt="Host everything on chain using ICP"
              />
            </div>
            <div data-aos="">
              <ProjectCard
                lightTitle="Very very cheap!"
                lightDescription="The cost of storing data on-chain with ICP is just $5 USD per GB per year. This is significantly lower as compared to other chains that currently exist."
                imageSource="/images/VeryCheap.png"
                imageAlt="ICP is very cheap as compared to other chains"
              />
            </div>
          </div>
        </section>

        <div data-aos="">
          <CallOut />
        </div>

      </PageTemplate>

      <Footer /> 


      
    </>
  )
}

export default Home
