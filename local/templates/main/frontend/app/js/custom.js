export default class Custom {
    inputRange = '[data-input-range]';
    inputValue = '[data-input-range-value]';

    constructor() {
        this.events();
    }

    setBubble($this){
        const self = this;

        let inputRange = $this;
        let inputValue = inputRange.siblings(self.inputValue);

        const val = inputRange.val();
        const min = inputRange.attr('min') ? inputRange.attr('min') : 0;
        const max = inputRange.attr('max') ? inputRange.attr('max') : 100;
        const newVal = Number(((val - min) * 100) / (max - min));
        inputValue.text(val+' мес');

        inputValue.css({left: `calc(${newVal}% + (${8 - newVal * 0.15}px))`});
    }

    events() {
        const self = this;

        $('.range').each(function (){
            var inputRange = $(this).find('.input-range');
            var inputRangeMin = inputRange.attr('min');
            var inputRangeMax = inputRange.attr('max');
            var inputValue = inputRange.val();

            $(this).find('.range__limit-min').text(inputRangeMin);
            $(this).find('.range__limit-max').text(inputRangeMax);
        });

        $(document).on('input', this.inputRange, function (){
            self.setBubble($(this));
        });

        self.setBubble($(this.inputRange));
    }
}