app.controller("LoveStoryCtrl", function($location, love_storyF){
    var _public = this;

    _public.Object = love_storyF;

    $("[data-fancybox]").fancybox({
        // Options will go here
    });

    _public.ToMain = function(){
        $location.path("/");
    };

    _public.exam_id="0";
    _public.ToExam = function(){
        $location.path("/exam/"+_public.exam_id);
    };

    _public.ToNewsInfo = function(){
        $location.path("/news-info");
    };

    _public.ToLoveStory = function(){
        $location.path("/love-story");
    };

    _public.ToExamResult = function(){
        $location.path("/result");
    };

    _public.ToHarryPotter = function(){
        $location.path("/lib_HP");
    };
});

app.factory("love_storyF", function(){
    var Object = {};

    Object["Acquaintance"] = {
        Title: "Наша с Тоней первая встреча, мой первый конфуз!",
        Body: "Данный этап нашего взаимодействия начался весьма неоднозначно! Я приехал на дачу, к родителям, так как они с мелким братишкой жили там все лето." +
        "Все вроде как должно было быть как обычно. Я должен был отоспаться и поработать физически, но как выяснилось, я должен был сходить с мамой и братишкой " +
        "к соседям.Это уже вызвало у меня не самые радостные чувства, так как я не большой фанат походов к незнакомым людям, а после того как мне еще и сообщили," +
        " что там будет две девочки, и, что одна из них хотела бы со мной познакомится... Сказать, что сердце ушло в пятки, это ничего не сказать. " +
        "В любом случае мы с мамой и Илюхой пошли. Придя к соседям на участок, я увидел вдалеке двух девушек, со стороны мне показалось, что им лет по 15," +
        " и я подумал,'что это за приколы? ну ладно, я с мелким на руках, задолбанный за неделю, так еще и из электрички(я их ненавижу), выгляжу я дико нелепо," +
        " да и их там аж двое, ладно бы еще одна, не пойду, а то еще двух слов связать не смогу!'. Как вы понимаете, знакомство с девушками," +
        " это не моя сильная сторона, ну вот и ушел я домой. Это и был тот самый первый и самый глупый мой 'fail'. Но уже менять было нечего," +
        " я уехал домой на другой день, но на этом все не закончилось. Вы бы знали как я рад, что Тонечка, все-таки, сама хотела познакомится!"};

    Object["OurMeetInVk"]={
        Title:"Как мы начали общаться.",
        Body: "Наше общение с Тонечкой началось в весьма удобной, практичной, быстрой форме, с переписки в контакте. Многие так знакомятся, некоторые только так знакомятся, в целом это удобно." +
        "Тонечка мне написала, что она моя соседка по даче и хотела бы познакомится. А мне, что! Я свободен, с девушками давно не общался, да и Тоня весьма симпатчная, миниатюрная, в целом в моем " +
        "вкусе. Конечно же сразу ее добавил, начали переписываться, я выяснил, что она помимо того, что милашка, так еще и умница, конечно же захотелось с ней поскорее повидаться! Написал, что приеду" +
        "на дачу, и предложил увидеться, Тонечка согласилась, я был очень этому рад!"
    };

    return Object;
});