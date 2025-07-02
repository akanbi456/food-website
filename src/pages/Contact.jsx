import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

const Contact = () => {
  return (
    <div>
        <Navbar/>
      
        
    <div className="max-w-6xl px-4 py-12 mx-auto text-gray-800">
      <h1 className="mb-4 text-4xl font-bold text-center">Contact Us</h1>
      <p className="mb-12 text-lg text-center">
          We'd love to hear from you! Whether you have feedback, want to inquire about our services, or just want to say hi — we're all ears. Our team is here to help, and we can’t wait to connect with you! 👋

      </p>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
          <button
            type="submit"
            className="py-3 text-white transition bg-red-500 rounded-md hover:bg-red-600"
          >
            Send Message
          </button>
        </form>

        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Our Location</h3>
            <p>60 leaves Street<br />Lagos Town, Nigeria</p>
          </div>
          <div>
            <p>📞 <strong>+234 8141584744</strong></p>
            <p>📧 <strong>contact@ <em>Foodieweb</em>.com</strong></p>
          </div>
         
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact