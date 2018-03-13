function* shopping() {
    // Walking down the sidewok

    // go into the store with cash
    const stuffFromStore = yield 'cash' ;
    // walking to laundry place
    const cleanClothes = yield 'laundry';

    // walking back home
    return [stuffFromStore, cleanClothes];
}
const gen = shopping();
// leaving our home; start your shopping generator and stop until the frist yield
console.log(gen.next());
// walking into the store
// purchase our stuff; 當再次call next，會從上一個yield再開始執行
console.log(gen.next('groceries'));
console.log(gen.next('clean clothes'));
