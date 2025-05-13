export function generateStaticParams() {
  return languages.map((locale) => ({ locale }));
}
