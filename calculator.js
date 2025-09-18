let expression = '';
const display = document.getElementById('display');

function handlePress(value) {
    if (value === 'C') {
        expression = '';
    } else if (value === 'x') {
        expression = expression.slice(0, -1);
    } else if (value === '=') {
        try {
            // Replace % with /100 for basic percentage handling
            const safeExpression = expression.replace(/%/g, '/100');
            expression = eval(safeExpression).toString();
        } catch {
            expression = 'Error';
        }
    } else {
        expression += value;
    }

    display.textContent = expression || '0';
}

