export enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D'
}

export type CsvTuple = [Date, string, string, number, number, MatchResult, string]


