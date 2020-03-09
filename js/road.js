function road() {
    let canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      let ctx = canvas.getContext('2d');
  
      ctx.fillStyle = 'green';
      ctx.fillRect(0, 0, 50, 700);  //left green
      ctx.fillRect(450, 0, 50, 700);    //right green

      ctx.fillStyle = 'gray'
      ctx.fillRect(50, 0, 20, 700);
      ctx.fillRect(430, 0, 20, 700);

      ctx.fillRect(80, 0, 340, 700);

      ctx.fillStyle = 'white';
      ctx.fillRect(245, 10, 10, 30); //use as array to create the movement
      ctx.fillRect(245, 70, 10, 30);
      ctx.fillRect(245, 130, 10, 30);
      ctx.fillRect(245, 190, 10, 30);
    }
  }

  road()