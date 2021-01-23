let CANVAS;
let CONTEXT;

const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 640;

const PIECE_WIDTH = 40;
const PIECE_HEIGHT = 40;

const FPS = 50;

let Piece;

const PANEL_WIDTH = 10;
const PANEL_HEIGHT = 20; // Porque se sumo 4

const MARGIN = 4;

const PANEL = [
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], // Agregando 4 filas mas
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
];

const PIECES = [
  [
    [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0]
    ],

    [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0]
    ],

    [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0]
    ],

    [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0]
    ]
  ],

  [
    [
      [0, 0, 0, 0],
      [2, 2, 2, 2],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],

    [
      [0, 0, 2, 0],
      [0, 0, 2, 0],
      [0, 0, 2, 0],
      [0, 0, 2, 0]
    ],

    [
      [0, 0, 0, 0],
      [2, 2, 2, 2],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],

    [
      [0, 0, 2, 0],
      [0, 0, 2, 0],
      [0, 0, 2, 0],
      [0, 0, 2, 0]
    ]
  ],

  [
    [
      [0, 0, 0, 0],
      [0, 0, 3, 3],
      [0, 3, 3, 0],
      [0, 0, 0, 0]
    ],

    [
      [0, 0, 3, 0],
      [0, 0, 3, 3],
      [0, 0, 0, 3],
      [0, 0, 0, 0]
    ],

    [
      [0, 0, 0, 0],
      [0, 0, 3, 3],
      [0, 3, 3, 0],
      [0, 0, 0, 0]
    ],

    [
      [0, 0, 3, 0],
      [0, 0, 3, 3],
      [0, 0, 0, 3],
      [0, 0, 0, 0]
    ]
  ],

  [
    [
      [0, 0, 0, 0],
      [0, 4, 4, 0],
      [0, 0, 4, 4],
      [0, 0, 0, 0]
    ],

    [
      [0, 0, 0, 4],
      [0, 0, 4, 4],
      [0, 0, 4, 0],
      [0, 0, 0, 0]
    ],

    [
      [0, 0, 0, 0],
      [0, 4, 4, 0],
      [0, 0, 4, 4],
      [0, 0, 0, 0]
    ],

    [
      [0, 0, 0, 4],
      [0, 0, 4, 4],
      [0, 0, 4, 0],
      [0, 0, 0, 0]
    ]
  ],

  [
    [
      [0, 0, 0, 0],
      [0, 5, 5, 5],
      [0, 5, 0, 0],
      [0, 0, 0, 0]
    ],

    [
      [0, 0, 5, 0],
      [0, 0, 5, 0],
      [0, 0, 5, 5],
      [0, 0, 0, 0]
    ],

    [
      [0, 0, 0, 5],
      [0, 5, 5, 5],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],

    [
      [0, 5, 5, 0],
      [0, 0, 5, 0],
      [0, 0, 5, 0],
      [0, 0, 0, 0]
    ]
  ],

  [
    [
      [0, 0, 0, 0],
      [0, 6, 6, 6],
      [0, 0, 0, 6],
      [0, 0, 0, 0]
    ],

    [
      [0, 0, 6, 6],
      [0, 0, 6, 0],
      [0, 0, 6, 0],
      [0, 0, 0, 0]
    ],

    [
      [0, 6, 0, 0],
      [0, 6, 6, 6],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],

    [
      [0, 0, 6, 0],
      [0, 0, 6, 0],
      [0, 6, 6, 0],
      [0, 0, 0, 0]
    ]
  ],

  [
    [
      [0, 0, 0, 0],
      [0, 7, 7, 7],
      [0, 0, 7, 0],
      [0, 0, 0, 0]
    ],

    [
      [0, 0, 7, 0],
      [0, 0, 7, 7],
      [0, 0, 7, 0],
      [0, 0, 0, 0]
    ],

    [
      [0, 0, 7, 0],
      [0, 7, 7, 7],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],

    [
      [0, 0, 7, 0],
      [0, 7, 7, 0],
      [0, 0, 7, 0],
      [0, 0, 0, 0]
    ]
  ]
];

const COLORS = [
  '#581845', // Morado
  '#900C3F', // Guindo
  '#C70039', // Rosado
  '#FF5733', // Naranja
  '#FFC300', // Amarillo
  '#33B5FF', // Turqueza
  '#03400B', // Verde
];

const init = () => {
  CANVAS = document.querySelector('#canvas');
  CONTEXT = CANVAS.getContext('2d');

  CANVAS.width = CANVAS_WIDTH;
  CANVAS.height = CANVAS_HEIGHT;

  CANVAS.style.border = '2px solid #000';
  PIECE = new objPiece();
  addListeners();
  setInterval(() => {
    main();
  }, 1000 / FPS);
};

const addListeners = () => {
  document.addEventListener('keydown', (event) => {
    const { key } = event;
    if (key === 'ArrowUp') {
      PIECE.rotate();
    } else if (key === 'ArrowDown') {
      PIECE.down();
    } else if (key === 'ArrowLeft') {
      PIECE.left();
    } else if (key === 'ArrowRight') {
      PIECE.right();
    }
  });
};

