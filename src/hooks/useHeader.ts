"use client";

import React from "react";

export default function useHeader() {
  const [isHeaderShow, setIsHeaderShow] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined" && window.location.pathname !== "/") {
      setIsHeaderShow(true);
    } else {
      setIsHeaderShow(false);
    }
  }, []);

  return isHeaderShow;
}
