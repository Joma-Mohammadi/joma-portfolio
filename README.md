# Joma Mohammadi - Portfolio

Next.js (App Router) + TypeScript + Tailwind CSS + Lucide React.

## Run

```bash
npm install
npm run dev          # http://localhost:3000
npm run typecheck && npm run lint && npm run build
```

## Fill in your details (nothing is invented)

| What | Where |
| --- | --- |
| Portrait | Save your photo as `public/images/joma-portrait.png` (4:5, 900x1125+). The frame stays empty until it exists. |
| CV | Save a PDF as `public/cv/joma-mohammadi-cv.pdf`. The button activates once it exists. |
| Email, phone, GitHub, LinkedIn, form endpoint | `data/site-config.ts` |
| Availability badge | `data/site-config.ts` -> `availability.enabled` |
| Projects (placeholders) | `data/projects.ts` |
| Skills | `data/skills.ts` |
| About copy | `app/about/page.tsx` |

Restart `npm run dev` after adding the portrait or CV so the file check re-runs.

## Contact form

With no endpoint or email configured, the form validates and then says plainly that nothing was sent. With an email set it opens a mail draft; with `formEndpoint` set it POSTs JSON to that URL.
