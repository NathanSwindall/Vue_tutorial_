import { CsvFileReader } from "./CsvFileReader";
import { CsvTuple } from "./CsvTypes";
import { dateStringToDate } from "./utils";
import { MatchResult } from "./CsvTypes";

export class FootballCsv extends CsvFileReader<CsvTuple> {

    mapRows(row: string[]): CsvTuple{
            return [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as MatchResult,
                row[6]

            ]
        }
}
