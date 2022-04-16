import React, {useEffect, useState} from 'react'

function Canvas() {
    useEffect(() =>{
        var canvas = document.getElementById("bg");
        var ctx = canvas.getContext("2d");
        var wx  = window.innerWidth;
        var wy = window.innerHeight;
        var scale = window.devicePixelRatio; 
        // canvas.width = Math.floor(wx * scale);
        // canvas.height = Math.floor(wy * scale);
        // ctx.scale(scale, scale);
        canvas.width = wx;
        canvas.height = wy;
        var w = canvas.width;
        var h = canvas.height;
        const s3o2 = Math.sqrt(3)/2;
        var mousex = 0;
        var mousey = 0;
        var triangleW = h/26;
        var triangleH = s3o2*triangleW;
        var triangles = [];
        //const colors = ['#FE948D', '#CBE896', '#3B74E3'];
        const colors = ['#4a6361', '#52634a', '#634e4a'];
        var points = [];
        points.push({x:0, y:-triangleH/2});
        points.push({x:triangleW/2, y:triangleH/2});
        points.push({x:-triangleW/2, y:triangleH/2});
        points.push({x:0, y:-triangleH/2});
        points.push({x:triangleW/2, y:triangleH/2});
        console.log(points);
    
        const createTriangle = (x,y,dir, speed,color) => {
            return {x:x, y:y, dir:dir, rotate:dir, speed:speed, color:colors[color]};
        }
    
        const init = () => {
            for(var i = 0; i< 15; i++){
                let tx =  Math.floor(Math.random() * w);
                let ty =  Math.floor(Math.random() * h);
                let td = (Math.random() * 6.28) - 3.14;
                let ts = 0.15;//0.1;
                let tc = Math.floor(Math.random() * colors.length);
                let temp = createTriangle(tx,ty,td,ts,tc);
                triangles.push(temp);
            }
        }
        
        const move = () => {
            //console.log("move");
            for(var i = 0 ; i<triangles.length; i++){
                if(triangles[i].x > w+50 || triangles[i].x < 0){
                    triangles[i].dir = Math.PI-triangles[i].dir;
                }
                if(triangles[i].y > h || triangles[i].y < 0){
                    triangles[i].dir = -triangles[i].dir;
                }
                triangles[i].x = triangles[i].x + triangles[i].speed * Math.cos(triangles[i].dir);
                triangles[i].y = triangles[i].y + triangles[i].speed * Math.sin(triangles[i].dir);
                triangles[i].rotate += 0.002;
                if(triangles[i].rotate > 3.14){
                    triangles[i].rotate = -3.14;
                } 
            }
            draw();
        }
    
        const angleTo = (x,y,x1,y1) => {
            return Math.atan2(x1-x, y1-y);
        }
        const distTo = (x,y,x1,y1) => {
            return Math.sqrt((x1-x)**2 + (y1-y)**2);
        }
    
        const draw = () => {
            ctx.clearRect(0,0, w, h);
            ctx.beginPath();
            ctx.rect(0, 0, w, h);
            ctx.fillStyle = '#0c0c11';
            ctx.fill();
    
            for(var i = 0; i<triangles.length; i++){
                let curr = triangles[i];
                var currpoints = [];
                //console.log(curr);
                var x = curr.x;
                var y = curr.y;
                let angle = angleTo(x,y, mousex, mousey);
                let dist = distTo(x,y, mousex, mousey);
                y = y + Math.cos(angle) * dist/30;
                x = x + Math.sin(angle) * dist/30;
                ctx.beginPath();
                for(var j = 0; j < points.length; j++){
                    let tempx = points[j].x * Math.cos(curr.rotate) - points[j].y * Math.sin(curr.rotate);
                    let tempy = points[j].x * Math.sin(curr.rotate) + points[j].y * Math.cos(curr.rotate);
                   // console.log(curr.angle);
                    // tempx = points[j].x;
                    // tempy = points[j].y;
                    tempx+=x;
                    tempy+=y;
                    if(j == 0){
                        ctx.moveTo(tempx,tempy);
                    }
                    else{
                        ctx.lineTo(tempx, tempy);
                    }
                    //currpoints.push({x:tempx, y:tempy});
                }
                ctx.lineWidth = 5;
                ctx.lineJoin = "round";
                ctx.strokeStyle = curr.color;
                ctx.stroke();
                
                //console.log(curr);
    
                //first rotate using rotation matrix
                // x = xcos0 - ysin0
                // y = xsin0 + ycos0
                //then transform all points using x and y
    
                
                //ctx.rotate(0.30);
                
    
                // ctx.moveTo(x,y);
                // ctx.lineTo(x + triangleW/2, y +triangleH);
                // ctx.lineTo(x -triangleW/2, y +triangleH);
                // ctx.lineTo(x,y);
                // ctx.lineTo(x + triangleW/2, y +triangleH);
                
                
            }
           
        }
        init();
        draw();
        function windowResize() {
            canvas.width  = window.innerWidth;
            canvas.height = window.innerHeight;
            triangleW = h/20;
            draw();
        };
    
        canvas.addEventListener('mousemove', e => {
            mousex = e.offsetX;
            mousey = e.offsetY;
            draw();
        });
    
        const int = setInterval(move, 1000/60);
    }, [])

    const [coord, setCoord] = useState({ x: 0, y: 0 });
    const handleMouseMove = (e) => {
        setCoord({ x: e.screenX, y: e.screenY });
    };

    return (
        <canvas id="bg" className='m-0 overflow-hidden w-full h-full -z-10 absolute'></canvas>
    )
}

export default Canvas