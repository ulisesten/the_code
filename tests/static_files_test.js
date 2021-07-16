var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../bin/app');

chai.use(chaiHttp);
chai.should();

describe('method=GET path=/', ()=>{
    it('HTML load test', done =>{
        chai.request(app)
        .get('/')
        .end((err,res)=>{
            
            res.should.have.status(200);
            res.should.to.be.html;

            done();
        })
    })
})