import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { BsFillSendFill, BsSendExclamationFill } from "react-icons/bs";

const Contact = () => {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [showErrorSnackbar, setShowErrorSnackbar] = useState(false);

  const SendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_23axr3r",
        "template_9wyh88n",
        e.target as HTMLFormElement,
        "jgAPg1JPbi2kTcQW8"
      )
      .then(() => {
        setShowSnackbar(true);
        setTimeout(() => setShowSnackbar(false), 3000);
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        setShowErrorSnackbar(true);
        setTimeout(() => setShowErrorSnackbar(false), 3000);
      });
  };

  return (
    <div className="flex flex-col h-[calc(100vh-72px)] bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white transition-all duration-300 ease-in-out">
      <section className="py-4 lg:py-8">
        <div className="px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Me
          </h2>
          <p className="mb-4 lg:mb-8 text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Intrested in hiring me? Want me to work on your project? <br />
            Fill out the form below to get in touch! I will get back to you as
            soon as possible.
          </p>
          <form
            action="#"
            className="space-y-8 bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
            onSubmit={SendEmail}
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500
                 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                  dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@email.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm 
                focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let me know how I can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 
                focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
                required
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-800 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-blue-700 transition duration-300  hover:scale-105"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </section>
      {showSnackbar && (
        <div className="flex justify-center items-center">
          <div
            id="toast-simple"
            className="flex justify-center w-full max-w-xs p-4 text-gray-500 bg-white
             rounded-4xl shadow-sm dark:text-gray-400 dark:bg-gray-800"
            role="alert"
          >
            <BsFillSendFill className="text-green-400" />

            <div className="ps-4 text-sm font-normal">
              Message sent successfully.
            </div>
          </div>
        </div>
      )}
      {showErrorSnackbar && (
        <div className="flex justify-center items-center">
          <div
            id="toast-error"
            className="flex justify-center w-full max-w-xs p-4 text-gray-500
             bg-gray-100 rounded-4xl dark:text-gray-400 dark:bg-gray-800"
            role="alert"
          >
            <BsSendExclamationFill className="text-red-500" />

            <div className="ps-4 text-sm font-normal">
              Failed to send the message.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
