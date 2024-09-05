const Properties = () => {
  const properties = [
    {
      id: 1,
      image: "/property1.jpg",
      title: "Luxury Villa in Beverly Hills",
      price: "$3,500,000",
      location: "Beverly Hills, CA",
      description: "A stunning villa with 6 bedrooms, a private pool, and a large garden."
    },
    {
      id: 2,
      image: "/property2.jpg",
      title: "Modern Apartment in New York",
      price: "$2,100,000",
      location: "New York, NY",
      description: "A stylish apartment with breathtaking city views and top-notch amenities."
    },
    // Add more properties as needed
  ];

  return (
    <div className="bg-bg-light min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <h1 className="text-4xl font-bold text-primary text-center mb-12">Available Properties</h1>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-primary">{property.title}</h2>
                <p className="text-secondary text-xl font-semibold mt-2">{property.price}</p>
                <p className="text-text-dark text-sm mt-2">{property.location}</p>
                <p className="text-text-dark mt-4">{property.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
