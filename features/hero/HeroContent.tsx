import { cn } from "@/lib/utils/tailwind-utils";
import { ReactNode } from "react";

interface HeroProps {
  children: ReactNode;
  className?: string;
}

export const HeroContent = ({ children, className }: HeroProps) => {
  return (
    <div
      className={cn(
        "absolute top-1/2 -translate-y-1/2 text-center w-full ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const HeroTitle = ({ children, className }: HeroProps) => {
  return (
    <p
      className={cn(
        "font-montserrat text-lg md:text-2xl lg:text-4xl font-extrabold ",
        className
      )}
    >
      {children}
    </p>
  );
};

export const HeroSubTitle = ({ children, className }: HeroProps) => {
  return (
    <p
      className={cn(
        "font-greatVibes text-lg md:text-3xl lg:text-5xl font-normal mt-1 md:mt-2",
        className
      )}
    >
      {children}
    </p>
  );
};

export const HeroDescription = ({ children, className }: HeroProps) => {
  return (
    <p
      className={cn(
        "font-montserrat text-sm md:text-md lg:text-[20px] font-normal mt-1 md:mt-3",
        className
      )}
    >
      {children}
    </p>
  );
};
