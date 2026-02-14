# Dr. Maya Reynolds - Therapy Practice Website

A modern, fully responsive website for a licensed clinical psychologist specializing in anxiety, trauma, and burnout therapy. Built with Next.js and Tailwind CSS, featuring smooth animations, SEO optimization, and an intuitive user experience.

🔗 **[View Live Site](https://bloom-therapy-steel.vercel.app)** | 📂 **[View Code](https://github.com/NIHHHHHHHHHHH/bloom-therapy)**

## 🌟 Overview

This project showcases a complete web solution for mental health professionals. The website emphasizes accessibility, trust, and ease of use—critical factors for therapy practices. It includes multiple pages, interactive forms, and is optimized for both desktop and mobile devices.

## ✨ Key Features

- **Fully Responsive Design**: Seamless experience across all devices (mobile, tablet, desktop)
- **Modern Animations**: Smooth, performance-optimized animations using Framer Motion
- **SEO Optimized**: Meta tags, semantic HTML, and optimized content for search engines
- **Contact Form**: Functional form with validation and user feedback
- **Google Maps Integration**: Interactive map showing office location
- **Accessibility**: WCAG 2.1 compliant with keyboard navigation and screen reader support
- **Performance**: Optimized images, lazy loading, and fast page loads
- **Component Architecture**: Reusable, modular components for maintainability

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Fonts**: Plus Jakarta Sans, Lora (serif)
- **Image Optimization**: Next.js Image component
- **Deployment**: Vercel

## 📂 Project Structure
```
├── app/
│   ├── layout.js           # Root layout with metadata
│   ├── page.js             # Homepage
│   ├── about/
│   │   └── page.js         # About page
│   ├── contact/
│   │   └── page.js         # Contact page
│   └── globals.css         # Global styles and theme
├── components/
│   ├── Header.js           # Navigation with mobile menu
│   ├── Footer.js           # Site footer
│   ├── HeroSection.js      # Homepage hero
│   ├── MySpecialities.js   # Services overview
│   ├── WorkWithMe.js       # Client challenges section
│   ├── AboutMe.js          # Therapist bio
│   ├── OurOffice.js        # Office details and images
│   ├── ProfessionalBackground.js  # Credentials accordion
│   ├── FAQs.js             # Frequently asked questions
│   ├── CTA.js              # Call-to-action section
│   ├── about/              # About page components
│   │   ├── AboutHero.js
│   │   ├── DetailedBio.js
│   │   ├── TherapeuticApproach.js
│   │   ├── EducationCredentials.js
│   │   ├── WhyIBecameTherapist.js
│   │   └── AboutCTA.js
│   ├── contact/            # Contact page components
│   │   ├── ContactHero.js
│   │   ├── ContactForm.js
│   │   ├── ContactInfo.js
│   │   └── ContactMap.js
│   └── Resuable/           # Reusable components
│       ├── Button.jsx
│       ├── Accordion.js
│       ├── AnimatedDiv.js
│       └── ArchImage.js
└── public/
    ├── images/             # Website images
    └── fonts/              # Custom fonts (if any)
```

## 🎨 Design System

### Color Palette
```css
Primary Background:   #F8F6F3  /* Soft warm white */
Secondary Background: #E8E3DC  /* Warm sand */
Accent:              #D4C9BC  /* Warm taupe */
CTA:                 #9B8B7E  /* Grounded clay */
Foreground Text:     #2C2420  /* Deep warm brown */
Icons:               #7A9B9E  /* Soft sage-blue */
Hover:               #5D7F82  /* Deeper sage-blue */
```

### Typography

- **Primary Font**: Plus Jakarta Sans (sans-serif)
- **Secondary Font**: Lora (serif, for emphasis)
- **Font Weights**: 300, 400, 500, 600, 700

### Spacing & Layout

- **Container Max Width**: 1400px
- **Section Padding**: 64px (mobile) - 96px (desktop)
- **Component Spacing**: Consistent 8px grid system

## 📱 Pages

### Homepage
- Hero section with main headline and CTA
- Brief introduction banner
- Three core services/specialties
- "Work With Me" section addressing client challenges
- About preview with professional photo
- Office location and details
- Professional background (accordion)
- FAQ section
- Final CTA

### About Page
- Detailed professional bio
- Therapeutic approach and methodologies
- Education and credentials
- Personal story and philosophy
- Call-to-action

### Contact Page
- Contact form with validation
- Office information (address, phone, email, hours)
- Google Maps integration
- Parking and accessibility details

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/maya-wellness-portal.git

# Navigate to project directory
cd maya-wellness-portal

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

Or connect your GitHub repository to Vercel for automatic deployments on push.

## ✨ Key Components

### Reusable Components

**Button** - Versatile button with multiple variants and animated arrow
```javascript
<Button href="/contact" variant="default">
  Get in Touch
</Button>
```

**Accordion** - Expandable sections with smooth animations
```javascript
<Accordion items={faqs} defaultOpenIndex={0} variant="faq" />
```

**AnimatedDiv** - Scroll-triggered animations with customizable direction
```javascript
<AnimatedDiv direction="left" delay={0.2}>
  <YourContent />
</AnimatedDiv>
```

**ArchImage** - Signature arch-shaped image with optional overlay
```javascript
<ArchImage 
  src="/images/hero.jpg" 
  alt="Description"
  overlayImage={{ src: "/images/overlay.jpg", alt: "Overlay" }}
/>
```

## 🎯 Performance Optimizations

- **Image Optimization**: Next.js Image component with WebP format
- **Lazy Loading**: Images and components load on demand
- **Code Splitting**: Automatic code splitting by Next.js
- **Font Optimization**: Google Fonts with display swap
- **Minification**: CSS and JavaScript minified in production
- **Caching**: Static assets cached with appropriate headers

## 📊 SEO Features

- Semantic HTML structure
- Meta tags for social sharing (Open Graph, Twitter Card)
- Structured data for local business
- XML sitemap
- Optimized page titles and descriptions
- Alt text for all images
- Mobile-friendly design
- Fast loading times

## 🔧 Configuration

### Theme Customization

Update theme variables in `app/globals.css`:
```css
@theme {
  --color-primary: #F8F6F3;
  --color-foreground: #2C2420;
  /* ... */
}
```

### Metadata

Update SEO metadata in each page's layout or page component:
```javascript
export const metadata = {
  title: 'Your Title',
  description: 'Your description',
}
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Future Enhancements

- [ ] Blog section with CMS integration
- [ ] Online booking/scheduling system
- [ ] Client portal for secure messaging
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Enhanced analytics integration

**Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion**

*This website demonstrates modern web development practices for healthcare and wellness industries, with emphasis on accessibility, user experience, and performance.*
