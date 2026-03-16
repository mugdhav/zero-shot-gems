import { useEffect, useState } from "react";

const TARGET_URL = "https://shebuilt-iwd-gems.lovable.app";
const OLD_HOST = "zero-shot-gems.lovable.app";

const RedirectNotice = ({ children }: { children: React.ReactNode }) => {
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    if (window.location.hostname === OLD_HOST) {
      setRedirecting(true);
      const timer = setTimeout(() => {
        window.location.href = TARGET_URL + window.location.pathname;
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!redirecting) return <>{children}</>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-6" />
        <p className="text-lg text-foreground">
          The website you are trying to access has moved to a new address. Taking you there now...
        </p>
      </div>
    </div>
  );
};

export default RedirectNotice;
