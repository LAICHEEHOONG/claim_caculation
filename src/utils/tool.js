export function formatNumber(num) {
  num = Number(num);
  if (num % 1 !== 0) {
    num = Math.round(num);
  }

  return num.toLocaleString();
}

// Function to hash a string using SHA-256
export async function sha256(input) {
  const encoder = new TextEncoder();
  const data = encoder.encode(input);
  const buffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(buffer));
  const hashHex = hashArray
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
  console.log(hashHex);
  return hashHex;
}
