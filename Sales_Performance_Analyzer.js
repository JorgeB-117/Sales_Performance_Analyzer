// Task 1: Create a Function to Calculate Average Sales

function calculateAverageSales(sales) {
    const totalSales = sales.reduce((sum, sale) => sum + sale, 0);
    return totalSales / sales.length;
}

const salesFigures = [200, 400, 600, 800, 1000];
const average = calculateAverageSales(salesFigures);

console.log(`The average sales figure is $${average}`);