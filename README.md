# Amazon Product Cart (React Activity)

A dynamic, interactive React application designed to simulate an Amazon-style product cart experience. This project serves as a comprehensive practice activity demonstrating core React concepts like component architecture, props, state management (`useState`), lifecycle side effects (`useEffect`), conditional rendering, and controlled inputs.

## Features
- **Product Store UI:** A clean, Amazon-inspired interface featuring a custom Header and Footer.
- **Dynamic Product Card:** Displays a "Wireless Mouse" with real-time updates.
- **Interactive SVG Graphic:** Features a custom inline SVG mouse graphic that dynamically changes color (Black, Blue, or White) based on the user's selection, eliminating broken image links.
- **State Management:** Fully utilizes `useState` to track:
  - Cart quantity (with "Add to Cart", "Remove One", and "Reset Cart" buttons)
  - Selected product color via a dropdown
  - Delivery city via a controlled text input
  - Product visibility (Show/Hide toggle)
- **Calculated Totals & Status:** Dynamically computes total price based on quantity and conditionally renders cart status messages (e.g., "Cart is empty" vs "Product added to cart").
- **Dynamic Browser Title:** Automatically updates the browser tab title (e.g., "Wireless Mouse | Black | Cart: 0") using `useEffect` with proper cleanup.
- **Custom Watermark:** Includes a stylized "Made by Dawood" watermark seamlessly integrated into the product card design.

## Technologies Used
- **Frontend Framework:** React 19 (using Vite for fast development and building)
- **Styling:** Vanilla CSS (App.css)
- **Linting:** ESLint

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites
- [Node.js](https://nodejs.org/) (which comes with `npm`) installed on your machine.

### Installation & Running

1. **Clone the repository:**
   ```bash
   git clone https://github.com/dab-dev-dotcom/student-management.git
   ```

2. **Navigate into the project directory:**
   ```bash
   cd student-management
   ```
   *(Note: The actual folder name on your machine might be different depending on where you cloned it. If you cloned it into the current directory, simply `cd react-practice` or the respective folder)*

3. **Install the dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open the application:**
   Once the server starts running, you will see a local URL in your terminal (usually `http://localhost:5173/`). Ctrl+Click or open that URL in your web browser to view the application.

## Author
Developed by **Dawood** as part of Day 3 Fullstack Development React Activity.
