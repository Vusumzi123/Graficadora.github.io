
var cent=canvas.width/2;
var sc=40;  


background("#EEEEEE");


function drawPlane(){


line(canvas.height/2,0,canvas.height/2,canvas.width);
line(0,canvas.width/2,canvas.height,canvas.width/2);
    

    for(var i=0;i<=canvas.width/2;i++){
        
        if(i%sc===0){
            fill(255, 0, 0);
            strokeWeight(2);
            point(cent+i,cent);
            point(cent-i,cent);
            point(cent,cent+i);
            point(cent,cent-i);
            fill(255, 0, 0);
            if(i>0){
            	strokeWeight(1);
            	fill("black");
                text(-i/sc, cent-11, cent+i,12);
                text(i/sc, cent+11, cent-i,12);
                text(i/sc, cent+i, cent+14,12);
                text(-i/sc, cent-i, cent-8,12);
            }
        }
        
    }

};


function fun(x){
    
    
    this.y=Math.cos(x);
    
    return this.y*sc*(-1);
};


var x=0;


function plott(){
        
        strokeWeight(2);
        stroke(0, 16, 237);
        def=0.2;
        
        
        //pointP(x1,x2);
        //pointN(x1,x2);

        line(center+x*sc,center+fun(x),center+(x+def)*sc,center+fun(x+def));
        line(center+(-1)*x*sc,center+fun((-1)*x),center+((-1)*x+def)*sc,center+fun((-1)*x+def));

        x+=def;


        //if(ang<Math.PI){

        	requestAnimationFrame(plott);
        	//console.log("finished");
        //}


};



drawPlane();


plott();

