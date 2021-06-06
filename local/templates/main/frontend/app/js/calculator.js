export default class Calculator {
    calculatorForm = '[data-calculator-form]';
    calculatorInput = '[data-calculator-input]';
    calculatorResult = '[data-calculator-value]';


    constructor() {
        this.events();
    }

    handler($this){
        const self = this;

        let sum = 0;

        $(self.calculatorForm).find('input:checked').each(function () {
            sum += Number($(this).val()) || 0 // если value не корректно
        });
        $(self.calculatorForm).find('input:not([type="radio"])').each(function () {
            sum += Number($(this).val()) || 0 // если value не корректно
        })
        $(self.calculatorResult).text(sum+ ' USD');
    }

    events() {
        let self = this;

        $(document).on('input', this.calculatorInput, function() {
            self.handler($(this));
        });
        self.handler(this.calculatorInput);
    }
}