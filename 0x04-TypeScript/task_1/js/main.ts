interface TeacherAttributes {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

class Teacher {
    private _attributes: TeacherAttributes;

    constructor(attributes: TeacherAttributes) {
        this._attributes = {
            firstName: attributes.firstName,
            lastName: attributes.lastName,
            fullTimeEmployee: attributes.fullTimeEmployee,
            location: attributes.location,
        };
        for (const key in attributes) {
            if (key !== "firstName" && key !== "lastName") {
                this._attributes[key] = attributes[key];
            }
        }
    }
    get attributes(): TeacherAttributes {
        return this._attributes;
    }
}

interface DirectorsAttributes extends TeacherAttributes {
    numberOfReports: number;
}

interface Directors extends Teacher {
    attributes: DirectorsAttributes
}
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (FirstName, lastName) => {
    const firstLetter = FirstName.charAt(0).toUpperCase();
    const fullLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    return `${firstLetter}. ${fullLastName}`;
};

interface StudentAttributes {
    firstName: string;
    lastName: string;
}

interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentAttributes, StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(attributes: StudentAttributes) {
        this.firstName = attributes.firstName;
        this.lastName = attributes.lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

export { TeacherAttributes, Teacher, DirectorsAttributes, Directors, printTeacher, StudentAttributes, StudentClassInterface, StudentClass };