import { useState } from "react";
import Header from "./Header";
import StudentProfile from "./StudentProfile";
import Footer from "./Footer";

function App() {
  const [practiceCount, setPracticeCount] = useState(0);
  const [showProfile, setShowProfile] = useState(true);

  const studentName = "Anu";
  const department = "CSE";
  const year = "3rd Year";

  return (
    <div>
      <Header />

      <button onClick={() => setShowProfile(!showProfile)}>
        {showProfile ? "Hide Profile" : "Show Profile"}
      </button>

      {showProfile && (
        <StudentProfile
          name={studentName}
          department={department}
          year={year}
          count={practiceCount}
          setCount={setPracticeCount}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;