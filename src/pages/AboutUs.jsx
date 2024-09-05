const AboutUs = () => {
  return (
    <div className="bg-bg-light min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <h1 className="text-4xl font-bold text-primary text-center mb-8">About Us</h1>

        {/* Section Introduction */}
        <p className="text-text-dark text-center mb-12">
          Welcome to our real estate platform! We are committed to helping you find your dream home or the perfect property investment. 
          Our experienced team is dedicated to offering you the best real estate services available.
        </p>

        {/* About Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="h-64 md:h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/about-us-image.jpg" 
              alt="About Us"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Company Description */}
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">Our Story</h2>
            <p className="text-text-dark mb-4">
              We started our journey with a passion for real estate and a desire to make the home-buying process easier for everyone.
              Over the years, we have grown into a trusted name in the industry, known for our integrity, dedication, and results-driven approach.
            </p>
            <p className="text-text-dark mb-4">
              Our team consists of experienced agents, market experts, and customer service specialists, all working together to provide the best 
              possible experience for our clients.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4">Our Mission</h2>
            <p className="text-text-dark">
              Our mission is to simplify real estate transactions and to help people find the perfect property, whether for residential or commercial purposes. 
              We aim to provide personalized services tailored to each client{"'"}s unique needs.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-text-dark">We are here to make your property dreams come true!</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
