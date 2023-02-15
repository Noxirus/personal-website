import { ColorPalette } from '../../library/colorPalette';

export class ball  {
    constructor(name, x, y){
        this.name = name;
        this.x = x;
        this.y = y;
        this.baseColor = (Math.floor(Math.random() * 2) === 0 ? ColorPalette.primary : ColorPalette.tertiary)
        this.alphaColor = this.baseColor.substring(0, this.baseColor.length - 1);
        this.alphaColor += ","
    }
    name = "";
    x;
    y;
    vx = Math.random() * .1;
    vy = Math.random() * .1;
    radius = 10

    baseColor
    alphaColor
    animationTime = 0;
    draw(canvas) 
    {
        if(this.animationTime < 100){
            this.animationTime += .5;
        }
        this.drawCircle(canvas);
    }
    
    move(canvas){
        this.x += this.vx;
        this.y += this.vy;
    
        if(this.boundsCheck(this.y, this.vy, canvas.height)) {
            this.vy = -this.vy;
        }
        
        if(this.boundsCheck(this.x, this.vx, canvas.width)) {
            this.vx = -this.vx;
        }
    }

    boundsCheck(axis, velocity, bounds){
        return axis + velocity > bounds || axis + velocity < 0
    }

    fadeOut(canvas){
        this.drawCircle(canvas);

        if(this.animationTime > 0){
            this.animationTime -= 1;
            return false;
        }

        return true;
    }

    finishedFadingOut(){
        return this.animationTime <= 0;
    }

    drawCircle(canvas){
        canvas.fillStyle = this.returnColor();
        canvas.beginPath();
        canvas.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        canvas.lineWidth = 3;
        canvas.strokeStyle = this.returnColor();
        canvas.stroke();
        canvas.closePath();
        canvas.fill();
    }

    returnColor(){
        if(this.animationTime < 100){
            return this.alphaColor + this.animationTime/100 + ")"
        }
        else{
            return this.baseColor;
        }
    }
};