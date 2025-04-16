import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  padding: 4rem 2rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
`;

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled(motion.form)`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const SubmitButton = styled(motion.button)`
  background-color: #007bff;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ContactInfo = styled(motion.div)`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const InfoTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

const InfoText = styled.p`
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  color: #007bff;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <ContactSection>
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get in Touch
      </SectionTitle>
      <ContactContainer>
        <ContactForm
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
        >
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </SubmitButton>
        </ContactForm>
        <ContactInfo
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <InfoTitle>Contact Information</InfoTitle>
          <InfoText>
            Feel free to reach out to me through the contact form or directly via
            email or social media.
          </InfoText>
          <InfoText>Email: your.email@example.com</InfoText>
          <InfoText>Location: Your Location</InfoText>
          <SocialLinks>
            <SocialLink href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </SocialLink>
            <SocialLink href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </SocialLink>
            <SocialLink href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </SocialLink>
          </SocialLinks>
        </ContactInfo>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact; 