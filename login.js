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
            else {
                window.location.href = "./admin.html?id=" + userId;
            }
        }
    }
}
// let studentId=ur
// let studentInfo = "";
// for (let key of userArr){
//     if (key._id==userArr._id) {
//  studentInfo = "some text";

//     }
// }


