import React, { useEffect, useState } from "react";
import { client } from "./sanityClient"; // Import the client from sanityClient
import { GoPlus, GoDash } from "react-icons/go"; // Icons for expand/collapse
import "./faq.css";

const Faq = () => {
  const [expanded, setExpanded] = useState(null); // Track which FAQ is expanded
  const [faqData, setFaqData] = useState([]); // FAQ data state

  useEffect(() => {
    // Fetch FAQ data from Sanity
    const fetchFaqs = async () => {
      const query = `*[_type == "faq"] | order(_createdAt desc) {
        question,
        answer
      }`;

      try {
        const data = await client.fetch(query); // Fetching the data from Sanity
        setFaqData(data); // Set fetched data into state
      } catch (error) {
        console.error("Error fetching FAQ data:", error);
      }
    };

    fetchFaqs(); // Call the function to fetch FAQs
  }, []);

  const toggleAnswer = (index) => {
    // Toggle which FAQ is expanded
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="faq-container" id="faqs">
      <h1>Have any questions?</h1>
      {faqData.length > 0 ? (
        faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              <p>{item.question}</p>
              <span className="icon">{expanded === index ? <GoDash /> : <GoPlus />}</span>
            </div>
            {expanded === index && <p className="faq-answer">{item.answer}</p>}
          </div>
        ))
      ) : (
        <p>No FAQs available</p>
      )}
    </div>
  );
};

export default Faq;
