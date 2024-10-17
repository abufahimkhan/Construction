import Link from "next/link";
import React from "react";

const Announcement: React.FC = () => {
  return (
    <div className="flex items-center justify-between gap-4 bg-green-600 px-4 py-3 text-white">
      <p className="text-sm font-medium">Are You Looking For Contractor?</p>

      <Link
        aria-label="Dismiss"
        href="tel:929-539-9509"
        className="shrink-0 rounded-lg bg-black/10 p-1 transition hover:bg-black/20 text-sm"
      >
        Click Here
      </Link>
    </div>
  );
};

export default Announcement;
