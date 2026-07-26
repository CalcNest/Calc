export default function Loading() {
  return (
    <div className="container py-16">
      <div className="skeleton h-10 w-2/3 max-w-lg" />
      <div className="skeleton mt-4 h-4 w-1/2 max-w-sm" />
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="skeleton h-48" />
        ))}
      </div>
    </div>
  );
}
