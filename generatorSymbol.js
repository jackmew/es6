// Symbol.iterator is for teaching for how to iterate.
const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.tester;
    }
}

const engineerTeam = {
    testingTeam,
    size: 3,
    department: 'Engineer',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave'
}

function* TeamIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer
    // delegation generator: yield*
    // const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
    // yield* testingTeamGenerator;
    yield* team.testingTeam;
}
// 將generator的內容 寫在Symbol.iterator
// function* TestingTeamIterator(team) {
//     yield team.lead;
//     yield team.tester;
// }
const names = [] ;
for(let name of TeamIterator(engineerTeam)) {
    names.push(name);
}
console.log(names);
