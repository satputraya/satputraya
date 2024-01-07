import React from "react";

import {
  useInView,
  type IntersectionOptions,
} from "react-intersection-observer";
import type { SectionName } from "@/lib/types";
import { useActiveSectionContext } from "@/hooks";

export default function useSectionInView(
  sectionName: SectionName,
  intersectionOptions?: IntersectionOptions
) {
  const { ref, inView } = useInView(intersectionOptions);
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  React.useEffect(() => {
    inView &&
      Date.now() - timeOfLastClick > 1000 &&
      setActiveSection(sectionName);
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return ref;
}
