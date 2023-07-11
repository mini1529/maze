// 미로의 구조
var maze = [
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1]
];

// 미로 생성
var mazeElement = document.getElementById('maze');
for (var i = 0; i < maze.length; i++) {
  for (var j = 0; j < maze[i].length; j++) {
    var cell = document.createElement('div');
    cell.classList.add('cell');
    if (maze[i][j] === 1) {
      cell.classList.add('wall');
    }
    mazeElement.appendChild(cell);
  }
}

// 공의 초기 위치
var ball = document.getElementById('ball');
var ballX = 40; // 초기 x 좌표
var ballY = 40; // 초기 y 좌표

// 공의 위치 업데이트
ball.style.left = ballX + 'px';
ball.style.top = ballY + 'px';

// 공의 이동 속도
var ballSpeed = 5;

// 가속도 센서 처리 함수
function handleOrientation(event) {
  var x = event.gamma; // x 축 가속도
  var y = event.beta;  // y 축 가속도

  // 가속도 값을 이용하여 공의 새로운 위치 계산
  ballX += x * ballSpeed;
  ballY += y * ballSpeed;

  // 충돌 감지 로직 구현
  if (ballX < 0) {
    ballX = 0;
  }
  if (ballX > 380) {
    ballX = 380;
  }
  if (ballY < 0) {
    ballY = 0;
  }
  if (ballY > 380) {
    ballY = 380;
  }

  // 공의 위치 업데이트
  ball.style.left = ballX + 'px';
  ball.style.top = ballY + 'px';
}

window.addEventListener('deviceorientation', handleOrientation);
