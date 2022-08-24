USE employees;

INSERT INTO department (name)
VAUES ('Corporate'),
        ('Marketing'),
        ('Sales'),

INSERT INTO role (title, salary, department_id)
VALUES ('Lawyer', 100000, 2),
('El Jeffe', 250000, 1),
('Custodian', 65000, 5),
('CTO', 200000, 2),

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Jim', 'Harper' 4, 2)