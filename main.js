class tamagotchi {

    constructor(name){
        this.name = name;

        this.fome = 100;
        this.sede = 100;
        this.brinca = 50;
    }

    get start() {
        console.log(`Seja bem vindo ao Tamagotchi App, cuide bem do ${this.name}.`);
        console.log(`Para mais informações de como cuidadar do seu Pet, digite: .help`);
        this.startTimeOut();
    };

    get status() {
        clear();
        console.log(`Informações dos Status do seu pet:\n Fome: ${this.fome}%\n Sede: ${this.sede}%\n Vontade de brincar: ${this.brinca}%`)
    }

    get help() {
        clear();
        console.log(`Seu pet ${this.name}, possui funcionalidades para seu uso. Segue suas funcionalidades:\n .status\n .alimentar\n .darAgua\n .brincar`);
    }

    startTimeOut() {
        this.IdFome50ct = setTimeout(() => {
            console.log('50%')
        }, 20000);
        this.IdFome75ct = setTimeout(() => {
            console.log('75%')
        }, 30000);
        this.IdFome100ct = setTimeout(() => {
            console.log('100% morreuuuuuuuu')
        }, 40000);

        



    }

    alimentar (){
        clearTimeout(1)

        this.startTimeOut()
    }
    
    teste(){
        this.val = setTimeout(() => {
            console.log('oi')
        }, 1000);
        
        console.log(this.val)
    }
    

}

