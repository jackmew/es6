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
    engineer: 'Dave',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.manager;
        yield this.engineer;

        yield* this.testingTeam;
    }
}
// 將generator的內容 寫在Symbol.iterator
// function* TeamIterator(team) {
//     yield team.lead;
//     yield team.manager;
//     yield team.engineer
//     yield* team.testingTeam;
// }

const names = [] ;
for(let name of engineerTeam) {
    names.push(name);
}
console.log(names);
