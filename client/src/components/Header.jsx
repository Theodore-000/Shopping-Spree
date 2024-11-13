import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <NavLink to="/" className="text-white hover:text-yellow-300">
            Shopping Spree
          </NavLink>
        </h1>
        <div className="space-x-6">
          <NavLink
            to="/cart"
            className="text-lg hover:text-yellow-300 transition-colors"
          >
            Cart
          </NavLink>
          <NavLink
            to="/signin"
            className="text-lg hover:text-yellow-300 transition-colors"
          >
            Sign In
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
