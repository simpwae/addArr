let N = 4;

function add(A, B, C) {
  let i, j;
  for (i = 0; i < N; i++) for (j = 0; j < N; j++) C[i][j] = A[i][j] + B[i][j];
}

let A = [
  [1, 1, 1, 1],
  [2, 2, 2, 2],
  [3, 3, 3, 3],
  [4, 4, 4, 4],
];

let B = [
  [1, 1, 1, 1],
  [2, 2, 2, 2],
  [3, 3, 3, 3],
  [4, 4, 4, 4],
];

let C = new Array(N);
for (let k = 0; k < N; k++) C[k] = new Array(N);

let i, j;
add(A, B, C);

document.write("Result matrix is <br>");
for (i = 0; i < N; i++) {
  for (j = 0; j < N; j++) document.write(C[i][j] + " ");
  document.write("<br>");
}
