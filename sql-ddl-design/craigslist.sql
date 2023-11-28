DROP DATABASE IF EXISTS craigslist;
CREATE DATABASE craigslist;
\c craigslist;

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    post_content TEXT NOT NULL,
    posted_by INTEGER REFERENCES users(id),
    posted_from INTEGER REFERENCES regions(id)
);

CREATE TABLE users ( 
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    user_region INTEGER REFERENCES regions(id)
);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    category_name TEXT NOT NULL
);

CREATE TABLE post_categories ( --each post can have multiple categories; each category can have multiple posts
    id SERIAL PRIMARY KEY,
    category INTEGER REFERENCES categories(id),
    post INTEGER REFERENCES posts(id)
);

INSERT INTO posts
    (title, post_content, posted_by, posted_from)
VALUES
    ('Decks & Fences!!! ITS TIME!! (Rockford and surrounding)', 'It is the perfect time to spruce up that DECK, FENCE, GAZEBO, or PERGULA', 1, 'Rockford'),
    ('Curious', 'Hi everyone, I just moved into town and I’m a bit curious hanging out with someone that is new to this as I am. I’m willing to meet new friends in the area.', 2, 'Seattle');

INSERT INTO users
    (username, user_region)
VALUES
    ('BigDog2001', 'Rockford'),
    ('SleepyInSeattle', 'Seattle');

INSERT INTO categories
    (category_name)
VALUES
    ('General'),
    ('Social'),
    ('Jobs');

INSERT INTO post_categories
    (category, post)
VALUES
    (1, 1),
    (1, 2),
    (2, 2);