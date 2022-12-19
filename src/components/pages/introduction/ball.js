import { ColourPalette } from '../../../library/colorPalette';

export class ball  {
    constructor(name, x, y){
        this.name = name;
        this.x = x;
        this.y = y;
        this.baseColor = (Math.floor(Math.random() * 2) == 0 ? ColourPalette.primary : ColourPalette.tertiary)
        this.alphaColor = this.baseColor.substring(0, this.baseColor.length - 1);
        this.alphaColor += ","
    }
    name = "";
    x;
    y;
    vx = Math.random() * .3;
    vy = Math.random() * .3;
    radius = 10

    baseColor
    alphaColor
    alpha = 0;
    draw(canvas) 
    {
        if(this.alpha < 100){
            this.alpha += .5;
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

        if(this.alpha > 0){
            this.alpha -= 1;
            return false;
        }

        return true;
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
        if(this.alpha < 100){
            return this.alphaColor + this.alpha/100 + ")"
        }
        else{
            return this.baseColor;
        }
    }
};