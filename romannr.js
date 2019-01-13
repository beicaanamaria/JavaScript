function romanNumber(nr){
let roman="";
    if(!isNaN(nr)){
    
        while(nr>=1000){
            roman+="M";
            nr-=1000;
        }
        if(nr>=900){
            roman+="CM";
            nr-=900;
        }
        if(nr>=500){
            roman+="D";
            nr-=500;
        }
        if(nr>=400){
            roman="CD";
            nr-=400;
        }
        while(nr>=100){
            roman+="C";
            nr-=100;
        }
        if(nr>=90){
            roman+="XC";
            nr-=90;
        }
        if(nr>=50){
            roman+="L";
            nr-=50;
        }
        if(nr>=40){
            roman+="XL";
            nr-=40;
        }
        while(nr>=10){
            roman+="X";
            nr-=10;
        }
        if(nr>=9){
            roman+="IX";
            nr-=9;
        }
        if(nr>=5){
            roman+="V";
            nr-=5;
        }
        if(nr>=4){
            roman+="IV";
            nr-=4
        }
        while(nr>=1){
            roman+="I";
            nr-=1;
        }

    }else {
        roman= "Not an integer!"};
        return roman;
}
console.log(2900);
console.log(romanNumber(2900));
console.log(9765);
console.log(romanNumber(9765));
console.log(romanNumber("tdt"));
console.log(romanNumber({red:"red"}));