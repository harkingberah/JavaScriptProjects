function bmiCalculator(weight, height) {
    // Calculate BMI
    var bmi = weight / (height * height);

    // Format BMI as a whole number (remove decimal places)
    var formattedBmi = Math.round(bmi);

    // Check the BMI ranges and return the corresponding message
    if (bmi < 18.5) {
        return "Your BMI is " + formattedBmi + ", so you are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Your BMI is " + formattedBmi + ", so you have a normal weight.";
    } else {
        return "Your BMI is " + formattedBmi + ", so you are overweight.";
    }
}

// Example usage:
var weight = 50; // Replace with the user's weight in kilograms
var height = 1.65; // Replace with the user's height in meters
var result = bmiCalculator(weight, height);
console.log(result); // Output the result