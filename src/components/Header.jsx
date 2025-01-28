const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold">SneakerStore</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-gray-300">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Products</a>
            </li>
            <li>
              <a href="3" className="hover:text-gray-300">Cart</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
