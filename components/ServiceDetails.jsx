"use client"; // Mark this component as a client component

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Suspense } from "react"; // Import Suspense to handle dynamic loading

// This is the actual component
function ServiceDetailsComponent() {
  const searchParams = useSearchParams();

  const title = searchParams.get("title");
  const image = searchParams.get("image");
  const description = searchParams.get("description");

  // Show a loading state if the query data isn't available
  if (!title || !image || !description) {
    return <p>Loading service details...</p>;
  }

  return (
    <div className="container py-12 px-12 mt-4">
      <div className="text-start">
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        <div className="mt-6">
          <Image
            src={image}
            alt={title}
            width={800}
            height={500}
            className="rounded-lg"
          />
        </div>
        <p className="py-3 text-gray-600">{description}</p>
      </div>
    </div>
  );
}

// Wrap your component in Suspense for proper handling of client-side rendering
export default function ServiceDetailsWithSuspense() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ServiceDetailsComponent />
    </Suspense>
  );
}
