const truncate = (
  text: string,
  length: number,
): string => {
  const characters = Array.from(text);
  const limit = Math.max(0, Math.trunc(length));
  if (characters.length <= limit) return text;
  if (limit === 0) return "";
  return characters.slice(0, limit - 1).join("") + "…";
}

console.log(truncate("Hello, mister!", 6));
