
interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  //Definindo o nome como nao obrigatorio
  name?: string;
  email: string;
  password: string;
  //Exemplo de array
  //string[]
  //Definido um array que recebe um tipo ou outro
  techs: Array<string | TechObject>;
}

//  Definindo os parametros direto na funcao, com o name não obrigat0rio
//com valor dafaul
//name = '', email: string, password: string 
export default function createUser({name, email, password}: CreateUserData){
  const user = {
    name,
    email,
    password
  }

  return user;
}