export function msToHM(ms: number): string {
  // 1- Convert to seconds:
  let seconds = Math.floor(ms / 1000);
  // 2- Extract hours:
  const hours = Math.floor(seconds / 3600); // 3,600 seconds in 1 hour
  seconds = seconds % 3600; // seconds remaining after extracting hours
  // 3- Extract minutes:
  const minutes = Math.floor(seconds / 60); // 60 seconds in 1 minute
  return `${hours}h ${minutes}m`;
}
