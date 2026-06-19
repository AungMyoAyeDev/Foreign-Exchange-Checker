const LogNotFound = () => {
  return (
    <div className="text-center mt-16  space-y-2">
      <h1 className="text-preset-3-medium text-text-secondary uppercase">
        No conversions logged yet
      </h1>
      <p className="text-preset-5 text-text-muted">
        Every conversion is recorded here automatically when you tap Log
        conversion. Your log is private to this session and this browser.
      </p>
    </div>
  );
};

export default LogNotFound;
