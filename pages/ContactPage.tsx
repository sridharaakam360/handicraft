import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-brand-light py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark">Get In Touch</h1>
          <p className="text-lg text-gray-600 mt-2">We'd love to hear from you. Contact us for any queries or feedback.</p>
        </div>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 bg-white p-8 rounded-lg shadow-lg">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-brand-primary mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-brand-primary text-white py-2 px-4 rounded-full font-bold hover:bg-brand-dark transition-colors duration-300">
                  Submit
                </button>
              </div>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-6 text-gray-700">
            <h2 className="text-2xl font-bold text-brand-primary mb-6">Contact Information</h2>
            <div>
              <h3 className="font-semibold text-brand-dark">Address:</h3>
              <p>123 Temple Street, Chennai, Tamil Nadu, India - 600001</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-dark">Email:</h3>
              <p><a href="mailto:info@sih.com" className="text-brand-primary hover:underline">info@sih.com</a></p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-dark">Phone:</h3>
              <p><a href="tel:+911234567890" className="text-brand-primary hover:underline">+91-1234567890</a></p>
            </div>
             <div>
              <h3 className="font-semibold text-brand-dark">Business Hours:</h3>
              <p>Monday - Saturday: 10:00 AM - 7:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
