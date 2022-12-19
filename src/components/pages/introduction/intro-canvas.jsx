import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { ball } from './ball';

const IntroCanvas = () => {
    useEffect(() => {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        
        
        var fadingOutBalls = [];
        var balls = [];
        balls.push(new ball("Ball 1", Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)));
        balls.push(new ball("Ball 2", Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)));
        balls.push(new ball("Ball 3", Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)));
        balls.push(new ball("Ball 4", Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)));

        var ballIterator = balls.length;
        function moveBall() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            balls.forEach(ball => {
                ball.draw(ctx);
                ball.move(canvas);
            });

            fadingOutBalls.forEach(ball => {
                if(ball.fadeOut(ctx)){
                    for(let i = 0; i < fadingOutBalls.length; i++){
                        if(ball.name === fadingOutBalls[i].name){
                            fadingOutBalls.splice(i, 1);
                        }
                    }
                };
                ball.move(canvas);

            });

            for(let i = 0; i < balls.length; i++){
                for(let x = i + 1; x < balls.length; x++){
                    ctx.beginPath()
                    ctx.moveTo(balls[i].x, balls[i].y);
                    ctx.lineTo(balls[x].x, balls[x].y);
                    ctx.lineWidth = .3;
                    ctx.strokeStyle = balls[i].returnColor();
                    ctx.stroke();
                }
            }
                window.requestAnimationFrame(moveBall);
            
        }

        canvas.addEventListener("click", function(event){
            var mousePos = getMousePos(canvas, event);
            var x = mousePos.x / canvas.offsetWidth;
            var y = mousePos.y / canvas.offsetHeight;

            x *= canvas.width;
            y *= canvas.height;

            var clickedBool = false;
            balls.forEach(ball => {
                if (x < (ball.x + ball.radius) && x > (ball.x - ball.radius) &&
                    y < (ball.y + ball.radius) && y > (ball.y - ball.radius)) {
                    for(let i = 0; i < balls.length; i++){
                        if(ball.name === balls[i].name){
                            fadingOutBalls.push(balls[i]);
                            balls.splice(i, 1);
                            clickedBool = true;
                        }
                    }
                }
            })
            if(balls.length >= 6 || clickedBool){return;}
            balls.push(new ball("Ball " + ballIterator, x, y));
            ballIterator++;
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