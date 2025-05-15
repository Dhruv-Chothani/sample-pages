"use client";
import React, { useState, useEffect } from "react";


const baseStyles = {
  body: {
    margin: 0,
    fontFamily: "'Inter', sans-serif",
    backgroundColor: "#f9fafb",
    color: "#1f2937",
  },
  a: {
    color: "#2563eb",
    textDecoration: "none",
  },
};

// Sample Testimonials Data
const testimonials = [
  { name: "Aesthetic Eaves Architects", location: "Mumbai, Maharashtra, India", review: "Best Service, great support.", rating: 5 },
  { name: "Lakshyam Defence Academy", location: "Surat, Gujarat, India", review: "Thanks for your support!", rating: 4 },
  { name: "Vikash Agrahari", location: "Pune, Maharashtra, India", review: "We saw an increase in foot traffic!", rating: 5 },
  { name: "Suhasini Duppati", location: "Ahmedabad, Gujarat, India", review: "Increased visibility!", rating: 4 },
];

const TestimonialSlider = ({ City, State }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const { name, location, review, rating } = testimonials[currentIndex];

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000); // 5000ms = 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.testimonialCard}>
      <div style={styles.testimonialHeader}>
        <h3 style={styles.testimonialTitle}>What Our Clients Say in {City}, {State}, India</h3>
      </div>
      <div style={styles.testimonialBody}>
        <div style={styles.testimonialContent}>
          <div style={styles.starContainer}>
            {[...Array(rating)].map((_, index) => (
              <span key={index} style={styles.star}>⭐</span>
            ))}
          </div>
          <p style={styles.testimonialText}>"{review}"</p>
          <div style={styles.testimonialUser}>
            <div style={styles.testimonialAvatar}>
              <span style={styles.testimonialAvatarText}>{name[0]}</span>
            </div>
            <div style={styles.testimonialUserInfo}>
              <p style={styles.testimonialName}>{name}</p>
              <p style={styles.testimonialLocation}>{location}</p>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.testimonialControls}>
        <button onClick={prevTestimonial} style={styles.testimonialButton}>Previous</button>
        <button onClick={nextTestimonial} style={styles.testimonialButton}>Next</button>
      </div>
    </div>
  );
};

