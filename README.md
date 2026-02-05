# Dr. Maya Reynolds - Therapy Practice Website

A modern, accessible website for a licensed clinical psychologist specializing in anxiety, trauma, and burnout therapy in Santa Monica, California.

## 🌟 Overview

This website serves as the digital presence for Dr. Maya Reynolds' therapy practice, providing potential clients with information about services, approach, and office location. The design emphasizes calm, professionalism, and approachability—reflecting the therapeutic environment Dr. Reynolds creates for her clients.

## 🎨 Design Philosophy

The website features a coastal California aesthetic with a calming sage green and warm neutral color palette. The design prioritizes:

- **Accessibility**: High contrast ratios and readable typography
- **User Experience**: Clear navigation and intuitive layout
- **Mobile-First**: Fully responsive across all devices
- **Performance**: Optimized images and efficient code

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Font**: Inter (Google Fonts)
- **Icons**: Heroicons
- **Deployment**: Vercel

## 📂 Project Structure
```
├── app/
│   ├── layout.js          # Root layout with metadata
│   ├── page.js            # Homepage
│   └── globals.css        # Global styles and theme variables
├── components/
│   ├── Header.js          # Navigation header
│   ├── HeroSection.js     # Hero with CTA
│   ├── HeroBanner.js      # Supporting message
│   ├── MySpecialities.js  # Services overview
│   ├── WorkWithMe.js      # Client challenges section
│   ├── AboutMe.js         # Therapist bio
│   ├── OurOffice.js       # Office location and details
│   ├── ProfessionalBackground.js  # Credentials
│   ├── FAQs.js            # Frequently asked questions
│   ├── GetStarted.js      # Call-to-action
│   ├── Footer.js          # Contact info and links
│   ├── Button.js          # Reusable button component
│   └── ArchImage.js       # Reusable arch-shaped image component
├── public/
│   ├── images/            # Website images
│   └── fonts/             # Custom fonts (if any)
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/maya-wellness-portal.git
cd maya-wellness-portal
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Color Palette
```css
Primary Background:   #F7F5F2  /* Soft warm white */
Secondary Background: #E8E4DF  /* Warm gray */
Accent:              #A8B5B2  /* Sage green */
CTA:                 #8B9D98  /* Deeper sage */
Text:                #2D3534  /* Dark slate */
Muted Text:          #6B7572  /* Medium gray */
```

## ✨ Key Features

- **Responsive Design**: Seamless experience across desktop, tablet, and mobile
- **Performance Optimized**: Fast loading times with optimized images
- **SEO Ready**: Semantic HTML and meta tags for search engines
- **Accessibility**: WCAG 2.1 compliant with keyboard navigation support
- **Interactive Elements**: Accordion FAQs, mobile menu, scroll-triggered header
- **Custom Sections**: Unique "Our Office" section showcasing the practice location

## 📱 Sections

1. **Hero** - Main headline with call-to-action
2. **Banner** - Supporting message
3. **Services** - Three core specialties (Anxiety, Trauma/EMDR, Burnout)
4. **Work With Me** - Common client challenges
5. **About** - Therapist bio and approach
6. **Our Office** - Location and session details
7. **Professional Background** - Education, licensure, approach
8. **FAQs** - Common questions with accordion interface
9. **Get Started** - Final call-to-action
10. **Footer** - Contact information and links

## 🔧 Configuration

### Theme Variables

Theme colors and fonts are configured in `app/globals.css`:
```css
@theme {
  --color-primary: #F7F5F2;
  --color-foreground: #2D3534;
  --font-family-sans: 'Inter', sans-serif;
}
```

### Metadata

SEO metadata is configured in `app/layout.js`:
```js
export const metadata = {
  title: 'Dr. Maya Reynolds, PsyD | Therapist in Santa Monica, CA',
  description: 'Licensed clinical psychologist...',
}
```

Built with ❤️ using Next.js and Tailwind CSS
