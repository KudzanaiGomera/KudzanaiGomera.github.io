const Portfolio = function() {
    function makeWords() {
        var words = [{
            text: "JavaScript",
            weight: 12
        }, {
            text: "Css3",
            weight: 8
        }, {
            text: "PHP",
            weight: 15
        }, {
            text: "Jquery",
            weight: 8
        }, {
            text: "Html5",
            weight: 7
        }, {
            text: "Python",
            weight: 10
        }, {
            text: "Django",
            weight: 9
        }, {
            text: "Angular 2+",
            weight: 14
        }, {
            text: "C/C++",
            weight: 7
        }];
        return words;
    }

    function makeWordCloud(words) {
        $('.teaching-domains').jQCloud(words, { delay: 120 });
    }

    function displayWordCloud() {
        var count = 1;
        $(window).on('scroll', function() {
            var y_scroll_pos = window.pageYOffset;
            var scroll_pos_test = 2700; // set to whatever you want it to be
            var words = makeWords();
            if (y_scroll_pos > scroll_pos_test && count <= 1) {
                makeWordCloud(words);
                count++;
            }
        });
    }

    function designForm() {
        $("#my-modal form").addClass("my-form");
    }

    function typeAnimation() {
        Typed.new("#writing-text", {
            strings: [
                "am a Software Engineer | Cyber Security Engineer"
            ],
            // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
            stringsElement: null,
            // typing speed
            typeSpeed: 2,
            contentType: 'text',
            callback: function() {
                $("#writing-text").css({});
            },
            preStringTyped: function() {},
            onStringTyped: function() {}
        });
    }

    return {
        displayWordCloud: displayWordCloud,
        typeAnimation: typeAnimation
    }

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
