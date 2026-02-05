# Common Components Guide

## Phase 5 Complete: Common Components Development ✅

This guide documents the enhanced common components with responsive design, mobile navigation, and comprehensive styling.

---

## 1. Header Component

**Location:** `src/components/common/Header.jsx`

### Features
- ✅ **Responsive Mobile Navigation** - Hamburger menu for mobile devices
- ✅ **Active Route Highlighting** - Shows current page
- ✅ **Cart Badge** - Displays item count
- ✅ **User Authentication UI** - Login/Signup or Profile/Logout
- ✅ **Mobile Menu Overlay** - Dark overlay when mobile menu is open
- ✅ **SVG Icons** - Lightweight vector icons

### Usage
```jsx
import Header from './components/common/Header';

// Used automatically in App.jsx
<Header />
```

### Mobile Breakpoints
- **Mobile:** < 768px - Hamburger menu
- **Tablet/Desktop:** ≥ 769px - Full navigation bar

---

## 2. Footer Component

**Location:** `src/components/common/Footer.jsx`

### Features
- ✅ **4-Column Grid Layout** - Responsive to 1, 2, or 4 columns
- ✅ **About Section** - Company description with social media links
- ✅ **Quick Links** - Navigation shortcuts
- ✅ **Customer Service** - Help and support links
- ✅ **Contact Information** - Phone, email, address with icons
- ✅ **Social Media Icons** - Facebook, Twitter, Instagram, LinkedIn
- ✅ **Legal Links** - Privacy, Terms, Cookies
- ✅ **Copyright Notice** - Automatic year

### Usage
```jsx
import Footer from './components/common/Footer';

// Used automatically in App.jsx
<Footer />
```

### Responsive Grid
- **Mobile:** 1 column (< 640px)
- **Tablet:** 2 columns (640px - 1023px)
- **Desktop:** 4 columns (≥ 1024px)

---

## 3. Sidebar Component

**Location:** `src/components/common/Sidebar.jsx`

### Features
- ✅ **Collapsible** - Show/hide sidebar
- ✅ **Responsive** - Fixed position on mobile
- ✅ **Position Control** - Left or right placement
- ✅ **Mobile Overlay** - Dark overlay on mobile
- ✅ **Filter Groups** - Collapsible filter sections
- ✅ **Mobile Toggle Button** - Floating filter button

### Usage
```jsx
import Sidebar, { SidebarFilterGroup } from './components/common/Sidebar';

// Basic Sidebar
<Sidebar title="Filters" collapsible={true}>
  <div>Your content here</div>
</Sidebar>

// With Filter Groups
<Sidebar title="Filters">
  <SidebarFilterGroup title="Categories" defaultOpen={true}>
    <label>
      <input type="checkbox" /> Commercial
    </label>
    <label>
      <input type="checkbox" /> Private
    </label>
  </SidebarFilterGroup>
  
  <SidebarFilterGroup title="Price Range">
    <input type="range" min="0" max="1000000" />
  </SidebarFilterGroup>
</Sidebar>
```

### Props
- `title` - Sidebar header title
- `position` - "left" or "right" (default: "left")
- `collapsible` - Enable collapse button (default: true)
- `defaultCollapsed` - Start collapsed (default: false)
- `className` - Additional CSS classes

### Mobile Behavior
- **Mobile:** < 768px - Fixed overlay sidebar
- **Desktop:** ≥ 768px - Inline sidebar

---

## 4. Button Component

**Location:** `src/components/common/Button.jsx`

### Features
- ✅ **Multiple Variants** - 7 style variants
- ✅ **Size Options** - Small, medium, large
- ✅ **Loading State** - Spinner animation
- ✅ **Icon Support** - Left or right icons
- ✅ **Full Width Option** - Responsive button
- ✅ **Link Support** - Router links & external links
- ✅ **Disabled State** - Visual feedback

### Button Variants

#### 1. Primary
```jsx
<Button variant="primary">Primary Button</Button>
```
Blue background, white text - Main CTAs

#### 2. Secondary
```jsx
<Button variant="secondary">Secondary Button</Button>
```
Dark gray background - Secondary actions

#### 3. Accent
```jsx
<Button variant="accent">Accent Button</Button>
```
Yellow background - Highlight actions

#### 4. Success
```jsx
<Button variant="success">Success Button</Button>
```
Green background - Success/confirm actions

#### 5. Danger
```jsx
<Button variant="danger">Delete</Button>
```
Red background - Destructive actions

#### 6. Ghost
```jsx
<Button variant="ghost">Ghost Button</Button>
```
Transparent with blue border - Tertiary actions

#### 7. Outline
```jsx
<Button variant="outline">Outline Button</Button>
```
Transparent with gray border - Subtle actions

