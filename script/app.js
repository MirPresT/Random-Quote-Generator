(function (){

    var app = angular.module('app',[])
    app.controller('Controller', function(){

        var quotes = [
            ["Injustice anywhere is a threat to justice everywhere.", "Martin Luther King"],
            ["If you can't explain it simply, you don't understand it well enough.", "Albert Einstein"],
            ["The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.", "Bob Marley"],
            ["The quickest path to mediocraty is realism.", "Will Smith"],
            ["The people who are crazy enough to think they can change the world are the ones who do.","Steve Jobs"],
            ["You must be the change you wish to see in the world.","Mahatma Gandhi"],
            ["It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.","Maurice Switzer"],
            ["To avoid criticism, say nothing, do nothing, be nothing", "Fred Shero"],
            ["Whatever the mind of man can conceive and believe, it can achieve.", "Napoleon Hill"],
            ["Strive not to be a success, but rather to be of value.", "Albert Einstein"],
            ["Life is 10 percent what happens to me and 90 percent of how I react to it.","Charles Swindoll"],
            ["The most common way people give up their power is by thinking they don’t have any", "Alice Walker"],
            ["Whether you think you can or you think you can’t, you’re right.", "Henry Ford"],
            ["For you can render to God and Humanity no greater service than to make the most of yourself.", "Wallace D. Wattles"],
            ["Don't wish it was easier wish you were better.", "Jim Rohn"],
            ["The master has failed more times than the beginner has even tried.", "Stephen McCranie"],
            ["Forgive others, not because they deserve forgiveness, but because you deserve peace.", "Jonathan L. Huie"],
            ["Holding a grudge is like drinking poison and expecting the other person to die", "Unknown"],
            ["Anger is an acid that can do more harm to the vessel in which it's stored than to anything on which it is poured", "Mark Twain"],
            ["While nothing is easier than to denounce the evildoer, nothing is more difficult than to understand him.", "Fyodor Dostoevky"]
        ];

        quotes.map(function (a) {
            if (a[0].length > 138) {
                quotes.splice( quotes.indexOf(a[0]), 1);
                console.log(a[0])
            }
        });

        console.log(quotes)
        var quotesCopy = quotes.slice(0);


        function insert () {
            var n = 1 / quotes.length;
            var accumulator = n;
            quotes.map( function(a) {
                a.push(accumulator)
                accumulator = accumulator + n;
                return a;
            });
        }
        insert();


        this.randomQuote = function(){
            var n = Math.random();
            var quoteChosen = 'none chosen';
            var authorChosen = 'none chosen';
            quotes.reduce(function( prev, a ) {

                if( quotes.indexOf(a) === quotes.length - 1) {
                    if( n > a[2] ) {
                        quoteChosen = a[0];
                        authorChosen = a[1];
                        quotes.splice(quotes.indexOf(a),1);
                        console.log('\n----- N was greater then last element -----\n')
                    }
                }

                if( n > prev && n <= a[2] ) {
                    quoteChosen = a[0];
                    authorChosen = a[1];
                    quotes.splice(quotes.indexOf(a),1);
                }
                return a[2];
            },0)

            this.quote  = quoteChosen;
            this.author = authorChosen;

            if ( quotes.length === 0 ) {
                quotes = quotesCopy.map(function(a){
                    return a;
                });
            }

            // formatting text for tweet button
            var quoteLink = quoteChosen.split(' ');
            quoteLink[0] = "\"" + quoteLink[0];
            quoteLink[quoteLink.length-1] = quoteLink[quoteLink.length-1] + "\"";
            quoteLink = quoteLink.join("+");

            var authorLink = authorChosen.split(' ');
            authorLink[0] = '-' + authorLink[0];
            authorLink = authorLink.join('+');

            this.twitterLink = "http://twitter.com/intent/tweet?text=" + quoteLink + ' ' + authorLink;


        }

        this.randomQuote();

    })
})()
