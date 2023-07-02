function gradingStudents(grades: number[]): number[] {
    // grade - nextMultipleOf5 < 3? round grade to nextMultipleOf5 : doNotRound
    // grade < 38 ? Failing grade 
   const roundedGrade =  grades.reduce((acc, grade)=>{
        const rest = grade % 5
        const toNextMultipleOf5 = 5- rest
        const nextMultipleOf5 = grade + toNextMultipleOf5
        const diferenceLesThan3 = nextMultipleOf5 - grade < 3
        if(diferenceLesThan3 && grade >= 38){
             acc.push(nextMultipleOf5)
        }else{
            acc.push(grade)
        }
        return acc
    },([] as number[]))
    
    return roundedGrade

}
console.log(gradingStudents([73, 67, 38, 33]))