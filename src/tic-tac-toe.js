class TicTacToe {
    constructor() {
        this.currSymb = 'x';
        this.leftSteps = 9;
        this.matrix = [
            [null, null, null],
            [null, null, null],
            [null, null, null]];
    }

    next() {
        if (this.currSymb === 'x') {
            this.currSymb = 'o';
        } else {
            this.currSymb = 'x';
        }
        return this.currSymb;
    }

    getCurrentPlayerSymbol() {
        if (this.leftSteps % 2 === 0) {
            return 'o';
        } else {
            return 'x';
        }
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.matrix[rowIndex][columnIndex]) {
            this.matrix[rowIndex][columnIndex] = this.currSymb;
            this.next();
            this.leftSteps--;
        }
    }

    isFinished() {
        return this.getWinner() !== null || this.noMoreTurns();
    }

    getWinner() {
        var answer = null;
        for (var i = 0; i < 3; i++) {
            // check the rows
            if (this.matrix[i][0] === this.matrix[i][1] && this.matrix[i][1] === this.matrix[i][2]) {
                answer = this.matrix[i][2];
                //check the cols
            } else if (this.matrix[0][i] === this.matrix[1][i] && this.matrix[1][i] === this.matrix[2][i]) {
                answer = this.matrix[2][i];
            }
        }
        if (this.matrix[0][0] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][2]) {
            answer = this.matrix[0][0];
        }
        if (this.matrix[2][0] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[0][2]) {
            answer = this.matrix[2][0];
        }
        return answer;
    }

    noMoreTurns() {
        return this.leftSteps === 0;
    }

    isDraw() {
        if (this.noMoreTurns() && !this.getWinner()) {
            return true;
        } else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
