"use client";
import React, { useState, useEffect } from "react";

// Sample Testimonials Data
const testimonials = [
  { name: "Aesthetic Eaves Architects", location: "Mumbai", review: "Best Service, great support.", rating: 5 },
  { name: "Lakshyam Defence Academy", location: "Surat", review: "Thanks for your support!", rating: 4 },
  { name: "Vikash Agrahari", location: "Pune", review: "We saw an increase in foot traffic!", rating: 5 },
  { name: "Suhasini Duppati", location: "Ahmedabad", review: "Increased visibility!", rating: 4 },
];

const TestimonialSlider = ({ City }) => {
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
        <h3 style={styles.testimonialTitle}>What Our Clients Say</h3>
      </div>
      <div style={styles.testimonialBody}>
        <div style={styles.testimonialContent}>
          <div style={styles.starContainer}>
            {[...Array(rating)].map((_, index) => (
              <span key={index} style={styles.star}>⭐</span>
            ))}
          </div>
          <p style={styles.testimonialText}>{review}</p>
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

const BlogPost = ({ slug, Keyword, City }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroBackground}></div>
        <div style={styles.heroContent}>
          <div style={{
            ...styles.heroInner,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}>
            <span style={styles.heroTag}>{Keyword} in {City}</span>
            <h1 style={styles.heroTitle}>Grow Your Business with the Best {Keyword} in {City}</h1>
            <p style={styles.heroText}>
              🚀 <span style={styles.heroTextHighlight}>We help you dominate Google local search</span> and boost your customer base in {City}.
            </p>
            <div style={{ ...styles.buttonContainer, flexDirection: window.innerWidth > 640 ? "row" : "column" }}>
              <a href="/contact-us/" style={styles.primaryButton}>Get Free Audit</a>
              <a href="/contact-us/" style={styles.secondaryButton}>Contact Experts</a>
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
              <div style={{
                position: "relative",
                borderRadius: "12px",
                overflow: "hidden",
                marginBottom: "32px",
              }}>
                <img src="/placeholder.svg?height=400&width=800" alt={`${Keyword} in ${City}`} style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "12px",
                }} />
                <div style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                  padding: "24px",
                }}>
                  <span style={{
                    display: "inline-block",
                    marginBottom: "8px",
                    padding: "5px 12px",
                    fontSize: "14px",
                    fontWeight: "500",
                    borderRadius: "20px",
                    backgroundColor: "rgba(255,255,255,0.2)",
                    color: "#ffffff",
                  }}>Local SEO Experts</span>
                  <h2 style={{
                    color: "#ffffff",
                    fontSize: "24px",
                    fontWeight: "700",
                  }}>Your {Keyword} Partner in {City}</h2>
                </div>
              </div>

              <p style={{
                fontSize: "18px",
                color: "#374151",
                marginBottom: "24px",
              }}>In today's digital landscape, having a strong online presence is crucial for businesses in {City} looking to attract local customers.</p>

              <p style={{
                fontSize: "18px",
                color: "#374151",
                marginBottom: "24px",
              }}>At <span style={{ fontWeight: "600", color: "#2563eb" }}>Our Company</span>, we specialize in comprehensive {Keyword} services tailored specifically for businesses in {City}. Our expert team understands the local market dynamics and can help your business stand out in local search results, driving more foot traffic and increasing your revenue.</p>

              <div style={{
                background: "rgba(59, 130, 246, 0.05)",
                border: "1px solid rgba(59, 130, 246, 0.2)",
                borderRadius: "8px",
                padding: "24px",
                marginBottom: "32px",
              }}>
                <h3 style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#111827",
                  marginBottom: "16px",
                  display: "flex",
                  alignItems: "center",
                }}>
                  <span style={{ color: "#eab308", marginRight: "8px", width: "20px", height: "20px" }}>⭐</span>
                  Why {Keyword} Matters for {City} Businesses
                </h3>
                <ul style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}>
                  <li style={{
                    display: "flex",
                    alignItems: "flex-start",
                  }}>
                    <span style={{
                      color: "#2563eb",
                      marginRight: "8px",
                      marginTop: "2px",
                      width: "20px",
                      height: "20px",
                      flexShrink: 0,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>✓</span>
                    <span>93% of local searches now happen on Google, making GMB essential for local visibility</span>
                  </li>
                  <li style={{
                    display: "flex",
                    alignItems: "flex-start",
                  }}>
                    <span style={{
                      color: "#2563eb",
                      marginRight: "8px",
                      marginTop: "2px",
                      width: "20px",
                      height: "20px",
                      flexShrink: 0,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>✓</span>
                    <span>Businesses with complete GMB profiles receive 7x more clicks than incomplete listings</span>
                  </li>
                  <li style={{
                    display: "flex",
                    alignItems: "flex-start",
                  }}>
                    <span style={{
                      color: "#2563eb",
                      marginRight: "8px",
                      marginTop: "2px",
                      width: "20px",
                      height: "20px",
                      flexShrink: 0,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>✓</span>
                    <span>76% of people who search for a local business on their smartphone visit within 24 hours</span>
                  </li>
                  <li style={{
                    display: "flex",
                    alignItems: "flex-start",
                  }}>
                    <span style={{
                      color: "#2563eb",
                      marginRight: "8px",
                      marginTop: "2px",
                      width: "20px",
                      height: "20px",
                      flexShrink: 0,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>✓</span>
                    <span>{City}'s competitive market requires businesses to optimize their local presence</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

// Define styles object
const styles = {
  container: { maxWidth: "1200px", margin: "0 auto", padding: "20px" },
  heroSection: { position: "relative", marginBottom: "40px" },
  heroBackground: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "#f3f4f6" },
  heroContent: { position: "relative", padding: "60px 20px" },
  heroInner: { maxWidth: "800px", margin: "0 auto", textAlign: "center", transition: "opacity 0.5s, transform 0.5s" },
  heroTag: { display: "inline-block", padding: "5px 10px", backgroundColor: "#e5e7eb", borderRadius: "20px", marginBottom: "16px" },
  heroTitle: { fontSize: "36px", fontWeight: "800", marginBottom: "16px", color: "#111827" },
  heroText: { fontSize: "18px", marginBottom: "24px", color: "#4b5563" },
  heroTextHighlight: { fontWeight: "600", color: "#2563eb" },
  buttonContainer: { display: "flex", gap: "16px", justifyContent: "center" },
  primaryButton: { padding: "12px 24px", backgroundColor: "#2563eb", color: "white", borderRadius: "8px", fontWeight: "600", textDecoration: "none" },
  secondaryButton: { padding: "12px 24px", backgroundColor: "white", color: "#2563eb", border: "1px solid #2563eb", borderRadius: "8px", fontWeight: "600", textDecoration: "none" },
  contentContainer: { maxWidth: "1200px", margin: "0 auto", padding: "0 20px" },
  gridContainer: { display: "grid", gap: "32px" },
  mainContent: { padding: "20px 0" },
  section: { marginBottom: "40px" },
  testimonialCard: { backgroundColor: "white", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)", marginBottom: "32px" },
  testimonialHeader: { padding: "16px", borderBottom: "1px solid #e5e7eb" },
  testimonialTitle: { fontSize: "18px", fontWeight: "600", color: "#111827" },
  testimonialBody: { padding: "16px" },
  testimonialContent: { marginBottom: "16px" },
  starContainer: { display: "flex", marginBottom: "8px" },
  star: { marginRight: "2px" },
  testimonialText: { fontSize: "16px", color: "#4b5563", marginBottom: "16px" },
  testimonialUser: { display: "flex", alignItems: "center" },
  testimonialAvatar: { width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", marginRight: "12px" },
  testimonialAvatarText: { color: "white", fontWeight: "600" },
  testimonialUserInfo: {},
  testimonialName: { fontWeight: "600", color: "#111827", marginBottom: "4px" },
  testimonialLocation: { fontSize: "14px", color: "#6b7280" },
  testimonialControls: { display: "flex", justifyContent: "space-between", padding: "16px", borderTop: "1px solid #e5e7eb" },
  testimonialButton: { padding: "8px 16px", backgroundColor: "#f3f4f6", border: "none", borderRadius: "4px", cursor: "pointer" }
};

// Fix the export statement to use hardcoded values from CSV
export default function Page() {
  // Use the values directly from the CSV that were used to generate this file
  const slug = "google-my-business-seo-company-chennai";
  const Keyword = "Google my business seo company";
  const City = "Chennai";
  return <BlogPost slug={slug} Keyword={Keyword} City={City} />;
}