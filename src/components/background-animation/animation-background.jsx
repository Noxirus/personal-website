import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { Lerp } from '../../library/functionLibrary';
import { ball } from './ball';

var maxBalls = 6;

const AnimationBackground = () => {
  
    useEffect(() => {
        const canvas = document.getElementById("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const ctx = canvas.getContext("2d");

        const listenerCanvas = document.getElementById("listenerCanvas");
             
        var fadingOutBalls = [];
        var balls = [];
        balls.push(new ball("Ball 1", Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)));
        balls.push(new ball("Ball 2", Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)));
        balls.push(new ball("Ball 3", Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)));
        balls.push(new ball("Ball 4", Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)));

        var ballIterator = balls.length + 1;
        function moveBalls() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            balls.forEach(ball => {
                ball.draw(ctx);
                ball.move(canvas);
            });

            fadingOutBalls.forEach(ball => {
                ball.fadeOut(ctx);
                if(ball.finishedFadingOut()){
                    for(let i = 0; i < fadingOutBalls.length; i++){
                        if(ball.name === fadingOutBalls[i].name){
                            fadingOutBalls.splice(i, 1);
                        }
                    }
                };
                ball.move(canvas);
            });

        drawConnectingLines(balls.concat(fadingOutBalls) , ctx);
        window.requestAnimationFrame(moveBalls);   
    }

    function drawConnectingLines(ballArray, ctx)
    {
        for(let i = 0; i < ballArray.length; i++){
            for(let x = i + 1; x < ballArray.length; x++){
                ctx.beginPath()
                ctx.moveTo(ballArray[i].x, ballArray[i].y);
                ctx.lineTo(Lerp(ballArray[i].x, ballArray[x].x, (ballArray[x].animationTime / 100)), Lerp(ballArray[i].y, ballArray[x].y, (ballArray[x].animationTime / 100)));
                ctx.lineWidth = 1;
                ctx.strokeStyle = ballArray[i].returnColor();
                ctx.stroke();
            }
        }
    }

    listenerCanvas.addEventListener("click", function(event){
        var mousePos = getMousePos(canvas, event);
        var x = mousePos.x / canvas.offsetWidth;
        var y = mousePos.y / canvas.offsetHeight;

        x *= canvas.width;
        y *= canvas.height;

        var clickedCircle = false;
        balls.forEach(ball => {
            if (x < (ball.x + ball.radius) && x > (ball.x - ball.radius) &&
                y < (ball.y + ball.radius) && y > (ball.y - ball.radius)) {
                for(let i = 0; i < balls.length; i++){
                    if(ball.name === balls[i].name){
                        fadingOutBalls.push(balls[i]);
                        balls.splice(i, 1);
                        clickedCircle = true;
                    }
                }
            }
        })

        if(balls.length >= maxBalls || clickedCircle){return;}
        balls.push(new ball("Ball " + ballIterator, x, y));
        ballIterator++;
    })
    
    window.requestAnimationFrame(moveBalls);
    }, []);

    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
   return (<React.Fragment>
        <ListenerCanvas id="listenerCanvas" />
        <StyledCanvas id="canvas" />
    </React.Fragment>);
}
export default AnimationBackground;

const ListenerCanvas = styled.canvas`
width: 100%;
height: 100%;
padding: 0px;
position: fixed;
z-index: 1;
`

const StyledCanvas = styled.canvas`
width: 100%;
height: 100%;
padding: 0px;
position: fixed;
z-index: -1;
`
