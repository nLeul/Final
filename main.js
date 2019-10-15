/* eslint-disable id-length */
/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */

class User {
    constructor(fname, lname, phone, role, password, id) {
        this._fname = fname;
        this._lname = lname;
        this._phone = phone;
        this._role = role;
        this._password = password;
        this._id = id;
    }


}
class Student extends User {
    constructor(fname, lname, phone, role, password, id, entryYear, GPA) {
        super(fname, lname, phone, role, password, id);

        this._entrYear = entryYear;
        this._GPA = GPA;
    }

}
class Faculty extends User {
    constructor(fname, lname, phone, role, password, id, department) {
        super(fname, lname, phone, role, password, id);
        this._department = department;
    }
}
class Courses {
    constructor(courseName, courseid, courseCode) {
        this._courseName = courseName;
        this._courseid = courseid;
        this._courseCode = courseCode;
    }

}

userArr = [];
userArr.push(new Student("leul", "Mayor", 7204515972, "student", "123", "123","2018","4.00"));
userArr.push(new User("John", "George", 7204515973, "admin", "1234", "1234"));
userArr.push(new Faculty("Bob", "Simon", 7204515974, "faculty", "12345", "12345","cs"));
userArr.push(new Student("James", "Blake", 7204515975, "student", "123456", "123456","2019","4.00"));

coursesArr = [];
coursesArr.push(new Courses("Physics", 320, "PHy320"));
coursesArr.push(new Courses("Biology", 420, "PHy420"));
coursesArr.push(new Courses("Chemistry", 520, "PHy520"));
coursesArr.push(new Courses("Maths", 620, "PHy620"));
