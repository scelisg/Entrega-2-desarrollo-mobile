CREATE TABLE IF NOT EXISTS formulario(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT,
    email TEXT
);

INSERT OR IGNORE INTO formulario (id, nombre, email) VALUES (1,'nombre1','test1@test.cl');
INSERT OR IGNORE INTO formulario (id, nombre, email) VALUES (2,'nombre2','test2@test.cl');
INSERT OR IGNORE INTO formulario (id, nombre, email) VALUES (3,'nombre3','test3@test.cl');



