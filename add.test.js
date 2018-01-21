var add = require('./add');
var expect = require('chai').expect;

// 测试套件, 表一一组测试
describe('点赞加一函数的测试', function () {
    // 每个describe包含多个it(测试用例)
    it('1点赞应该等于2', function () {
        expect(add(1)).to.be.equal(2);
    });
});