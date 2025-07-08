# 📊 Financial Overview Table UI

This project is a **responsive, dynamic table component** built using **React**, **@tanstack/react-table**, and **Tailwind CSS**, matching the design specifications from a Figma prototype. It includes rich features like status chips, alignment control, multi-colored headers, column resizing, and a flexible layout.

---

## 🔧 Features

- ✨ Clean, Figma-aligned UI
- 📐 Custom column sizing based on Figma `W-` widths
- 🧩 Icons in table headers (`react-icons`)
- 🎨 Colored column headers with grouping (Q3 Overview, ABC, Extract, etc.)
- 📊 Status indicators with contextual color
- 🔀 Custom text alignment per column (`left`, `right`, `center`)
- ↔️ Column resizing via drag
- ➕ Empty row filler to ensure uniformity
- 📎 Link rendering for URLs
- 🧪 Click-to-select cell interaction

---

## 📦 Tech Stack

| Technology | Purpose |
|------------|---------|
| React      | UI Framework |
| Tailwind CSS | Styling & layout |
| @tanstack/react-table | Table logic |
| React Icons | Header icons |
| TypeScript | Type safety |

---

## 📁 Project Structure

```bash
📦 src/
 ┣ 📜 TaskTable.tsx         # Main table component
 ┣ 📜 App.tsx               # Renders the TaskTable
 ┣ 📜 index.tsx             # App entry point
 ┣ 📜 index.css             # Tailwind base styles
