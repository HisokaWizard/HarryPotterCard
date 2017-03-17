"use strict";

app.service("sumTrueAnswer", function(){
    var SumTrueAnswer = 0;
    return {
        setSum: function (sum) {
            SumTrueAnswer = sum;
        },
        getSum: function () {
            return SumTrueAnswer;
        }
    }
});
