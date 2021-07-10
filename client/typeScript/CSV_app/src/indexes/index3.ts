import fs from 'fs';

const matches = fs.readFileSync('football.csv', {
    encoding: 'utf-8'
})
.split('\n')
.map((line: string): string[] => {
    return line.split(',')
})

let manUnitedWins = 0;
let reduced = matches.reduce((previousValue: number, currentValue: string[]) => {
    if(currentValue[1] === 'Man United' && currentValue[5] === 'H' ){
        return previousValue + 1
    }else if(currentValue[2] === 'Man United' && currentValue[5] === 'A'){
        return previousValue + 1
    }
    return previousValue
}, manUnitedWins)



