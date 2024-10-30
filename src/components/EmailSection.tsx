"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { init, send } from "@emailjs/browser";

// Initialize EmailJS
init("o_PDiDd2_SLFdj6JN");

const EmailSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = formData;
    setIsLoading(true); // Start loading state

    try {
      // Send email using EmailJS with correct field mapping
      await send("service_xp2ai2r", "template_gyv37ff", {
        from_name: name,
        to_name: "Taha",
        message: message,
        from_email: email,
      });

      // Set form state and success message
      setIsSent(true);
      setFormData({ name: "", email: "", message: "" });
      setError(""); // Reset error state
    } catch (err) {
      setError("Failed to send message. Please try again later.");
      console.error(err);
    } finally {
      setIsLoading(false); // End loading state
    }
  };

  useEffect(() => {
    if (isSent) {
      const timer = setTimeout(() => setIsSent(false), 3000); // Clear message after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [isSent]);

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Taha258" target="_blank">
            <Image src="/github-icon.svg" alt="Github Icon" width={24} height={24} />
          </Link>
          <Link href="https://www.linkedin.com/in/taha-hussain-8a0732284/" target="_blank">
            <Image src="/linkedin-icon.svg" alt="Linkedin Icon" width={24} height={24} />
          </Link>
          <br />
          <h2 className="mt-3 text-white">Contact: 0346-2973219</h2>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="text-white block text-sm mb-2 font-medium">Name</label>
            <input
              name="name"
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Name"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">Your email</label>
            <input
              name="email"
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="abc@google.com"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">Message</label>
            <textarea
              name="message"
              id="message"
              required
              value={formData.message}
              onChange={handleChange}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            disabled={isLoading} // Disable button while loading
            className={`bg-[#1066c7] hover:bg-[#27405d] text-white font-medium py-2.5 px-5 rounded-lg w-full ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        {isSent && <p className="text-green-500 mt-4">Message sent successfully!</p>}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </section>
  );
};

export default EmailSection;
