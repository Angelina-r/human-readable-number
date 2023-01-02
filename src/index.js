module.exports = function toReadable (number) {

    const mapNumber = new Map();

    mapNumber.set('0', 'zero');
    mapNumber.set('1', 'one');
    mapNumber.set('2', "two");
    mapNumber.set('3', "three");
    mapNumber.set('4', "four");
    mapNumber.set('5', "five");
    mapNumber.set('6', "six");
    mapNumber.set('7', "seven");
    mapNumber.set('8', "eight");
    mapNumber.set('9', "nine");
    mapNumber.set('10', "ten");

    const mapNumberMoreTen = new Map();

    mapNumberMoreTen.set('1', "eleven");
    mapNumberMoreTen.set('2', "twelve");
    mapNumberMoreTen.set('3', "thirteen");
    mapNumberMoreTen.set('4', "fourteen");
    mapNumberMoreTen.set('5', "fifteen");
    mapNumberMoreTen.set('6', "sixteen");
    mapNumberMoreTen.set('7', "seventeen");
    mapNumberMoreTen.set('8', "eighteen");
    mapNumberMoreTen.set('9', "nineteen");

    const mapNumberMoreTwenty = new Map();

    mapNumberMoreTwenty.set('2', 'twenty');
    mapNumberMoreTwenty.set('3', 'thirty');
    mapNumberMoreTwenty.set('4', 'forty');
    mapNumberMoreTwenty.set('5', 'fifty');
    mapNumberMoreTwenty.set('6', 'sixty');
    mapNumberMoreTwenty.set('7', 'seventy');
    mapNumberMoreTwenty.set('8', 'eighty');
    mapNumberMoreTwenty.set('9', 'ninety');

        if (number <= 10) { 
            number += '';
            return mapNumber.get(number);
        } 

        if (number >= 11 && number <= 19) { 
            number += '';
            return mapNumberMoreTen.get(number[1]);
        } 

        if (number >= 21 && number <= 29 || number >= 31 && number <= 39 || number >= 41 && number <= 49 || number >= 51 && number <= 59 || number >= 61 && number <= 69 || number >= 71 && number <= 79 || number >= 81 && number <= 89 || number >= 91 && number <= 99 ) { 
            number += '';
            return mapNumberMoreTwenty.get(number[0]) + ' ' + mapNumber.get(number[1]);
        }

        if (number == 20 || number == 30 || number == 40 || number == 50 || number == 60 || number == 70 || number == 80 || number == 90) { 
            number += '';
            return mapNumberMoreTwenty.get(number[0]);
        }

        if (number == 100 || number == 200 || number == 300 || number == 400 || number == 500 || number == 600 || number == 700 || number == 800 || number == 900) {
            number += '';
            return mapNumber.get(number[0]) +' hundred';
        }

        if (number == 120 || number == 130 || number == 140 || number == 150 || number == 160 || number == 170 || number == 180 || number == 190 || number == 220 || number == 230 || number == 240 || number == 250 || number == 260 || number == 270 || number == 280 || number == 290 || number == 320 || number == 330 || number == 340 || number == 350 || number == 360 || number == 370 || number == 380 || number ==390 || number == 420 || number == 430 || number == 440 || number == 450 || number == 460 || number == 470 || number == 480 || number == 490 || number == 520 || number == 530 || number == 540 || number == 550 || number == 560 || number == 570 || number == 580 || number == 590 || number == 620 || number == 630 || number == 640 || number == 650 || number == 660 || number == 670 || number == 680 || number == 690 || number == 720 || number == 730 || number == 740 || number == 750 || number == 760 || number == 770 || number == 780 || number == 790 || number == 820 || number == 830 || number == 840 || number == 850 || number == 860 || number == 870 || number == 880 || number == 890 || number == 920 || number == 930 || number == 940 || number == 950 || number == 960 || number == 970 || number == 980 || number == 990) {
            number += '';
            return mapNumber.get(number[0]) +' hundred ' + mapNumberMoreTwenty.get (number[1]);
        }

        if (number == 110 || number == 210 || number == 310 || number == 410 || number == 510 || number == 610 || number == 710 || number == 810 || number == 910) {
            number += '';
            return mapNumber.get(number[0]) +' hundred ' + 'ten';
        }

        if (number >= 101 && number <= 109 || number >= 201 && number <= 209 || number >= 301 && number <= 309 || number >= 401 && number <= 409 || number >= 501 && number <= 509 || number >= 601 && number <= 609 || number >= 701 && number <= 709 || number >= 801 && number <= 809 || number >= 901 && number <= 909 ){
            number += '';
            return mapNumber.get(number[0]) + ' hundred ' + mapNumber.get(number[2]);
        }

        if (number >= 111 && number <= 119 || number >= 211 && number <= 219 || number >= 311 && number <= 319 || number >= 411 && number <= 419 || number >= 511 && number <= 519 || number >= 611 && number <= 619 || number >= 711 && number <= 719 || number >= 811 && number <= 819 || number >= 911 && number <= 919 ){
            number += '';
            return mapNumber.get(number[0]) + ' hundred ' + mapNumberMoreTen.get(number[2]);
        }

        if (number >= 121 && number <= 199 || number >= 221 && number <= 299 || number >= 321 && number <= 399 || number >= 421 && number <= 499 || number >= 521 && number <= 599 || number >= 621 && number <= 699 || number >= 721 && number <= 799 || number >= 821 && number <= 899 || number >= 921 && number <= 999){
            number += '';
            return mapNumber.get(number[0]) + ' hundred ' + mapNumberMoreTwenty.get(number[1]) +' ' +mapNumber.get(number[2]);
        }
}