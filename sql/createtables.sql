CREATE TABLE IF NOT EXISTS worldcups(
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    year INT,
    currentPhase VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS teams(
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(200),
    cups INT
);

CREATE TABLE IF NOT EXISTS matches(
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    idWorldCup INT,
    phase VARCHAR(20),
    idTeam1 INT,
    pointsTeam1 INT,
    idTeam2 INT,
    pointsTeam2 INT
);