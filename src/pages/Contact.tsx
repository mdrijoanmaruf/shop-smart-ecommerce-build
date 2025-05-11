
import React, { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Contact Us</h1>
        
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-full text-blue-500 mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="font-semibold mb-2">Our Address</h3>
            <p className="text-gray-600">
              123 Commerce Street<br />
              Suite 456<br />
              Retail City, RC 12345
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-50 rounded-full text-green-500 mb-4">
              <Phone size={24} />
            </div>
            <h3 className="font-semibold mb-2">Phone Number</h3>
            <p className="text-gray-600">
              Customer Service:<br />
              <a href="tel:+1-800-123-4567" className="text-blue-600 hover:underline">
                +1 (800) 123-4567
              </a>
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-50 rounded-full text-purple-500 mb-4">
              <Mail size={24} />
            </div>
            <h3 className="font-semibold mb-2">Email Address</h3>
            <p className="text-gray-600">
              General Inquiries:<br />
              <a href="mailto:info@shopstore.com" className="text-blue-600 hover:underline">
                info@shopstore.com
              </a>
            </p>
          </div>
        </div>
        
        {/* Contact Form and Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting} 
                className="flex items-center"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin mr-2">
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                    </span>
                    Processing...
                  </>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
          
          {/* Map and Business Hours */}
          <div className="space-y-6">
            <div className="bg-gray-200 rounded-lg overflow-hidden h-64">
              {/* Placeholder for map - in a real application, you would integrate Google Maps or similar here */}
              <div className="w-full h-full flex items-center justify-center bg-gray-300">
                <MapPin size={48} className="text-gray-500" />
                <span className="ml-2 text-gray-600">Map location</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold mb-3">Business Hours</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday:</span>
                  <span>9:00 AM - 8:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Saturday:</span>
                  <span>10:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Sunday:</span>
                  <span>11:00 AM - 5:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold mb-2">What are your shipping options?</h3>
              <p className="text-gray-600">
                We offer standard shipping (3-5 business days), express shipping (1-2 business days), 
                and international shipping (7-14 business days). Shipping costs vary based on location and order value.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold mb-2">What is your return policy?</h3>
              <p className="text-gray-600">
                We offer a 30-day return policy. Products must be unused and in their original packaging. 
                Contact our customer service team to initiate a return.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold mb-2">Do you offer international shipping?</h3>
              <p className="text-gray-600">
                Yes, we ship to most countries worldwide. International shipping typically takes 7-14 business days, 
                depending on the destination and customs processing.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold mb-2">How can I track my order?</h3>
              <p className="text-gray-600">
                Once your order ships, you'll receive a confirmation email with a tracking number. 
                You can also track your order by logging into your account on our website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
