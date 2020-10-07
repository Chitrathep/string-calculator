const HeaderStartSymbol = '//';
const HeaderAndNumbersSeparator = '\n';

export class NumberParser {
    parse(rawNumbers: string): Array<number> {
        const numbersInfo = this.analyzeNumberExpression(rawNumbers);

        const extractedRawNumbers = numbersInfo.rawNumbersSegment.split(numbersInfo.delimiter);

        return extractedRawNumbers.map(rawNumber => parseInt(rawNumber, 10));
    }

    private analyzeNumberExpression(numberExpression: string): NumberExpressionInfo {
        const object = {
         delimiter: this.buildDefaultDelimiterPattern(),
         rawNumbersSegment : numberExpression
        }
        

        if (numberExpression.startsWith(HeaderStartSymbol)) {
            const [headerInfo, numbersToExtract] = numberExpression.split(HeaderAndNumbersSeparator);

            const customDelimiterExpression = headerInfo.substring(HeaderStartSymbol.length);

            if (customDelimiterExpression.startsWith('[')) {
                object.delimiter = this.buildCustomDelimiterBlockPattern(customDelimiterExpression);

            } else {
                object.delimiter = this.buildCustomDelimiterWithoutBlockPattern(customDelimiterExpression);
            }

            object.rawNumbersSegment = numbersToExtract;
        }

        const result = this.NumberExpressionReturn(object.delimiter,object.rawNumbersSegment);
        return result;
    }

    private NumberExpressionReturn(delimiter:RegExp,rawNumbersSegment:string):NumberExpressionInfo {
        const numberExpressionInfo: NumberExpressionInfo = {
            delimiter,
            rawNumbersSegment
        };
        return numberExpressionInfo;
    }

    private escapeDelimiterForRegex(delimiter: string): string {
        return delimiter.split('').map(s => '\\' + s).join('');
    }

    private unwrapDelimiter(delimiter: string): string {
        return delimiter.replace(/\[|\]/g, '');
    }

    private buildCustomDelimiterBlockPattern(customDelimiterExpression: string): RegExp {
        const customDelimiterBlockPattern = /\[([^\]]+)\]/g;
        const delimiterMatches = customDelimiterExpression.match(customDelimiterBlockPattern);

        if (delimiterMatches) {
                return new RegExp(delimiterMatches
                    .map(delimiter => this.escapeDelimiterForRegex(this.unwrapDelimiter(delimiter)))
                    .join('|'), 'g');
        } else {
            return new RegExp(this.unwrapDelimiter(customDelimiterExpression), 'g');
        }
    }

    private buildCustomDelimiterWithoutBlockPattern(customDelimiterExpression: string): RegExp {
        customDelimiterExpression = this.escapeDelimiterForRegex(customDelimiterExpression[0]);

        return new RegExp(customDelimiterExpression, 'g');
    }

    private buildDefaultDelimiterPattern(): RegExp {
        return /[,\n]/g;
    }
}

class NumberExpressionInfo {
    delimiter!: RegExp;
    rawNumbersSegment!: string;
}
