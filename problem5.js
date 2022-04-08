class Calculator {

    calculate(arr) {
        if (arr.indexOf("/") > 0) {
            let i = arr.indexOf("/")
            let temp = Number(arr[i - 1]) / Number(arr[i + 1])
            arr.splice(i - 1, 3, temp)
            return this.calculate(arr)
        } else if (arr.indexOf("*") > 0) {
            let i = arr.indexOf("*")
            let temp = Number(arr[i - 1]) * Number(arr[i + 1])
            arr.splice(i - 1, 3, temp)
            return this.calculate(arr)
        } else if (arr.indexOf("+") > 0) {
            let i = arr.indexOf("+")
            if (arr[i - 2] == "-") {
                let temp = -Number(arr[i - 1]) + Number(arr[i + 1])
                if (i - 2 == 0) {
                    arr.splice(i - 2, 4, temp)
                } else {
                    arr.splice(i - 2, 4, '+', temp)
                }
            } else {
                let temp = Number(arr[i - 1]) + Number(arr[i + 1])
                arr.splice(i - 1, 3, temp)
            }
            return this.calculate(arr)
        } else if (arr.indexOf("-") >= 0) {
            let i = arr.indexOf("-")
            if (i == 0) {
                let temp = 0 - Number(arr[i + 1])
                arr.splice(i, 2, temp)
            } else {
                let temp = Number(arr[i - 1]) - Number(arr[i + 1])
                arr.splice(i - 1, 3, temp)
            }
            return this.calculate(arr)
        } else {
            return arr[0]
        }
    }

    evaluate() {
        let input = process.argv.slice(2)[0]
        let expression = /\+|\*|\-|\//g
        let operators = [...input.matchAll(expression)].map((v) => v[0])
        let operands = input.split(expression)
        let arr = []

        if (operands > operators) {
            operands.forEach((v, i) => {
                arr.push(v)
                if (i < operands.length - 1) {
                    arr.push(operators[i])
                }
            })
        } else {
            operators.forEach((v, i) => {
                arr.push(v)
                arr.push(operands[i + 1])
            })
        }
        return this.calculate(arr)
    }
}

let calc = new Calculator()
result = calc.evaluate()
