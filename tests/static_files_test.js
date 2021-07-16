var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../bin/app');

chai.use(chaiHttp);
chai.should();

describe('method=GET path=/', ()=>{
    it('HTML load home.html test', done => {
        chai.request(app)
        .get('/')
        .end((err,res)=>{
            
            res.should.have.status(200);
            res.should.to.be.html;

            done();
        });
    });

    it('JS load home.js test', done => {
        chai.request(app)
        .get('/js/home.js')
        .end((err,res)=>{
            if(err) console.log('err', err);

            res.should.have.status(200);
            res.should.have.header('content-type', 'text/javascript; charset=utf-8');

            done();
        });
    });
});