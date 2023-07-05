import { cn } from "../utils";

interface SkeletonProps {
  variant: "text" | "rectangular";
  className?: string;
}

const Skeleton = ({ variant, className }: SkeletonProps) => {
  if (variant === "text") {
    return (
      <span
        data-before="&nbsp;"
        className={cn(
          "block origin-[0_55%] scale-y-[0.6] transform rounded-lg bg-neutral-400 before:content-[attr(data-before)] dark:bg-neutral-700",
          className,
        )}
      ></span>
    );
  }

  return <div className={cn("rounded bg-neutral-400 dark:bg-neutral-700", className)}></div>;
};

export default Skeleton;
