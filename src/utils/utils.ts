
export const formatName = (name: string) => {
  console.log("FormatName Counter");

  // Capitalize the firsst letter of each word
  return name.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" "); 
}


export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

// Currently Unused -> Saved it if ever a situation like that Occurs: 
  // Need for: 
    // formatName
    // debounce