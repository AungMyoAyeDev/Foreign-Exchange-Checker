const FavoriteNotFound = () => {
  return (
    <div className="text-center mt-16  space-y-2">
      <h1 className="text-preset-3-medium text-text-secondary uppercase">
        No pinned pairs yet
      </h1>
      <p className="text-preset-5 text-text-muted">
        Pin a pair to track its rate here. Tap the star icon on any conversion
        or comparison row.
      </p>
    </div>
  );
};

export default FavoriteNotFound;
