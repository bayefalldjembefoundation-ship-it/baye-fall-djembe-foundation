
export default function sitemap() {
  return [
    {
      url: 'https://bayefalldjembefoundation.org',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://bayefalldjembefoundation.org/founder',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];
}