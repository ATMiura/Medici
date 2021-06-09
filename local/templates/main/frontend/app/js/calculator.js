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

        $(self.calculatorForm).find('[name="delegate"]:checked').each(function () {
            sum += Number($(this).val()) || 0 // если value не корректно
        });
        $(self.calculatorForm).find('input:not([type="radio"])').each(function () {
            sum += Number($(this).val()) || 0 // если value не корректно
        });
        $(self.calculatorResult).text(sum+ ' USD');
    }

    events() {
        let self = this;

        //$(document).on('input', this.calculatorInput, function() {
        //    self.handler($(this));
        //});
        //self.handler(this.calculatorInput);
        $(document).on('input', this.calculatorInput, function (){
            let sum = 0;
            let investLabel = $('[data-invest-label]:checked').attr('data-invest-label');

            if($('[name="delegate"]:checked').val() === 'yes'){
                $('#mdc').attr('value', '13');
                $('#usd').attr('value', '8');

                let r = $('[name="invest"]:checked').val();
                let t = $('[data-input-range]').val();
                let p = $('#investSum').val();
                sum = (p * Math.pow((1 + (r/100)), t));
                //sum = parseInt((P*(1 + r*t)));

                $(self.calculatorResult).text(sum.toFixed(2) +' '+investLabel);

            } else {
                $('#mdc').attr('value', '10');
                $('#usd').attr('value', '5');


                let r = $('[name="invest"]:checked').val();
                let t = $('[data-input-range]').val();
                let p = $('#investSum').val();
                sum = (p * Math.pow((1 + (r/100)), t));
                //sum = parseInt((P*(1 + r*t)));

                $(self.calculatorResult).text(sum.toFixed(2) +' '+investLabel);

            }
        });
    }
}