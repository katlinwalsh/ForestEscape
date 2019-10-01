let img;
let typewriter;
// ^ initialize variable for a font

function preload() {
  typewriter = loadFont('TravelingTypewriter.otf'); 
  // ^ load font that's been added as a file
  img = loadImage("img.png");
}

var clues = ["BONUS HINT! The pieces of the map are not in order of the clues.", "I'm in the building with the most 'stories'.", "I may not move but I'm still alive, I need soil and water to survive.", "I'm sometimes made of leather, if there's three of you, I help you sit together.", "Plenty of sheets, but no bed in sight, I can cut you, but I don't bite.", "I get hung but I'm not a piece of art, I'm found in a house but I'm not a picture frame, I'm made of fabric but I'm not a shirt.", "I have a door but I'm not a cupboard, I have buttons but I'm not an elevator, I warm things but I'm not a blanket.", "I have a plug but I'm not a sink, I can be mounted but I'm not a horse, I have a screen but I'm not a laptop, I have a remote control, but I'm not a drone.", "I can be roasted but I'm not a turkey, I can be ground but I'm not pepper, I can be brewed but I'm not beer.", "When you open my door, on comes my light, I'm not a fridge, I'm in zero fahrenheight.", "You're glad I'm here but you have no need, I hope it stays this way indeed, but if everything starts to burn away, pull my pin - I'll save the day.", "You drink out of it, but don't give it a bump, the next clue is under a ___.", "I have KEYS but no locks, I have SPACE but no room, you can ENTER but can't go outside, what am I?", "If you were 'able', you'd add 'T'.", "I have 4 legs but cannot walk, I have a back but cannot talk.", "Come one, come all, you enter through this ____.", "Something you look out to spy, to watch birds or cars going by.", "Rhymes with coaster and used for breakfast.", "Wash your hands, get a drink, look for me in the ____.", "I'm an animal, but can't make a sound, you can move me all around.", "I'm not one to speak, but they say I'm wordy, and if I have a leak, you'll be very dirty."]; 
// ^ the array of the 20 map riddles with bonus hint (in position 0)
// select riddles courtesy of http://riddles-for-kids.org/library-riddles/


function setup() {
  createCanvas(windowWidth, windowHeight); 
  // ^ the height and width of whatever device you're using
  textFont(typewriter, 45); 
  // ^ initialize the font
  textAlign(LEFT);
}

function draw() {
  background(50); 
  fill(215);
  imageMode(CORNERS);
  image(img, width/10,height/10,width/10*9,height);
  // ^ forest green
  var clue = random(clues); 
  // ^ pick a random clue from the array above
  text("Press and hold to read a clue. Work together to find all the pieces of the map to make it back to base camp!", width / 10, height / 10, (width / 10) * 9, (height / 5) * 4);
  // ^ instructions written first, positioned 1/10th of the way on the screeen, with wrapping text after 9/10ths of the screen
  text(clues.indexOf(clue) + ": " + clue, width / 10, height / 2, (width / 10) * 9, (height / 5) * 4); 
  // ^ the randomly generated clues from the array above

}

function touchStarted() { 
  // ^ when you hold your finger down
  noLoop(); 
  // ^ stop drawing
}

function touchEnded() { 
  // ^ when you lift your finger
  loop(); 
  // ^ start drawing again
}