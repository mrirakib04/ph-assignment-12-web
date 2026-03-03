# 🏥 Care.io - Modern Caregiving Platform - B12A12

**Care.io** is a high-performance, responsive web application built with **Next.js 15+**. It connects families with professional caregivers through a seamless, dark-themed interface designed for trust and efficiency.

---

## Live Site Link

- [https://mrirakib-ph-assignment-12.vercel.app/](https://mrirakib-ph-assignment-12.vercel.app/)

---

## 🚀 Key Features

- **Job Portal (Careers):** Detailed job descriptions with bulleted responsibilities and requirements, plus a text-based application system.
- **Interactive FAQ:** Dynamic Help Center powered by **Material UI (MUI)** accordions for a smooth user experience.
- **Professional Team Page:** Showcases the core team with optimized images, bios, and integrated social media connectivity.
- **Modern UI/UX:** Built with **Tailwind CSS**, featuring a premium dark-mode aesthetic, "Glassmorphism" effects, and fluid responsive typography.
- **SEO Optimized:** Utilizes Next.js Server Components for metadata management while maintaining client-side interactivity.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Material UI (MUI)](https://mui.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Fonts:** [Geist Sans & Mono](https://vercel.com/font)
- **Image Hosting:** ImgBB (Configured via `next.config.js`)

---

## 🛠️ Dependencies

```js
  "dependencies": {
    "@emotion/react": "^11.14.0",
    "@emotion/styled": "^11.14.1",
    "@mui/material": "^7.3.8",
    "aos": "^2.3.4",
    "axios": "^1.13.5",
    "bcryptjs": "^3.0.3",
    "dotenv": "^17.3.1",
    "mongoose": "^9.2.1",
    "next": "^16.1.6",
    "next-auth": "^4.24.13",
    "nodemailer": "^7.0.13",
    "react": "19.2.3",
    "react-dom": "19.2.3",
    "react-fast-marquee": "^1.6.5",
    "react-icons": "^5.5.0",
    "react-toastify": "^11.0.5",
    "recharts": "^3.7.0",
    "sweetalert2": "^11.26.18"
  }
```

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/care-io.git
cd care-io

```

### 2. Install dependencies

```bash
npm install
# or
yarn install

```

### 3. Configure External Images

To use images from ImgBB, ensure your `next.config.js` includes the following:

```javascript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'i.ibb.co',
    },
  ],
},

```

### 4. Run the development server

```bash
npm run dev

```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) to view the application.

---

## 📂 Project Structure

```text
src/
├── app/
│   ├── (pages)/
│   │   ├── career/    # Job listings and JD
│   │   ├── faq/       # Interactive FAQ (Server/Client split)
│   │   ├── help/      # Support Ticket & Help Center
│   │   └── team/      # Team member profiles
│   ├── layout.js      # Global layout & fonts
│   └── page.js        # Homepage
└── components/        # Reusable UI components

```

---

## 🌐 Deployment

The easiest way to deploy this project is via [Vercel](https://vercel.com/new):

1. Push your code to GitHub.
2. Import the project into Vercel.
3. Vercel will automatically detect Next.js and deploy.

---

## Conclusion

Thank you for checking out my repository. If you have any feedback or suggestions, feel free to reach out!

---

Developed by **Md Rakibul Islam Rakib**

- Design **Own Idea**
