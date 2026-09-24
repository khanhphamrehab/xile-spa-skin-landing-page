export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/$/, '');
export const assetPath = (path: string) => `${basePath}${path}`;
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, '');
