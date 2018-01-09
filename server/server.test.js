var expect= require('expect');
var sp= require('supertest');

var {app} = require('./server.js');
var {todo} = require('./model/todo.js');
var {user} = require('./model/user.js');


describe("post \todos",()=> {
    it("should create a new todo",(done)=>
    {
        var text ='test case1';

        sp(app)
            .post('/todos')
            .send({text})
            .end(done)
    })
})