const reset = () => {
  for(rows = 0; rows < PANEL_HEIGHT + 1; rows ++) {
    for(cols = 0; cols < PANEL_WIDTH + 2; cols ++) {
      if (PANEL[rows][cols] !== 9 && PANEL[rows][cols] !== 0) {
        PANEL[rows][cols] = 0;
      }
    }
  }
}

const objPiece = function () {
  this.x = 0;
  this.y = 0;

  this.angle = 1; // 0, 1, 2 ,3 
  this.pieceType = 2; // 2 elemento de nuestro 

  this.delay = 50;
  this.increasingDelay = 0;

  this.new = function () {
    this.pieceType = Math.floor(Math.random() * 7);
    this.y = 0;
    this.x = 4;
  }

  this.collision = function (newAngle, rowNew, columnNew) {
    let existCollision = false;
    for(rows = 0; rows < 4; rows++) {
      for (cols = 0; cols < 4; cols++) { 
        if (PIECES[this.pieceType][newAngle][rows][cols] !== 0) {
          if (PANEL[rowNew + rows][columnNew + cols] !== 0) {
            existCollision = true;
          }
        }
      }
    }
    return existCollision;
  }

  this.cleanRow = function () {
    let isComplete = false;
    for(rows = MARGIN; rows < PANEL_HEIGHT; rows++) {  // py
      isComplete = true;
      for (cols = 1; cols < PANEL_WIDTH + 1; cols++) {   //px
        if (PANEL[rows][cols] === 0) isComplete = false;
      }

      if (isComplete) {
        for(cols = 1; cols < PANEL_WIDTH + 1; cols++) {
          PANEL[rows][cols] = 0;
        }
      }
    }
  }

  this.drawInPanel = function () {
    for(rows = 0; rows < 4; rows++) {
      for (cols = 0; cols < 4; cols++) {
        if (PIECES[this.pieceType][this.angle][rows][cols] !== 0) {
          PANEL[this.y + rows][this.x + cols] = PIECES[this.pieceType][this.angle][rows][cols];
        }
      }
    }
  }

  this.draw = function () {
    for(rows = 0; rows < 4; rows++) {  //py
      for (cols = 0; cols < 4; cols++) {   //px
        if (PIECES[this.pieceType][this.angle][rows][cols] !== 0) {
          CONTEXT.fillStyle = COLORS[this.pieceType];
          const x0 = (this.x + cols - 1) * PIECE_WIDTH; // la posicion + la fila  * ancho de la pieza para la proporcionalidad
          const y0 = (this.y + rows - MARGIN) * PIECE_HEIGHT;
          CONTEXT.fillRect(x0, y0, PIECE_WIDTH, PIECE_HEIGHT);
        }
      }
    } 
  }

  this.isGameover = function () {
    let gameover = false;
    for(rows = 1; rows < PANEL_WIDTH + 1; rows++) {
      if (PANEL[2][rows] !== 0) {
        gameover = true;
      }
    }
    return gameover;
  }

  this.isDown = function () {
    if (this.increasingDelay < this.delay) {
      this.increasingDelay++;
    } else {
      if (!this.collision(this.angle, this.y + 1, this.x)) {
        this.y++;
      } else {
        this.drawInPanel();
        this.cleanRow();
        this.new();
        if (this.isGameover()) {
          reset();
        }
      }
      this.increasingDelay = 0;
    }
  }

  this.rotate = function () {
    // if (this.angle < 3) {
    //   this.angle++;
    // } else {
    //   this.angle = 0;
    // }
    let newAngle = this.angle;
    if (newAngle < 3) {
      newAngle++;
    } else {
      newAngle = 0;
    }
    if (!this.collision(newAngle, this.y, this.x)){
      this.angle = newAngle;
    }
  };

  this.left = function () {
    // this.x--;
    if (!this.collision(this.angle, this.y, this.x-1)) {
      this.x--;
    }
  };

  this.right = function () {
    if (!this.collision(this.angle, this.y, this.x+1)) {
      this.x++;
    }
  };

  this.down = function () {
    if (!this.collision(this.angle, this.y+1, this.x)) {
      this.y++;
    }
  };

  this.new();
};

const drawPanel = () => {
  for(rows = MARGIN; rows < PANEL_HEIGHT; rows++) {
    for (cols = 1; cols < PANEL_WIDTH + 1; cols++) {
      if (PANEL[rows][cols] !== 0) {
        CONTEXT.fillStyle = COLORS[PANEL[rows][cols]];
        const x0 = (cols - 1) * PIECE_WIDTH; // recorrer - 1, la posicion + la fila  * ancho de la pieza para la proporcionalidad
        const y0 = (rows - MARGIN) * PIECE_HEIGHT; // recorrer - el margen
        CONTEXT.fillRect(x0, y0, PIECE_WIDTH, PIECE_HEIGHT);
      }
    }
  } 
}

const clearCanvas = () => {
  CONTEXT.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
};

const main = () => {
  clearCanvas();
  drawPanel();
  PIECE.isDown();
  PIECE.draw();
};

document.addEventListener('load', init());
