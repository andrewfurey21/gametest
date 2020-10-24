// let lerpedPos = {
//   x: 0,
//   y: 0
// }

//Looks like theres acceleration and velocity (pretty cool,
//but the clear function doesnt work because its always clearing right at the center of the player, easy fix tho)
// lerpedPos.x = lerp(lerpedPos.x, -player.x, .1);
// lerpedPos.y = lerp(lerpedPos.y, -player.y, .1);
// ctx.translate(lerpedPos.x, lerpedPos.y);



    //pie version of health bar
    // ctx.strokeStyle = 'black';
    // circle(this.x, this.y, this.w/2 - .5, this.col2);
    // ctx.beginPath();
    // ctx.fillStyle = this.col;
    // ctx.moveTo(this.x, this.y);
    // this.currentHealth = lerp(this.currentHealth, this.health, .09);
    // const healthAngle = -map(this.currentHealth, 0, this.maxhealth, Math.PI * -1.5, Math.PI / 2);
    // ctx.arc(this.x, this.y, this.w/2, healthAngle, Math.PI * 1.5);
    // ctx.fill();

    //Fluid version (doesnt work yet)
    // ctx.strokeStyle = 'black';
    // circle(this.x, this.y, this.w/2 - .5, this.col2);
    // ctx.stroke();
    // ctx.beginPath();
    // ctx.fillStyle = this.col;
    // this.currentHealth = lerp(this.currentHealth, this.health, .09);
    // const angle1 = map(this.currentHealth, 0, this.maxhealth / 2, Math.PI * .5 + Math.PI / 2, Math.PI * 1.5 + Math.PI / 2);
    // const angle2 = map(this.currentHealth, 0, this.maxhealth / 2, Math.PI * 1.5 + Math.PI / 2, Math.PI * .5 + Math.PI / 2);
    // ctx.arc(this.x, this.y, this.w/2, angle1, angle2);
    // ctx.fill();


      //Pie
      // circle(other.x, other.y, other.w/2 - .5, other.col2);
      // ctx.beginPath();
      // ctx.fillStyle = other.col;
      // ctx.moveTo(other.x, other.y);
      // // this.currentHealth = lerp(this.currentHealth, this.health, .09);
      // // const healthAngle = -map(this.currentHealth, 0, this.maxhealth, Math.PI * -1.5, Math.PI / 2);
      // const healthAngle = -map(other.currentHealth, 0, other.maxhealth, Math.PI * -1.5, Math.PI / 2);
      // ctx.arc(other.x, other.y, other.w/2, healthAngle, Math.PI * 1.5);
      // ctx.fill();


    // ctx.fillStyle = 'black';
    // ctx.fillText(pelletsLeft, canv.width - 80 - this.x, this.y - canv.height / 2 + 20);


    //Colors of the player
    // const col  = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    // const col2 = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;

    // const col = rgbToHex(Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255));
    // const col2 = rgbToHex(Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255));
