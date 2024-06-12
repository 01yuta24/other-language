CREATE TABLE params(
    id SERIAL PRIMARY KEY,
    epoch DECIMAL,
    a DECIMAL,
    e DECIMAL,
    i DECIMAL,
    om DECIMAL,
    w DECIMAL,
    ma DECIMAL,
    orbit_around VARCHAR(64)
);