/*
WorkAround es un programa de recursos humanos que devuelve información básica sobre un empleado, 
basada en datos salariales. Usando WorkAround, uno puede usar los datos salariales de un empleado para:

- devolver el cuadro del empleado, en otras palabras, si este empleado es de nivel de entrada, nivel medio o superior.
- calcular las tasas impositivas de los empleados
- devolución de beneficios para empleados
- calcular bonos de empleados
- calcular el monto total que se le puede reembolsar a un empleado en función del valor total de sus beneficios de salud, vivienda o bienestar


*/

import Employee from "./38-employee";

function getEmployeeInformation(inputSalary) {
    Employee.salary = inputSalary;
    console.log('Cadre: ' + Employee.getCadre());
    console.log('Tax: ' + Employee.calculateTax());
    console.log('Benefits: ' + Employee.getBenefits());
    console.log('Bonus: ' + Employee.calculateBonus());
    console.log('Reimbursement Eligibility: ' + Employee.reimbursementEligibility() + '\n');
  }
  
  getEmployeeInformation(10000);
  getEmployeeInformation(50000);
  getEmployeeInformation(100000);