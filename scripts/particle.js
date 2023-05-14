function Particle(x, y, length, maxSize) {
  var speed = 1; 
  this.history = [];
 
  this.x = x;
  this.y = y;
  this.length=length;
  this.maxSize=maxSize;
  
  this.goalX=random(width);
  this.goalY=random(height);
 this.d = map(dist(this.x, this.y, mouseX, mouseY), 0, 30, 0, 255);
 
  this.update = function() {

    var v = createVector(this.x, this.y);
    this.history.push(v);
    if (this.history.length >  this.length) {
      this.history.splice(0, 1)
    }
  }

  this.show = function() {
    
    //trail 
    for (var i = 0; i < this.history.length; i++)
    {
      var pos = this.history[i];
      var r = map(i, 0, this.history.length, 4, this.maxSize);
      this.alpha=map(i, 0, this.history.length, 0, 255);
      
      fill(252, 166, 18,this.alpha);
      ellipse(pos.x, pos.y, r, r);
    }
    
    // for (var i = 0; i < 20; i++)
    // { 
    //   var r2= i*this.maxSize;
      
    //   this.alpha=map(i, 0, 10, 10, 0);
    //   fill(252, 166, 18,this.alpha);
    //   ellipse(this.x, this.y, r2, r2);
    // }
    
    
  }
  
  this.follow = function(){
    
//     this.goalX=mouseX;
//     this.goalY=mouseY;
//     let d = map(dist(this.x, this.y, this.goalX, this.goalY), 1, 100, 0.02, 0.025);
    
//     if(this.fc==null){
//       this.fc=60;
//     }
//     if(this.diffX==null || (frameCount%this.fc<1 && d<20)){
//       this.diffX=randomGaussian(0,40);
//       this.diffY=randomGaussian(0,40);
//       this.fc=random(60,120);
//     }
//     this.goalX=this.diffX+mouseX;
//     this.goalY=this.diffY+mouseY;
    
//      d = map(dist(this.x, this.y, this.goalX, this.goalY), 1, 100, 0.02, 0.025);
    let d = map(dist(this.x, this.y, mouseX, mouseY), 1, 100, 0.02, 0.1);
    
    this.x = lerp(this.x, mouseX, d);
    this.y = lerp(this.y, mouseY, d);
  }
  
  
  
  this.wander = function(){
    
    let d=dist(this.x, this.y, this.goalX, this.goalY);
    //let dspeed = map(d, 0, width/2, 0.01, .02);
    
    this.x = lerp(this.x, this.goalX, 0.01);
    this.y = lerp(this.y, this.goalY, 0.01);
    
    if(d<20)
      {
        this.goalX=this.x+random(-150,150);
        this.goalY=this.y+random(-150,150);
      }
  }
  
}