# 🛍️ AJIO — Online Fashion Shopping Website

A responsive, feature-rich fashion e-commerce frontend built with vanilla HTML, CSS, and JavaScript. Inspired by the AJIO shopping platform, this project demonstrates a fully functional shopping UI including a hero slider, product filtering, cart functionality, newsletter subscription, and more.

---

## 📸 Preview

> The site includes three auto-sliding hero banners, a categorised product grid, animated scroll reveals, and a sticky navbar — all without any frameworks or libraries.

---

## 🗂️ Project Structure

```
├── index.html        # Main HTML structure
├── style.css         # All styling (responsive, animations, layout)
├── script.js         # Interactive behaviour (slider, cart, filters, etc.)
├── women.jpeg        # Category image — Women
├── men.jpeg          # Category image — Men
├── kid.jpeg          # Category image — Kids
├── accesiories.jpg   # Category image — Accessories
├── footwear.jpeg     # Category image — Footwear
├── floral.jpg        # Product image — Floral Wrap Dress
├── chenos.avif       # Product image — Slim Fit Chinos
├── kurta.jpeg        # Product image — Ethnic Kurta Set
├── tshirt.jpeg       # Product image — Graphic Oversized Tee
├── dungaress.jpg     # Product image — Printed Dungaree
├── bag.jpeg          # Product image — Crossbody Bag
├── heels.webp        # Product image — Block Heel Sandals
└── blazzer.jpeg      # Product image — Formal Blazer
```

---

## ✨ Features

- **Hero Slider** — Auto-playing 3-slide banner with dot navigation; pauses on hover
- **Sticky Navbar** — Deepens shadow on scroll; collapses to hamburger menu on mobile
- **Offer Strip** — Horizontally scrolling promotional ticker
- **Category Filter** — Click any category card or filter button to show/hide products
- **Product Cards** — Hover reveals an "Add to Cart" overlay with smooth image zoom
- **Cart Counter** — Live badge on the cart icon with a bounce animation on each add
- **Toast Notification** — Bottom-right pop-up confirmation when an item is added
- **Scroll Animations** — Product cards fade and slide up as they enter the viewport
- **Newsletter Form** — Client-side email validation with success/error feedback
- **About Section** — Stats grid with hover highlight effects
- **Responsive Design** — Fully mobile-friendly via CSS media queries (breakpoint: 768px)

---

## 🚀 Getting Started

No build tools, package managers, or dependencies required.

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/ajio-clone.git
   cd ajio-clone
   ```

2. **Add your product/category images** to the project root (see filenames in the structure above).

3. **Open in browser**
   ```bash
   # Simply open index.html directly, or use a local server:
   npx serve .
   # or
   python -m http.server 8000
   ```

4. Visit `http://localhost:8000` (or just open `index.html`) in your browser.

---

## 🎨 Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Semantic page structure |
| CSS3 | Layout (Flexbox), animations, responsive design |
| Vanilla JavaScript | Interactivity (no frameworks) |

---

## 📱 Responsive Breakpoints

| Screen | Behaviour |
|---|---|
| > 768px | Full navbar, horizontal layouts, larger product cards |
| ≤ 768px | Hamburger menu, stacked sections, compact product cards |

---

## 🛠️ Customisation

- **Add products** — Duplicate any `.product-card` block in `index.html` and set the `data-cat` attribute to `women`, `men`, `kids`, `accessories`, or `footwear`.
- **Add a filter category** — Add a new `<button class="filter-btn">` and matching `data-cat` value on product cards.
- **Change brand colours** — The primary accent (`#f96167`) and dark base (`#1a1a2e`) appear throughout `style.css`; a find-and-replace will retheme the whole site.
- **Slider timing** — Edit the `setInterval(autoSlide, 4000)` value in `script.js` to change the auto-advance delay (milliseconds).

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

- Placeholder hero images served by [Picsum Photos](https://picsum.photos)
- Inspired by [AJIO.com](https://www.ajio.com)

---

*Made with ❤️ in India*
