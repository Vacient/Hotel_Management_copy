---
name: Maritime Hospitality
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#44474d'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#75777e'
  outline-variant: '#c5c6cd'
  surface-tint: '#525f78'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#0e1c32'
  on-primary-container: '#77849f'
  inverse-primary: '#b9c7e4'
  secondary: '#006a61'
  on-secondary: '#ffffff'
  secondary-container: '#86f2e4'
  on-secondary-container: '#006f66'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#2f1500'
  on-tertiary-container: '#c76c00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b9c7e4'
  on-primary-fixed: '#0e1c32'
  on-primary-fixed-variant: '#3a475f'
  secondary-fixed: '#89f5e7'
  secondary-fixed-dim: '#6bd8cb'
  on-secondary-fixed: '#00201d'
  on-secondary-fixed-variant: '#005049'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#ffb77d'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6e3900'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.01em
  title-sm:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  currency-display:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 0.75rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system serves a premier hospitality management platform, engineered to evoke discretion, operational confidence, and modern boutique sophistication. It balances the meticulous control required by enterprise SaaS with the relaxed elegance of luxury resort management.

### Personality & Tone
- **Composed & Authoritative:** High legibility, grounded navy hues, and disciplined layout structures inspire confidence during busy front-desk operations.
- **Warm Hospitality:** Clean surfaces layered against warm off-white and cool mist backgrounds prevent cold institutional sterility.
- **Calm Precision:** Low-friction typography and distinct operational status indicators reduce cognitive strain during check-in surges.

### Design Movement: Modern Corporate Hospitality
The aesthetic fuses high-end editorial SaaS with modern boutique hotel web styling:
- Structural integrity via disciplined micro-borders (`#E2E8F0`).
- Subtle multi-layered ambient drop shadows simulating soft morning light.
- Ample negative space combined with high-density data tables and scheduling timelines.
- Clean functional geometry featuring smooth, rounded container boundaries.

## Colors

The palette establishes high-contrast hierarchy tailored for operational workflows across reception displays, back-office dashboards, and mobile housekeeping views.

### Color Roles & Guidelines

- **Primary (`#0C1A30` - Deep Navy Blue):** Used for authoritative structural surfaces, navigation sidebars, high-priority primary actions, and key heading text.
- **Secondary (`#0D9488` - Muted Coastal Teal):** Applied to active states, confirmed workflows, primary interactive links, and key metric visualizations.
- **Tertiary (`#D97706` - Warm Amber):** Reserved for urgent attention, pending statuses, and operational alerts.
- **Neutral Primary (`#1E293B` - Dark Navy Slate):** Applied to primary body copy, item headings, and dense tabular numerical data for contrast ratios exceeding WCAG AAA standards.
- **Neutral Muted (`#64748B` - Slate Muted):** Secondary labels, metadata, helper text, and icon indicators.
- **Surface Canvas (`#FAFBFD` - Warm Alabaster):** Master window backdrop providing subtle organic warmth over pure optical white.
- **Surface Card/Panel (`#FFFFFF` - Pure White):** Work area cards, elevated drawers, floating modal panels, and table row elements.
- **Surface Subtle (`#F1F5F9` - Light Slate Wash):** Table headers, disabled fields, and badge backgrounds.
- **Border Default (`#E2E8F0` - Soft Slate):** 1px structural framing for cards, inputs, and segmented controls.

### Operational Status Palette (Hospitality Semantic Mapping)
- **Booking Statuses:**
  - *Pending:* Background `#FEF3C7`, Text `#92400E`, Border `#FDE68A`
  - *Confirmed:* Background `#CCFBF1`, Text `#115E59`, Border `#99F6E4`
  - *Checked In:* Background `#E0E7FF`, Text `#3730A3`, Border `#C7D2FE`
  - *Checked Out:* Background `#F1F5F9`, Text `#475569`, Border `#CBD5E1`
  - *Cancelled:* Background `#FEE2E2`, Text `#991B1B`, Border `#FECACA`
  - *No-show:* Background `#F3E8FF`, Text `#6B21A8`, Border `#E9D5FF`
