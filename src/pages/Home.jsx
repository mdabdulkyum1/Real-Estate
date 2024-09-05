const Home = () => {
  return (
    <div className="bg-bg-light min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h1 className="text-5xl font-bold text-white mb-4">
            Welcome to Your Dream Home
          </h1>
          <p className="text-lg text-light-accent mb-8">
            Find your perfect property with us. Discover the best homes and apartments
            in top locations around the world.
          </p>
          <button className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent">
            Explore Properties
          </button>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-text-dark text-center mb-12">
            Featured Properties
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Property 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="/property1.jpg"
                alt="Luxury Villa"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-primary">
                  Luxury Villa in LA
                </h3>
                <p className="text-secondary text-xl font-semibold mt-2">$2,500,000</p>
                <p className="text-text-dark mt-4">A stunning villa with breathtaking views and modern amenities.</p>
              </div>
            </div>

            {/* Property 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="/property2.jpg"
                alt="Modern Apartment"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-primary">
                  Modern Apartment in NY
                </h3>
                <p className="text-secondary text-xl font-semibold mt-2">$1,800,000</p>
                <p className="text-text-dark mt-4">A beautiful apartment with panoramic city views.</p>
              </div>
            </div>

            {/* Property 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="/property3.jpg"
                alt="Cozy Cottage"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-primary">
                  Cozy Cottage in the Countryside
                </h3>
                <p className="text-secondary text-xl font-semibold mt-2">$750,000</p>
                <p className="text-text-dark mt-4">Escape the city life and enjoy this serene retreat.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent py-16">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-lg text-light-accent mb-8">
            Browse our listings and get in touch with our team to schedule a tour.
          </p>
          <button className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
