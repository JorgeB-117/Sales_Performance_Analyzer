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
const averageSales = 3500;
const performanceRating = determinePerformanceRating(averageSales);
console.log(`The performance rating is: ${performanceRating}`);

// Task 3: Create a Function to Identify Top and Bottom Performers

function findTopAndBottomPerformers(salespersons){
    if (salespersons.length === 0) 
        return {topPerformer: null, bottomPerformer: null}
    const topPerformer = salespersons.reduce((max, sPerson) =>
        sPerson.sales > max.sales ? sPerson : max, salespersons[0])
    const bottomPerformer = salespersons.reduce((min,sPerson) =>
        sPerson.sales < min.sales ? sPerson : min, salespersons[0])
    return {topPerformer, bottomPerformer};  
};

const salespersons = [
    {name: "Hazel", sales: 10},
    {name: "Steven", sales: 15},
    {name: "Ricky", sales: 20},
    {name: "Brian", sales: 25},
    {name: "Alan", sales: 30},
];

//Test
const performers = findTopAndBottomPerformers(salespersons);

console.log("Top Performer:", performers.topPerformer);
console.log("Bottom Performer:", performers.bottomPerformer);