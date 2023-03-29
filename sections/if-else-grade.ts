
let grade:number = 70;
let gradeLetter: string;

if (grade >= 95 ){
    gradeLetter = 'A+';
} else if ( grade >=90 ){
    gradeLetter = 'A';
} else if ( grade >=80 ){
    gradeLetter = 'B';
} else if ( grade >=70){
    gradeLetter = 'C';
} else if ( grade >=60 ){
    gradeLetter = 'D';
} else {
    gradeLetter = 'F';
}
console.log ( 'La nota del Alumno es:', gradeLetter)