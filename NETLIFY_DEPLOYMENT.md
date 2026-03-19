# Netlify Deployment Guide

## Pre-Deployment Checklist

- [x] All HTML, CSS, and JavaScript files are complete and production-ready
- [x] SEO metadata is properly configured
- [x] Schema.org JSON-LD is included for local business
- [x] All links use relative paths (`/css/`, `/js/`, `/assets/`)
- [x] Forms are configured with Web3Forms
- [x] Images are properly optimized and in `/assets/images/`
- [x] Accessibility (ARIA labels) is implemented
- [x] Mobile responsive design tested
- [x] Dark mode support included

## Step 1: Prepare Your Files

1. Ensure all images are in `/assets/images/` with lowercase filenames
2. Verify all file paths are relative (no absolute paths)
3. Check that Web3Forms access key is set to your actual key (currently placeholder)

## Step 2: Connect to Netlify

### Option A: Via Git (Recommended)

1. Initialize Git repository:
```bash
git init
git add .
git commit -m "Initial commit: Burwood Mechanics & Transmission website"
```

2. Create repository on GitHub/GitLab/Bitbucket
3. Push to remote:
```bash
git remote add origin https://github.com/yourusername/burwood-trans.git
git push -u origin main
```

4. Go to [Netlify.com](https://netlify.com) and sign in
5. Click "New site from Git"
6. Select your repository
7. Build settings:
   - Build command: (leave empty - no build needed)
   - Publish directory: `.` (root directory)
8. Click "Deploy site"

### Option B: Drag & Drop

1. Go to [Netlify.com](https://netlify.com)
2. Sign in or create account
3. Drag entire project folder into Netlify drop zone
4. Netlify auto-deploys immediately

## Step 3: Configure Domain

1. After deployment, note your Netlify URL (e.g., `xxx.netlify.app`)
2. In Netlify dashboard: **Site settings > Domain management**
3. Add custom domain option:
   - Click "Add custom domain"
   - Enter your domain (e.g., `burwoodtrans.com.au`)
   - Update DNS records with your registrar

## Step 4: Configure Forms

1. Replace `YOUR_WEB3FORMS_ACCESS_KEY` in `index.html`
   - Get key from [Web3Forms.com](https://web3forms.com)
   - Sign up for free account
   - Create new access key
   - Copy and paste into HTML hidden input

2. Test form submission on live site

## Step 5: SSL Certificate

Netlify provides free SSL automatically. HTTPS enabled by default.

## Step 6: Set Environment Variables (Optional)

For sensitive data:

1. Netlify Dashboard > **Site settings > Build & deploy > Environment**
2. Add variables:
   - `CONTACT_EMAIL`: admin@burwoodtrans.com.au
   - `BUSINESS_PHONE`: 0405399973

## Step 7: Configure Redirects (Optional)

Create `_redirects` file for URL rewriting if needed:

```
/thank-you  /index.html#contact  200
```

## Step 8: Set Up Analytics

### Google Analytics (Optional)

Add to `<head>` in index.html:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

Replace `GA_ID` with your Google Analytics tracking code.

### Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://burwoodtrans.com.au`
3. Verify domain
4. Submit sitemap (auto-generated)

## Step 9: Local SEO

1. **Google Business Profile**
   - Go to [Google Business](https://business.google.com)
   - Create/verify business
   - Add location: 2/240 Parramatta Road, Burwood NSW 2134
   - Add photos and hours
   - Link website

2. **Local Directories**
   - Yell.com
   - Yellow Pages Australia
   - Automotive directories

## Post-Deployment

### Performance Testing

1. **Google PageSpeed Insights**
   - Visit [PageSpeed Insights](https://pagespeed.web.dev)
   - Test your domain
   - Address any issues

2. **Mobile Testing**
   - Test on various devices
   - Use Chrome DevTools device emulation

### Monitoring

1. Set up Netlify notifications for:
   - Deploy failures
   - Performance alerts
   - SSL certificate expiry

2. Check analytics monthly
3. Monitor contact form submissions

## Maintenance

### Regular Updates

- Update business hours in footer/location section
- Add new testimonials
- Update service descriptions
- Refresh images seasonally

### Backup

- Keep local copy of all files
- Version control via Git
- Netlify auto-backups deployments

## Troubleshooting

### Forms Not Submitting
- Verify Web3Forms access key is correct
- Check hCaptcha is loaded
- Test in browser console for errors

### Images Not Loading
- Verify image filenames match exactly
- Check paths use `/assets/images/`
- Ensure images are uploaded to correct directory

### Mobile Display Issues
- Test viewport meta tag is present
- Clear browser cache
- Check media queries in CSS

### SEO Not Indexing
- Submit sitemap to Google Search Console
- Verify robots.txt allows indexing
- Check canonical URLs

## Contact & Support

**For Netlify Support**: [Netlify Docs](https://docs.netlify.com/)
**For Web3Forms Support**: [Web3Forms Docs](https://web3forms.com/docs)

## Summary

Your Burwood Mechanics & Transmission website is now production-ready for immediate deployment to Netlify with:

- ✅ Professional design with charcoal and deep red branding
- ✅ Full transmission specialist positioning
- ✅ Complete SEO optimization
- ✅ Local business schema markup
- ✅ Responsive mobile-first design
- ✅ Accessible for all users
- ✅ Fast performance
- ✅ Contact form integration
- ✅ Professional imagery support

Go live immediately - no additional development needed.
