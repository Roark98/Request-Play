CREATE TABLE LUGAR(
    id SERIAL PRIMARY KEY,
	image TEXT NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    type VARCHAR(255) NOT NULL,
    cost double precision NOT NULL,
    city VARCHAR(255) NOT NULL,
    region VARCHAR(255) NOT NULL,
    visit_count INTEGER NOT NULL default 0,
	review_counter INTEGER NOT NULL default 0,
	review_value DOUBLE PRECISION NOT NULL default 0
);
CREATE TABLE USERS(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    favorites_array INTEGER[]
)