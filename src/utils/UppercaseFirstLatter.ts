export default function UppercaseFirstLatter(word: string | undefined) {
  if (!word) return
  return word.split('')[0].toUpperCase() + word.slice(1);
}