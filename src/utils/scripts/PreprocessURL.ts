export function preprocessURL(url: string): string {
  const prefixRegex = /^(?:https?:\/\/)?(?:www\d*\.)?/i;
  const cleanUrl = url.replace(prefixRegex, "");

  return cleanUrl;
}
