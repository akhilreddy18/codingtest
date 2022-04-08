class Calculator {

    evaluate() {

        let input = process.argv.slice(2)[0]
        let expression = /\+|\*|\-|\//

        let operands = input.split(expression)
        let operator = input.match(expression)[0]
        let result = Number(operands[0])

        function calculate(num1, num2, op) {
            switch (op) {
                case '+':
                    return num1 + num2
                    break;
                case '-':
                    return num1 - num2
                    break;
                case '*':
                    return num1 * num2
                    break;
                case '/':
                    return num1 / num2
                    break;
            }
        }

        operands.slice(1).forEach((val, ind) => {
            result = calculate(result, Number(val), operator)
        })
        return result
    }
}

let calc = new Calculator()
result = calc.evaluate()