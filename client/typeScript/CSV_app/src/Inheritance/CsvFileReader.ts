import fs from 'fs';
import { CsvTuple, MatchResult } from './CsvTypes';


export abstract class CsvFileReader<T> {
    abstract mapRows(row: string[]): T;
    data: T[] = []

    constructor(public filename: string){}

    read(): void{
        this.data = fs.readFileSync(this.filename, {
            encoding: 'utf-8'
        })
        .split('\n')
        .map((line: string): string[] => {
            return line.split(',')
        })
        .map(this.mapRows)
    }
}