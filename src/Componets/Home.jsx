import React, { useState } from "react";
import Header from "../Componets/Header";
import Footer from "../Componets/Footer";
import Service from "../Componets/Service";
import ContactForm from "../Componets/ContactForm";

export const Home = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="home">
      <Header setActiveTab={setActiveTab} />
        {activeTab === "home" && (
          <section id="home">
            <h2 style={{color:"#0078D7",fontSize:"bold"}}>Welcome to Vihana Travels</h2>
            <p  style={{color:"black"}}>
            Welcome to Vihana Travels – Your Trusted Partner for Memorable Journeys!
At Vihana Travels, we understand that every journey is more than just reaching a destination—it’s about creating unforgettable experiences. 
Whether you’re planning a quick weekend retreat, a professional business trip, or an extended vacation, we’re here to bring your travel aspirations to life. 
From scenic road trips to bustling city adventures, we offer tailored travel solutions that perfectly align with your schedule and preferences. 
With a focus on safety, comfort, and dependability, we ensure each mile with us is smooth and enjoyable. 
Our unwavering commitment to exceptional service allows you to relax and leave the details to us.


            </p>

            <div className="image-gallery">
              <img src="Images\car3.jpg" alt="Gallery Image 1" style={{width:'300px',height:'300px'}}/>
              <img src="Images\backside-car-img.jpeg" alt="Gallery Image 2" style={{width:'300px',height:'300px'}} />
              <img src="Images/car4.jpg" alt="Gallery Image 3" style={{width:'300px',height:'300px'}} />
              <img src="Images/crytsta.jpeg" alt="Gallery Image 4" style={{width:'300px',height:'300px'}}/>
            </div>
          </section>
        )}

        {activeTab === "services" && (
          <>
            <h2 style={{color:"black"}}>Our Services
          </h2>
            <Service
              title="Comfortable and Safe Rides"
              description="Travel in style with our fleet of well-maintained, modern vehicles designed for comfort and safety. 
                           We follow strict maintenance and hygiene standards for your peace of mind."
            />
            <Service
              title="Flexible Travel Options"
              description="Whether you’re venturing into nature for a refreshing retreat, heading to crucial work commitments that demand punctuality, or planning joyful family outings to create lasting memories, 
                           we offer highly customizable travel packages to suit your every need."
            />
            <Service
              title="Affordable Pricing"
              description="Enjoy high-quality travel experiences at competitive rates without compromising on service or safety. We believe that memorable journeys should be accessible to everyone, which is why we provide flexible payment options and seasonal discounts. 
                           Our transparent pricing ensures there are no hidden costs, giving you the best value for your money."
            />
            <Service
              title="24/7 Customer Support"
              description="Our dedicated support team is available anytime to assist with bookings, itinerary adjustments, and any questions you may have. From providing travel recommendations to resolving last-minute changes, we are here to make your experience seamless.
                           No matter the time or place, you can count on us to be just a call away for reliable assistance."
            />
            
         </>
        )}

        {activeTab === "about" && (
          <section id="about">
            <h2 style={{color:"black"}}>About Us</h2>
            <h3 style={{color:"black"}}>Plan Your Trip with Vihana Travels Today!</h3>
            <p style={{color:"black"}}>
            At Vihana Travels, we believe that every journey should be a unique and memorable experience. 
            Whether you're exploring the serene beauty of nature, discovering vibrant cityscapes, or embarking on an adventurous getaway,
            we're here to make your travel dreams come true. Our commitment is to provide you with the highest level of service, ensuring that every moment of your trip is filled with excitement and ease. With personalized itineraries, exceptional customer care, and seamless transportation, 
            we transform your travel experience into a journey of a lifetime. Let us take care of the details, so you can focus on creating lasting memories.
            </p>
            <h3 style={{color:"black"}}>Book with Ease</h3>
            <p style={{color:"black"}}>Planning your next trip has never been easier! With our user-friendly online booking platform, you can reserve your ride in just a few clicks. Say goodbye to long waits and complicated procedures – booking your journey with Vihana Travels is simple, quick, and hassle-free.
                                      Whether you're booking for a single journey or planning an entire itinerary, our platform lets you customize your experience with flexibility.
                                      Choose your preferred vehicle, travel dates, and any special requests, all from the comfort of your home. Plus, our secure payment options ensure that your booking is safe and processed instantly.
                                      Start your journey with just a few taps, and let us take care of the rest!
              
            </p>
            <h3 style={{color:"black"}}>Ready to Start Your Adventure?</h3>
            <p style={{color:"black"}}>Let Vihana Travels be your trusted companion on your next journey. 
              Whether it’s a short escape or a long-term adventure, we promise to deliver a travel experience that’s beyond your expectations. 
              Our dedicated team is here to guide you every step of the way, ensuring you feel supported and cared for from the moment you book your ride to your final destination.
              Embrace the freedom of seamless travel, where every mile brings new possibilities. Whether you’re traveling for leisure, business, or something in between, we’re here to make your journey enjoyable, stress-free, and unforgettable. 
            </p>
            <h4 style={{color:"blue"}}>Reserve Your Ride Today and Make Memories That Last!</h4>
          </section>
        )}

        {activeTab === "contact" && (
          <section id="contact">
            <h2 style={{color:"black"}}>Contact Us</h2>
            <ContactForm />
          </section>
        )}
      <Footer />
    </div>
  );
};

export default Home;
