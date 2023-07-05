import React from "react";

interface SkeletonGroupProps {
  children: React.ReactNode;
  show: boolean;
}

const SkeletonGroup = ({ children, show }: SkeletonGroupProps) => {
  return show ? (
    <div role="status" className="animate-pulse">
      {children}
      <span className="sr-only">Loading...</span>
    </div>
  ) : (
    <>{children}</>
  );
};

export default SkeletonGroup;
