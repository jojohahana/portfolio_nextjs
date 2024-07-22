import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <footer className="bg-gray-800 p-4 text-center text-white">
        © 2024 My Portfolio
      </footer>
    </div>
  );
};

export default Layout;
