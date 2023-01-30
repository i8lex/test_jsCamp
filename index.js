
function calculateTeamFinanceReport(salaries, team) {

    const numberOfSpecialists =  team.reduce((acc, { specialization }) => {
        return (typeof acc[specialization] !== 'undefined')
            ? {...acc, [specialization]: acc[specialization] + 1}
            : {...acc, [specialization]: 1}
    }, {});

    const budgetOfSpecialist = team.reduce((acc, { specialization }  ) => {
        return (Object.keys(salaries).includes(specialization))
        ? {...acc, [`totalBudget${specialization}`]: Math.round(numberOfSpecialists[specialization]
                    * ((salaries[specialization].salary)
                        + (+salaries[specialization].tax.replace(/%/, "") / 100
                            * salaries[specialization].salary)))}
        : {...acc}
    }, {});

    const budgetOfTeam = Object.values(budgetOfSpecialist).reduce((acc, salary) => {
        return acc + salary
    }, 0);

    return {'totalBudgetOfTeam': budgetOfTeam, ...budgetOfSpecialist}
}


const salaries1 = {
    Manager: { salary: 1000, tax: "10%" },
    Designer: { salary: 600, tax: "30%" },
    Artist: { salary: 1500, tax: "15%" },}

const team1 = [
    { name: "Misha", specialization: "Manager" },
    { name: "Max", specialization: "Designer" },
    { name: "Vova", specialization: "Designer"},
    { name: "Leo", specialization: "Artist"},]




const financeReport1 = calculateTeamFinanceReport(salaries1, team1)
console.log(JSON.stringify(financeReport1))




const salaries2 = {
    TeamLead: { salary: 1000, tax: "99%" },
    Architect: { salary: 9000, tax: "34%" },}
const team2 = [
    { name: "Alexander", specialization: "TeamLead" },
    { name: "Gaudi", specialization: "Architect" },
    { name: "Koolhas", specialization: "Architect" },
    { name: "Foster", specialization: "Architect" },
    { name: "Napoleon", specialization: "General" },]

const financeReport2 = calculateTeamFinanceReport(salaries2, team2)
console.log(JSON.stringify(financeReport2))