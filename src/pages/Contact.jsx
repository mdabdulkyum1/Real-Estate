const Contact = () => {
  return (
    <div className="bg-bg-light min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <h1 className="text-4xl font-bold text-primary text-center mb-8">Contact Us</h1>

        {/* Introduction */}
        <p className="text-text-dark text-center mb-12">
          If you have any questions or need assistance, feel free to reach out to us. Our team is here to help you!
        </p>

        {/* Contact Form */}
        <form className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text-dark">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-dark">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-text-dark">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              placeholder="Enter the subject"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-text-dark">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              placeholder="Enter your message"
              rows="5"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
