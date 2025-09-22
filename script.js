//complete this code
class Person {
	constructor(name, age){
		this.name = name;
		this._age = age;
	}
	get name(){
		return this._name;
	}
	set age(newAge){
		return this._age = newAge;
	}
}

class Student extends Person {
	study(){
	return `${this._name} is studying`;
	}
}

class Teacher extends Person {
	teach(){
		return `${this._name} is teaching`;
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
