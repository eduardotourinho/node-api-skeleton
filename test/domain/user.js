/**
 * Created by eduardo on 6/9/17.
 */
const assert = require('assert');
const domain = require('../domain');

describe("User", () => {

    describe('Entity', () => {
        const user = new domain.entity.User("João", 23);

        it("User must have a name", () => {
            assert.equal(user.name, "João", user.name);
            done();
        });

        it("User must have an age", () => {
            assert.equal(user.age, 23, user.age);
            done();
        })
    })
});
