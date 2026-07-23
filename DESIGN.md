# Lirium — Design Tokens & Handover Notes

Design direction: editorial-industrial, modeled on frederickjames.net.
Big tight grotesk statements with one accent-colored word, tiny mono
eyebrows, alternating warm background bands, dark cinematic panels,
renders styled as real desktop software.

## Color

All tokens are defined in `app/globals.css` (`:root` + `@theme`).

### Foundation — warm neutrals (never pure white/black)

| Token          | Hex                        | Role                                        |
| -------------- | -------------------------- | ------------------------------------------- |
| `--paper`      | `#F2EFE8`                  | Base page background (warm cream)           |
| `--band`       | `#E6E2D4`                  | Alternating section bands (taupe)           |
| `--dark`       | `#16140F`                  | Dark bands: hero panel, work section, footer|
| `--ink`        | `#1B1914`                  | Primary text on light                       |
| `--steel`      | `#6F6A5C`                  | Secondary text (warm gray-olive)            |
| `--hairline`   | `#D9D4C3`                  | Borders/rules on light                      |
| `--dark-line`  | `rgb(242 239 232 / 0.12)`  | Borders on dark                             |
| `--dark-muted` | `#A49D8B`                  | Secondary text on dark                      |

### Iris accents — one per headline, all three only in the gradient

| Token         | Hex       | Notes                                            |
| ------------- | --------- | ------------------------------------------------ |
| `--cobalt`    | `#2F3AB2` | Primary accent: links, focus rings, hero glow    |
| `--verdigris` | `#257C6F` | Teal-green; use `#5FB394` on dark backgrounds    |
| `--amber`     | `#A97B24` | Warm gold                                        |
| `--iris`      | `linear-gradient(90deg, #2F3AB2, #2C8C7D, #B8862F)` | Brand signature — used exactly once: the 2px rule under the hero wordmark |

### Semantic (mocks, toggle, chips)

- Success: text `#2F6B52` on chip `#E3ECDF`
- Warning: text `#8A6A1F` on chip `#F2E7CD`
- Alert / "old way": `#B3452F`
- Mock window surface `#FBFAF6`; mock hairline `#ECE7DA`; sidebar `#F5F2EA`
- macOS traffic lights: `#EC6A5E` / `#F4BF4F` / `#61C554`
- Hero glow: cobalt / `#2C8C7D` / `#B8862F` blobs at 15–30% opacity, ~110px blur

### Etiqa brand (sampled from `public/etiqa-logo.png`)

| Color        | Hex       | Where                          |
| ------------ | --------- | ------------------------------ |
| Petrol blue  | `#0E5F74` | Wordmark + magnifier (dominant)|
| Sage green   | `#8FB9A1` | Clock dots / hand              |
| Marigold     | `#F2A21C` | Leaf accent                    |

Etiqa's petrol sits between Lirium's cobalt and verdigris in hue, which
is why the logo reads as native on the site. Keep the palettes separate:
Etiqa colors appear only inside Etiqa-branded surfaces (phone mock,
their site), never as Lirium UI accents.

## Type

- **Display**: Archivo, weight 600, letter-spacing −0.035em, line-height
  0.98 (`.display`). Headlines get exactly one accent-colored word.
- **Mono**: IBM Plex Mono for eyebrows (`.eyebrow`, 11px, +0.14em,
  uppercase), metadata, spec tables, credential strips.
- **Body**: Archivo 15–16px, steel on light, dark-muted on dark.

## Recurring elements

- Pill CTAs (`.pill` / `.pill-light`) with a trailing ↗
- Mono spec tables (`KEY  value` rows with hairline separators)
- Product renders as light macOS-style windows on the dark band
- Background rhythm: paper → band → dark → paper → dark (footer)
