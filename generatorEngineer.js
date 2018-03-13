var engineerTeam = {
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
}
const names = [] ;
for(let name of TeamIterator(engineerTeam)) {
    names.push(name);
}
console.log(names);
