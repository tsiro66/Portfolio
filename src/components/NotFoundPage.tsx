import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-white transition-all duration-300 ease-in-out">
      <h1 className="text-4xl font-bold my-4">404 - Page Not Found</h1>
      <p className="mb-4">The page you are looking for does not exist.</p>
      <Link to={"/"}>
        <button className="bg-blue-800 text-white px-4 py-2 rounded-4xl cursor-pointer hover:bg-blue-700 transition duration-300">
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
