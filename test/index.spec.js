// importamos la funcion que vamos a testear
import { singIn,authFacebook,authGmail,goOut } from "../src/lib/index";
const email='defer@gmail.com';
const pasword='123456789';
describe('singIn', () => {
  it('debería ser una función', () => {
    expect(typeof singIn).toBe('function');
  });
  it('Deberia poder ingresar con mi gmail y mi pasword',()=>{
    return singIn(email,pasword).then((user)=>{
      expect(user.email).toBe(email);
    })
  })
});
describe('authFacebook', () => {
  it('debería ser una función', () => {
    expect(typeof authFacebook).toBe('function');
  });
});
describe('authGmail', () => {
  it('debería ser una función', () => {
    expect(typeof authGmail).toBe('function');
  });
});

describe('goOut', () => {
  it('debería ser una función', () => {
    expect(typeof goOut).toBe('function');
  });
});
