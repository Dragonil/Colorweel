var steps;
var size;

var colorStr=[];
var x = document.getElementsByClassName("colors");//the div with the Colors
var perc;
var clean;
var totalsize; // True scrollsize
var correctionValue =0; //if the end color is not the last Color, try an value between -3 and 3

window.onload=function(){
    //Custom
    // number of colors
    addColor("#F44336");
    addColor("#3F51B5");
    addColor("#4CAF50");
    addColor("#FF9800");
    //Custom
    colorweel();
    setInterval(update,1000/30);
        
}

function update(){
    scrollpos =  document.getElementById("scrollContainer").scrollTop;//Scrollposition 
    
    for(j=0;j<this.steps;j++){
        if(scrollpos>=this.size*j && scrollpos<this.size*(j+1)&&scrollpos<=totalsize){ 
            var pc = ((scrollpos-this.size*j)/this.perc)*0.01 ;
            if(pc>1){pc=0};
            this.clean=j;
            this.x[j].style.opacity = 1-pc;
            this.x[j+1].style.opacity = 0+pc;
            
        }
        if(j!=this.clean&&j!=this.clean+1&&j+1!=this.steps){
            
            this.x[j].style.opacity =0;
        }
        
    }
}


function colorweel(){
    this.totalsize = document.getElementById("scrollContainer").scrollHeight;
    
    
    this.steps=this.colorStr.length+this.correctionValue;
    this.size=this.totalsize/this.steps;//Fixed Container height
    this.size = Math.round(this.size);
    this.perc = this.size/100;
    
    var opacity;
    var i;
    for (i = 0; i < this.x.length; i++) {
        this.x[i].style.backgroundColor = this.colorStr[i];
        if(i==0){opacity=1;}else{opacity=0;}
        this.x[i].style.opacity = opacity;
    }
    
}


function addColor(ColorStr){
    next=this.colorStr.length;
    this.colorStr[next]=ColorStr;
}