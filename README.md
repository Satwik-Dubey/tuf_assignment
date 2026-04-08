# Interactive Wall Calendar Component

A polished, fully responsive, and interactive React component styled to emulate a physical wall calendar. Created for the TUF Frontend Engineering Challenge.

## ✨ Features

- **Wall Calendar Aesthetic**: Detailed physical design elements like a realistic spiral binding, off-white paper texture aesthetic, distinct drop shadows, and a prominent hero image spanning the top (desktop/mobile layout adapting dynamically).
- **Day Range Selector**: Click once to select a start date, click again for an end date. Dynamic CSS styling distinguishes the start date, end date, and in-between dates flawlessly.
- **Integrated Notes**: A dynamic persistence component integrated with `localStorage`. Your notes persist smartly depending on what date range or month you are currently looking at. It will save specific memos for selected ranges, or general memos for the month.
- **Dark/Light Mode**: Smooth theme toggling that changes the palette from clean daytime whites to deep slate blues.
- **Fully Responsive**: Adapts playfully via CSS constraints and Grid/Flexbox layouts. Mobile collapses to a stacked column while Desktop spreads out natively. 
- **Strictly Frontend**: No backend API dependencies; everything runs purely client-side.

## 🛠 Tech Stack

- **React & Vite**: Extremely fast scaffolding and hot module replacement natively.
- **Vanilla CSS**: Kept strictly to an overarching `index.css` leveraging dynamic CSS variables for structural logic and themes, as requested. No Tailwind used.
- **Date-Fns**: Comprehensive date management functionality abstracting typical JavaScript Date woes for generating correct grids.
- **Lucide React**: Clean, elegant vector icon implementation.

## 🚀 Running Locally

1. Ensure you have Node.js installed (v18+ recommended).
2. Clone this repository and navigate to the project root: `cd tuf_assignment`
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to `http://localhost:5173`.

## 🎨 Design Decisions

*   **Variables for Theme Control**: The entirety of the color system relies on CSS root properties. The `data-theme="dark"` attribute flips these values to provide a very smooth native dark mode.
*   **Grid over Table**: Calendar structural grids are inherently native CSS `grid`. It prevents typical table-layout snapping behavior and works well responsively.
*   **Backdrop Filter**: Implemented a slight glassmorphism on the calendar card where it overlays subtle background patterns to evoke a premium native feel.
*   **Micro-interactions**: Hovering over dates pops them with quick spring-like transform scales `scale(1.1)`. Elements have very specific `transition` definitions to guide the user's eye softly.

Enjoy the application!
