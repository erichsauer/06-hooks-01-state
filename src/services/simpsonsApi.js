export default async function fetchQuote() {
  const res = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
  const json = await res.json();
  return json[0];
}
