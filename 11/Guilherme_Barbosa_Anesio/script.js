const canvas = document.getElementById("gameCanvas");
        const ctx = canvas.getContext("2d");

        const gridSize = 20;
        const gridWidth = canvas.width / gridSize;
        const gridHeight = canvas.height / gridSize;
        let snake = [{ x: 0, y: 0 }];
        let food = { x: 0, y: 0, shape: "" };
        let dx = 0;
        let dy = 0;
        let score = 0;

        function createFood() {
            food.x = Math.floor(Math.random() * gridWidth) * gridSize;
            food.y = Math.floor(Math.random() * gridHeight) * gridSize;
            food.shape = Math.random() < 0.5 ? "square" : "circle";
        }

        function update() {
            const head = { x: snake[0].x + dx, y: snake[0].y + dy };
            snake.unshift(head);

            if (head.x === food.x && head.y === food.y) {
                if (food.shape === "square") {
                    createFood();
                    score++;
                } else {
                    alert("Game Over");
                    return;
                }
            } else {
                snake.pop();
            }

            if (
                head.x < 0 ||
                head.y < 0 ||
                head.x >= canvas.width ||
                head.y >= canvas.height
            ) {
                alert("Game Over");
                return;
            }

            for (let i = 1; i < snake.length; i++) {
                if (head.x === snake[i].x && head.y === snake[i].y) {
                    alert("Game Over");
                    return;
                }
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (food.shape === "square") {
                ctx.fillStyle = "red";
                ctx.fillRect(food.x, food.y, gridSize, gridSize);
            } else {
                ctx.fillStyle = "purple";
                ctx.beginPath();
                ctx.arc(
                    food.x + gridSize / 2,
                    food.y + gridSize / 2,
                    gridSize / 2,
                    0,
                    2 * Math.PI
                );
                ctx.fill();
            }

            ctx.fillStyle = "green";
            snake.forEach(segment => {
                ctx.fillRect(segment.x, segment.y, gridSize, gridSize);
            });

            ctx.fillStyle = "black";
            ctx.font = "16px Arial";
            ctx.fillText("Score: " + score, 10, 20);
        }

        function handleKeyDown(event) {
            const key = event.key;

            if (key === "ArrowUp" && dy !== gridSize) {
                dx = 0;
                dy = -gridSize;
            } else if (key === "ArrowDown" && dy !== -gridSize) {
                dx = 0;
                dy = gridSize;
            } else if (key === "ArrowLeft" && dx !== gridSize) {
                dx = -gridSize;
                dy = 0;
            } else if (key === "ArrowRight" && dx !== -gridSize) {
                dx = gridSize;
                dy = 0;
            }
        }

        document.addEventListener("keydown", handleKeyDown);

        createFood();

        setInterval(() => {
            createFood();
        }, 10000);

        function loadRules() {
            fetch("rules.json")
                .then(response => response.json())
                .then(data => {
                    const rulesContainer = document.getElementById("rulesContainer");
                    rulesContainer.innerText = data.rules;
                })
                .catch(error => {
                    console.log("Ocorreu um erro ao carregar as regras:", error);
                });
        }

        const rulesButton = document.getElementById("rulesButton");
        rulesButton.addEventListener("click", loadRules);

        setInterval(update, 100);
