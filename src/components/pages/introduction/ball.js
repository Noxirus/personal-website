import { ColourPalette } from '../../../library/colorPalette';

export class ball  {
    constructor(name, x, y){
        this.name = name;
        this.x = x;
        this.y = y;
        this.color = (Math.floor(Math.random() * 2) == 0 ? ColourPalette.primary : ColourPalette.tertiary)
    }
    name = "";
    x;
    y;
    vx = Math.random() * .3;
    vy = Math.random() * .3;
    radius = 10
    color
    draw(canvas) 
    {
        canvas.beginPath();
        canvas.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        canvas.closePath();
        canvas.fillStyle = this.color;
        canvas.fill();
    }
};