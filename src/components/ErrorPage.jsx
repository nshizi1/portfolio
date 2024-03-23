import React from "react";

function ErrorPage() {
  return <article className="bg-gray-200 p-4 h-screen flex justify-center items-center flex-col gap-2">
    <h1 className="text-4xl font-bold text-gray-900">404</h1>
    <h2 className="text-2xl font-bold text-gray-900">Page Not Found</h2>
    <p className="text-gray-700">The page you are looking for does not exist.</p>
    <a href="/" className="bg-gray-500 text-white px-6 py-2 rounded-md">Go back home</a>
  </article>;
}

export default ErrorPage;
