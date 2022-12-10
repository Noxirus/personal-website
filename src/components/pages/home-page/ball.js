import { ColourPalette } from '../../../library/colorPalette';

export class ball  {
    constructor(name, x, y){
        this.name = name;
        this.x = x;
        this.y = y;
    }
    name = "";
    x = 50;
    y = 50;
    vx = Math.random() * .3;
    vy = Math.random() * .3;
    radius = 10
    color = ColourPalette.primary
    draw(canvas) 
    {
        canvas.beginPath();
        canvas.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        canvas.closePath();
        canvas.fillStyle = this.color;
        canvas.fill();
    }
};