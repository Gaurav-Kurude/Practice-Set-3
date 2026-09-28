console.log("Weekly Exercise Report");


let totalExerciseGoal = 150;
console.log("total exercise goal in minutes: ", totalExerciseGoal);

console.log("-----------------------------");

let mondayExercise = 30;
let tuesdayExercise = 25;
let wednesdayExercise = 20;
let thursdayExercise = 15;
let fridayExercise = 35;
let saturdayExercise = 40;
let sundayExercise = 25;
console.log("-------------------------------");

let totalExerciseTime =
  mondayExercise +
  tuesdayExercise +
  wednesdayExercise +
  thursdayExercise +
  fridayExercise +
  saturdayExercise +
  sundayExercise;
console.log("total exercise time in minutes: " + totalExerciseTime);
console.log("--------------------------------");

let remainingExerciseTime = totalExerciseTime - totalExerciseGoal;
console.log("remaining exercise time in minutes: " + remainingExerciseTime);

console.log("----------------------------------");

if (remainingExerciseTime < 0) {
  let exerciseStatus = "You have exceeded your exercise goal for the week.";
  console.log("Exercise Status: " + exerciseStatus);
}
if (remainingExerciseTime < 20) {
  let exerciseStatus =
    "You are close to reaching your exercise goal. Keep it up!";
   console.log("Exercise Status: " + exerciseStatus);
}
if (remainingExerciseTime < 50) {
  let exerciseStatus =
    "You are doing well, but aim to reach your goal by the end of the week.";
   console.log("Exercise Status: " + exerciseStatus);
}else {
    let exerciseStatus = "You are on track with your exercise goal.";
     console.log("Exercise Status: " + exerciseStatus);
    
}

console.log("------------------------------");



