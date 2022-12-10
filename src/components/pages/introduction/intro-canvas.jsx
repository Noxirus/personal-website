import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { ball } from './ball';
import { ColourPalette } from '../../../library/colorPalette';


const IntroCanvas = () => {
    useEffect(() => {
        console.log("UseEffect triggered");
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        var balls = [];
        balls.push(new ball("Ball 1", Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)));
        balls.push(new ball("Ball 2", Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)));
        balls.push(new ball("Ball 3", Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)));
        balls.push(new ball("Ball 4", Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)));

        function moveBall() {
            //Frame rate needs to be set, I can't have this running too often, or it will slow down performance considerably
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            balls.forEach(ball => {
                ball.draw(ctx);
                ball.x += ball.vx;
                ball.y += ball.vy;
            
                if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
                ball.vy = -ball.vy;
                }
                if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
                ball.vx = -ball.vx;
                }

            });

            for(let i = 0; i < balls.length; i++){
                for(let x = i + 1; x < balls.length; x++){
                    ctx.moveTo(balls[i].x, balls[i].y);
                    ctx.lineTo(balls[x].x, balls[x].y);
                    ctx.lineWidth = .3;
                    ctx.strokeStyle = ColourPalette.secondary
                    ctx.stroke();
                }
            }
                window.requestAnimationFrame(moveBall);
            
        }

        canvas.addEventListener("click", function(event){
            var mousePos = getMousePos(canvas, event);
            var x = mousePos.x / 2;
            var y = mousePos.y / 2;
            var clickedBool = false;
            balls.forEach(ball => {
                if (x < (ball.x + (ball.radius * 1.5)) && x > (ball.x - ball.radius) &&
                    y < (ball.y + (ball.radius * 1.5)) && y > (ball.y - (ball.radius * 1.5))) {
                    for(let i = 0; i < balls.length; i++){
                        if(ball.name === balls[i].name){
                            balls.splice(i, 1);
                            clickedBool = true;
                        }
                    }
                }
            })
            if(balls.length >= 6 || clickedBool){return;}
            balls.push(new ball("Ball " + balls.length + 1, x, y));
        })
        window.requestAnimationFrame(moveBall);
    }, []);

    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
   return (<StyledCanvas id="canvas"></StyledCanvas>);
}
export default IntroCanvas;

const StyledCanvas = styled.canvas`
width: 100%;
height: 100%;
`