- **Payment Statuses:**
  - *Paid:* Background `#DCFCE7`, Text `#166534`, Border `#BBF7D0`
  - *Unpaid:* Background `#FEE2E2`, Text `#991B1B`, Border `#FECACA`
  - *Pay at Hotel Pending:* Background `#FFEDD5`, Text `#9A3412`, Border `#FED7AA`

## Typography

Typography relies uniformly on **Inter** to ensure maximum typographic neutrality, precision spacing, and dense tabular data clarity.

### Implementation Guidelines
- **Tabular Numerals:** Apply `font-feature-settings: "tnum" 1, "cv05" 1` to all pricing, room counts, date pickers, folio balances, and table cells to avoid horizontal shifts during dynamic updates.
- **Currency Presentation Rules (MMK):**
  - Prices must follow standard Myanmar Kyat display rules: integer formatting with comma separators followed by the currency code (`185,000 MMK`).
  - Unit rates append secondary context in regular weight: `185,000 MMK` `<span class="text-slate-500 font-normal">/ night</span>`.
  - Folio balance totals use `currency-display` weight 600.
- **Hierarchy Restraint:** Avoid using more than three font sizes inside a single operational card. Rely on slate color shifts (`#1E293B` to `#64748B`) to create depth instead of oversized type steps.

## Layout & Spacing

The layout is built upon an 8pt architectural rhythm using a responsive fluid grid with strict desktop boundary caps.

### Layout Philosophy & Breakpoints
- **Desktop (1280px and above):** 12-column grid. Left persistent sidebar pinned at 280px (collapsible to 72px). Central workspace container expands to 1600px maximum width with 32px canvas margins (`margin`).
- **Tablet (768px - 1279px):** 8-column layout. Sidebar transitions to off-canvas drawer or compact 72px icon rail. Gutter steps down to 16px (`1rem`), margins to 24px (`1.5rem`).
- **Mobile (< 768px):** 4-column layout. Margins collapse to 16px (`1rem`), column gutters to 12px (`0.75rem`). Bottom-sheet drawers and tabbed navigation take precedence over modal overlays.

### Spacing Usage Matrix
- `space-xs` (4px): Fine inner gap between badge icons and badge text; micro tag spacing.
- `space-sm` (8px): Form input inner vertical padding; table row cellular vertical clearance; gap between label and input.
- `space-md` (16px): Standard inner card padding; form group gaps; card header separation.
- `space-lg` (24px): Primary section padding for large metrics cards, drawers, and modal bodies.
- `space-xl` (32px): Vertical distance between distinct operational dashboards and canvas sections.

## Elevation & Depth

Visual depth avoids heavy, saturated shadows, using restrained ambient drops tinted with midnight slate `#0C1A30` combined with 1px border outlines.

### Elevation Levels

1. **Base Flat (Level 0):**
   - *Application:* Canvas background (`#FAFBFD`), passive data tables, inactive calendar timeline tracks.
   - *Styling:* No shadow, bordered by `#E2E8F0` where boundaries are required.
2. **Surface Resting (Level 1):**
   - *Application:* Standard metric cards, guest detail panels, room grid cards.
   - *Shadow:* `0 1px 3px 0 rgba(12, 26, 48, 0.04), 0 1px 2px -1px rgba(12, 26, 48, 0.04)`
   - *Border:* 1px solid `#E2E8F0`
3. **Interactive & Hover (Level 2):**
   - *Application:* Hovered room cards, active table row expansion, quick-action split buttons.
   - *Shadow:* `0 4px 6px -1px rgba(12, 26, 48, 0.06), 0 2px 4px -2px rgba(12, 26, 48, 0.04)`
   - *Border:* 1px solid `#CBD5E1`
4. **Floating Overlays (Level 3):**
   - *Application:* Dropdowns, booking filter flyouts, room assignment popovers.
   - *Shadow:* `0 10px 15px -3px rgba(12, 26, 48, 0.08), 0 4px 6px -4px rgba(12, 26, 48, 0.04)`
   - *Border:* 1px solid `#E2E8F0`
5. **Modal / Dialog Sheets (Level 4):**
   - *Application:* Reservation creation modals, guest checkout payment processing screens.
   - *Shadow:* `0 20px 25px -5px rgba(12, 26, 48, 0.10), 0 8px 10px -6px rgba(12, 26, 48, 0.06)`
   - *Backdrop:* `rgba(12, 26, 48, 0.45)` with `backdrop-filter: blur(4px)`

