
function bonce(sp1,sp2){
    if (sp1.x - sp2.x < sp2.width/2 + sp1.width/2
      && sp2.x - sp1.x < sp2.width/2 + sp1.width/2) {
    sp1.velocityX = sp1.velocityX * (-1);
    sp2.velocityX = sp2.velocityX * (-1);
  }
  if (sp1.y - sp2.y < sp2.height/2 + sp1.height/2
    && sp2.y - sp1.y < sp2.height/2 + sp1.height/2){
    sp1.velocityY = sp1.velocityY * (-1);
    sp2.velocityY = sp2.velocityY * (-1);
    }
}