const request = require('supertest')
const app = require('../app')

describe('Post Endpoints', () => {
    it('should return 0', async () => {
        const res = await request(app)
            .post('/records')
            .send({
                startDate: '2019-01-01',
                endDate: '2019-10-31',
                minCount: 100,
                maxCount: 1000
            })
        expect(res.body.code).toEqual(0)
    }),
    it('should return 500', async () => {
        const res = await request(app)
            .post('/records')
            .send({
                startDate: '2019-13-01',
                endDate: '2019-10-31',
                minCount: 100,
                maxCount: 1000
            })
        expect(res.body.code).toEqual(500)
    }),
    it('should return 500', async () => {
        const res = await request(app)
            .post('/records')
            .send({
                startDate: '2019-01-01',
                endDate: '2019-10-31',
                minCount: 100,
                maxCount: 'Lorem'
            })
        expect(res.body.code).toEqual(500)
    })
})