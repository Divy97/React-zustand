import './App.css';
import CourseFrom from './components/CourseForm'
import CourseList from './components/CourseList';
function App() {
  return (
    <div className="main-container">
      <h1
      style={{
        fontSize: "2.5rem",
        marginBottom: "2rem"
      }}> My Course List </h1>
      <CourseFrom/>
      <CourseList />
    </div>
  );
}

export default App;
