const LoadingSkeleton = () => {
  return (
    <div className="space-y-10 animate-pulse">
      {/* Crown skeleton */}
      <div className="rounded-2xl bg-card overflow-hidden border border-border">
        <div className="grid md:grid-cols-2">
          <div className="aspect-video bg-secondary" />
          <div className="p-8 space-y-4">
            <div className="h-3 w-24 bg-muted rounded" />
            <div className="h-6 w-3/4 bg-muted rounded" />
            <div className="h-4 w-1/2 bg-muted rounded" />
            <div className="h-2.5 w-full bg-muted rounded-full" />
            <div className="h-4 w-2/3 bg-muted rounded" />
          </div>
        </div>
      </div>

      {/* Grid skeleton */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-xl bg-card border border-border overflow-hidden">
            <div className="aspect-video bg-secondary" />
            <div className="p-4 space-y-3">
              <div className="h-4 w-full bg-muted rounded" />
              <div className="h-3 w-2/3 bg-muted rounded" />
              <div className="h-1.5 w-full bg-muted rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingSkeleton;