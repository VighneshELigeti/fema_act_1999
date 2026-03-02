# FEMA Act 1999 — Interactive Explainer

A comprehensive, interactive web-based guide to the **Foreign Exchange Management Act (FEMA) 1999**, India's primary regulatory framework governing international transactions and foreign exchange operations.

## 📋 Project Overview

This project provides an in-depth, structured explanation of FEMA 1999—breaking down complex regulatory concepts into digestible, interactive modules. Designed for students, professionals, and anyone seeking to understand India's foreign exchange regulations.

### Target Audience
- Finance and banking professionals
- Law students and practitioners
- RBI (Reserve Bank of India) compliance officers
- Import-export businesses
- Academic researchers studying Indian financial regulations

## 🏗️ Project Structure

```
fema_act_1999/
├── index.html                       # Main landing page / overview
├── 01-objectives-approach/          # FEMA's core philosophy and objectives
├── 02-scope-applicability/          # Who & what does FEMA apply to?
├── 03-key-definitions/              # Terminology and core concepts
├── 04-regulatory-architecture/      # RBI, government & institutional framework
├── 05-current-account/              # Current account transaction rules
├── 06-capital-account/              # Capital account transaction rules
├── 07-export-import/                # Trade regulations & documentation
├── 08-compliance/                   # Reporting & compliance obligations
├── 09-contraventions/               # Violations & prohibited activities
├── 10-adjudication-appeals/         # Dispute resolution processes
├── 11-interfaces/                   # Interaction with other regulations
├── 12-lrs/                         # Liberalized Remittance Scheme (LRS)
├── 13-fema-vs-fera/                 # FEMA vs legacy FERA comparison
├── 14-amendments/                   # Key amendments to FEMA
├── css/
│   └── common.css                   # Shared styling & dark/light theme support
├── js/
│   └── common.js                    # Shared interactive functionality
└── README.md                        # This file
```

## 📖 Core Sections

| Section | Focus |
|---------|-------|
| **01 — Objectives & Approach** | Restrictive vs. facilitative philosophy, core goals |
| **02 — Scope & Applicability** | Territorial reach, resident/non-resident status, applicability matrix |
| **03 — Key Definitions** | Authorized dealers, remittance, residents, rupee accounts, etc. |
| **04 — Regulatory Architecture** | Roles of RBI, Government, Boards, etc. |
| **05 — Current Account** | Invisible transactions, repatriation rights, daily limits |
| **06 — Capital Account** | Investment flows, FDI, portfolio investment rules |
| **07 — Export/Import** | Documentation (EPC, Bill of Lading), repatriation timelines |
| **08 — Compliance** | AML/CFT, KYC, reporting requirements (STR, CTR) |
| **09 — Contraventions** | Prohibited activities, penalties, enforcement |
| **10 — Adjudication & Appeals** | Complaint mechanisms, appeal procedures |
| **11 — Interfaces** | Interaction with Customs Act, ITA, GST, etc. |
| **12 — LRS** | Annual $250,000 remittance scheme for resident individuals |
| **13 — FEMA vs FERA** | Historical contrast with legacy regulations |
| **14 — Amendments** | Key changes and updates to FEMA |

## 🎨 Design Features

- **Dark & Light Themes**: Toggle between themes for comfortable reading
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Animated diagrams, balance scales, comparison cards
- **Particle Animations**: Flowing background effects
- **Taxonomy Navigation**: Hierarchical section linking
- **Quick Facts**: At-a-glance statistics and key metrics
- **Color-Coded Concepts**: Use of accent colors to highlight different themes

## 🛠️ Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom properties (CSS variables), flexbox, grid, animations
- **JavaScript**: Vanilla JS for interactivity (no frameworks)
- **Accessibility**: ARIA labels and semantic HTML for screen reader support

## 📋 CSS Theme Variables

The project uses CSS custom properties for theming:

```css
--bg             /* Background color */
--bg-card        /* Card container background */
--text           /* Primary text color */
--text-muted     /* Secondary text color */
--accent         /* Primary accent (blue) */
--accent2        /* Green accent */
--accent3        /* Orange accent */
--accent4        /* Red accent */
--accent5        /* Purple accent */
--accent6        /* Light green accent */
```

Supports both `data-theme="dark"` and `data-theme="light"` modes.

## 🚀 Getting Started

1. **Clone or Download** this repository
2. **Open in Browser**: Simply open any `index.html` file in a modern web browser
3. **Navigate**: Use internal links to explore different sections
4. **Theme Toggle**: Switch between dark and light themes (if implemented in JS)

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ JavaScript support required
- CSS Grid & Flexbox support required

## 📱 Responsive Design

All pages are fully responsive:
- **Desktop**: Multi-column layouts, full animations
- **Tablet**: Adjusted grid layouts
- **Mobile**: Single-column stacked layouts, touch-friendly controls

## 🔗 Navigation Structure

```
index.html (Home)
├── 01-objectives-approach/
├── 02-scope-applicability/
├── 03-key-definitions/
├── ... (all sections linked)
└── 14-amendments/
```

Each section's `index.html` contains:
- Breadcrumb navigation
- Section-specific content
- Navigation to related sections
- Back-to-home links

## 📝 Content Organization

Each section follows a consistent structure:
1. **Hero Section**: Title, tagline, visual intro
2. **Overview**: Quick summary and scope
3. **Interactive Diagrams**: Visual explanations
4. **Detailed Explanation**: Main content
5. **Key Takeaways**: Summary cards
6. **Related Links**: Cross-references to related sections

## 🎯 Key Visual Components

- **Philosophy & Balance Scales**: Compare restrictive vs. facilitative approaches
- **Overview Diagrams**: Interactive node-based relationship maps
- **Stats Cards**: Quick facts and metrics
- **Comparison Tables**: Side-by-side regulatory comparisons
- **Animated Timelines**: Sequential transaction flows
- **Spectrum Sliders**: Position concepts on regulatory spectrum

## 💡 Use Cases

- **Student Learning**: Structured breakdown of FEMA for academic study
- **Compliance Training**: Internal training for financial institutions
- **Reference Material**: Quick lookup for regulatory questions
- **Professional Development**: Career advancement in finance/trade
- **Business Operations**: Understanding FX transaction rules

## 📚 Regulatory Context

FEMA 1999 is the cornerstone of Indian foreign exchange regulation:
- **Enacted**: 1999
- **Philosophy Evolution**: From restrictive (FERA) to facilitative (FEMA)
- **Primary Regulator**: Reserve Bank of India (RBI)
- **Scope**: All international monetary transactions by Indian residents/entities

## 🔄 Maintenance & Updates

To add or update content:
1. Follow the existing HTML structure
2. Use the shared `css/common.css` for styling
3. Include the shared `js/common.js` for functionality
4. Update navigation links in all affected pages
5. Test on multiple devices and browsers

## 📄 License & Disclaimer

⚠️ **Educational Use**: This material is for educational purposes and should not be considered legal or financial advice. For authoritative information, refer to:
- [RBI Official Website](https://www.rbi.org.in/)
- Official FEMA Regulations
- Licensed financial advisors

## 👤 Author

Created as a personal educational resource for learning and understanding FEMA 1999 regulations.

---

**Last Updated**: 2026  
**Version**: 1.0  
**Responsive**: ✅ Yes  
**Accessibility**: ✅ ARIA-compliant
