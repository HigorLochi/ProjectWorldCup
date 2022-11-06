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

CREATE TABLE IF NOT EXISTS worldcupteams(
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    idWorldcup INT,
    idTeam INT,
    FOREIGN KEY (idWorldcup) REFERENCES worldcups(id),
    FOREIGN KEY (idTeam) REFERENCES teams(id)
);

CREATE TABLE IF NOT EXISTS matchs(
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    idWorldCup INT,
    phase VARCHAR(20),
    idTeam1 INT,
    pointsTeam1 INT,
    idTeam2 INT,
    pointsTeam2 INT,
    FOREIGN KEY (idWorldcup) REFERENCES worldcups(id),
    FOREIGN KEY (idTeam1) REFERENCES teams(id),
    FOREIGN KEY (idTeam2) REFERENCES teams(id)
);