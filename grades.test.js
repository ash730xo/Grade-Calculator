const getGrade = require('../src/grades')


describe('getGrade', () => {

    it.each([
        ['A+',100],
        ['A+',99],
        ['A+',98],
        ['A+',97],
        ['A',96],
        ['A',95],
        ['A',94],
        ['A',93],
        ['A-',92],
        ['A-',91],
        ['A-',90],
        ['B+',89],
        ['B+',88],
        ['B+',87],
        ['B',86],
        ['B',85],
        ['B',84],
        ['B',83],
        ['B-',82],
        ['B-',81],
        ['B-',80],
        ['C+',79],
        ['C+',78],
        ['C+',77],
        ['C',76],
        ['C',75],
        ['C',74],
        ['C',73],
        ['C-',72],
        ['C-',71],
        ['C-',70],
        ['D',69],
        ['D',68],
        ['D',67],
        ['D',66],
        ['D',65],
        ['D',64],
        ['D',63],
        ['D',62],
        ['D',61],
        ['D',50]       
    ])
    ('should return a grade of %s for a score of %n ', (letter, score) => {
        const grade = getGrade(score)
        expect(grade).toEqual(letter)

    })


    it('should return an F for any score under 50', () => {
        for (let i = 49; i > 0; i--) {
            expect(getGrade(i)).toEqual('F')
        }
    })

    
})