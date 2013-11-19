function Sprite(options) {
  this.spriteSheet = {
    frames: options.frames,
    cols: options.cols,
    width: options.width,
    height: options.height,
    image: options.image,
  };
  this.element = this.createElement();
  this.currentSprite = 1;
}

Sprite.prototype.init = function() {
  this.setBackgroundImage();
  this.updateBackgroundPosition();
  this.requestAnimationFrame();
  return this;
};

Sprite.prototype.createElement = function() {
  var element = document.createElement('div');
  element.classList.add('sprite');
  return element;
};

Sprite.prototype.appendTo = function(element) {
  element.appendChild(this.element);
  return this;
}

Sprite.prototype.setBackgroundImage = function() {
  this.element.style.backgroundImage = 'url(' + this.spriteSheet.image + ')';
  this.element.style.backgroundRepeat = 'no-repeat';
  this.element.style.width = this.spriteSheet.width + "px";
  this.element.style.height = this.spriteSheet.height + "px";
}

Sprite.prototype.updateBackgroundPosition = function() {
  var row = Math.ceil(this.currentSprite / this.spriteSheet.cols) - 1,
      col = (this.currentSprite - 1) % this.spriteSheet.cols;

  if (row < 0) row = 0;
  if (col < 0) col = 0;

  var yPos = row * this.spriteSheet.height * -1,
      xPos = col * this.spriteSheet.width * -1;

  this.element.style.backgroundPosition = xPos + "px " + yPos + "px";
};

Sprite.prototype.requestAnimationFrame = function() {
  var piglet = this;
  requestAnimationFrame(function() {
    piglet.nextFrame();
    piglet.updateBackgroundPosition();
    piglet.requestAnimationFrame();
  });
};

Sprite.prototype.nextFrame = function() {
  if (this.currentSprite >= this.spriteSheet.frames)
    this.currentSprite = 1;
  else
    this.currentSprite += 1;
};