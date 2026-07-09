This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Konfigurasi API publik

Isi `.env.local` dan konfigurasi environment deployment dengan endpoint
production:

```env
API_BASE_URL=https://profile-cipicung-api.vercel.app/api/v1
NEXT_PUBLIC_API_ORIGIN=https://profile-cipicung-api.vercel.app
NEXT_PUBLIC_ALLOW_LOCAL_IMAGES=false
```

`API_BASE_URL` hanya digunakan server untuk request data. URL gambar relatif
dari API dibentuk melalui `NEXT_PUBLIC_API_ORIGIN`.

Backend saat ini menyediakan berita melalui `/news` dan produk UMKM melalui
`/products`. Route publik frontend untuk katalog produk adalah `/umkm`;
`/produk-lokal` hanya menjadi redirect permanen untuk kompatibilitas tautan lama.

`remotePatterns` pada `next.config.ts` membatasi optimasi gambar ke domain API
production dan path gambar yang digunakan backend.

Restart dev server setelah mengubah file env atau `next.config.ts`.
