var canvas = new fabric.Canvas('myCanvas');

block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var block_object= "";

function player_update()
{
    fabric.Image.fromURL("player.webp", function(Img) {
    block_object = Img;

    block_object.scaleToWidth(150);
    block_object.scaleToWidth(140);
    block_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(block_object);

    });
}

function new_image(get_image)
{
    fabric.Image.fromURL("get_image", function(Img) {
        block_image_object = Img;
    
        block_image__object.scaleToWidth(block_image_width);
        block_image__object.scaleToWidth(block_image_height);
        block_image__object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(block_image__object)};
    
    };


