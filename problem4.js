class Calculator {

    evaluate() {  
        let input = process.argv.slice(2)[0]
        let expression = /\+|\*|\-|\//g

        let operands = input.split(expression)
        let result = Number(operands[0].replace(/\s/g, ''))
        let operator = [...input.matchAll(expression)]

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
            let num = Number(val.replace(/\s/g, ''))
            result = calculate(result, num, operator[ind][0])
        })
        return result
    }
}

let calc = new Calculator()
result = calc.evaluate()