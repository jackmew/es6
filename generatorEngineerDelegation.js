const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill'
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
    const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
    yield* testingTeamGenerator;
}

function* TestingTeamIterator(team) {
    yield team.lead;
    yield team.tester;
}
const names = [] ;
for(let name of TeamIterator(engineerTeam)) {
    names.push(name);
}
console.log(names);
