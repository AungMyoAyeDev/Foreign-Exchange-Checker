import React, { Suspense, type JSX } from "react";

function PageLoader<P extends JSX.IntrinsicAttributes>(
  Component: React.ComponentType<P>,
) {
  return function WrapperCoponent(Props: P) {
    return (
      <Suspense fallback={<p>loading...</p>}>
        <Component {...(Props as P)} />
      </Suspense>
    );
  };
}

export default PageLoader;
