
export interface Person {
    name: string;
    age: number;
    isActive: boolean;
}

let Fernando: Person = {
    name: "Fernando",
    age:36,
    isActive: true,
}

let Melissa: Person =  {
    name: "Melissa",
    age:30,
    isActive: false,
}

let Juan: Person = {
    name: "Juan",
    age: 42,
    isActive: true,
}

let people = [ Fernando, Melissa, Juan ];
for (let i = 0; i <= people.length -1; i++){
    let person = people[i];
    console.log (person.name + " " + person.age);
}