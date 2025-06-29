import { useState, useEffect } from "react";
import {
  FaUserMd,
  FaHeartbeat,
  FaStethoscope,
  FaBrain,
  FaHospital,
  FaAmbulance,
  FaPhone,
  FaClock,
  FaCalendarCheck,
  FaShieldAlt,
  FaAward,
  FaStar,
  FaQuoteLeft,
  FaChevronRight,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

const DoctorDemo = () => {
  const [activeService, setActiveService] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const services = [
    {
      icon: <FaHeartbeat />,
      title: "Cardiology",
      description: "Comprehensive heart health evaluation and treatment",
      features: ["ECG & Echo", "Stress Testing", "Heart Disease Prevention"],
    },
    {
      icon: <FaBrain />,
      title: "Neurology",
      description: "Expert care for brain and nervous system disorders",
      features: ["EEG Testing", "Migraine Treatment", "Memory Assessment"],
    },
    {
      icon: <FaStethoscope />,
      title: "General Medicine",
      description: "Primary care for your overall health and wellness",
      features: [
        "Annual Checkups",
        "Preventive Care",
        "Chronic Disease Management",
      ],
    },
    {
      icon: <FaHospital />,
      title: "Emergency Care",
      description: "24/7 urgent medical attention when you need it most",
      features: ["Immediate Care", "Trauma Response", "Critical Stabilization"],
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Patient",
      content:
        "Dr. Smith provided exceptional care during my treatment. The attention to detail and genuine concern for my well-being made all the difference.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Patient",
      content:
        "The entire medical team was professional and caring. I felt heard and understood throughout my entire journey to recovery.",
      rating: 5,
    },
    {
      name: "Emma Williams",
      role: "Patient",
      content:
        "State-of-the-art facilities combined with compassionate care. I couldn't have asked for a better healthcare experience.",
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        
        .doctor-demo {
          font-family: 'Poppins', sans-serif;
        }
        
        .pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .5;
          }
        }
        
        .slide-up {
          animation: slideUp 0.8s ease-out;
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      <div className="doctor-demo pt-20 sm:pt-0">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-green-300/20 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="slide-up">
                <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full mb-6">
                  <FaShieldAlt className="text-sm" />
                  <span className="text-sm font-medium">
                    Trusted by 50,000+ Patients
                  </span>
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  Your Health is Our
                  <span className="text-blue-600 dark:text-blue-400">
                    {" "}
                    Top Priority
                  </span>
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Experience world-class medical care with compassion and
                  expertise. Our team of specialists is dedicated to your
                  well-being.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
                    Book Appointment
                  </button>
                  <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all">
                    <FaPhone className="inline mr-2" />
                    Emergency: (555) 911-2000
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                      15+
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Years Experience
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                      98%
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Success Rate
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                      24/7
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Available
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900/20 dark:to-green-900/20 rounded-3xl p-12 float-animation">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-500/20 rounded-full blur-2xl"></div>

                  <div className="relative z-10 text-center">
                    <div className="w-32 h-32 mx-auto mb-6 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-xl">
                      <FaUserMd className="text-5xl text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Dr. Sarah Mitchell
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Chief Medical Officer
                    </p>
                    <div className="flex justify-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-lg" />
                      ))}
                    </div>
                    <div className="flex justify-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <FaAward className="text-blue-600 dark:text-blue-400" />
                        <span className="text-gray-600 dark:text-gray-400">
                          Board Certified
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaCalendarCheck className="text-blue-600 dark:text-blue-400" />
                        <span className="text-gray-600 dark:text-gray-400">
                          50k+ Patients
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our Medical Services
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Comprehensive care across all specialties
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${
                    activeService === index
                      ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 transform scale-105"
                      : "border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600"
                  }`}
                  onClick={() => setActiveService(index)}
                >
                  <div
                    className={`text-4xl mb-4 ${
                      activeService === index
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-400 dark:text-gray-600"
                    }`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <FaChevronRight className="text-blue-500 text-xs" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
                  <FaClock className="text-2xl text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  24/7 Availability
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Round-the-clock medical care with emergency services always
                  ready to help you.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                  <FaShieldAlt className="text-2xl text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  Insurance Coverage
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We accept all major insurance plans and offer flexible payment
                  options.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-6">
                  <FaAmbulance className="text-2xl text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  Emergency Services
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Immediate response team equipped with state-of-the-art
                  ambulances.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Patient Testimonials
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Hear from those who've experienced our care
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 md:p-12 relative">
                <FaQuoteLeft className="absolute top-8 left-8 text-4xl text-blue-200 dark:text-blue-900" />

                <div className="relative z-10">
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 italic">
                    "{testimonials[currentTestimonial].content}"
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {testimonials[currentTestimonial].role}
                      </p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(testimonials[currentTestimonial].rating)].map(
                        (_, i) => (
                          <FaStar key={i} className="text-yellow-400" />
                        )
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center gap-2 mt-8">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentTestimonial
                          ? "w-8 bg-blue-600 dark:bg-blue-400"
                          : "bg-gray-300 dark:bg-gray-600"
                      }`}
                      onClick={() => setCurrentTestimonial(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Take Control of Your Health?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Schedule your appointment today and experience healthcare that
              puts you first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
                Book Appointment Now
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all">
                Download Our App
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-gray-900 dark:bg-black text-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <FaUserMd className="text-2xl text-blue-400" />
                  <span className="text-xl font-bold">MediCare Plus</span>
                </div>
                <p className="text-gray-400">
                  Your trusted partner in health and wellness since 2010.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-400 transition-colors"
                    >
                      Emergency Care
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-400 transition-colors"
                    >
                      Consultations
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-400 transition-colors"
                    >
                      Health Checkups
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-400 transition-colors"
                    >
                      Pharmacy
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-400 transition-colors"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-400 transition-colors"
                    >
                      Our Doctors
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-400 transition-colors"
                    >
                      Patient Portal
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-400 transition-colors"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Contact Info</h4>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-blue-400" />
                    123 Medical Center Blvd, NY 10001
                  </li>
                  <li className="flex items-center gap-2">
                    <FaPhone className="text-blue-400" />
                    (555) 123-4567
                  </li>
                  <li className="flex items-center gap-2">
                    <FaEnvelope className="text-blue-400" />
                    info@medicareplus.com
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
              <p>&copy; 2024 MediCare Plus. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default DoctorDemo;
