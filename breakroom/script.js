// break break break stuff! ---------------------------

// Image + sound (yes all the audio is from Kid Pix. iykyk)
function getBreakData(image) {
  if (image.classList.contains('goyaImage')) {
    return {
      original: 'goya.png',
      broken: 'brokengoya.png',
      sound: new Audio('audio/Clap.wav')
    };
  } else if (image.classList.contains('pellegrinoImage')) {
    return {
      original: 'pellegrino.png',
      broken: 'brokenpellegrino.png',
      sound: new Audio('audio/Crack.wav')
    };
  } else if (image.classList.contains('jarImage')) {
    return {
      original: 'jar.png',
      broken: 'brokenjar.png',
      sound: new Audio('audio/Hat1.wav')
    };
  }
  return null;
}

// Select all breakable images
const breakableImages = document.querySelectorAll('.goyaImage, .pellegrinoImage, .jarImage');
const totalToBreak = breakableImages.length;
let brokenCount = 0;

breakableImages.forEach(image => {
  const data = getBreakData(image);
  if (!data) return;

  image.addEventListener('click', () => {
    // Only break if it's still the original image
    if (image.src.includes(data.original)) {
      image.src = `images/${data.broken}`;
      data.sound.currentTime = 0;
      data.sound.play();
      brokenCount++;

      if (brokenCount === totalToBreak) {
        setTimeout(() => {
          window.location.href = 'broken-images.html'; // onto the monologue!
        }, 1000);
      }
    }
  });
});




// -------- typing effect for monologue! ----------------------

class Typewriter {
  constructor(targetElement, text, speed = 50) {
    this.target = targetElement;
    this.text = text;
    this.speed = speed;
    this.index = 0;
  }

  type() {
    if (this.index < this.text.length) {
      this.target.innerHTML += this.text.charAt(this.index);
      this.index++;
      setTimeout(() => this.type(), this.speed);
    }
  }

  start() {
    this.target.innerHTML = ''; // Clear previous content
    this.index = 0;
    this.type();
  }
}

// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const output1 = document.getElementById("output1");
  const output2 = document.getElementById("output2");
    const output3 = document.getElementById("output3");
        const output4 = document.getElementById("output4");
            const output5 = document.getElementById("output5");
                const output6 = document.getElementById("output6");

  const typewriter1 = new Typewriter(output1, "Everything here is broken. The jars, the links, these very paragraphs." /*you just can't see it unless you look beneath the surface*/);
  const typewriter2 = new Typewriter(output2, "It's hard to write something that works so I've written something meant to break."/* A breakroom is a key feature of any proper work place. Where else can one rest? And try one's hand at breaking the monotony of the everyday? */);
      const typewriter3 = new Typewriter(output3, /*somewhere in here there's a Microsoft Office  joke. I'd rather cling to my 32-bit Office Suite from 2017 than use Google. At least in the former I own my work. ... right?*/"In web design, the Word is efficiency. Excellence is a fast load time, round corners, mobile optimization." /*if you're reading this I know you agree ;) */);
        const typewriter4 = new Typewriter(output4, "and the comfort of hamburger menus that soothe our deep appetite for uniformity."/*It's also somewhat funny that in the aftermath of "move fast and break things" online life is now so fixed that only the instagräms, facebœks, and former-twîtters are allowed to keep breaking things. My site breaks aesthetics, theirs break the world.*/);
            const typewriter5 = new Typewriter(output5, "The ease of predictability! And of scrolling! And algorithms creating an experience just for you /*yet somehow uniform enough to work for every kind of entertainment, advertisement, and attention span*/"/*As always, the comments are where all of the real conversations are*/);
                const typewriter6 = new Typewriter(output6, "I am tired. Give me something new--no give me something old. Something to fix the cracks forming beneath the surface."/*Gimme a break*/);


// start first paragraph
  typewriter1.start();

// start second paragraph
  setTimeout(() => {
    typewriter2.start();
  }, 4000); // starts 4 seconds later

// start third paragraph
      setTimeout(() => {
    typewriter3.start();
  }, 8500); // starts after the above
    
// start fourth paragraph
      setTimeout(() => {
    typewriter4.start();
  }, 13500); // starts 10 seconds later? idk
    
// start 5th paragraph
      setTimeout(() => {
    typewriter5.start();
  }, 18000); // starts even later
// start 6th paragraph
      setTimeout(() => {
    typewriter6.start();
  }, 30000); // starts even later. Latest some would say
});