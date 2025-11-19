import { Logo } from "@/components/logo";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export default function Authlayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center">
      <Link
        href="/"
        className={buttonVariants({
          variant: "outline",
          className: "absolute top-4 left-4",
        })}
      >
        <ArrowLeft />
        Back
      </Link>
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 self-center font-medium"
        >
          <Logo />
        </Link>
        {children}
        <div className="text-balance text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <span className="hover:underline hover:text-bold">
            Terms of service
          </span>{" "}
          and{" "}
          <span className="hover:underline hover:text-bold">
            Privacy Policy
          </span>
        </div>
      </div>
    </div>
  );
}
