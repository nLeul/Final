/* eslint-disable no-undef */
/* eslint-disable require-jsdoc */
function showCourses() {
    coursesArr = coursesArr.sort();
    for (data of coursesArr) {
        document.getElementById("courses").value +=` CourseName:${data._courseName   } CourseId:${data._courseid}  CourseCode:${data._courseCode }\n \n` ;

    }


}

