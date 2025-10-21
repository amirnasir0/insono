// app/components/PageSkeleton.tsx
export default function PageSkeleton() {
  return (
    <div className="animate-pulse grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
        >
          <div className="h-48 bg-gray-200"></div>
          <div className="p-5 space-y-3">
            <div className="h-5 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
