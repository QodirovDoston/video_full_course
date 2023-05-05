const App={
    $:{
        menu: document.querySelector('[data-id="menu"]'),
        itemsMenu: document.querySelector('[data-id="menu-items"]'),
        resetBtn: document.querySelector('[data-id="reset-btn"]'),
        newRoundBtn: document.querySelector('[data-id="new-round-btn"]'),
        squares: document.querySelectorAll('[data-id="square"]')
    },

init(){

    App.registerEventListeners();
},
registerEventListeners(){
// Done
    App.$.menu .addEventListener('click', (event)=>{
        App.$. itemsMenu.classList.toggle('hidden');
    });
    // Todo
    App.$.resetBtn.addEventListener('click',event =>{
        console.log("reset the game");
    }),
    // Todo

    App.$.newRoundBtn.addEventListener('click',event =>{
        console.log("new round the game");
    });
    // Todo

    App.$.squares.forEach(squares=>{
        squares.addEventListener('click', event=>{
            console.log(`square with id ${event.target.id} was clicked`);
        })
    })

}
}
window.addEventListener("load", App.init); 