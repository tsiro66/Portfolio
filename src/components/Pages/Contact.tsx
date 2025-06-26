import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { BsFillSendFill, BsSendExclamationFill } from "react-icons/bs";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import PageTransition from "../PageTransition";

const Contact = () => {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [showErrorSnackbar, setShowErrorSnackbar] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const SendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_23axr3r",
        "template_9wyh88n",
        e.target as HTMLFormElement,
        "jgAPg1JPbi2kTcQW8"
      )
      .then(() => {
        setShowSnackbar(true);
        setIsLoading(false);
        // Reset form fields after successful submission
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setShowSnackbar(false), 3000);
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        setIsLoading(false);
        setShowErrorSnackbar(true);
        setTimeout(() => setShowErrorSnackbar(false), 3000);
      });
  };

  return (
    <PageTransition>
      <div
        className="flex flex-col min-h-screen pt-16 md:pt-20 px-4 md:px-6 lg:px-8 
        bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white transition-all duration-300 ease-in-out"
      >
        {/* Hero Section */}
        <div className="w-full max-w-5xl mx-auto text-center mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Let's Work Together
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message
            and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Contact Info Cards */}
          <div
            className="group bg-white dark:bg-gray-800 rounded-xl p-6 text-center
            border-2 border-transparent hover:border-purple-500 dark:hover:border-purple-400
            shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div
              className="w-12 h-12 bg-gray-200 dark:bg-gray-700 group-hover:bg-gradient-to-br
              group-hover:from-purple-600 group-hover:to-purple-700 rounded-lg flex items-center 
              justify-center mx-auto mb-4 transition-all duration-300"
            >
              <FaEnvelope className="text-gray-500 dark:text-gray-400 group-hover:text-white text-xl transition-colors duration-300" />
            </div>
            <h3 className="font-semibold mb-2">Email Me</h3>
            <a
              href="mailto:tsiro.thodoris@gmail.com"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 
              dark:hover:text-purple-400 transition-colors duration-300"
            >
              tsiro.thodoris@gmail.com
            </a>
          </div>

          <div
            className="group bg-white dark:bg-gray-800 rounded-xl p-6 text-center
            border-2 border-transparent hover:border-fuchsia-500 dark:hover:border-fuchsia-400
            shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div
              className="w-12 h-12 bg-gray-200 dark:bg-gray-700 group-hover:bg-gradient-to-br
              group-hover:from-fuchsia-500 group-hover:to-fuchsia-600 rounded-lg flex items-center 
              justify-center mx-auto mb-4 transition-all duration-300"
            >
              <FaPhone className="text-gray-500 dark:text-gray-400 group-hover:text-white text-xl transition-colors duration-300" />
            </div>
            <h3 className="font-semibold mb-2">Call Me</h3>
            <a
              href="tel:+306912345678"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 
              dark:hover:text-purple-400 transition-colors duration-300"
            >
              +30 698 782 8639
            </a>
          </div>

          <div
            className="group bg-white dark:bg-gray-800 rounded-xl p-6 text-center
            border-2 border-transparent hover:border-yellow-500 dark:hover:border-yellow-400
            shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div
              className="w-12 h-12 bg-gray-200 dark:bg-gray-700 group-hover:bg-gradient-to-br
              group-hover:from-yellow-500 group-hover:to-yellow-600 rounded-lg flex items-center 
              justify-center mx-auto mb-4 transition-all duration-300"
            >
              <FaMapMarkerAlt className="text-gray-500 dark:text-gray-400 group-hover:text-white text-xl transition-colors duration-300" />
            </div>
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Patras, Greece
            </p>
          </div>
        </div>

        {/* Main Contact Section */}
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Form */}
          <div
            className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8
            border-2 border-gray-200 dark:border-gray-700 shadow-lg"
          >
            <h2 className="text-xl font-bold mb-6">Send Me a Message</h2>

            <form onSubmit={SendEmail} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 
                      rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                      dark:text-white transition-all duration-300"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 
                      rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                      dark:text-white transition-all duration-300"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 
                    rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                    dark:text-white transition-all duration-300"
                  placeholder="How can I help you?"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 
                    rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                    dark:text-white transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:from-fuchsia-500 hover:to-purple-600 
                  text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl cursor-pointer
                  transition duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed
                  disabled:hover:scale-100 flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <IoMdMail className="mr-2" size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Side Content */}
          <div className="space-y-6">
            {/* FAQ Style Info */}
            <div className="bg-gradient-to-br from-purple-600 to-fuchsia-500 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">
                Let's Create Something Amazing
              </h3>
              <p className="text-sm opacity-90 mb-4">
                Whether you need a complete website from scratch or want to
                improve your existing one, I'm here to help bring your vision to
                life.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <span className="text-xs">✓</span>
                  </div>
                  <p className="text-sm">Quick response within 24 hours</p>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <span className="text-xs">✓</span>
                  </div>
                  <p className="text-sm">
                    Free consultation and project estimate
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <span className="text-xs">✓</span>
                  </div>
                  <p className="text-sm">No obligation to proceed</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold mb-4 text-xl">Connect With Me</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Follow me on social media for updates and web development tips
              </p>
              <div className="flex space-x-3">
                <a
                  href="https://github.com/tsiro66"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center
                    text-gray-600 dark:text-gray-400 hover:bg-gradient-to-br hover:from-purple-600 hover:to-fuchsia-500
                    hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/thodoris-tsironis-173b1b24a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center
                    text-gray-600 dark:text-gray-400 hover:bg-gradient-to-br hover:from-purple-600 hover:to-fuchsia-500
                    hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Success Snackbar */}
        {showSnackbar && (
          <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex justify-center items-center z-50 animate-fade-in-up">
            <div className="flex items-center px-4 py-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-green-200 dark:border-green-800">
              <BsFillSendFill className="text-green-500 text-lg mr-3" />
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Message sent successfully! I'll get back to you soon.
              </div>
            </div>
          </div>
        )}

        {/* Error Snackbar */}
        {showErrorSnackbar && (
          <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex justify-center items-center z-50 animate-fade-in-up">
            <div className="flex items-center px-4 py-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-red-200 dark:border-red-800">
              <BsSendExclamationFill className="text-red-500 text-lg mr-3" />
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Failed to send message. Please try again or email me directly.
              </div>
            </div>
          </div>
        )}
      </div>
    </PageTransition>
  );
};

export default Contact;
