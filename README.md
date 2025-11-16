# Personal Portfolio Website

A professional, responsive personal portfolio website built with HTML, CSS, and JavaScript. Easily customizable and ready to deploy to the web.

## Features

✨ **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
🎨 **Modern UI** - Clean, professional design with smooth animations
📱 **Mobile Menu** - Hamburger menu for mobile devices
🔗 **Smooth Navigation** - Smooth scrolling to sections
📧 **Contact Form** - Ready-to-use contact form
🚀 **Easy Deployment** - Deploy to multiple platforms with zero configuration

## Structure

```
SampleWebsite/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles and responsive design
├── js/
│   └── script.js       # JavaScript for interactivity
└── assets/             # Folder for images and other media
    ├── profile.jpg     # Your profile picture
    ├── project1.jpg    # Project image 1
    ├── project2.jpg    # Project image 2
    └── project3.jpg    # Project image 3
```

## Customization Guide

### 1. **Update Personal Information**
Open `index.html` and replace:
- "Your Name" with your actual name
- "Your professional tagline or job title here" with your tagline
- Your email address in the contact section
- Your phone number
- Your location

### 2. **Add Your Profile Picture**
- Place your profile image in the `assets/` folder
- Name it `profile.jpg` or update the src in the HTML
- Recommended size: 350x350px (square format)

### 3. **Add Project Images**
- Add your project images to the `assets/` folder
- Name them `project1.jpg`, `project2.jpg`, `project3.jpg`
- Update project information in the Projects section

### 4. **Update Skills**
In the Skills section, modify each skill card:
- Change the icon (using Font Awesome icons)
- Update category titles
- List your specific skills

### 5. **Add Social Links**
Update the social media links in the social links section:
- LinkedIn
- GitHub
- Twitter
- Email

### 6. **Contact Form Setup**
Currently, the contact form shows a success message. To actually send emails:

**Option A: Using Formspree (Recommended)**
1. Go to https://formspree.io/
2. Create a free account
3. Add your email
4. In `index.html`, replace the form action:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
5. Add name attribute to inputs:
```html
<input type="text" name="name" placeholder="Your Name" required>
<input type="email" name="email" placeholder="Your Email" required>
<textarea name="message" placeholder="Your Message" rows="5" required></textarea>
```

**Option B: Using Web3Forms**
1. Go to https://web3forms.com/
2. Get your access key
3. Update the form in HTML

## Deployment Options

### 1. **Netlify (Recommended - Free)**
1. Push your code to GitHub
2. Go to https://netlify.com
3. Click "New site from Git"
4. Select your repository
5. Click Deploy
6. Your site will be live in seconds!

**Alternative (Drag & Drop):**
1. Go to https://netlify.com
2. Drag and drop your folder
3. Your site is live!

### 2. **Vercel (Free)**
1. Go to https://vercel.com
2. Import your GitHub repository or drag & drop folder
3. Click Deploy
4. Custom domain support included

### 3. **GitHub Pages (Free)**
1. Create a new GitHub repository named `username.github.io`
2. Push your website files to the repository
3. Your site will be live at `https://username.github.io`

### 4. **Cloudflare Pages (Free)**
1. Go to https://pages.cloudflare.com
2. Connect your GitHub account
3. Select your repository
4. Deploy

### 5. **Bluehost / GoDaddy / Hostinger (Paid)**
1. Purchase hosting
2. Upload files via FTP/File Manager
3. Connect your domain
4. Your site is live!

### 6. **Firebase Hosting (Free/Paid)**
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

## Quick Start

1. **Open the website locally:**
   - Double-click `index.html` or open it in your browser

2. **Customize the content:**
   - Edit `index.html` with your information
   - Add your images to the `assets/` folder

3. **Deploy:**
   - Choose one of the deployment options above
   - Follow the steps to go live

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Tips

1. **Optimize Images:**
   - Compress images using https://tinypng.com/
   - Use .webp format for faster loading
   - Keep file sizes under 500KB per image

2. **Enable Caching:**
   - Configure browser caching on your hosting platform
   - Use CDN for faster delivery

3. **Minify CSS/JS (Optional):**
   - Use online tools to minify files
   - Reduce file sizes

## SEO Optimization

Update the meta tags in `index.html`:
```html
<meta name="description" content="Your unique description here">
<meta name="keywords" content="Your, Keywords, Here">
<meta name="author" content="Your Name">
```

Add open graph tags for social sharing:
```html
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your description">
<meta property="og:image" content="assets/profile.jpg">
```

## License

This template is free to use and modify for personal use.

## Support

For issues or questions:
- Check the code comments
- Review the deployment guides
- Test on multiple browsers

---

**Ready to deploy? Choose your platform above and get your portfolio online today!** 🚀