## Shapes

The design uses balanced, modern geometric curvature to maintain a refined yet approachable atmosphere.

### Radius Mapping
- **Input Fields & Buttons (`0.5rem` / 8px):** Clean ergonomic interactive corners that match standard UI density without feeling sharp.
- **Cards & Data Modules (`1rem` / 16px):** Elevated panels, calendar day blocks, and booking summaries utilize smooth corners (`rounded-lg`).
- **Feature Cards & Modals (`1.5rem` / 24px):** Large reservation dialogs, front desk overview summaries, and image-rich room cards utilize prominent rounding (`rounded-xl` / `rounded-2xl`).
- **Badges, Tags & Avatars (`9999px` / Full Pill):** Booking status indicators, payment chips, and staff/guest avatar containers.

## Components

### Buttons
- **Primary:** Background `#0C1A30`, text `#FFFFFF`, border none, border-radius `0.5rem`. Hover `#1E293B`. Focus ring `2px #0D9488` with 2px offset.
- **Secondary (Teal Accent):** Background `#0D9488`, text `#FFFFFF`. Hover `#115E59`.
- **Outline / Ghost:** Background transparent, text `#0C1A30`, border `1px solid #E2E8F0`. Hover `#F8FAFC`.
- **Destructive:** Background `#EF4444`, text `#FFFFFF`. Hover `#DC2626`.
- **Dimensions:** Default height 40px (10px 16px padding). Compact table action height 32px (6px 12px padding). Icons sized to 18px stroke width 1.75px.

### Status Badges & Chips
- **Geometry:** Height 24px, pill-shaped (`9999px`), padding `2px 10px`, typography `label-sm`.
- **Visuals:** Low-opacity background, high-contrast dark text, subtle 1px border matching the tint. Include a 6px circular dot indicator on the leading edge for instant scanning.
- **Examples:**
  - *Booking Pending:* Background `#FEF3C7`, Dot `#D97706`, Text `#92400E`, Border `#FDE68A`.
  - *Booking Confirmed:* Background `#CCFBF1`, Dot `#0D9488`, Text `#115E59`, Border `#99F6E4`.
  - *Payment Paid:* Background `#DCFCE7`, Dot `#16A34A`, Text `#166534`, Border `#BBF7D0`.

### Cards & Surfaces
- **Room / Booking Cards:** Background `#FFFFFF`, border `1px solid #E2E8F0`, corner radius `1rem` (16px), elevation Level 1.
- **Padding Hierarchy:** Card headers have 16px padding with bottom border `#F1F5F9`. Card body has 16px to 20px padding. Card footer (actions, pricing totals) has 12px 16px padding with top border `#F1F5F9`.

### Form Fields & Inputs
- **Base Input:** Background `#FFFFFF`, border `1px solid #CBD5E1`, border-radius `0.5rem`, height 40px, padding `0 12px`, typography `body-md`. Placeholder color `#94A3B8`.
- **Active / Focused:** Border color `#0D9488`, box-shadow `0 0 0 3px rgba(13, 148, 138, 0.15)`.
- **Error State:** Border color `#EF4444`, box-shadow `0 0 0 3px rgba(239, 68, 68, 0.15)`.

### Checkboxes & Radio Buttons
- **Checkbox:** 18x18px, rounded 4px, border `1.5px solid #94A3B8`. Checked state `#0C1A30` with white checkmark icon.
- **Radio:** 18x18px circle, border `1.5px solid #94A3B8`. Checked state `#0D9488` with 6px centered white solid dot.

### Specialized Hospitality Components
- **Room Availability Pill:** Compact interactive cell on timeline view. Color-coded by state: Available (`#F0FDF4`), Occupied (`#F1F5F9`), Maintenance (`#FFF1F2`). Shows guest name in `body-sm` bold.
- **Folio Pricing Row:** Tabular alignment. Description left-aligned, nights/multiplier centered in muted gray, total right-aligned formatted as `185,000 MMK` with strict monospace figures.
- **Timeline Date Range Header:** Pinned top navigation bar with date blocks, day name in `label-sm` uppercase, date integer in `title-sm`.