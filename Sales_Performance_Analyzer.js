// Task 1: Create a Function to Calculate Average Sales

function calculateAverageSales(sales) {
    const totalSales = sales.reduce((sum, sale) => sum + sale, 0);
    return totalSales / sales.length;
}

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

// Task 4: Combine Functions to Generate a Performance Report

function generatePerformanceReport(salespersons) {
    const report = salespersons.map(sPerson => {
        const averageSales = calculateAverageSales(sPerson.sales);
        const performanceRating = determinePerformanceRating(averageSales);
        return {sPerson, averageSales, performanceRating};
});

const {topPerformer, bottomPerformer} = findTopAndBottomPerformers(report);

return {salesReport: report, topPerformer, bottomPerformer};
}

const salespersons = [
    { name: 'Alice', sales: [12000, 15000, 13000] },
    { name: 'Bob', sales: [7000, 6000, 7500] },
    { name: 'Charlie', sales: [3000, 4000, 3500] },
    { name: 'Diana', sales: [9000, 8500, 9200] },
];

const report = generatePerformanceReport(salespersons);
console.log("Sales Report:", report.salesReport);
console.log("Top Performer:", report.topPerformer);
console.log("Bottom Performer:", report.bottomPerformer);