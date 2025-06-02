import React, { useState, useEffect } from "react"
  // change 1 adding in backend
  import { AnimatePresence, motion, useAnimation, useInView } from "framer-motion"

  // --- Added Google Analytics import and init ---
import ReactGA from "react-ga4";

ReactGA.initialize("G-8G0DT5KQ0P"); // <-- Replace with your GA Measurement ID
// --------------------------------------------------


  // Featured logos
  const logos = {
    "Dainik Bhaskar": "https://cdn.branch.io/branch-assets/1584594364577-og_image.png",
    "Your Story": "https://www.latestlaws.com/media/2020/10/1601641220-0.png",
    "The Times of India":
      "https://5.imimg.com/data5/SELLER/Default/2022/7/SB/NM/MJ/17709071/the-times-of-india-newspaper-advertisement-service-1000x1000.jpg",
    "Startup Story": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1E-w1cUlAKlje-2hub2O2oP4SuH-v399MLw&s",
    "ENTRACKR": "https://img-cdn.thepublive.com/fit-in/580x326/filters:format(webp)/entrackr/media/agency_attachments/2024/10/18/XDGqYgwk8PhvKwQWyFWY.png",
    "Startup India": "https://cdn-ciblk.nitrocdn.com/yCRjSXeBxSFnnIOTOXUUCWdxphGGBcnR/assets/images/optimized/rev-89f25ec/caindelhi.in/wp-content/uploads/2017/02/start-up-india.jpg",
  }

  // change 1 adding in backend

  // Sample Testimonials Data
  const testimonials = [
    {
      name: "Aesthetic Eaves Architects",
      location: "Mumbai, Maharashtra, India",
      review: "Best Service, great support.",
      rating: 5,
    },
    {
      name: "Lakshyam Defence Academy",
      location: "Surat, Gujarat, India",
      review: "Thanks for your support!",
      rating: 4,
    },
    {
      name: "Vikash Agrahari",
      location: "Pune, Maharashtra, India",
      review: "We saw an increase in foot traffic!",
      rating: 5,
    },
    {
      name: "Suhasini Duppati",
      location: "Ahmedabad, Gujarat, India",
      review: "Increased visibility!",
      rating: 4,
    },
  ]

  const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <div className="bg-gray-100 rounded-xl mb-4 border border-gray-200 overflow-hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-6 text-left text-gray-800 font-medium flex justify-between items-center min-h-[44px]"
        >
          <span>{question}</span>
          <span
            className={`text-gray-500 font-light text-2xl transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}
          >
            +
          </span>
        </button>
        {isOpen && (
          <div className="px-6 pb-6 text-gray-600 leading-relaxed">
            <p>{answer}</p>
          </div>
        )}
      </div>
    )
  }

  const TestimonialSlider = ({ City, State }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextTestimonial = () => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
      setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    }

    const { name, location, review, rating } = testimonials[currentIndex]

    useEffect(() => {
      const interval = setInterval(nextTestimonial, 5000)
      return () => clearInterval(interval)
    }, [])

    return (
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 bg-gray-100 border-b border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 m-0">
            What Our Clients Say in {City}, {State}, India
          </h3>
        </div>
        <div className="p-8 text-center">
          <div className="mb-4">
            {[...Array(rating)].map((_, i) => (
              <span key={i} className="text-2xl mr-1">
                ⭐
              </span>
            ))}
          </div>
          <p className="italic text-gray-600 mb-6 leading-relaxed">"{review}"</p>
          <div className="flex justify-center items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-semibold text-lg">{name[0]}</span>
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-900 text-sm mb-1">{name}</p>
              <p className="text-gray-500 text-xs">{location}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between bg-gray-100 border-t border-gray-200 p-4">
          <button
            onClick={prevTestimonial}
            className="border border-green-600 text-green-600 rounded-md px-4 py-2 text-xs font-medium hover:bg-green-50 transition"
          >
            Previous
          </button>
          <button
            onClick={nextTestimonial}
            className="border border-green-600 text-green-600 rounded-md px-4 py-2 text-xs font-medium hover:bg-green-50 transition"
          >
            Next
          </button>
        </div>
      </div>
    )
  }

  const BlogPost = ({ slug, Keyword, City, State }) => {
    const [isVisible, setIsVisible] = useState(false)
    const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200)
    const fullLocation = `Sector-151, Noida, India`

    useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true), 500)
      return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth)
      }
      if (typeof window !== "undefined") {
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
      }
    }, [])


      // --- Added Google Analytics pageview tracking ---
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });

      // Clarity script injection
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "rs2n2qtas2");

  }, []);
  // ---

    const isMobile = windowWidth < 768
    const isTablet = windowWidth >= 768 && windowWidth < 1024
    const isDesktop = windowWidth >= 1024

    const handleFormSubmit = async (e) => {
      e.preventDefault()
      const formData = new FormData(e.target)
      const data = {
    businessName: formData.get("businessName"),
    whatsapp: formData.get("whatsapp"),
    businessCity: formData.get("businessCity"),
    email: formData.get("email"),
    category: formData.get("category"),
    slug: formData.get("slug"),

  }


      try {
        await fetch("https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTY4MDYzMTA0Mzc1MjZhNTUzNDUxMzUi_pc", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
        alert("Thank you! Your message has been sent.")
        e.target.reset()
      } catch (error) {
        alert("Sorry, there was an error sending your message. Please try again.")
      }
    }

    return (
      <div className="min-h-screen bg-white font-sans">

      
        {/* Hero Section */}
        <section className="bg-white py-10 sm:py-20 border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4">
      <div
        className={`grid gap-12 items-center transition-all duration-700 ease-in-out ${isDesktop ? "grid-cols-2" : "grid-cols-1"}`}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <div className="text-left px-10">
          <h1
            className={`font-extrabold leading-tight mb-6 ${isMobile ? "text-3xl" : isTablet ? "text-4xl" : isDesktop ? "text-5xl" : "text-6xl"} text-gray-900`}
          >
            Unlock Success: Turn Leads into Customers with <span className="text-green-600">{Keyword}</span> & Double Revenue
          
            </h1>
          <p
            className={`text-gray-600 mb-8 max-w-lg mx-0 ${isMobile ? "text-sm" : isTablet ? "text-base" : "text-lg"}`}
          >
            Learn exact strategies and methods used by businesses to 7x their sales in {fullLocation}!
          
            </p>
          <div
            className={`flex ${isMobile ? "flex-col" : "flex-row"} justify-start gap-4`}
          >
            <a
               href="#contact-form"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold text-base shadow-md hover:bg-green-700 transition"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative rounded-xl overflow-hidden shadow-lg max-w-md w-full">
            <div className={`w-full overflow-hidden rounded-xl shadow-lg max-w-md ${isMobile ? "h-64" : isTablet ? "h-72" : "h-96"}`}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/HRHQYXYjbtE?si=wPVhK7iVvXEto21u"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


        {/* // change 2 adding in backend */}
        {/* Trust Section */}
        {/* Featured Section */}

        <section className="pb-16 featured-mrgin bg-gray-50">

          {/* Heading */}
          <motion.div
            className="md:w-2/4 mx-auto text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-bold sm:text-4xl text-2xl p-2 uppercase text-gray-800 border-b-4 border-blue-600 inline-block">
              We Featured In
            </h1>
            <p className="font-normal mt-5 sm:mt-8 text-lg text-gray-600 leading-relaxed">
              MBG Card is recognized by major platforms like YourStory and The Times of India for revolutionizing
              business growth and customer engagement through digital innovation.
            </p>
          </motion.div>

          {/* Featured List with Logos */}
          <div className="relative overflow-hidden pad-my py-8 bg-gray-50">
            <div className="whitespace-nowrap flex gap-6 w-max animate-[slide_30s_linear_infinite]">
              {[...Object.entries(logos), ...Object.entries(logos)].map(([name, logo], index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 px-6 py-3 text-lg font-semibold bg-white border-2 border-blue-500 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-blue-100 hover:border-blue-700"
                  whileHover={{ scale: 1.05 }}
                >
                  <img src={logo || "/placeholder.svg"} alt={name} className="w-10 h-10 object-contain rounded-full" />
                  <span>{name}</span>
                </motion.div>
              ))}
            </div>

            {/* Second Marquee - Moving Right to Left */}
            <div className="whitespace-nowrap marg flex gap-6 w-max animate-[slide_30s_linear_reverse_infinite] absolute top-8 left-0">
              {[...Object.entries(logos), ...Object.entries(logos)].map(([name, logo], index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 px-6 py-3 text-lg font-semibold bg-white border-2 border-blue-500 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-blue-100 hover:border-blue-700"
                  whileHover={{ scale: 1.05 }}
                >
                  <img src={logo || "/placeholder.svg"} alt={name} className="w-10 h-10 object-contain rounded-full" />
                  <span>{name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 py-12 grid gap-16 grid-cols-1 lg:grid-cols-3">
          {/* Left Main Content */}
          <article className="lg:col-span-2 prose prose-green max-w-none">
            {/* Introduction */}
                    <div
    className="relative rounded-lg overflow-hidden shadow-lg mb-8"
    style={{ height: isMobile ? "180px" : isTablet ? "220px" : "700px", width: "100%" }}
  >
    <img
      src="https://www.mbgcard.in/assets/gmb-CYbfsI6p.jpg"
      alt="ind"
      style={{ width: "100%", height: "700px", objectFit: "contain" }}
      className="mt-2"
    />
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
      <span className="bg-green-600 rounded-full px-4 py-1 text-xs font-semibold inline-block mb-2">
        Local SEO Experts
      </span>
      <h2 className="text-xl font-bold m-0">
        Your {Keyword} Partner in {fullLocation}
      </h2>
    </div>
  </div>

            <p>
              In today's digital landscape, having a strong online presence is crucial for businesses in {fullLocation}{" "}
              looking to attract local customers.
            </p>

            <p>
              At <span className="font-semibold text-green-600">Our Company</span>, we specialize in comprehensive{" "}
              {Keyword} services tailored specifically for businesses in {fullLocation}. Our expert team understands the
              local market dynamics and can help your business stand out in local search results, driving more foot
              traffic and increasing your revenue.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-8 my-8">
              <h3 className="text-lg font-bold flex items-center mb-4">
                <span className="text-yellow-400 mr-2">⭐</span>
                Why {Keyword} Matters for {fullLocation} Businesses
              </h3>
              <ul className="list-none p-0 m-0 space-y-3 text-gray-700">
  <li className="flex items-start">
    <span className="text-green-600 font-bold mr-3 mt-1">✓</span>
    Over 70% of customers prefer businesses that engage through WhatsApp for faster responses.
  </li>
  <li className="flex items-start">
    <span className="text-green-600 font-bold mr-3 mt-1">✓</span>
    WhatsApp marketing campaigns have 5x higher open rates compared to traditional email marketing.
  </li>
  <li className="flex items-start">
    <span className="text-green-600 font-bold mr-3 mt-1">✓</span>
    Businesses using WhatsApp see increased customer engagement and repeat sales within {fullLocation}.
  </li>
  <li className="flex items-start">
    <span className="text-green-600 font-bold mr-3 mt-1">✓</span>
    {fullLocation}'s competitive market demands personalized customer communication — WhatsApp marketing makes this easy.
  </li>
</ul>
   
            </div>

            <h2 className="text-2xl font-bold text-green-600 mb-6 flex items-center gap-2">
              <span>🏆</span> Our {Keyword} Services in {fullLocation}
            </h2>

           <div className={`grid gap-6 ${isMobile ? "grid-cols-1" : "grid-cols-2"} mb-8`}>
  <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm transition hover:shadow-md">
    <h3 className="font-bold text-lg flex items-center gap-2 mb-4">
      <span>📱</span> WhatsApp Marketing Optimization
    </h3>
    <p className="mb-4 text-gray-600">
      We optimize your WhatsApp marketing strategy to boost engagement and conversions in {fullLocation}.
    </p>
    <ul className="list-none p-0 m-0 space-y-2 text-gray-700">
      <li className="flex items-start">
        <span className="text-green-600 font-bold mr-3 mt-1">✓</span>
        Personalized message campaigns tailored to your audience
      </li>
      <li className="flex items-start">
        <span className="text-green-600 font-bold mr-3 mt-1">✓</span>
        Automated message flows for timely customer interaction
      </li>
    </ul>
  </div>

              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm transition hover:shadow-md">
  <h3 className="font-bold text-lg flex items-center gap-2 mb-4">
    <span>📊</span> Campaign Performance Tracking
  </h3>
  <p className="mb-4 text-gray-600">
    Monitor and analyze your WhatsApp marketing campaign results in {fullLocation}.
  </p>
  <ul className="list-none p-0 m-0 space-y-2 text-gray-700">
    <li className="flex items-start">
      <span className="text-green-600 font-bold mr-3 mt-1">✓</span>
      Detailed monthly campaign reports
    </li>
    <li className="flex items-start">
      <span className="text-green-600 font-bold mr-3 mt-1">✓</span>
      Competitor campaign benchmarking
    </li>
    <li className="flex items-start">
      <span className="text-green-600 font-bold mr-3 mt-1">✓</span>
      Optimization recommendations for better engagement
    </li>
  </ul>
</div>

            </div>

            

          

            {/* Benefits Section */}
<section className="bg-gray-50 rounded-3xl p-10 mt-20">
  <h2 className="text-2xl font-bold mb-10 flex items-center gap-2 text-green-600">
    <span>🎯</span> Why Choose Our {Keyword} Services in {fullLocation}?
  </h2>
  <div className={`grid gap-8 ${isMobile ? "grid-cols-1" : isTablet ? "grid-cols-2" : "grid-cols-3"}`}>
    <div className="bg-white p-6 rounded-xl text-center shadow-sm border border-gray-200">
      <div className="text-5xl mb-4">🚀</div>
      <h3 className="font-semibold text-lg mb-2">Proven Lead Conversion</h3>
      <p className="text-gray-600 text-sm">
        Over 500+ businesses in {fullLocation} have doubled their revenue using our {Keyword} strategies.
      </p>
    </div>
    <div className="bg-white p-6 rounded-xl text-center shadow-sm border border-gray-200">
      <div className="text-5xl mb-4">⚡</div>
      <h3 className="font-semibold text-lg mb-2">Fast Setup & Launch</h3>
      <p className="text-gray-600 text-sm">
        Get your WhatsApp Business API up and running within 48 hours with immediate marketing impact.
      </p>
    </div>
    <div className="bg-white p-6 rounded-xl text-center shadow-sm border border-gray-200">
      <div className="text-5xl mb-4">🎯</div>
      <h3 className="font-semibold text-lg mb-2">Local Market Expertise</h3>
      <p className="text-gray-600 text-sm">
        We understand {fullLocation}'s customer behavior and tailor your campaigns for maximum engagement.
      </p>
    </div>
    <div className="bg-white p-6 rounded-xl text-center shadow-sm border border-gray-200">
      <div className="text-5xl mb-4">📊</div>
      <h3 className="font-semibold text-lg mb-2">Detailed Performance Reports</h3>
      <p className="text-gray-600 text-sm">
        Receive comprehensive monthly reports on your {Keyword} campaign’s reach, engagement, and ROI in {fullLocation}.
      </p>
    </div>
    <div className="bg-white p-6 rounded-xl text-center shadow-sm border border-gray-200">
      <div className="text-5xl mb-4">🛡️</div>
      <h3 className="font-semibold text-lg mb-2">Risk-Free Trial</h3>
      <p className="text-gray-600 text-sm">
        30-day money-back guarantee if you don’t see growth in your WhatsApp marketing results.
      </p>
    </div>
    <div className="bg-white p-6 rounded-xl text-center shadow-sm border border-gray-200">
      <div className="text-5xl mb-4">🤝</div>
      <h3 className="font-semibold text-lg mb-2">Dedicated Support Team</h3>
      <p className="text-gray-600 text-sm">
        A personal account manager and 24/7 support to ensure your {Keyword} success in {fullLocation}.
      </p>
    </div>
  </div>
</section>


           {/* Process Section */}
<section className="mt-20 mb-16">
  <h2 className="text-2xl font-bold mb-10 flex items-center gap-2 text-green-600">
    <span>⚙️</span> Our {Keyword} Process for {fullLocation} Businesses
  </h2>
  <div className="grid gap-8">
    {[
      {
        number: 1,
        title: "Consultation & Needs Analysis",
        description: `We assess your current communication channels and identify key opportunities for leveraging WhatsApp Business Messaging Platform in ${fullLocation}.`,
      },
      {
        number: 2,
        title: "Custom Strategy Creation",
        description: `Develop a tailored WhatsApp Business Messaging Platform plan focusing on targeted messaging, automation, and lead nurturing specific to ${fullLocation} market.`,
      },
      {
        number: 3,
        title: "API Setup & Integration",
        description: `Implement and configure WhatsApp Business API along with automation tools to streamline customer engagement and marketing.`,
      },
      {
        number: 4,
        title: "Performance Monitoring & Optimization",
        description: `Regularly track campaign performance and refine your WhatsApp Business Messaging Platform strategy to maximize conversions and business growth in ${fullLocation}.`,
      },
    ].map(({ number, title, description }) => (
      <div key={number} className="flex flex-col md:flex-row md:items-start gap-6">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-600 text-white font-bold flex items-center justify-center text-lg">
          {number}
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-1">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    ))}
  </div>
</section>


           {/* FAQ Section */}
<section className="mt-16 max-w-3xl mx-auto">
  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-green-600">
    <span>❓</span> Common Questions
  </h2>
  <FAQItem
    question={`What is MBG Card and how does it help my business?`}
    answer={`MBG Card is a powerful digital automation platform that helps businesses in ${fullLocation} increase revenue, improve customer engagement, and automate sales processes using WhatsApp Business Messaging Platform.`}
  />
  <FAQItem
    question={`How quickly can I see results using MBG Card's WhatsApp Business Messaging Platform services?`}
    answer={`Most businesses see initial improvements within 2-4 weeks, with full benefits like increased leads and sales growth typically realized within 2-3 months.`}
  />
  <FAQItem
    question={`Is ongoing support available after I start using MBG Card's WhatsApp Business Messaging Platform services?`}
    answer={`Yes, we provide continuous monitoring, monthly performance reports, and dedicated support to help your business maintain top rankings and steady growth in ${fullLocation}.`}
  />
</section>


            <div className="bg-gray-50 rounded-xl border border-gray-200 text-center p-10">
              <h3 className="text-xl font-bold mb-4">Ready to Grow Your Business in {fullLocation}?</h3>
              <p className="mb-6 text-gray-600 max-w-md mx-auto">
                Get started today and see how our {Keyword} services can help your business thrive in {fullLocation}.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                    href="#contact-form"
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                >
                  Get Started
                </a>
                <a
                  href="#contact-form"
                  className="border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
                >
                  Learn More
                </a>
              </div>
            </div>


          </article>

          {/* Sidebar */}
  <aside id="contact-form" className="space-y-8 sticky top-20  overflow-y-auto max-h-[calc(200vh-80px)]"> 
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                <h3 className="text-lg font-bold text-gray-900 m-0">Contact Us</h3>
              </div>
              <div className="px-2 py-4">
              
      <form onSubmit={handleFormSubmit} className="grid gap-y-4">
  

    <div>
      <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
      <input type="text" id="businessName" name="businessName" required className="w-full text-sm px-10 pb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-600" />
    </div>

    <div>
      <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number</label>
      <input type="tel" id="whatsapp" name="whatsapp" required className="w-full text-sm px-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-600" />
    </div>

    <div>
      <label htmlFor="businessCity" className="block text-sm font-medium text-gray-700 mb-1">City</label>
      <input type="text" id="businessCity" name="businessCity" required className="w-full text-sm px-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-600" />
    </div>

    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
      <input type="email" id="email" name="email" required className="w-full text-sm px-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-600" />
    </div>

    <div>
      <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Business Category</label>
      <input type="text" id="category" name="category" required className="w-full text-sm px-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-600" />
    </div>

    
    {/* Hidden input for slug */}
    <input type="hidden" name="slug" value={slug} />

    <div className="text-center mt-4">
      <button type="submit" className="px-6 py-2 bg-green-600 text-white text-sm rounded-md font-medium hover:bg-green-700 transition">Submit</button>
    </div>
  </form>


              </div>
            </div>

            <TestimonialSlider City={City} State={State} />
          </aside>
        </main>
      </div>
    )
  }

  // Fix the export statement to use hardcoded values from CSV
  export default function Page() {
    // Use the values directly from the CSV that were used to generate this file
    const slug = "whatsapp-business-messaging-platform-sector-151-noida-india"
    const Keyword = "WhatsApp Business Messaging Platform"
    const City = "Sector-151"
    const State = "Noida"
    return <BlogPost slug={slug} Keyword={Keyword} City={City} State={State} />
  }
  