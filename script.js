class Heroi{
    constructor(nome,idade,TipoPersonagem){
        this.nome = nome
        this.idade= idade
        this.TipoPersonagem = TipoPersonagem
    }

     atacar(){
        switch (this.TipoPersonagem) {
            case TipoPersonagem.GUERREIRO:
               return 'Usou espada';
              break;
            case TipoPersonagem.MAGO:
                return 'Usou magia';
              break;
            case TipoPersonagem.MONGE:
             return 'Usou artes marciais';
              break;
            case TipoPersonagem.NINJA:
              return 'Usou shuriken';
              break;
            default:
              return'Tipo de personagem desconhecido';
          }


     } 

     apresentar(){

        console.log(`O ${this.nome} atacou  ${this.atacar()} `)
     }

}

//ENUM
const TipoPersonagem = {
    GUERREIRO: 'guerreiro',
    MAGO: 'mago',
    MONGE: 'monge',
    NINJA: 'ninja',
  };


  ///////////////////////////////////////////////////////////////////////////


function Main(){

    let mago = new Heroi("Mago",2,TipoPersonagem.MAGO);
    mago.apresentar()

   console.log("==============================================")
   console.log("==============================================")

   let guerreiro = new Heroi("Guerreiro",4,TipoPersonagem.GUERREIRO)

   guerreiro.apresentar()


}



Main()

