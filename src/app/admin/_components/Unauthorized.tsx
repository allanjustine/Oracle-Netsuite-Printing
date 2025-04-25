import Link from "next/link";

export default function Unauthorized() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-6 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <h1 className="text-2xl font-bold text-white mt-4">Access Denied</h1>
        </div>
        <div className="p-8 text-center">
          <div className="text-gray-600 mb-6">
            <p className="mb-4 font-medium">
              You don't have permission to view this page.
            </p>
            <p className="text-sm">
              Please check with your administrator if you believe this is an
              error.
            </p>
          </div>

          <div className="space-y-4">
            <Link
              href="/dashboard"
              className="w-full block bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
            >
              Return to Dashboard
            </Link>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            <p>Error code: 403 Forbidden</p>
          </div>
        </div>

        <div className="bg-gray-50 px-6 py-4 text-center border-t border-gray-200">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} SMCT Dev Team. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
