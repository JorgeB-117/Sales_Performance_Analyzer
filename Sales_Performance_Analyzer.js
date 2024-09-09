// Task 1: Create a Function to Calculate Average Sales

function calculateAverageSales(sales) {
    const totalSales = sales.reduce((sum, sale) => sum + sale, 0);
    return totalSales / sales.length;
}

//Test
const salesFigures = [200, 400, 600, 800, 1000];
const average = calculateAverageSales(salesFigures);
console.log(`The average sales figure is $${average}`);

// Task 2: Create a Function to Determine Performance Rating

function determinePerformanceRating(averageSales){
    if (averageSales >= 10000)
        return "Excellent";
    if (averageSales >= 7000 && averageSales < 10000)
        return "Good";
    if (averageSales >= 4000 && averageSales < 7000)
        return "Satisfactory";
    if (averageSales <= 4000);
        return "Needs Improvement";
}

//Test
const averageSales = 8500;
const performanceRating = determinePerformanceRating(averageSales);
console.log(`The performance rating is: ${performanceRating}`);
