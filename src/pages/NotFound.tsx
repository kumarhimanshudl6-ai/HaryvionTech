import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pulse-50 to-white">
      <div className="text-center p-8">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-pulse-200">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link to="/" className="button-primary inline-flex items-center">
            Return Home
          </Link>
          <div className="text-sm text-gray-500">
            Or <Link to="/contact" className="text-pulse-500 hover:text-pulse-600 underline">contact us</Link> if you need help
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
