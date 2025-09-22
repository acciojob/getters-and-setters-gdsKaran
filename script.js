//complete this code
class Person {
	constructor(name, age){
		this._name = name;  // use _name instead of name
		this._age = age;
	}

	// getter for name
	get name(){
		return this._name;
	}

	// getter for age (helpful for testing)
	get age(){
		return this._age;
	}

	// setter for age
	set age(newAge){
		this._age = newAge;
	}
}

class Student extends Person {
	study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this.name} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
