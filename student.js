/* eslint-disable require-jsdoc */

function showCourses() {
    window.location.href = "./courses.html";
}
function viewRecord() {
    const urlParams = new URLSearchParams(window.location.search);
    const studentId = urlParams.get("id");
    for (let stu of userArr) {

        if (stu._id === studentId) {
            document.getElementById("rec").value = `${stu._id} ${stu._fname} ${stu._lname} 
            ${stu._phone} ${stu._role} ${stu._password} ${stu._entrYear} ${stu._GPA}`;
        }
    }
}
