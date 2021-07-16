const chai = require('chai')
const chaiHttp = require('chai-http');
const app = require('../bin/app');

chai.use(chaiHttp);
chai.should();

describe('method=POST path=/post_test', () => {
    it('API test', done => {
        var info = {data: "test"};
        chai.request(app)
        .post('/api_test')
        .send(info)
        .end((err, res) =>{
            res.should.have.status(200);
        });

        done();
    });
});