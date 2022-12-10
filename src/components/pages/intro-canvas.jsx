import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { ball } from './home-page/ball';
import { ColourPalette } from '../../library/colorPalette';

const IntroCanvas = () => {
    useEffect(() => {
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

        window.requestAnimationFrame(moveBall);
    });


   return (<StyledCanvas id="canvas"></StyledCanvas>);
}
export default IntroCanvas;

const StyledCanvas = styled.canvas`
width: 100%;
height: 100%;
`