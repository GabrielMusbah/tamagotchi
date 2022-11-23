class tamagotchi {

    //criação das variaveis usadas na classe
    constructor(name){
        this.name = name;
        //variaveis que vão de 0 a 100 que dão o estatus do bichinho
        this.fome = 0;
        this.sede = 0;
        this.brinca = 0;
        this.sono = 0;
        //variaveis booleanas que servem pra saber se alguma função dele esta rodando ou não
        this.dormindo = false;
        this.vivo = true;
        this.ativo = false;
    }

    start() {
        //sistema de validação da função (guard if), pra avitar que ative 2 vezes
        if (this.ativo){
            console.clear(); 
            console.log(`O seu bichinha ja esta ativo!`);
            return;
        }

        //sistema de validação da função (guard if), pra avitar que use com ele morto
        if(!this.vivo){
            this.#alerta();
            return;
        }

        //ativação do bichinho, deixando ele 'vivo'
        this.ativo = true;
        console.clear(); 
        console.log(`Seja bem vindo ao Tamagotchi App, cuide bem do ${this.name}.`);
        console.log(`Para mais informações de como cuidadar do seu Pet, digite: .help`);
        //inicia os intervalos
        this.#startInterval();
    }

    help() {
        //validação para não usar ele morto
        if(!this.vivo){
            this.#alerta();
            return;
        }

        //limpar o console e apresentar um log na tela com as funções
        console.clear();
        console.log(`Seu pet ${this.name}, possui funcionalidades para seu uso. Segue suas funcionalidades:\n .status\n .alimentar\n .hidratar\n .brincar\n .dormir\n .acordar\n .restart`);
    }

    status(){
        //validação para não usar ele morto
        if(!this.vivo){
            this.#alerta();
            return;
        }

        //apresentar um log na tela com os status
        console.log(`Como esta seu Bichinho ${this.name}\n Fome: ${this.fome}%\n Sede: ${this.sede}% \n Vontade de brinca: ${this.brinca}%\n Sono: ${this.sono}%`);
    }

    alimentar(){
        //validação para não usar ele morto ou dormindo
        if(!this.vivo || this.dormindo){
            this.#alerta();
            return;
        }

        //alimenta o bichinho dando 0 de fome pra ele
        this.fome = 0;
        console.clear();
        console.log(`O ${this.name} ta de buchinho cheio!`);
    }

    hidratar(){
        //validação para não usar ele morto ou dormindo
        if(!this.vivo || this.dormindo){
            this.#alerta();
            return;
        }

        //hidrata o bichinho dando 0 de sede pra ele
        this.sede = 0;
        console.clear();
        console.log(`O ${this.name} ta bem hidratado!`);
    }

    brincar(){
        //validação para não usar ele morto ou dormindo
        if(!this.vivo || this.dormindo){
            this.#alerta();
            return;
        }

        //brinca com o bichinho dando 0 de vontade de brincar pra ele
        this.brinca = 0;
        //quando brinca com ele, ele 'gastas' os outros status
        this.sono += 20;
        this.fome += 10;
        this.sede += 10;
        console.clear();
        console.log(`O ${this.name} ta cansado de tanto buscar graveto`)
    }

    dormir(){
        //verifica se esta vivo, se estiver morto ja para a função
        if(!this.vivo){
            this.#alerta();
            return;
        }

        //verificação, se ele ja esta dormindo ja para a função
        if(this.#verificarDormindo())
            return;

        //segunda validação, se ele não tiver necessidades
        if(!this.necessidade){
            //muda o estado dele pra durmindo
            this.dormindo = true;
            console.clear(); 
            console.log(`O ${this.name} foi a mimir!`)
            //gera um intervalo, que vai 'diminuindo' o sono dele
            this.intervaloSono = setInterval(() => {
                if(this.sono > 0){this.sono -= 1}
            },300)
            return;
        } 

        //se ele tiver alguma necessidade, não deixa durmir e notifica o usuario
        this.dormindo = false;
        console.clear();
        console.log(`O ${this.name} não pode dormir porque tem algo errado com ele: `)
        this.status()
    }

    restart(){
        //apenas reseta os status dele, deixando ele vivo, e as funções voltam
        this.vivo = true;
        this.fome = 0;
        this.sede = 0;
        this.brinca = 0;
        console.clear();
        console.log(`O ${this.name} foi reiniciado!`)
    }

    acordar(){
        console.clear();
        //tira ele do estado de durmir
        this.dormindo = false;
        //para o intervalo que diminui o sono
        clearInterval(this.intervaloSono);
        console.log(`O ${this.name} acordou!`)
        //se tiver alguma necessidade, ele ja avisa no console
        if(this.necessidade){this.#necessidades()}
    }

    #verificarDormindo(){
        //verifica se esta durmindo, retorna false, se não estiver
        if(!this.dormindo)
            return false;
        
        //retorna true e uma mensagem no console se estiver durmindo
        console.clear();
        console.log('O seu bichinho ja esta dormindo, use a função acordar, pra acordar ele');
        return true;
    }

    #verificarVivo(){
        //verifica se esta vivo, retornando true se estiver
        if(this.vivo)
            return true;
        
        //retorna false e uma mensagem se estiver morto
        console.clear(); 
        console.log('Seu bichinho esta morto, use a função restart');
        return false;
    }
    
    #alerta(){
        //ambos alertas rodam as funções que fazem a validação, notificando se for false ou retornando true
        if(this.#verificarDormindo())
            return;
        
        if(this.#verificarVivo()){
            return;
        }
    }

    #necessidades(){
        //quando executada, apenas retorna um status do bichinho
        console.clear();
        console.log(`O ${this.name} possui necessidades, cuide dele:`);
        this.status();
    }

    #matar(){
        //valida se estiver vivo, se estiver, 'mata' o bichinho mudando o estado de vivo e ativo pra false
        if(this.vivo){
        this.vivo = false;
        this.ativo = false;
        console.log(`O ${this.name} morreuuuuuuuuu! 😪`)
    }
    }

    #startInterval() {

        //intervalos para modificar as variaveis com passar do tempo, com base na 'regra de negocio' da classe
        setInterval(() => {
            this.fome += 1
        }, 1200);

        setInterval(() => {
            this.sede += 1
        }, 2400);

        setInterval(() => {
            this.brinca += 1
        }, 3000);

        setInterval(() => {
            this.sono += 1
        }, 1200);

        //verifica constantemente se ele possui alguma necessidade
        setInterval(() => {
            if(this.fome > 50 || this.sede > 50 || this.brinca > 50 || this.sono > 50){
                this.necessidade = true;
            }else {
                this.necessidade = false;
            }
        },1000)

        //verifica se ele tem alguma variavel acima de 0, o tornando 'morto'
        setInterval(() => {
            if(this.fome > 100 || this.sede > 100 || this.brinca > 100 || this.sono > 100){
                this.#matar();
            }else {
                this.vivo = true;
            }
        },1000)

        //verifica se ele não tem nenhuma pendencia e o faz dormir
        setInterval(() => {
            if(!this.necessidade && this.vivo && !this.dormindo){
                this.dormir();
            }
        },10000);

        //verifica se ele tem pendencia e o faz acordar
        setInterval(() => {
            if(this.necessidade && this.dormindo && this.vivo){
                this.acordar();
            }
        },1000);
    
    }


}

