import React, { useState, useEffect } from "react";
import { collection, addDoc } from "@firebase/firestore";
import {
  ContactUsBackground,
  ContactForm,
  Name,
  Email,
  Message,
  ContactsHeader,
  ContactDescription,
  SubmitContainer,
  ContactSubmit,
  ResponceMessage,
} from "./contact.style";
import { db } from "../firebase-config";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");
  const [submitResponce, setSubmitResponce] = useState("");
  const [loading, setLoading] = useState(false);

  const ContactUsCollectionRef = collection(db, "contactus");

  function CleanForm() {
    setName("");
    setEmail("");
    setMessages("");
  }

  const sendContactUsMessage = async () => {
    setLoading(true);
    await addDoc(ContactUsCollectionRef, {
      Name: name,
      Email: email,
      Message: messages,
    });
    setLoading(false);
    CleanForm();
    setSubmitResponce(
      "Thank you for contacting me! I will get back to you shortly",
    );
  };

  return (
    <ContactUsBackground>
      <ContactsHeader>Contact</ContactsHeader>
      <ContactDescription>
        If you have an opportunity to share, or would like to discuss anything,
        you can leave your details below.
      </ContactDescription>
      <ContactForm
        onSubmit={(e) => {
          e.preventDefault();
          sendContactUsMessage();
        }}
      >
        <Name
          required
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Email
          required
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Message
          required
          rows={4}
          placeholder="Message"
          onChange={(e) => {
            setMessages(e.target.value);
          }}
          value={messages}
        />
        <SubmitContainer>
          <ResponceMessage>{submitResponce}</ResponceMessage>
          <ContactSubmit loading={loading}>Submit</ContactSubmit>
        </SubmitContainer>
      </ContactForm>
    </ContactUsBackground>
  );
}

export default ContactUs;
