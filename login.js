/* eslint-disable require-jsdoc */
// import {
//     Courses,
//     User,
//     coursesArr,
//     userArr
// } from "/main.js"
function loginAuthentication() {
    const userId = document.getElementById("user").value;
    const password = document.getElementById("password").value;

    for (let user of userArr) {
        if (user._id === userId && user._password === password) {
            if (user._role === "student") {
                window.location.href = "./student.html?id=" + userId;
            }
            else if (user._role === "faculty") {
                window.location.href = "./faculty.html?id=" + userId;
            }
            else if (user._role === "admin") {
                window.location.href = "./admin.html?id=" + userId;
            }
        }
    }
}
// let urlparams = new URLSearchParams(window.location.search);
// let studentId = urlparams.get("id");

// let studentInfo = "";
// for (let key of userArr) {
//     if (key._id === studentId) {
//         studentInfo += key._course;

//     }
// }
// document.getElementById("info").innerHTML = studentInfo;

// function showCourses() {
    // let courses = "";
    // alert(coursesArr);
    // document.getElementById("dispCourses").innerHTML = coursesArr;
    // window.location.href = "./courses.html";
    // for (let value in coursesArr) {
    //     courses = coursesArr._id;
    // document.getElementById()
    // }
    // return courses;



// }
// document.getElementById("dispCourses").innerHTML = "courses";
