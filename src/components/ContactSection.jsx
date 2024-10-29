import React, { useState } from "react";
import { Link } from "react-router-dom";
import GithubIcon from "../../public/github.svg";
import LinkedinIcon from "../../public/linkedin.svg";
const ContactSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact">
      <h2 className="text-white text-center text-4xl font-bold mt-8 mb-8 md:mb-12">
        Contact
      </h2>
      <div className="grid md:grid-cols-2 gap-8 text-white">
        <div>
          <h5 className="text-xl font-bold my-2">Let's Connect</h5>
          <p className="text-[#ADB7BE] mb-4 mx-w-md">
            I&apos;m currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
          </p>
          <div className="socials flex flex-row gap-2 items-center">
            <a href="https://github.com">
              <img
                className="bg-white rounded-full w-10"
                src={GithubIcon}
                alt="Github Icon"
              />
            </a>
            <a href="https://linkedin.com">
              <img src={LinkedinIcon} alt="Linkedin Icon" />
            </a>
          </div>
        </div>
        <div>
          {emailSubmitted ? (
            <p className="text-green-500 text-sm mt-2">
              Email sent successfully!
            </p>
          ) : (
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Your email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="jacob@google.com"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Just saying hi"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Let's talk about..."
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
