import './App.css';
import CourseFrom from './components/CourseForm'
function App() {
  return (
    <div className="main-container">
      <h1
      style={{
        fontSize: "2.5rem",
        marginBottom: "2rem"
      }}> My Course List </h1>
      <CourseFrom/>
    </div>
  );
}

export default App;
