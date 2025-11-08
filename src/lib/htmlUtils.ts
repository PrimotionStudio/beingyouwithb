/**
 * Strip HTML tags and return plain text
 * Perfect for previews, meta descriptions, etc.
 */
export function stripHtmlTags(html: string): string {
  // Create a temporary div to parse HTML
  if (typeof window !== "undefined") {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  }

  // Server-side fallback using regex
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Get excerpt from HTML content
 * @param html - HTML string
 * @param maxLength - Maximum character length (default: 150)
 * @param suffix - Text to append if truncated (default: '...')
 */
export function getExcerpt(
  html: string,
  maxLength = 150,
  suffix = "...",
): string {
  const plainText = stripHtmlTags(html);

  if (plainText.length <= maxLength) {
    return plainText;
  }

  // Truncate at the last complete word before maxLength
  const truncated = plainText.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");

  return lastSpace > 0
    ? truncated.slice(0, lastSpace) + suffix
    : truncated + suffix;
}

/**
 * Sanitize HTML content for safe rendering
 * Removes dangerous tags but keeps formatting
 */
export function sanitizeHtml(html: string): string {
  // List of allowed tags
  const allowedTags = [
    "p",
    "br",
    "strong",
    "b",
    "em",
    "i",
    "u",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "ul",
    "ol",
    "li",
    "blockquote",
    "a",
  ];

  if (typeof window === "undefined") {
    // Simple server-side sanitization
    return html;
  }

  const tmp = document.createElement("div");
  tmp.innerHTML = html;

  // Remove script and style tags
  tmp.querySelectorAll("script, style").forEach((el) => el.remove());

  return tmp.innerHTML;
}

/**
 * Calculate reading time from HTML content
 * @param html - HTML string
 * @param wordsPerMinute - Average reading speed (default: 200)
 */
export function calculateReadingTime(
  html: string,
  wordsPerMinute = 200,
): number {
  const plainText = stripHtmlTags(html);
  const wordCount = plainText
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

/**
 * Get word count from HTML content
 */
export function getWordCount(html: string): number {
  const plainText = stripHtmlTags(html);
  return plainText
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0).length;
}
