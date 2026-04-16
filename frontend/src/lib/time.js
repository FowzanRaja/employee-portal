export function formatTime(isoTimestamp) {
  if (!isoTimestamp) return "";
  const d = new Date(isoTimestamp);
  const timeOpts = { hour: "2-digit", minute: "2-digit", hour12: true };
  return d.toLocaleTimeString([], timeOpts);
}