### Button Sizes

```jsx
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>  {/* default */}
<Button size="large">Large</Button>
```

### Loading State

```jsx
<Button loading={true}>Processing...</Button>
```
Shows spinner, disables interaction

### With Icons

```jsx
import { ShoppingCartIcon } from './icons';

// Left icon (default)
<Button 
  icon={<ShoppingCartIcon />}
  iconPosition="left"
>
  Add to Cart
</Button>

// Right icon
<Button 
  icon={<ArrowRightIcon />}
  iconPosition="right"
>
  Next
</Button>
```

### Router Link Button

```jsx
<Button to="/catalog">Browse Catalog</Button>
```
Uses React Router Link internally

### External Link Button

```jsx
<Button href="https://example.com">Visit Website</Button>
```
Opens in new tab with security attributes

### Full Width Button

```jsx
<Button fullWidth variant="primary">
  Checkout
</Button>
```

### Complete Example

```jsx
<Button
  variant="primary"
  size="large"
  icon={<CartIcon />}
  onClick={handleAddToCart}
  loading={isAdding}
  disabled={outOfStock}
  fullWidth
>
  Add to Cart
</Button>
```

---

## 5. IconButton Component

**Usage:**
```jsx
import { IconButton } from './components/common/Button';

<IconButton 
  icon={<CloseIcon />}
  onClick={handleClose}
  variant="ghost"
  ariaLabel="Close dialog"
/>
```

Circular button for icons only (no text)

---

## 6. ButtonGroup Component

**Usage:**
```jsx
import { ButtonGroup } from './components/common/Button';

<ButtonGroup spacing="default" orientation="horizontal">
  <Button variant="outline">Cancel</Button>
  <Button variant="primary">Save</Button>
</ButtonGroup>
```

### Props
- `spacing` - "tight", "default", "loose"
- `orientation` - "horizontal", "vertical"

---

## Styling

All components use the CSS variables defined in `src/styles/variables.css`:

### Color Variables
```css
--color-sky-blue: #2196f3
--color-accent-yellow: #ffd600
--color-jet-gray: #263238
--color-cloud-white: #f5f7fa
--success-color: #27ae60
--danger-color: #e74c3c
```

### Component Styles
Located in `src/styles/components.css`

- Button styles: Lines 1-200
- Header styles: Lines 201-550
- Footer styles: Lines 600-750
- Sidebar styles: Lines 800-1050

---

## Responsive Breakpoints

All components follow these breakpoints:

- **Mobile:** < 768px
- **Tablet:** 768px - 1023px
- **Desktop:** ≥ 1024px
- **Large Desktop:** ≥ 1200px

---

## Testing Checklist

### Header
- [ ] Logo links to home page
- [ ] Navigation links work
- [ ] Active link is highlighted
- [ ] Cart badge shows correct count
- [ ] Mobile menu toggles open/closed
- [ ] Overlay closes menu when clicked
- [ ] Login/Signup shows when logged out
- [ ] Profile/Logout shows when logged in

### Footer
- [ ] All links are clickable
- [ ] Social icons link to platforms
- [ ] Contact info is visible
- [ ] Responsive grid adjusts properly
- [ ] Current year displays correctly

### Sidebar
- [ ] Collapses and expands
- [ ] Filter groups toggle open/closed
- [ ] Mobile overlay works
- [ ] Fixed positioning on mobile
- [ ] Scrollable when content overflows

### Buttons
- [ ] All variants display correctly
- [ ] Hover states work
- [ ] Loading state shows spinner
- [ ] Disabled state prevents clicks
- [ ] Icons appear in correct position
- [ ] Router links navigate properly
- [ ] External links open in new tab

---

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## Accessibility Features

- ✅ **ARIA Labels** - Screen reader support
- ✅ **Keyboard Navigation** - Tab/Enter support
- ✅ **Focus States** - Visible focus indicators
- ✅ **Semantic HTML** - Proper HTML5 elements
- ✅ **Color Contrast** - WCAG AA compliant
- ✅ **Alt Text** - SVG title/aria-label attributes

---

## Next Steps

Phase 5 (Common Components) is complete! Ready for:

- **Phase 6:** Context & State Management Enhancement
- **Phase 7:** Form Components Development
- **Phase 8:** Page Components Development
- **Phase 9:** Testing & Optimization

---

## Questions or Issues?

If you encounter any issues with these components:

1. Check browser console for errors
2. Verify all imports are correct
3. Ensure CSS files are imported in correct order
4. Check that React Router is properly configured
5. Verify context providers are wrapping components

---

**Last Updated:** February 5, 2026  
**Version:** 1.0.0  
**Status:** ✅ Complete
