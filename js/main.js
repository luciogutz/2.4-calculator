document.addEventListener("DOMContentLoaded", function(){
    // need to create var to connect data-js to querySelector
    var button7Element = document.querySelector("[data-js='button__7']");
    var outputButtonElement = document.querySelector("[data-js='output']");
    // creating addEventListener and argument click and function() "anonymous"
    button7Element.addEventListener("click", function(){
        // sending input button7Element to outputButtonElement, as a text 7.
        outputButtonElement.textContent = 7;
    });

    var button8Element = document.querySelector("[data-js='button__8']");
    var outputButtonElement = document.querySelector("[data-js='output']");

    button8Element.addEventListener("click", function(){

        outputButtonElement.textContent = 8;

    });

    var button9Element = document.querySelector("[data-js='button__9']");
    var outputButtonElement = document.querySelector("[data-js='output']");

    button9Element.addEventListener("click", function(){

        outputButtonElement.textContent = 9;
    });

    var button4Element = document.querySelector("[data-js='button__4']");
    var outputButtonElement = document.querySelector("[data-js='output']");

    button4Element.addEventListener("click", function(){

        outputButtonElement.textContent = 4;
    });

    var button5Element = document.querySelector("[data-js='button__5']");
    var outputButtonElement = document.querySelector("[data-js='output']");

    button5Element.addEventListener("click", function(){

        outputButtonElement.textContent = 5;
    });

    var button6Element = document.querySelector("[data-js='button__6']");
    var outputButtonElement = document.querySelector("[data-js='output']");

    button6Element.addEventListener("click", function(){

      outputButtonElement.textContent = 6;
    });

    var button1Element = document.querySelector("[data-js='button__1']");
    var outputButtonElement = document.querySelector("[data-js='output']");

    button1Element.addEventListener("click", function(){

      outputButtonElement.textContent = 1;

    });

    var button2Element = document.querySelector("[data-js='button__2']");
    var outputButtonElement = document.querySelector("[data-js='output']");

    button2Element.addEventListener("click", function(){

        outputButtonElement.textContent = 2;
    });

    var button3Element = document.querySelector("[data-js='button__3']");
    var outpuButtonElement = document.querySelector("[data-js='output']");

    button3Element.addEventListener("click", function(){

        outputButtonElement.textContent = 3;
    });

    var button0Element = document.querySelector("[data-js='button__0']");
    var outputButtonElement = document.querySelector("[data-js='output']");

    button0Element.addEventListener("click", function(){

        outputButtonElement.textContent = 0;
    });
});
