# True Interactive Wall Calendar

A meticulously designed, interactive physical wall calendar simulation built with React and Vite. The goal of this project was to step away from repetitive software dashboards and build an interface that feels wonderfully tactile—capturing the grand aspect ratio, generous negative space, and physical feel of an actual coffee table or desk calendar.

## Key Features & Design Choices

- **Stable Footprint Engineering**: Utilizes `date-fns` to reliably lock the grid engine. Every page forcefully renders exactly 6 uniform weeks (42 days) regardless of the month's offset, preventing any jarring "layout popping" or vertical resizing between month transitions.
- **Physical Desk Interface**: Split elegantly into a 2:1 Hero-to-Calendar UI on large viewports, overlaid natively with a spiral-binding illustration that pushes the bounds of a normal application panel.
- **Micro-Interactions**: Hover over calendar grid dates to find parallax-zoom on the hero illustration and smooth tooltip reveals for encoded National Public Holidays.
- **Click-and-Drag Context**: Integrated global DOM listeners (`mouseup`/`mousedown`) allowing native click-and-drag range selection natively across day cells.
- **Zero-Friction Notes**: The dynamic right side notes panel contextually targets and manages memos for single days, ranges, or broad monthly goals automatically in `localStorage`. Implements an intelligent 500ms debouncing algorithm that silently saves progress without bulky "Save Changes" form buttons polluting the UI.
- **Thematic Month Shading**: Uses an underlying CSS variables engine that dynamically parses logic and shifts the HSL palette of gradients, outlines, and badges depending entirely on what month the user navigates into. 

## Technology Stack
- **Framework:** React + Vite
- **Styling:** Pure Modern CSS, Responsive Media Queries, and highly specific class management (no heavy library constraints to achieve the true custom paper design). 
- **Utilities:** `date-fns` for clean, lightweight chronological tracking. `lucide-react` for SVG iconography. 

## How to Run Locally

To get this app running on your local machine, open your terminal and follow these steps:

1. **Clone the repository:**
   ```bash
   git clone [your-repo-link]
   cd tuf_assignment
   ```

2. **Install the dependencies:**
   ```bash
   npm install
   ```

3. **Start the Vite development server:**
   ```bash
   npm run dev
   ```

4. **Launch the Calendar:**
   Open your browser and navigate automatically to the Local URL provided in your terminal (typically `http://localhost:5173`).