const BlogPost = ({ slug, Keyword, City, State }) => {
  const [isVisible, setIsVisible] = useState(false);
  const fullLocation = `Some City, Some State, India`;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={styles.container}>
      {/* Hero Section - Enhanced with gradient background */}
      <section style={styles.heroSection}>
        <div style={styles.heroBackground}></div>
        <div style={styles.heroContent}>
          <div style={{
            ...styles.heroInner,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}>
            <span style={styles.heroTag}>{Keyword} in {fullLocation}</span>
            <h1 style={styles.heroTitle}>Grow Your Business with the Best {Keyword} in {fullLocation}</h1>
            <p style={styles.heroText}>
              🚀 <span style={styles.heroTextHighlight}>We help you dominate Google local search</span> and boost your customer base in {fullLocation}.
            </p>
            <div style={{ ...styles.buttonContainer, flexDirection: window.innerWidth > 640 ? "row" : "column" }}>
              <a href="/contact-us/" style={styles.primaryButton}>
                Get Free Audit
                <span style={styles.chevronRight}></span>
              </a>
              <a href="/contact-us/" style={styles.secondaryButton}>
                Contact Experts
                <span style={styles.phoneIcon}>📞</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div style={styles.contentContainer}>
        <div style={{
          ...styles.gridContainer,
          gridTemplateColumns: window.innerWidth >= 1024 ? "2fr 1fr" : "1fr",
        }}>
          {/* Main Content Area */}
          <div style={styles.mainContent}>
            {/* Introduction */}
            <section style={styles.section}>
              <div style={styles.imageContainer}>
                <img 
                  src="/placeholder.svg?key=8q28b" 
                  alt={`google my business seo company ahmedabad gujarat india in ${fullLocation}`} 
                  style={styles.image} 
                />
                <div style={styles.imageOverlay}>
                  <span style={styles.imageTag}>Local SEO Experts</span>
                  <h2 style={styles.imageTitle}>Your {Keyword} Partner in {fullLocation}</h2>
                </div>
              </div>

              <p style={styles.paragraph}>
                In today's digital landscape, having a strong online presence is crucial for businesses in {fullLocation} looking to attract local customers.
              </p>

              <p style={styles.paragraph}>
                At <span style={{ fontWeight: "600", color: "#2563eb" }}>Our Company</span>, we specialize in comprehensive {Keyword} services tailored specifically for businesses in {fullLocation}. Our expert team understands the local market dynamics and can help your business stand out in local search results, driving more foot traffic and increasing your revenue.
              </p>

              <div style={styles.highlightBox}>
                <h3 style={styles.featureTitle}>
                  <span style={{ color: "#eab308", marginRight: "8px" }}>⭐</span>
                  Why {Keyword} Matters for {fullLocation} Businesses
                </h3>
                <ul style={styles.featureList}>
                  <li style={styles.featureItem}>
                    <span style={styles.checkIcon}>✓</span>
                    <span>93% of local searches now happen on Google, making GMB essential for local visibility</span>
                  </li>
                  <li style={styles.featureItem}>
                    <span style={styles.checkIcon}>✓</span>
                    <span>Businesses with complete GMB profiles receive 7x more clicks than incomplete listings</span>
                  </li>
                  <li style={styles.featureItem}>
                    <span style={styles.checkIcon}>✓</span>
                    <span>76% of people who search for a local business on their smartphone visit within 24 hours</span>
                  </li>
                  <li style={styles.featureItem}>
                    <span style={styles.checkIcon}>✓</span>
                    <span>{fullLocation}'s competitive market requires businesses to optimize their local presence</span>
                  </li>
                </ul>
              </div>
              
              {/* Services Section */}
              <h2 style={styles.sectionTitle}>
                <span style={{ color: "#2563eb", marginRight: "10px" }}>🏆</span>
                Our {Keyword} Services in {fullLocation}
              </h2>
              
              <div style={{ display: "grid", gridTemplateColumns: window.innerWidth >= 768 ? "1fr 1fr" : "1fr", gap: "20px", marginBottom: "32px" }}>
                <div style={styles.featureBox}>
                  <h3 style={styles.featureTitle}>
                    <span style={styles.featureIcon}>🔍</span>
                    Profile Optimization
                  </h3>
                  <p style={{ marginBottom: "16px" }}>
                    We optimize your online presence to ensure maximum visibility in {fullLocation}.
                  </p>
                  <ul style={styles.featureList}>
                    <li style={styles.featureItem}>
                      <span style={styles.checkIcon}>✓</span>
                      <span>Keyword optimization</span>
                    </li>
                    <li style={styles.featureItem}>
                      <span style={styles.checkIcon}>✓</span>
                    </li>
                  </ul>
                </div>
                
                <div style={styles.featureBox}>
                  <h3 style={styles.featureTitle}>
                    <span style={styles.featureIcon}>📊</span>
                    Performance Tracking
                  </h3>
                  <p style={{ marginBottom: "16px" }}>
                    Monitor and analyze your performance in {fullLocation}'s local market.
                  </p>
                  <ul style={styles.featureList}>
                    <li style={styles.featureItem}>
                      <span style={styles.checkIcon}>✓</span>
                      <span>Monthly reports</span>
                    </li>
                    <li style={styles.featureItem}>
                      <span style={styles.checkIcon}>✓</span>
                      <span>Competitor analysis</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* CTA Section */}
              <div style={styles.ctaSection}>
                <h3 style={styles.ctaTitle}>Ready to Grow Your Business in {fullLocation}?</h3>
                <p style={styles.ctaText}>
                  Get started today and see how our {Keyword} services can help your business thrive in {fullLocation}.
                </p>
                <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
                  <a href="/contact-us/" style={styles.primaryButton}>
                    Get Started
                    <span style={styles.chevronRight}></span>
                  </a>
                  <a href="/learn-more/" style={styles.secondaryButton}>
                    Learn More
                    <span style={styles.chevronRight}></span>
                  </a>
                </div>
              </div>
            </section>
          </div>
          
          {/* Sidebar */}
          <div>
            <TestimonialSlider City={City} State={State} />
            
            <div style={{ 
              border: "1px solid #e5e7eb", 
              borderRadius: "12px", 
              overflow: "hidden",
              marginBottom: "24px",
              background: "linear-gradient(to bottom right, #f9fafb, #ffffff)"
            }}>
              <div style={{ 
                padding: "16px", 
                borderBottom: "1px solid #e5e7eb", 
                backgroundColor: "#f9fafb" 
              }}>
                <h3 style={{ fontSize: "18px", fontWeight: "700" }}>Contact Us</h3>
              </div>
              <div style={{ padding: "20px" }}>
                <p style={{ marginBottom: "16px" }}>
                  Ready to improve your {Keyword} in {fullLocation}? Contact our team today!
                </p>
                <a 
                  href="/contact-us/" 
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "12px",
                    backgroundColor: "#2563eb",
                    color: "white",
                    borderRadius: "6px",
                    fontWeight: "500",
                    textDecoration: "none"
                  }}
                >
                  Contact Us 📞
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Define static styles object
const styles = {
  "container": {
    "maxWidth": "1200px",
    "margin": "0 auto",
    "padding": "20px",
    "fontFamily": "'Poppins', sans-serif"
  },
  "heroSection": {
    "position": "relative",
    "marginBottom": "40px",
    "borderRadius": "12px",
    "overflow": "hidden"
  },
  "heroBackground": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0,
    "background": "linear-gradient(to right, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.05))"
  },
  "heroContent": {
    "position": "relative",
    "padding": "80px 20px"
  },
  "heroInner": {
    "maxWidth": "800px",
    "margin": "0 auto",
    "textAlign": "center",
    "transition": "opacity 0.7s, transform 0.7s"
  },
  "heroTag": {
    "display": "inline-block",
    "padding": "8px 16px",
    "backgroundColor": "rgba(59, 130, 246, 0.1)",
    "color": "#2563eb",
    "borderRadius": "20px",
    "marginBottom": "16px",
    "fontWeight": "500",
    "transition": "background-color 0.3s",
    "cursor": "pointer"
  },
  "heroTitle": {
    "fontSize": "42px",
    "fontWeight": "800",
    "marginBottom": "20px",
    "color": "#111827",
    "lineHeight": "1.2"
  },
  "heroText": {
    "fontSize": "20px",
    "marginBottom": "32px",
    "color": "#4b5563",
    "lineHeight": "1.6"
  },
  "heroTextHighlight": {
    "fontWeight": "600",
    "color": "#2563eb"
  },
  "buttonContainer": {
    "display": "flex",
    "gap": "16px",
    "justifyContent": "center"
  },
  "primaryButton": {
    "padding": "14px 28px",
    "background": "linear-gradient(to right, #2563eb, #4f46e5)",
    "color": "white",
    "borderRadius": "8px",
    "fontWeight": "600",
    "textDecoration": "none",
    "boxShadow": "0 4px 6px rgba(0,0,0,0.1)",
    "transition": "all 0.3s ease",
    "border": "none",
    "position": "relative",
    "overflow": "hidden"
  },
  "secondaryButton": {
    "padding": "14px 28px",
    "backgroundColor": "white",
    "color": "#2563eb",
    "border": "1px solid #2563eb",
    "borderRadius": "8px",
    "fontWeight": "600",
    "textDecoration": "none",
    "transition": "all 0.3s ease",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "contentContainer": {
    "maxWidth": "1200px",
    "margin": "0 auto",
    "padding": "0 20px"
  },
  "gridContainer": {
    "display": "grid",
    "gap": "32px"
  },
  "mainContent": {
    "padding": "32px",
    "backgroundColor": "#ffffff",
    "borderRadius": "12px",
    "boxShadow": "0 4px 20px rgba(0,0,0,0.05)",
    "border": "1px solid rgba(0,0,0,0.05)"
  },
  "section": {
    "marginBottom": "40px"
  },
  "sectionTitle": {
    "fontSize": "24px",
    "fontWeight": "700",
    "color": "#111827",
    "marginBottom": "20px",
    "display": "flex",
    "alignItems": "center"
  },
  "featureBox": {
    "background": "linear-gradient(to bottom right, #f0f9ff, #ffffff)",
    "border": "1px solid #e0f2fe",
    "borderRadius": "12px",
    "padding": "24px",
    "marginBottom": "24px"
  },
  "featureTitle": {
    "fontSize": "18px",
    "fontWeight": "600",
    "color": "#111827",
    "marginBottom": "12px",
    "display": "flex",
    "alignItems": "center"
  },
  "featureIcon": {
    "color": "#2563eb",
    "marginRight": "10px",
    "width": "20px",
    "height": "20px",
    "display": "inline-block"
  },
  "featureList": {
    "display": "flex",
    "flexDirection": "column",
    "gap": "12px"
  },
  "featureItem": {
    "display": "flex",
    "alignItems": "flex-start"
  },
  "checkIcon": {
    "color": "#2563eb",
    "marginRight": "10px",
    "marginTop": "2px",
    "width": "18px",
    "height": "18px",
    "flexShrink": "0",
    "display": "inline-block"
  },
  "testimonialCard": {
    "backgroundColor": "white",
    "borderRadius": "12px",
    "boxShadow": "0 4px 15px rgba(0,0,0,0.05)",
    "marginBottom": "32px",
    "overflow": "hidden",
    "border": "1px solid #f0f0f0",
    "background": "linear-gradient(to bottom right, #f0f9ff, #ffffff)"
  },
  "testimonialHeader": {
    "padding": "20px",
    "borderBottom": "1px solid #e5e7eb",
    "backgroundColor": "#f9fafb"
  },
  "testimonialTitle": {
    "fontSize": "20px",
    "fontWeight": "700",
    "color": "#111827"
  },
  "testimonialBody": {
    "padding": "24px"
  },
  "testimonialContent": {
    "marginBottom": "20px"
  },
  "starContainer": {
    "display": "flex",
    "marginBottom": "12px"
  },
  "star": {
    "marginRight": "4px",
    "fontSize": "18px",
    "color": "#eab308"
  },
  "testimonialText": {
    "fontSize": "18px",
    "color": "#4b5563",
    "marginBottom": "20px",
    "fontStyle": "italic",
    "lineHeight": "1.6"
  },
  "testimonialUser": {
    "display": "flex",
    "alignItems": "center"
  },
  "testimonialAvatar": {
    "width": "48px",
    "height": "48px",
    "borderRadius": "50%",
    "backgroundColor": "#e0f2fe",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "marginRight": "16px",
    "boxShadow": "0 2px 5px rgba(0,0,0,0.05)"
  },
  "testimonialAvatarText": {
    "color": "#2563eb",
    "fontWeight": "600",
    "fontSize": "18px"
  },
  "testimonialUserInfo": {},
  "testimonialName": {
    "fontWeight": "700",
    "color": "#111827",
    "marginBottom": "4px",
    "fontSize": "16px"
  },
  "testimonialLocation": {
    "fontSize": "14px",
    "color": "#6b7280"
  },
  "testimonialControls": {
    "display": "flex",
    "justifyContent": "space-between",
    "padding": "16px 20px",
    "borderTop": "1px solid #e5e7eb",
    "backgroundColor": "#f9fafb"
  },
  "testimonialButton": {
    "padding": "10px 20px",
    "backgroundColor": "#2563eb",
    "color": "white",
    "border": "none",
    "borderRadius": "6px",
    "cursor": "pointer",
    "fontWeight": "500",
    "transition": "background-color 0.2s ease"
  },
  "ctaSection": {
    "background": "linear-gradient(to right, #e0f2fe, #f0f9ff)",
    "borderRadius": "12px",
    "padding": "32px",
    "textAlign": "center",
    "marginBottom": "40px"
  },
  "ctaTitle": {
    "fontSize": "24px",
    "fontWeight": "700",
    "color": "#111827",
    "marginBottom": "16px"
  },
  "ctaText": {
    "fontSize": "16px",
    "color": "#4b5563",
    "marginBottom": "24px",
    "maxWidth": "600px",
    "margin": "0 auto 24px auto"
  },
  "imageContainer": {
    "position": "relative",
    "borderRadius": "12px",
    "overflow": "hidden",
    "marginBottom": "32px"
  },
  "image": {
    "width": "100%",
    "height": "auto",
    "objectFit": "cover",
    "borderRadius": "12px"
  },
  "imageOverlay": {
    "position": "absolute",
    "bottom": "0",
    "left": "0",
    "right": "0",
    "background": "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
    "padding": "24px"
  },
  "imageTag": {
    "display": "inline-block",
    "marginBottom": "8px",
    "padding": "5px 12px",
    "fontSize": "14px",
    "fontWeight": "500",
    "borderRadius": "20px",
    "backgroundColor": "rgba(255,255,255,0.2)",
    "color": "#ffffff"
  },
  "imageTitle": {
    "color": "#ffffff",
    "fontSize": "24px",
    "fontWeight": "700"
  },
  "paragraph": {
    "fontSize": "16px",
    "color": "#4b5563",
    "marginBottom": "24px",
    "lineHeight": "1.6"
  },
  "highlightBox": {
    "background": "rgba(59, 130, 246, 0.05)",
    "border": "1px solid rgba(59, 130, 246, 0.2)",
    "borderRadius": "8px",
    "padding": "24px",
    "marginBottom": "32px"
  },
  "icon": {
    "display": "inline-block",
    "marginRight": "8px"
  },
  "chevronRight": {
    "display": "inline-block",
    "width": "10px",
    "height": "10px",
    "borderTop": "2px solid currentColor",
    "borderRight": "2px solid currentColor",
    "transform": "rotate(45deg)",
    "marginLeft": "5px"
  },
  "phoneIcon": {
    "display": "inline-block",
    "marginLeft": "5px",
    "fontSize": "14px"
  }
};

// Fix the export statement to use hardcoded values from CSV
export default function Page() {
  // Use the values directly from the CSV that were used to generate this file
  const slug = "google-my-business-seo-company-ahmedabad-gujarat-india-some-city-some-state-india";
  const Keyword = "google my business seo company ahmedabad gujarat india";
  const City = "Some City";
  const State = "Some State";
  return <BlogPost slug={slug} Keyword={Keyword} City={City} State={State} />;
}