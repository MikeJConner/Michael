let spaces = [];
function spacee(bomb, row, col){
  this.bomb = bomb == 0;
  this.row = row;
  this.col = col;
  this.revealed=false;
}

for(let i=0; i<10; i++){
  spaces[i]=[];
  for(let j=0; j<10; j++){
    spaces[i][j] = new spacee(Math.floor(Math.random() * 10), i, j);
  }
}
for(let i=0; i<10; i++){
  for(let j=0; j<10; j++){
    let number = 0;
    if(i!==0 && i!==9 && j!==0 && j!==9){
      if(spaces[i-1][j-1].bomb==true){number++;}
      if(spaces[i][j-1].bomb==true){number++;}
      if(spaces[i+1][j-1].bomb==true){number++;}
      if(spaces[i-1][j].bomb==true){number++;}
      if(spaces[i+1][j].bomb==true){number++;}
      if(spaces[i-1][j+1].bomb==true){number++;}
      if(spaces[i][j+1].bomb==true){number++;}
      if(spaces[i+1][j+1].bomb==true){number++;}
    }else if(i==0 && j==0) {
      if(spaces[i+1][j].bomb==true){number++;}
      if(spaces[i][j+1].bomb==true){number++;}
      if(spaces[i+1][j+1].bomb==true){number++;}
    }else if(i==0 && j==9) {
      if(spaces[i][j-1].bomb==true){number++;}
      if(spaces[i+1][j-1].bomb==true){number++;}
      if(spaces[i+1][j].bomb==true){number++;}
    }else if(i==9 && j==0){
      if(spaces[i-1][j].bomb==true){number++;}
      if(spaces[i-1][j+1].bomb==true){number++;}
      if(spaces[i][j+1].bomb==true){number++;}
    }else if(i==9 && j==9){
      if(spaces[i-1][j-1].bomb==true){number++;}
      if(spaces[i][j-1].bomb==true){number++;}
      if(spaces[i-1][j].bomb==true){number++;}
    }else if(i==0){
      if(spaces[i][j-1].bomb==true){number++;}
      if(spaces[i+1][j-1].bomb==true){number++;}
      if(spaces[i+1][j].bomb==true){number++;}
      if(spaces[i][j+1].bomb==true){number++;}
      if(spaces[i+1][j+1].bomb==true){number++;}
    }else if(j==0){
      if(spaces[i-1][j].bomb==true){number++;}
      if(spaces[i+1][j].bomb==true){number++;}
      if(spaces[i-1][j+1].bomb==true){number++;}
      if(spaces[i][j+1].bomb==true){number++;}
      if(spaces[i+1][j+1].bomb==true){number++;}
    }else if(i==9){
      if(spaces[i-1][j-1].bomb==true){number++;}
      if(spaces[i][j-1].bomb==true){number++;}
      if(spaces[i-1][j].bomb==true){number++;}
      if(spaces[i-1][j+1].bomb==true){number++;}
      if(spaces[i][j+1].bomb==true){number++;}
    }else if(j==9){
      if(spaces[i-1][j-1].bomb==true){number++;}
      if(spaces[i][j-1].bomb==true){number++;}
      if(spaces[i+1][j-1].bomb==true){number++;}
      if(spaces[i-1][j].bomb==true){number++;}
      if(spaces[i+1][j].bomb==true){number++;}
    }
    spaces[i][j].number = number;
  }
}

function reveal(spaceToBeRevealed){
  if(spaceToBeRevealed.revealed==true){}
  else
  {
    if(spaceToBeRevealed.bomb == true)
    {
      for(let i=0; i<10; i++){
        for(let j=0; j<10; j++){
          if(spaces[i][j].bomb==true){document.getElementById(spaces[i][j].row + "-" + spaces[i][j].col).innerHTML="<img src=\"https://is2-ssl.mzstatic.com/image/thumb/Purple/v4/fa/52/df/fa52df94-5488-2d68-6493-376eece87b0b/icon.png/246x0w.jpg\" />"}
        }
      }
      document.getElementById(spaceToBeRevealed.row + "-" + spaceToBeRevealed.col).innerHTML="<img src=\"https://is5-ssl.mzstatic.com/image/thumb/Purple128/v4/cb/58/87/cb5887cb-f7c4-c6ae-9933-39aca3fd68c8/source/512x512bb.jpg\" />";
    }else if(spaceToBeRevealed.number !== 0){
      document.getElementById(spaceToBeRevealed.row + "-" + spaceToBeRevealed.col).innerHTML="<p>"+spaceToBeRevealed.number+"</p>";
      spaceToBeRevealed.revealed=true;
    }else{
      document.getElementById(spaceToBeRevealed.row + "-" + spaceToBeRevealed.col).innerHTML="<p>"+spaceToBeRevealed.number+"</p>";
      spaceToBeRevealed.revealed=true;
      reveal(spaces[spaceToBeRevealed.row-1][spaceToBeRevealed.col-1])
      reveal(spaces[spaceToBeRevealed.row][spaceToBeRevealed.col-1])
      reveal(spaces[spaceToBeRevealed.row+1][spaceToBeRevealed.col-1])
      reveal(spaces[spaceToBeRevealed.row-1][spaceToBeRevealed.col])
      reveal(spaces[spaceToBeRevealed.row+1][spaceToBeRevealed.col])
      reveal(spaces[spaceToBeRevealed.row-1][spaceToBeRevealed.col+1])
      reveal(spaces[spaceToBeRevealed.row][spaceToBeRevealed.col+1])
      reveal(spaces[spaceToBeRevealed.row+1][spaceToBeRevealed.col+1])
    }
  }
}
