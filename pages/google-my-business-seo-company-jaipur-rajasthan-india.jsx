"use client"
import { useState, useEffect } from "react"
import { MapPin, Phone, Star, ChevronRight, Users, BarChart2, Award, TrendingUp, CheckCircle } from "lucide-react"

// Custom Star Component
const CustomStar = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M10 15l-5.5 3.5L5.8 12.8l-5-4.9L6.9 7.8l1.6-5.6L10 5.1l2.5-2.9L14.1 7.8l5 4.9-4.3 5.7L10 15z"
      clipRule="evenodd"
    />
  </svg>
)

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
  { name: "Suhasini Duppati", location: "Ahmedabad, Gujarat, India", review: "Increased visibility!", rating: 4 },
]

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
    const interval = setInterval(nextTestimonial, 5000) // 5000ms = 5 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 border border-green-100 rounded-lg overflow-hidden">
      <div className="p-4 border-b border-green-100">
        <h3 className="text-xl font-bold">
          What Our Clients Say in {City}, {State}, India
        </h3>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          <div className="flex gap-2">
            {[...Array(rating)].map((_, index) => (
              <CustomStar key={index} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="italic text-gray-700">{review}</p>
          <div className="flex items-center gap-3 pt-2">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="font-semibold text-blue-700">{name[0]}</span>
            </div>
            <div>
              <p className="font-semibold">{name}</p>
              <p className="text-sm text-gray-600">{location}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between p-4">
        <button onClick={prevTestimonial} className="text-blue-600">
          Previous
        </button>
        <button onClick={nextTestimonial} className="text-blue-600">
          Next
        </button>
      </div>
    </div>
  )
}

const BlogPost = ({ slug, Keyword, City, State }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState("setup")
  const [openAccordion, setOpenAccordion] = useState(null)
  // Changed from template literals to string concatenation
  const fullLocation = City + ", " + State + ", India"

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-500/5 z-0"></div>

        {/* Content Container */}
        <div className="container mx-auto px-4 py-16 md:py-28 relative z-10">
          <div
            className={
              "max-w-4xl mx-auto transition-all duration-700 " +
              (isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")
            }
          >
            <span className="inline-block mb-4 px-3 py-1 text-sm font-medium rounded-full bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 transition-all">
              {Keyword} in {fullLocation}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Grow Your Business with the Best {Keyword} in {fullLocation}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              🚀 <span className="font-semibold text-blue-600">We help you dominate Google local search</span> and boost
              your customer base in {fullLocation}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact-us/"
                className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 p-0.5 transition-all hover:shadow-lg"
              >
                <div className="relative rounded-md bg-white px-6 py-3 transition-all group-hover:bg-opacity-90">
                  <span className="font-medium text-blue-600 flex items-center">
                    Get Free Audit
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </a>
              <a
                href="/contact-us/"
                className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-green-500 to-blue-500 p-0.5 transition-all hover:shadow-lg"
              >
                <div className="relative rounded-md bg-white px-6 py-3 transition-all group-hover:bg-opacity-90">
                  <span className="font-medium text-blue-600 flex items-center">
                    Contact Experts
                    <Phone className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            {/* Introduction */}
            <section className="mb-12">
              <div className="relative rounded-xl overflow-hidden mb-8">
                <img
                  src="/abstract-geometric-shapes.png"
                  alt={Keyword + " in " + fullLocation}
                  className="w-full h-auto object-cover rounded-xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <span className="inline-block mb-2 px-3 py-1 text-sm font-medium rounded-full bg-white/20 text-white hover:bg-white/30">
                    Local SEO Experts
                  </span>
                  <h2 className="text-white text-2xl font-bold">
                    Your {Keyword} Partner in {fullLocation}
                  </h2>
                </div>
              </div>

              <p className="text-lg text-gray-700 mb-6">
                In today's digital landscape, having a strong online presence is crucial for businesses in{" "}
                {fullLocation} looking to attract local customers. {Keyword} has emerged as one of the most powerful
                tools for local businesses to increase their visibility, attract more customers, and build credibility
                in their community.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                At <span className="font-semibold text-blue-600">Our Company</span>, we specialize in comprehensive{" "}
                {Keyword} services tailored specifically for businesses in {fullLocation}. Our expert team understands
                the local market dynamics and can help your business stand out in local search results, driving more
                foot traffic and increasing your revenue.
              </p>

              <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Star className="text-yellow-500 mr-2 h-5 w-5" />
                  Why {Keyword} Matters for {fullLocation} Businesses
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>93% of local searches now happen on Google, making GMB essential for local visibility</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Businesses with complete GMB profiles receive 7x more clicks than incomplete listings</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>76% of people who search for a local business on their smartphone visit within 24 hours</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>
                      {fullLocation}'s competitive market requires businesses to optimize their local presence
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Our Services Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="text-blue-600 mr-3 h-7 w-7" />
                Comprehensive {Keyword} Services in {City}
              </h2>

              <p className="text-lg text-gray-700 mb-8">
                At Our Company, we offer end-to-end {Keyword} solutions designed to maximize your local visibility and
                drive customer engagement. Our services include:
              </p>

              {/* Custom Tabs */}
              <div className="mb-10">
                <div className="grid grid-cols-2 md:grid-cols-4 mb-6">
                  <button
                    onClick={() => setActiveTab("setup")}
                    className={
                      "py-2 px-4 text-sm font-medium transition-colors " +
                      (activeTab === "setup"
                        ? "bg-blue-100 text-blue-700 border-b-2 border-blue-600"
                        : "text-gray-600 hover:text-blue-600")
                    }
                  >
                    Setup & Optimization
                  </button>
                  <button
                    onClick={() => setActiveTab("management")}
                    className={
                      "py-2 px-4 text-sm font-medium transition-colors " +
                      (activeTab === "management"
                        ? "bg-blue-100 text-blue-700 border-b-2 border-blue-600"
                        : "text-gray-600 hover:text-blue-600")
                    }
                  >
                    Profile Management
                  </button>
                  <button
                    onClick={() => setActiveTab("reviews")}
                    className={
                      "py-2 px-4 text-sm font-medium transition-colors " +
                      (activeTab === "reviews"
                        ? "bg-blue-100 text-blue-700 border-b-2 border-blue-600"
                        : "text-gray-600 hover:text-blue-600")
                    }
                  >
                    Reviews Management
                  </button>
                  <button
                    onClick={() => setActiveTab("analytics")}
                    className={
                      "py-2 px-4 text-sm font-medium transition-colors " +
                      (activeTab === "analytics"
                        ? "bg-blue-100 text-blue-700 border-b-2 border-blue-600"
                        : "text-gray-600 hover:text-blue-600")
                    }
                  >
                    Analytics & Insights
                  </button>
                </div>

                {/* Tab Content */}
                <div className="border rounded-lg p-6 bg-gradient-to-br from-blue-50 to-white">
                  {activeTab === "setup" && (
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">GMB Account Setup & Optimization</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-gray-700 mb-4">
                            Our expert team will create or claim your Google My Business listing, ensuring all
                            information is accurate, complete, and optimized for maximum visibility in {fullLocation}'s
                            local search results.
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                              <span>Complete business information verification</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                              <span>Keyword-optimized business description</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                              <span>Strategic category selection</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                              <span>High-quality photo and video uploads</span>
                            </li>
                          </ul>
                        </div>
                        <div className="relative rounded-lg overflow-hidden h-64">
                          <img
                            src="/placeholder.svg?key=tzafe"
                            alt="GMB Account Setup & Optimization"
                            className="w-full h-full object-cover object-left"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "management" && (
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">GMB Profile Management</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="relative rounded-lg overflow-hidden h-64 ">
                          <img
                            src="/placeholder.svg?key=i0tfx"
                            alt="GMB Profile Management"
                            className="w-3/4 h-full object-cover mx-auto rounded-lg overflow-hidden"
                          />
                        </div>

                        <div>
                          <p className="text-gray-700 mb-4">
                            We provide ongoing management of your Google My Business profile to ensure it remains
                            up-to-date, engaging, and optimized for {fullLocation}'s local search algorithms.
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                              <span>Regular content updates and posts</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                              <span>Special offers and event promotions</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                              <span>Product and service showcase updates</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                              <span>Business information maintenance</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "reviews" && (
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Google Reviews Management</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-gray-700 mb-4">
                            Our team monitors and manages your Google reviews, helping you build a positive online
                            reputation that attracts more customers in {fullLocation}.
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                              <span>Review monitoring and notifications</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                              <span>Professional response drafting</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                              <span>Review generation strategies</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                              <span>Negative review management</span>
                            </li>
                          </ul>
                        </div>
                        <div className="relative rounded-lg overflow-hidden h-64">
                          <img
                            src="/placeholder.svg?key=8f411"
                            alt="Google Reviews Management"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "analytics" && (
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">GMB Analytics & Reporting</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="relative rounded-lg overflow-hidden h-64">
                          <img
                            src="/placeholder.svg?key=fh7sv"
                            alt="GMB Analytics & Reporting"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-gray-700 mb-4">
                            We provide detailed analytics and insights about your Google My Business performance,
                            helping you understand how customers find and interact with your business in {fullLocation}.
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                              <span>Monthly performance reports</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                              <span>Search query analysis</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                              <span>Customer action tracking</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                              <span>Competitor benchmarking</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Benefits Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="text-blue-600 mr-3 h-7 w-7" />
                Benefits of Professional {Keyword} in {City}
              </h2>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-500/5 to-transparent border rounded-lg overflow-hidden">
                  <div className="p-4 border-b">
                    <h3 className="text-xl font-semibold flex items-center">
                      <MapPin className="text-blue-600 mr-2 h-5 w-5" />
                      Enhanced Local Visibility
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700">
                      Appear prominently in local searches and Google Maps when potential customers in {fullLocation}{" "}
                      are looking for businesses like yours.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-500/5 to-transparent border rounded-lg overflow-hidden">
                  <div className="p-4 border-b">
                    <h3 className="text-xl font-semibold flex items-center">
                      <Users className="text-blue-600 mr-2 h-5 w-5" />
                      Increased Customer Trust
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700">
                      Build credibility with a complete, verified GMB profile and positive reviews that showcase your
                      reputation in {fullLocation}.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-500/5 to-transparent border rounded-lg overflow-hidden">
                  <div className="p-4 border-b">
                    <h3 className="text-xl font-semibold flex items-center">
                      <BarChart2 className="text-blue-600 mr-2 h-5 w-5" />
                      Higher Conversion Rates
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700">
                      Convert more searchers into customers with compelling business information, photos, and positive
                      reviews.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Ready to Dominate Local Search in {fullLocation}?
                  </h2>
                  <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                    Get a free {Keyword} audit and discover how our company can help your business attract more local
                    customers in {fullLocation}.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="/contact-us/"
                      className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 p-0.5 transition-all hover:shadow-lg"
                    >
                      <div className="relative rounded-md bg-white px-6 py-3 transition-all group-hover:bg-opacity-90">
                        <span className="font-medium text-blue-600 flex items-center">
                          Get Your Free Audit
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </span>
                      </div>
                    </a>
                    <a
                      href="/contact-us/"
                      className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-green-500 to-blue-500 p-0.5 transition-all hover:shadow-lg"
                    >
                      <div className="relative rounded-md bg-white px-6 py-3 transition-all group-hover:bg-opacity-90">
                        <span className="font-medium text-blue-600 flex items-center">
                          Schedule a Consultation
                          <Phone className="ml-2 h-4 w-4" />
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              {/* Services List */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 rounded-lg overflow-hidden mb-6">
                <div className="p-4 border-b border-blue-100">
                  <h3 className="text-xl font-bold">Our Services</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="/Google-my-business-management"
                        className="flex items-center text-gray-700 hover:text-blue-600"
                      >
                        <ChevronRight className="h-4 w-4 mr-2 text-blue-600" />
                        Google My Business Management
                      </a>
                    </li>
                    <li>
                      <a href="/GMB-optimization" className="flex items-center text-gray-700 hover:text-blue-600">
                        <ChevronRight className="h-4 w-4 mr-2 text-blue-600" />
                        GMB Optimization
                      </a>
                    </li>
                    <li>
                      <a href="/GMB-lisiting" className="flex items-center text-gray-700 hover:text-blue-600">
                        <ChevronRight className="h-4 w-4 mr-2 text-blue-600" />
                        Google My Business Listing
                      </a>
                    </li>
                    <li>
                      <a href="/GMB-review" className="flex items-center text-gray-700 hover:text-blue-600">
                        <ChevronRight className="h-4 w-4 mr-2 text-blue-600" />
                        Google My Business Reviews
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Testimonial */}
              <TestimonialSlider City={City} State={State} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Fix the export statement to use the BlogPost component
export default function Page(props) {
  // Use props if available, otherwise use defaults
  // This makes the component more flexible for both direct rendering and CSV processing
  const slug = props?.slug || "google-my-business"
  const Keyword = props?.Keyword || "Google My Business"
  const City = props?.City || "Pune"
  const State = props?.State || "Maharashtra"

  return <BlogPost slug={slug} Keyword={Keyword} City={City} State={State} />
}


