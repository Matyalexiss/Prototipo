---
name: Serene Sanctuary
colors:
  surface: '#f8faf9'
  surface-dim: '#d8dada'
  surface-bright: '#f8faf9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f3'
  surface-container: '#eceeed'
  surface-container-high: '#e6e9e8'
  surface-container-highest: '#e1e3e2'
  on-surface: '#191c1c'
  on-surface-variant: '#414845'
  inverse-surface: '#2e3131'
  inverse-on-surface: '#eff1f0'
  outline: '#717974'
  outline-variant: '#c1c8c3'
  surface-tint: '#436558'
  primary: '#406255'
  on-primary: '#ffffff'
  primary-container: '#587b6d'
  on-primary-container: '#effff6'
  inverse-primary: '#a9cfbe'
  secondary: '#416277'
  on-secondary: '#ffffff'
  secondary-container: '#c1e4fd'
  on-secondary-container: '#45677b'
  tertiary: '#874c0a'
  on-tertiary: '#ffffff'
  tertiary-container: '#a56423'
  on-tertiary-container: '#fffaf8'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c5ebda'
  primary-fixed-dim: '#a9cfbe'
  on-primary-fixed: '#002117'
  on-primary-fixed-variant: '#2b4d41'
  secondary-fixed: '#c5e7ff'
  secondary-fixed-dim: '#a8cbe3'
  on-secondary-fixed: '#001e2d'
  on-secondary-fixed-variant: '#284b5e'
  tertiary-fixed: '#ffdcc1'
  tertiary-fixed-dim: '#ffb779'
  on-tertiary-fixed: '#2e1500'
  on-tertiary-fixed-variant: '#6c3a00'
  background: '#f8faf9'
  on-background: '#191c1c'
  surface-variant: '#e1e3e2'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 34px
    fontWeight: '600'
    lineHeight: 42px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.02em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1.25rem
  margin: 1.5rem
  space-xs: 0.375rem
  space-sm: 0.75rem
  space-md: 1.25rem
  space-lg: 1.75rem
  space-xl: 2.5rem
---

## Brand & Style

This design system is tailored for clinical mental health monitoring and patient-reported outcomes (PROMs), engineered specifically to comply with SRS-INT-003 and SRS-FUN-010. The core mission is to create a "low-stimulation interface" (LSI) that reduces cognitive load, minimizes sensory overwhelm, and establishes a secure, peaceful sanctuary during acute emotional states.

The design movement synthesizes **Organic Soft Minimalism** with **Calm Ambient Ergonomics**:
- **Cognitive Warmth:** Interactions emphasize spaciousness, forgiving touch targets, and natural pacing rather than abrupt feedback loops.
- **Tone & Atmosphere:** Grounded, restorative, clinical yet deeply empathetic. Visual noise is actively suppressed—avoiding abrasive borders, saturated contrasts, and flashing transitions.
- **Emotional Response:** The interface induces tranquility, physiological grounding, and safety, reassuring patients that crisis intervention is instantly accessible without feeling punitive or alarming.

## Colors

The color palette reflects natural, biophilic, restorative cues with an off-white cream base (`#F8FAF9`) that prevents optical glare and migraine triggers common with pure clinical whites.

- **Primary (`#587B6D` - Soft Sage):** Anchors navigation, standard affirmations, stable biometric markers, and primary task completions. Provides grounded emotional reassurance.
- **Secondary (`#6C8EA4` - Ethereal Slate Blue):** Applied to restorative metrics (e.g., REM sleep cycles, mindful breathing exercises, and ambient data visualizations).
- **Tertiary (`#D48B47` - Muted Warm Amber):** Reserved strictly for mild mood dips, missed check-ins, medication reminders, or subtle vitals drift without inducing alarm.
- **Neutral Canvas (`#F8FAF9` - Warm Cream Off-White):** Serves as the primary surface background. Paired with tonal surfaces:
  - Surface Raised: `#FFFFFF`
  - Surface Subdued: `#EEF2EF`
  - Text Primary: `#202D27` (Deep Pine Charcoal, avoiding pure black harshness)
  - Text Secondary: `#53635B` (Balanced neutral muted green-gray)
- **Crisis / Código Rojo Accent (`#C44343` - Calm Crimson):** A deep, velvet crimson calibrated for immediate optical isolation and rapid discovery during distress, deliberately avoiding neon panic-inducing tones while maintaining high legibility against cream surfaces.

## Typography

The type hierarchy uses **Plus Jakarta Sans** across all roles. Its gentle, rounded humanist geometry provides high legibility under cognitive fatigue without appearing childish or unscientific.

- **Legibility & Pacing:** Line heights are deliberately expanded (body-lg at 1.53 ratio) to avoid tight line clusters, making reading comfortable for patients experiencing dissociation or visual sensory overload.
- **Hierarchy Rules:**
  - `display` and `headline-lg` are reserved for serene morning check-ins and primary clinical scores.
  - `body-lg` is optimized for clinical questionnaires (PROMs) to facilitate seamless reading comprehension.
  - `label-sm` retains positive letter-spacing (`0.02em`) for connected biometric status markers (Fitbit sync times, battery status, sensor accuracy).

