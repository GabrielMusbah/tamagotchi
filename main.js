class tamagotchi {

    constructor(name){
        this.name = name;
        this.fome = 10;
        this.sede = 100;
        this.brinca = 0;
        this.dormindo = false;
        this.vivo = true;
    }

    start() {
        if(this.vivo && !this.dormindo){
            console.clear(); 
            console.log(`Seja bem vindo ao Tamagotchi App, cuide bem do ${this.name}.`);
            console.log(`Para mais informações de como cuidadar do seu Pet, digite: .help`);
            this.startTimeOut();
        } else {
            this.alerta();
        }
    }

    help() {
        if(!this.vivo || this.dormindo){
            this.alerta();
            return;
        }

        console.clear();
        console.log(`Seu pet ${this.name}, possui funcionalidades para seu uso. Segue suas funcionalidades:\n .status\n .alimentar\n .hidratar\n .brincar`);
    }

    status(){
        if(!this.vivo){
            this.alerta();
            return;
        }

        console.log(`Como esta seu Bichinho ${this.name}\n Fome: ${this.fome}%\n Sede: ${this.sede}% \n Vontade de brinca: ${this.brinca}%`);
    }

    alimentar(){
        if(!this.vivo || this.dormindo){
            this.alerta();
            return;
        }

        this.fome = 100;
        console.clear();
        console.log(`O ${this.name} ta de buchinho cheio!`);
    }

    hidratar(){
        if(!this.vivo || this.dormindo){
            this.alerta();
            return;
        }

        this.sede = 100;
        console.clear();
        console.log(`O ${this.name} ta bem hidratado!`);
    }

    brincar(){
        if(!this.vivo || this.dormindo){
            this.alerta();
            return;
        }

        this.brinca = 0;
        console.clear();
        console.log(`O ${this.name} ta cansado de tanto buscar graveto`)
    }

    dormir(){

        if(this.verificarDormindo())
            return;
        

        if(!this.necessidade && this.vivo && !this.dormindo){
                this.dormindo = true;
                console.clear(); 
                console.log(`O ${this.name} foi a mimir!`)
        } else {
                this.dormindo = false;
                console.clear();
                console.log(`O ${this.name} não pode dormir porque tem algo errado com ele: `)
                this.status()
        }

    }

    verificarDormindo(){
        if(!this.dormindo)
            return false;
        
        console.clear();
        console.log('O seu bichinho ja esta dormindo, use a função acordar, pra acordar ele');
        return true;
    }

    verificarVivo(){
        if(this.vivo)
            return true;
        
        console.clear(); 
        console.log('Seu bichinho esta morto, use a função restart');

    }
    

    alerta(){
        if(this.verificarDormindo())
            return;
        
        if(this.verificarVivo()){
            return;
        }
    }

    necessidades(){
        console.clear();
        console.log(`O ${this.name} possui necessidades, cuide dele:`);
        this.status();
    }

    matar(){
        if(this.vivo){
        this.vivo = false;
        console.log(`O ${this.name} morreuuuuuuuuu! 😪`)}
    }

    restart(){
        this.vivo = true;
        this.fome = 100;
        this.sede = 100;
        this.brinca = 0;
        console.clear();
        console.log(`O ${this.name} foi reiniciado!`)
    }

    acordar(){
        console.clear();
        this.dormindo = false;
        console.log(`O ${this.name} acordou!`)
        if(this.necessidade){this.necessidades()}
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
            if(this.fome < 50 || this.sede < 50 || this.brinca > 50){
                this.necessidade = true;
            }else {
                this.necessidade = false;
            }
        },1000)

        setInterval(() => {
            if(this.fome < 0 || this.sede < 0 || this.brinca > 100){
                this.matar();
            }else {
                this.vivo = true;
            }
        },1000)

        setInterval(() => {
            if(!this.necessidade && this.vivo && !this.dormindo){
                this.dormir();
            }
        },3000);

        setInterval(() => {
            if(this.necessidade && this.dormindo && this.vivo){
                this.acordar();
            }
        },1000);
    
    }


}

