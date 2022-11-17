import SuperTest from 'supertest';
import Chai from 'chai';

const expect = Chai.expect;
const requester = SuperTest('http://localhost:8080');

describe('Prueba de register', ()=> {
    describe('register',()=>{
    it('Mi peticion a register deberia retornar un OK', async()=>{
        let response = await requester.get('/register');
        const {_body} = response;
        console.log(_body);
        expect(response.status).to.eql(200);
    })
    })
})


describe('Prueba de login', ()=> {
    describe('login',()=>{
    it('Mi peticion a login deberia retornar un OK', async()=>{
        let response = await requester.get('/login');
        const {_body} = response;
        console.log(_body);
        expect(response.status).to.eql(200);
    })
    })
})
