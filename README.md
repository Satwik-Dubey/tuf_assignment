# True Interactive Wall Calendar

A meticulously designed, interactive physical wall calendar simulation built with React and Vite. 

### Live Demo
**👉 [View the Application Live Here](https://tuf-assignment-taupe.vercel.app)**

### Screenshots

<img width="1280" height="812" alt="image" src="https://github.com/user-attachments/assets/e1525e43-54e9-49f5-8eb0-4d1d5d1d1642" />
<img width="1302" height="806" alt="image" src="https://github.com/user-attachments/assets/6a4acdd2-82ad-4e69-94eb-9ada9a3dae53" />
<img width="1423" height="865" alt="image" src="https://github.com/user-attachments/assets/dab77e0c-809f-48ef-bf33-3d346d7bc448" />
<img width="1243" height="803" alt="image" src="https://github.com/user-attachments/assets/29ae1233-807e-4174-b97b-eab02bfcfc7c" />
<img width="503" height="945" alt="image" src="https://github.com/user-attachments/assets/d79dc31d-3e48-4c41-9ea5-75a16a4aba1c" />




### Video Demonstration
[This is link to demo video](https://youtu.be/2KQDi_3dw3A)

---

## Architectural Choices & Design 

The goal of this project was to step away from repetitive standard software dashboards and build an interface that feels wonderfully tactile—capturing the grand aspect ratio, generous negative space, and physical feel of an actual coffee table or desk calendar.

**1. Stable Footprint Engineering**
Utilizes the lightweight `date-fns` library to handle date math and reliably lock the grid engine. Every page forcefully renders exactly 6 uniform weeks (42 days) regardless of the month's offset. This prevents any jarring "layout popping" or vertical resizing between month transitions.

**2. Seamless Range Selection**
Integrated global DOM listeners (`mouseup`/`mousedown`) to allow native click-and-drag range selection elegantly across day cells, mirroring OS-level dragging capabilities.

**3. Zero-Friction Notes Panel**
The right-side notes panel dynamically adjusts its title and placeholder text depending on whether the user has a single day, a multi-day range, or nothing selected. It uses a lightweight `localStorage` debouncer that silently auto-saves progress 500ms after a user stops typing, avoiding the need for clunky "Save Changes" buttons.

**4. Thematic UX Constraints**
Emphasized a purely interactive custom CSS engine (backed by Tailwind CSS for core scaffolding) to enforce the "print calendar" scale perfectly. Hover loops trigger smooth parallax zooms on the hero imagery and dynamic tooltips reveal encoded holidays.

---

## Technology Stack

- **Framework**: React 
- **Styling**: Tailwind CSS + Custom CSS
- **Date Handling**: `date-fns` 
- **Icons**: `lucide-react`
- **Data Persistence**:LocalStorage

---

## How to Run Locally

To boot this application on your local machine, run the following sequential commands in your terminal:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Satwik-Dubey/tuf_assignment.git
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
   Open your browser and navigate automatically to the Local URL provided in your terminal (eg: `http://localhost:5173`).


4. **Launch the Calendar:**
   Open your browser and navigate automatically to the Local URL provided in your terminal (eg: `http://localhost:5173`).
