const salaries1 = {
    Manager: { salary: 1000, tax: "10%" },
    Designer: { salary: 600, tax: "30%" },
    Artist: { salary: 1500, tax: "15%" },}

const team1 = [
    { name: "Misha", specialization: "Manager" },
    { name: "Max", specialization: "Designer" },
    { name: "Vova", specialization: "Designer"},
    { name: "Leo", specialization: "Artist"},]

console.log(+salaries1.Manager.tax.replace(/%/, "") / 100 * salaries1.Manager.salary)
console.log(team1.length)
console.log(salaries1.Manager.tax.replace(/%/g, ""))

function calculateTeamFinanceReport(salaries1, team1) {
    const totalBudgetManager = team1.filter((position) => position.specialization === "Manager")
        .length * (salaries1.Manager.salary + (+salaries1.Manager.tax.replace(/%/, "") / 100 * salaries1.Manager.salary))
    console.log(totalBudgetManager)
}

console.log(calculateTeamFinanceReport)

const financeReport1 = calculateTeamFinanceReport(salaries1, team1)
console.log(JSON.stringify(financeReport1))