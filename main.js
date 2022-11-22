class tamagotchi {

    constructor(name){
        this.name = name;
        this.fome = 100;
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
        if(this.vivo && !this.dormindo){
            console.clear();
            console.log(`Seu pet ${this.name}, possui funcionalidades para seu uso. Segue suas funcionalidades:\n .status\n .alimentar\n .hidratar\n .brincar`);
        } else {
            this.alerta();
        }
    }

    status(){
        if(this.vivo){
            console.log(`Como esta seu Bichinho ${this.name}\n Fome: ${this.fome}%\n Sede: ${this.sede}% \n Vontade de brinca: ${this.brinca}%`);
        } else {
            this.alerta();
        }
    }

    alimentar(){
        if(this.vivo && !this.dormindo){
            this.fome = 100;
            this.var = false;
            console.clear();
            console.log(`O ${this.name} ta de buchinho cheio!`);
        } else {
            this.alerta();
        }
    }

    hidratar(){
        if(this.vivo && !this.dormindo){
            this.sede = 100;
            this.var = false;
            console.clear();
            console.log(`O ${this.name} ta bem hidratado!`);
        } else {
            this.alerta();
        }
    }

    brincar(){
        if(this.vivo && !this.dormindo){
            this.brinca = 0;
            this.var = false;
            console.clear();
            console.log(`O ${this.name} ta cansado de tanto buscar graveto`)
        } else {
            this.alerta();
        }
    }

    dormir(){
        if(this.dormindo){console.log('O seu bichinho ja esta dormindo')
        } else {
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
    }

    alerta(){
        if(this.dormindo){console.clear(); console.log('Seu bichinho esta dormindo, use a função acordar, pra acordar ele');}
        if(!this.vivo){console.clear(); console.log('Seu bichinho esta morto, use a função restart');}
    }

    necessidades(){
        console.clear();
        console.log(`O ${this.name} possui necessidades, cuide dele:`);
        this.status();
    }

    matar(){
        console.clear();
        this.vivo = false;
        console.log(`O ${this.name} morreuuuuuuuuu! 😪`)
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
            if((this.fome < 0 || this.sede < 0 || this.brinca > 100) && this.vivo){
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

