import { v4 as uuidv4 } from 'uuid';


interface User {
  id: string;
  email: string;
  password: string;
}


const users: User[] = [];


export const createUser = (email: string, password: string): { success?: string; error?: string; user?: User } => {
  const userExists = users.some(user => user.email === email);
  
  if (userExists) {
    return { error: 'Usuário já existe!' };
  }

  const newUser: User = {
    id: uuidv4(), 
    email,
    password,
  };

  users.push(newUser);
  return { success: 'Usuário criado com sucesso!', user: newUser };
};


export const loginUser = (email: string, password: string): { success?: string; error?: string } => {
  const user = users.find(user => user.email === email && user.password === password);
  
  if (user) {
    return { success: 'Login realizado com sucesso!' };
  } else {
    return { error: 'Usuário ou senha incorretos!' };
  }
};
