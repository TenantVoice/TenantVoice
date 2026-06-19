import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-oxford flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-8xl font-black text-electric mb-4">404</h1>
      <h2 className="text-3xl font-bold text-white mb-2">Page Not Found</h2>
      <p className="text-slate-400 mb-8 max-w-sm">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-electric hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
