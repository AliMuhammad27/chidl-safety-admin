import { useEffect } from "react";

export default function useWindowTitle(title) {
  useEffect(() => {
    document.title = `Child-Safety - ${title}`;
  }, [title]);
}
