import React,{useState} from 'react'

import useCourseStore from '../app/courseStore';

const courseForm = () => {

    const addCourse = useCourseStore((state) => state.addCourse);

    const [courseTitle, setCourseTitle] = useState("");
    console.log('CourseForm rendered');

    const handleCourseSubmit = () => {
        if(!courseTitle) return alert("please add a course title");
        addCourse({
            id: Math.ceil(Math.random() * 1000000),
            title: courseTitle
        })
    }
  return (
    <div></div>
  )
}

export default courseForm