import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './CsvTypes';
import { CsvTuple } from './CsvTypes';
import { MatchReader } from './MatchReader';

const csvReader = new CsvFileReader('football.csv')
csvReader.read()//
console.log(csvReader.data)
const matches = new MatchReader(csvReader)

matches.load()







let manUnitedWins = 0;
let reduced: number = matches.data.reduce((previousValue: number, currentValue: CsvTuple) => {
    if(currentValue[1] === 'Man United' && currentValue[5] === MatchResult.HomeWin ){
        return previousValue + 1
    }else if(currentValue[2] === 'Man United' && currentValue[5] === MatchResult.AwayWin){
        return previousValue + 1
    }
    return previousValue
}, manUnitedWins)

console.log(reduced)



