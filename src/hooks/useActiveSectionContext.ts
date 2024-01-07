import React from "react";

import { ActiveSectionContext } from "@/context/ActiveSectionContextProvider";

export default function useActiveSectionContext() {
  const context = React.useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContext"
    );
  }

  return context;
}
