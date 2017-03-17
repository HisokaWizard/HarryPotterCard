"use strict";

app.controller("ExamSOVBeginCtrl", function($http, $location, $routeParams, TestF, TrueAnswerF, sumTrueAnswer) {
    var _public = this;

    _public.quest_id = $routeParams.id;
    _public.Test = TestF;
    _public.TrueAnswer = TrueAnswerF;
    _public.RezultAnswer={};

    _public.NextQuestion = function (id, answer) {
        for(var i=0; i<_public.TrueAnswer.length; i++){
            if(id == _public.TrueAnswer[i].Question_id){
                if(answer == _public.TrueAnswer[i].true_answer_id){
                    sumTrueAnswer.setSum(sumTrueAnswer.getSum()+1);
                }
            }
        }
        var new_id = +id;
        new_id++;
        if(new_id == _public.Test.length){
            $location.path("/student");
            return;
        }
        $location.path("/exam/"+new_id);
    };

    _public.GetResult = function(){
        return sumTrueAnswer.getSum();
    };
});

app.factory("TestF", function(){
    var Test =  [
        {
            id: "0",
            Question: "Какое полное имя Тонечки?",
            first_answer: {id: "1", answer: "Румянцева Антонина"},
            second_answer: {id: "2", answer: "Голощапова Антонина"},
            third_answer: {id: "3", answer: "Николаева Антонина"},
            four_answer: {id: "4", answer: "Матюхина Антонина"},
            fifth_answer: {id: "5", answer: "Беляева Антонина"},
            six_answer: {id: "6", answer: "Смитт Антонина"}
        },
        {
            id: "1",
            Question: "Какой любимый цвет Тонечки Матюхиной?",
            first_answer: {id: "1", answer: "Белый"},
            second_answer: {id: "2", answer: "Красный"},
            third_answer: {id: "3", answer: "Черный"},
            four_answer: {id: "4", answer: "Фиолетовый"},
            fifth_answer: {id: "5", answer: "Серый"},
            six_answer: {id: "6", answer: "Зеленый"}
        },
        {
            id: "2",
            Question: "В какое время Тонечка любит просыпаться?",
            first_answer: {id: "1", answer: "В 8-9 часов утра"},
            second_answer: {id: "2", answer: "В 5-6 часов утра"},
            third_answer: {id: "3", answer: "В 19-20 часов вечера"},
            four_answer: {id: "4", answer: "В 7 часов утра"},
            fifth_answer: {id: "5", answer: "В 11-12 часов утра"},
            six_answer: {id: "6", answer: "В обед после 13 часов"}
        },
        {
            id: "3",
            Question: "На каком(их) интрументе(ах) Тонечка играет?",
            first_answer: {id: "1", answer: "Виолончель и гармонь"},
            second_answer: {id: "2", answer: "Гитара и барабаны"},
            third_answer: {id: "3", answer: "Синтезатор и скрипка"},
            four_answer: {id: "4", answer: "Труба и орган"},
            fifth_answer: {id: "5", answer: "Фортепиано и аккордеон"},
            six_answer: {id: "6", answer: "Саксафон"}
        },
        {
            id: "4",
            Question: "Любимая(ые) вкусняшка(и) Тонечки?",
            first_answer: {id: "1", answer: "Борщ и плов"},
            second_answer: {id: "2", answer: "Шаверма и пицца"},
            third_answer: {id: "3", answer: "Гамбургеры, чизбургеры и другие бургеры"},
            four_answer: {id: "4", answer: "Запеченная курица"},
            fifth_answer: {id: "5", answer: "Овощной салат из брокколи и тофу в соевом соусе"},
            six_answer: {id: "6", answer: "Торты и пирожные"}
        },
        {
            id: "5",
            Question: "Что Тонечка не любит в парнях больше всего?",
            first_answer: {id: "1", answer: "Слабая эрудиция"},
            second_answer: {id: "2", answer: "Самолюбие"},
            third_answer: {id: "3", answer: "Нытье"},
            four_answer: {id: "4", answer: "Обидчивость"},
            fifth_answer: {id: "5", answer: "Наивность"},
            six_answer: {id: "6", answer: "Глупость"}
        },
        {
            id: "6",
            Question: "Какого рода Тонечка специалист после выпуска из колледжа?",
            first_answer: {id: "1", answer: "техник-инженер-конструктор"},
            second_answer: {id: "2", answer: "техник-эколог"},
            third_answer: {id: "3", answer: "техник-моторист"},
            four_answer: {id: "4", answer: "помошник юриста"},
            fifth_answer: {id: "5", answer: "техник-инженер-робототехник"},
            six_answer: {id: "6", answer: "медсестра"}
        },
        {
            id: "7",
            Question: "Чем Тонечка займется на свободных выходных с большей долей вероятности?",
            first_answer: {id: "1", answer: "Пойдет с друзьями в клуб и будет тусить всю ночь, а в воскресенье отсыпаться"},
            second_answer: {id: "2", answer: "Будет работать по дому, заниматься подготовкой к парам и изучать музыкальное искусство"},
            third_answer: {id: "3", answer: "Просидит все выходные в соц сетях и будет забывать покушать"},
            four_answer: {id: "4", answer: "Будет спать до обеда, заниматься домашними делами, смотреть киношки и есть вкусняшки"},
            fifth_answer: {id: "5", answer: "Будет работать все выходные, и спать только 5 часов"},
            six_answer: {id: "6", answer: "Будет задротить в компьютерные игры, есть все что найдется под рукой и не будет мыться все выходные"}
        },
        {
            id: "8",
            Question: "Как зовут Тониного папу?",
            first_answer: {id: "1", answer: "Сергей"},
            second_answer: {id: "2", answer: "Анатолий"},
            third_answer: {id: "3", answer: "Генадий"},
            four_answer: {id: "4", answer: "Василий"},
            fifth_answer: {id: "5", answer: "Валентин"},
            six_answer: {id: "6", answer: "Иосиф"}
        },
        {
            id: "9",
            Question: "Аромат Тониных любимых духов?",
            first_answer: {id: "1", answer: "Арбуз+дыня"},
            second_answer: {id: "2", answer: "Свежесть океана"},
            third_answer: {id: "3", answer: "Клубничка"},
            four_answer: {id: "4", answer: "Цитрусовый микс"},
            fifth_answer: {id: "5", answer: "Банан"},
            six_answer: {id: "6", answer: "Ваниль"}
        }
    ];

    return Test;
});


app.factory("TrueAnswerF", function(){
    var TrueAnswer = [
        {
            Question_id: "0",
            true_answer_id: "4"
        },
        {
            Question_id: "1",
            true_answer_id: "4"
        },
        {
            Question_id: "2",
            true_answer_id: "5"
        },
        {
            Question_id: "3",
            true_answer_id: "5"
        },
        {
            Question_id: "4",
            true_answer_id: "2"
        },
        {
            Question_id: "5",
            true_answer_id: "4"
        },
        {
            Question_id: "6",
            true_answer_id: "2"
        },
        {
            Question_id: "7",
            true_answer_id: "4"
        },
        {
            Question_id: "8",
            true_answer_id: "1"
        },
        {
            Question_id: "9",
            true_answer_id: "6"
        }
    ];
    return TrueAnswer;
});

