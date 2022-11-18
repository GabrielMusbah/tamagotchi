class tamagotchi {

    constructor(name){
        this.name = name;
        this.fome = 100;
        this.sede = 100;
        this.brinca = 0;
    }

    get start() {
        console.log(`Seja bem vindo ao Tamagotchi App, cuide bem do ${this.name}.`);
        console.log(`Para mais informações de como cuidadar do seu Pet, digite: .help`);
        this.startTimeOut();
    };

    get status() {
        console.clear();
        console.log(`Informações dos Status do seu pet:\n Fome: ${this.fome}%\n Sede: ${this.sede}%\n Vontade de brincar: ${this.brinca}%`)
    }

    get help() {
        console.clear();
        console.log(`Seu pet ${this.name}, possui funcionalidades para seu uso. Segue suas funcionalidades:\n .status\n .alimentar\n .hidratar\n .brincar`);
    }

    get alimentar(){
        this.fome = 100;
        console.clear();
        console.log(`O ${this.name} ta de buchinho cheio!`)
    }

    get hidratar(){
        this.sede = 100;
        console.clear();
        console.log(`O ${this.name} ta bem hidratado!`)
    }

    get brincar(){
        this.brinca = 0;
        console.clear();
        console.log(`O ${this.name} ta cansado de tanto buscar graveto`)
    }


    startTimeOut() {
        setInterval(() => {
            this.fome -= 1
        }, 1200);
        setInterval(() => {
            this.sede -= 1
        }, 2400);
        setInterval(() => {
            this.brinca += 1
        }, 3000);

        setInterval(() => {
            this.fome50 = false
            this.fome75 = false
            this.fome90 = false

            this.sede50 = false
            this.sede75 = false
            this.sede90 = false


            this.brinca50 = false
            this.brinca75 = false
            this.brinca90 = false

            if(this.fome <= 50){this.fome50 = true}
            if(this.fome <= 75){this.fome75 = true}
            if(this.fome <= 90){this.fome90 = true}
        },1000)

        setInterval(() => {
            if(this.fome50 = true){console.log('teste fiote')}
        },5000)

    }


}

