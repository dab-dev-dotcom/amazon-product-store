# Student Practice Tracker

A simple, responsive web application built with React to manage and display student practice sessions. This project demonstrates core React concepts like props, state management (`useState`), side effects (`useEffect`), and conditional rendering.

## Features
- **Student Profiles:** Displays student details (e.g., Name, Course, Year) passed down as props.
- **Practice Tracking:** Includes a practice counter to track completed sessions, with "Complete Practice" and "Reset" functionality.
- **Dynamic Title Updates:** Automatically updates the browser document title to reflect the current practice session count using `useEffect`.
- **Profile Visibility Control:** Allows users to show or hide the student profile without losing the application layout (Header and Footer).
- **Responsive UI:** A clean, mobile-friendly user interface.

## Technologies Used
- **Frontend Framework:** React 19 (using Vite for fast development and building)
- **Styling:** Vanilla CSS
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

## Contributing
Contributions, issues, and feature requests are welcome!
