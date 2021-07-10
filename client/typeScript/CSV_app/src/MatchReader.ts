import { CsvTuple } from "./CsvTypes";
import { dateStringToDate} from "./utils"
import { MatchResult } from "./CsvTypes"

interface DataReader {
    read(): void,
    data: string[][]
}

export class MatchReader {
    data: CsvTuple[] = []
    
    constructor(public reader: DataReader){
    }

    load(): void{
        this.reader.read()
        this.data = this.reader.data.map((row: string[]): CsvTuple => {
            return [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as MatchResult,
                row[6]

            ]
    })
}
}