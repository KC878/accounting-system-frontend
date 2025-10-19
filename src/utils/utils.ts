
export const formatName = (name: string) => {
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


export const setCookie = (key: string, value: string): void =>{
document.cookie = `${key}=${value}; path=/; samesite=none; secure`;
}

export const getCookie = (key: string): string | null => {
const cookies = document.cookie.split(';'); // split all cookies
for (let cookie of cookies) {
  const [k, v] = cookie.trim().split('=');
  if (k === key) return decodeURIComponent(v);
}
return null; // if not found
};

export const deleteAllCookies = (): void => {
// Get all cookies as a single string
const cookies = document.cookie.split(';');

// Iterate through each cookie
cookies.forEach((cookie) => {
    // Extract the cookie name
    const cookieName = cookie.split('=')[0].trim();

    // Overwrite the cookie with an empty value and set it to expire in the past
    document.cookie = `${cookieName}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; samesite=none; secure`;
});
};



// mysqlDate — always returns date in Asia/Manila timezone
export const mysqlDate = (date: Date): string => {
  const phTime = new Date(
    date.toLocaleString("en-US", { timeZone: "Asia/Manila" })
  );

  const yyyy = phTime.getFullYear();
  const mm = String(phTime.getMonth() + 1).padStart(2, "0");
  const dd = String(phTime.getDate()).padStart(2, "0");

  return `${yyyy}-${mm}-${dd}`;
};
