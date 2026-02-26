# Digital Gurus Agency

![Digital Gurus Agency](https://imgix.cosmicjs.com/685184b0-136a-11f1-9559-f51d6633c622-photo-1461749280684-dccba630e2f6-1772148315520.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A stunning digital agency website built with Next.js 16 and Cosmic CMS, featuring dynamic services, team member profiles, and client testimonials with star ratings. The site uses server-side rendering for optimal performance and a modern dark-themed design.

## Features

- 🎨 **Modern Dark Theme** — Bold navy and electric blue color palette with premium feel
- 📱 **Fully Responsive** — Looks great on mobile, tablet, and desktop
- 🛠️ **Dynamic Services** — Service cards with icons, images, and descriptions from Cosmic
- 👥 **Team Profiles** — Professional headshots, roles, and bios
- ⭐ **Client Testimonials** — Star ratings with client quotes and company info
- ⚡ **Server-Side Rendering** — Fast loads with Next.js 16 App Router
- 🔄 **CMS-Powered** — All content managed through Cosmic dashboard
- 📧 **Contact Section** — Call-to-action section for lead generation

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=69a0d5fa4cf2640ef43d6e94&clone_repository=69a0da6a4cf2640ef43d6ebf)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "A digital agency website with services, team members, and testimonials."

### Code Generation Prompt

> "Based on the content model I created for 'A digital agency website with services, team members, and testimonials.', now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) — React framework with App Router
- [React 19](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — Type-safe JavaScript
- [Tailwind CSS 3](https://tailwindcss.com/) — Utility-first CSS
- [Cosmic](https://www.cosmicjs.com/docs) — Headless CMS for content management

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (or Node.js 18+)
- A [Cosmic](https://www.cosmicjs.com) account with the Digital Gurus bucket

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd digital-gurus-agency
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables in your hosting platform or local `.env.local`:
```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Cosmic SDK Examples

### Fetching Services
```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Team Members
```typescript
const { objects: teamMembers } = await cosmic.objects
  .find({ type: 'team-members' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Testimonials
```typescript
const { objects: testimonials } = await cosmic.objects
  .find({ type: 'testimonials' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This application uses three Cosmic object types:

| Object Type | Fields | Description |
|---|---|---|
| **Services** | description, icon (emoji), featured_image | Agency service offerings |
| **Team Members** | role, bio, photo, email | Staff profiles |
| **Testimonials** | client_name, company, quote, rating (1-5) | Client reviews |

All content is fetched server-side for optimal performance and SEO.

## Deployment Options

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repo to [Vercel](https://vercel.com)
3. Add environment variables in the Vercel dashboard
4. Deploy!

### Netlify
1. Push your code to GitHub
2. Connect your repo to [Netlify](https://netlify.com)
3. Set build command: `bun run build`
4. Set publish directory: `.next`
5. Add environment variables in the Netlify dashboard

<!-- README_END -->