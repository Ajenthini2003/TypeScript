"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student_js_1 = require("./student.js");
function main() {
    const student1 = new student_js_1.Student("Jacksparrow", 24, "Colombo");
    console.log(student1.getStudentName());
    student1.getStudentName("kumar");
    console.log(student1.getStudentName());
}
main();
//# sourceMappingURL=index.js.map