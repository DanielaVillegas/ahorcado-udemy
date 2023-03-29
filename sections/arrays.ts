


export let employees: string[] = ["Fernando", "Melissa", "Eduardo"];
let salaries:number[] = [1500,2400,3200];
let flowers: string[] = ["Rosa", "Girasol","Lirio"];


//for (let i=0; i<flowers.length; i++);{
 //   console.log( flowers[i]);

//}
for(let i=0; i<employees.length; i++){
let employee = employees[i];
let salary = salaries[i];
 console.log( employee + " Tiene un salario de ", + salary);

}