## Layout & Spacing

A disciplined fluid rhythm with generous boundaries protects the viewport from cramped visual layouts.

- **Grid Structure:** A 4-column fluid mobile grid scaling to an 8-column layout on larger tablets.
- **Padding Philosophy:** Cards and interactive groups use `space-lg` internal padding to create open, breathable tap areas. Element vertical margins adhere to `space-md` increments, preventing layout crowding.
- **Thumb Zone Ergonomics:** Interactive inputs, PROM selectors, and the crisis intervention anchor reside strictly within the natural physiological bottom arc of the screen to minimize strain and reaching.

## Elevation & Depth

Visual hierarchy rejects sharp drop-shadows and stark dark borders, favoring soft ambient dispersion that feels organic and light:

- **Surface Tiers:**
  - **Base Canvas:** `#F8FAF9` (Off-white / Warm Cream).
  - **Level 1 (Card & Module Layer):** `#FFFFFF` combined with an extra-diffuse ambient shadow: `0 8px 24px rgba(32, 45, 39, 0.04)`.
  - **Level 2 (Floating Overlays & Support Drawers):** `#FFFFFF` paired with soft dual-tone diffusion: `0 16px 36px rgba(32, 45, 39, 0.08), 0 2px 6px rgba(88, 123, 109, 0.06)`.
- **Ghost Outlines:** Where separation is necessary, replace dark strokes with low-contrast borders: `1px solid rgba(88, 123, 109, 0.12)`.

## Shapes

The design system relies on ultra-soft, rounded profiles (Level 3 - Pill / Organic Soft) to invoke safety, organic natural stones, and calming visual flow. Sharp vertices and acute angles are entirely removed.

- **Primary Cards & Containers:** Styled with `rounded-2xl` (1.5rem / 24px) to `rounded-3xl` (2rem / 32px), creating tactile, friendly vessels for complex health metrics.
- **Buttons, Mood Nodes & Support Chips:** Fully pill-shaped (`9999px`) to eliminate aggressive edges and encourage direct, natural physical touch.

## Components

### 1. Buttons
- **Primary Action:** Pill-shaped, `#587B6D` background with pure white typography, zero border, and soft green shadow glow (`0 8px 16px rgba(88, 123, 109, 0.2)`). Height: 54px.
- **Secondary Action:** Pill-shaped, `#EEF2EF` background with `#202D27` text. Smooth state change with no jarring color flips.

### 2. Crisis / Immediate Assistance Button (Código Rojo - SRS-FUN-010)
- **Visual Design:** Floating or fixed anchor with a velvet crimson fill (`#C44343`), crisp white typography, and an SOS lifebuoy icon.
- **Safety Safeguard:** To prevent accidental activation during tremors or distress, execution relies on a progressive 1.5-second hold interaction accompanied by gentle, rhythmic haptic feedback.
- **Depth:** Floating shadow tinted with red: `0 12px 28px rgba(196, 67, 67, 0.28)`.

### 3. PROM Mood & Emotion Selector (SRS-FUN-010)
- **Form:** Horizontal continuum composed of 5 organic pebble cards or large touch targets (`rounded-2xl`, min 64px height).
- **Feedback:** As the patient moves through affective states, colors transition smoothly across sage-green, ethereal blue, and warm amber without jarring alert indicators. Micro-copy below each node offers grounding validation (e.g., "En calma", "Sobrecargado").

### 4. Connected Vitals Cards (Fitbit Integration - SRS-INT-003)
- **Structure:** `rounded-3xl` white cards with generous `space-md` padding.
- **Sub-elements:** Top bar features a discreet pulse sync indicator (e.g., "Fitbit sincronizado hace 5 min" in `label-sm`).
- **Sleep & Resting Heart Rate:** Data visuals use soft ethereal blue curves (`#6C8EA4`) and warm slate accents. Out-of-range metrics use soft amber `#D48B47` with reassuring copy, avoiding red panic flags.

### 5. Support Network Chips (Red de Apoyo)
- **Visual Design:** Compact, tactile pill badges with avatar photos or soothing monograms, an optional direct call/chat icon, and a muted green presence dot.
- **Surface:** `#FFFFFF` background with low-contrast borders (`1px solid rgba(88, 123, 109, 0.15)`), rendering personal contacts like a calm, reachable safety net.

### 6. Inputs & Questionnaires
- **Form Controls:** Text fields and check options use `rounded-2xl` inputs with soft `#EEF2EF` background fills.
- **Focus States:** Gentle sage glow transition (`0 0 0 3px rgba(88, 123, 109, 0.2)`), eliminating high-contrast borders and preventing sensory overstimulation.