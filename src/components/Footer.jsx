const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="gird grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p className="text-gray-400">
              Your premier destination for authentic sneakers and athletic
              footwear
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 mt-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Returns
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 mt-3">Contact</h3>
            <ul className="space-y-1 text-gray-400">
              <li>Email: contact@sneakerstore.com</li>
              <li>Phone: (+49) 1636510550</li>
              <li>Address: Paul-Schewenkstr, 3-23 10549 Berlin</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
