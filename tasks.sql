CREATE TABLE tasks (
	id serial PRIMARY KEY,
	title VARCHAR ( 250 ) NOT NULL,
	completed boolean DEFAULT false
);

INSERT INTO tasks(id, title, completed) VALUES(null, 'buy some milk', true);
INSERT INTO tasks(id, title, completed) VALUES(null, 'buy some oranges', false);
INSERT INTO tasks(id, title, completed) VALUES(null, 'buy some apples', false);
