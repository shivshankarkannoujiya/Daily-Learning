let x: number = 20;

let fname: string | null = null;

function add(a: number, b: number): number {
  return a + b;
}

let sum: number = add(2, 3);

interface User {
  firstname: string;
  lastname?: string;
  email: string;
  avatar?: string;
}

function updateUser(user: User) {}

const payload: User = {
  firstname: "Abhishek",
  lastname: "Kumar",
  email: "abhi@gmail.com",
  avatar: "https://avatar.png",
};

updateUser(payload);
