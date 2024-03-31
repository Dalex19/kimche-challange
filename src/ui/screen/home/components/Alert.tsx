import { useEffect } from "react";

interface AlertI {
  closeAlert: () => void;
}

export default function Alert({ closeAlert }: AlertI) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      closeAlert();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [closeAlert]);

  return (
    <div
      role="alert"
      className="alert alert-warning absolute bottom-16 transition-all"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-current shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>Please use the filters</span>
    </div>
  );
}
