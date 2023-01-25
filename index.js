const salaries1 = {
    Manager: { salary: 1000, tax: "10%" },
    Designer: { salary: 600, tax: "30%" },
    Artist: { salary: 1500, tax: "15%" },}

const team1 = [
    { name: "Misha", specialization: "Manager" },
    { name: "Max", specialization: "Designer" },
    { name: "Vova", specialization: "Designer"},
    { name: "Leo", specialization: "Artist"},]

function calculateTeamFinanceReport(salaries1, team1) {

    const totalBudgetManager = Math.round(team1.filter((position) => position.specialization === "Manager")
        .length * (salaries1.Manager.salary + (+salaries1.Manager.tax.replace(/%/, "") / 100 * salaries1.Manager.salary)))

    const totalBudgetDesigner = team1.filter((position) => position.specialization === "Designer")
        .length * (salaries1.Designer.salary + (+salaries1.Designer.tax.replace(/%/, "") / 100 * salaries1.Designer.salary))

    const totalBudgetArtist = team1.filter((position) => position.specialization === "Artist")
        .length * (salaries1.Artist.salary + (+salaries1.Artist.tax.replace(/%/, "") / 100 * salaries1.Artist.salary))

    const totalBudgetTeam = totalBudgetManager + totalBudgetDesigner + totalBudgetArtist

    return {
        "totalBudgetTeam": totalBudgetTeam,
        "totalBudgetManager": totalBudgetManager,
        "totalBudgetDesigner": totalBudgetDesigner,
        "totalBudgetArtist": totalBudgetArtist,
    }
}

const financeReport1 = calculateTeamFinanceReport(salaries1, team1)
console.log(JSON.stringify(financeReport1))


//
//
// const salaries2 = {
//     TeamLead: { salary: 1000, tax: "99%" },
//     Architect: { salary: 9000, tax: "34%" },}
// const team2 = [
//     { name: "Alexander", specialization: "TeamLead" },
//     { name: "Gaudi", specialization: "Architect" },
//     { name: "Koolhas", specialization: "Architect" },
//     { name: "Foster", specialization: "Architect" },
//     { name: "Napoleon", specialization: "General" },]
// const financeReport2 = calculateTeamFinanceReport(salaries2, team2)
// console.log(JSON.stringify(financeReport2))