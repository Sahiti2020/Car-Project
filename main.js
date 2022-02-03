car1_width = 120;
car1_height = 70;
car1_image = https://i.postimg.cc/YqdnnNX1/car1.png;
car1_x = 10;
car1_y = 100;

car2_width = 120;
car2_height = 70;
car2_image = https://i.postimg.cc/YqdnnNX1/car1.png;
car2_x = 10;
car2_y = 100;

background_image = "https://i.postimg.cc/bv5d35nK/racing.jpg";

canvas = document.getElementById('myCanvas');
ctx = canvas.getContect("2d")

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e) {

    keyPressed = e.keyCode;

    if(keyPressed == '38')
    {
        car1_up();
        console.log("up arrow key")
    }

    if(keyPressed == '40')
    {
        car1_down();
        console.log("down arrow key")
    }

    if(keyPressed == '37')
    {
        car1_left();
        console.log("left arrow key")
    }

    if(keyPressed == '39')
    {
        car1_right();
        console.log("right arrow key")
    }

    if(keyPressed == '87')
    {
        car1_up();
        console.log("key w")
    }

    if(keyPressed == '65')
    {
        car1_left();
        console.log("key a")
    }

    if(keyPressed == '83')
    {
        car1_down();
        console.log("key s")
    }

    if(keyPressed == '68')
    {
        car1_right();
        console.log("key d")
    }
    
    function my_keydown(e) {

        keyPressed = e.keyCode;
    
        if(keyPressed == '38')
        {
            car2_up();
            console.log("up arrow key")
        }
    
        if(keyPressed == '40')
        {
            car2_down();
            console.log("down arrow key")
        }
    
        if(keyPressed == '37')
        {
            car2_left();
            console.log("left arrow key")
        }
    
        if(keyPressed == '39')
        {
            car2_right();
            console.log("right arrow key")
        }
    
        if(keyPressed == '87')
        {
            car2_up();
            console.log("key w")
        }
    
        if(keyPressed == '65')
        {
            car2_left();
            console.log("key a")
        }
    
        if(keyPressed == '83')
        {
            car2_down();
            console.log("key s")
        }
    
        if(keyPressed == '68')
        {
            car2_right();
            console.log("key d")
        }
}