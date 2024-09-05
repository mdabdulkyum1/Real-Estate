const Footer = () => {
    return (
      <footer className="bg-primary text-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and Description */}
            <div>
              <img src="/logo.png" alt="Real Estate Logo" className="h-10 w-10 mb-4" />
              <p>Your trusted partner in finding the perfect property.</p>
            </div>
  
            {/* Navigation Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/" className="hover:text-secondary">Home</a></li>
                <li><a href="/properties" className="hover:text-secondary">Properties</a></li>
                <li><a href="/about" className="hover:text-secondary">About Us</a></li>
                <li><a href="/contact" className="hover:text-secondary">Contact</a></li>
              </ul>
            </div>
  
            {/* Contact Information */}
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Us</h4>
              <p>Email: info@realestate.com</p>
              <p>Phone: +8801754-462-008</p>
              <p>Location: 123 Main Street, City, Country</p>
            </div>
          </div>
  
          <div className="mt-8 text-center border-t border-gray-700 pt-4">
            <p className="text-sm">&copy; {new Date().getFullYear()} Real Estate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  