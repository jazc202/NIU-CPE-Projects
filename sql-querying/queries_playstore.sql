-- Comments in SQL Start with dash-dash --
-- 1. Find the app with an ID of ***1880***
SELECT * FROM analytics WHERE id=1880;

-- 2. Find the ID and app name for all apps that were last updated on August 01, 2018.
SELECT id, app_name FROM analytics WHERE last_updated = '2018-08-01';

-- 3. Count the number of apps in each category, e.g. “Family | 1972”.
SELECT COUNT(*)
FROM analytics
GROUP BY category;

-- 4. Find the top 5 most-reviewed apps and the number of reviews for each.
SELECT TOP 5 app_name, reviews FROM analytics
ORDER BY reviews DESC

-- 5. Find the app that has the most reviews with a rating greater than equal to 4.8.
SELECT TOP 1 * FROM analytics
WHERE rating >= 4.8
ORDER BY reviews DESC

-- 6. Find the average rating for each category ordered by the highest rated to lowest rated.
SELECT AVG(rating)
GROUP BY category
ORDER BY AVG(rating) DESC

-- 7. Find the name, price, and rating of the most expensive app with a rating that’s less than 3.
SELECT TOP 1 app_name, price, rating FROM analytics
WHERE rating < 3
ORDER BY price DESC

-- 8. Find all apps with a min install not exceeding 50, that have a rating. Order your results by highest rated first.
SELECT * FROM analytics
WHERE min_installs <= 50 AND rating NOT null
ORDER BY rating DESC

-- 9. Find the names of all apps that are rated less than 3 with at least 10000 reviews.
SELECT app_name FROM analytics
WHERE rating < 3 AND reviews >= 10000

-- 10. Find the top 10 most-reviewed apps that cost between 10 cents and a dollar.
SELECT TOP 10 * FROM analytics
WHERE price > 0.10 AND price < 1.00
ORDER BY reviews DESC

-- 11. Find the most out of date app. Hint: You don’t need to do it this way, but it’s possible to do with a subquery: http://www.postgresqltutorial.com/postgresql-max-function/
SELECT TOP 1 * FROM analytics
ORDER BY last_updated ASC

-- 12. Find the most expensive app (the query is very similar to #11).
SELECT TOP 1 * FROM analytics
ORDER BY price DESC

-- 13. Count all the reviews in the Google Play Store.
SELECT SUM(reviews)

-- 14. Find all the categories that have more than 300 apps in them.
SELECT category, COUNT(*) FROM analytics
GROUP BY category
WHERE COUNT(*) > 300


-- 15. Find the app that has the highest proportion of min_installs to reviews, among apps that have been installed at least 100,000 times. Display the name of the app along with the number of reviews, the min_installs, and the proportion.
SELECT TOP 1 app_name, reviews, min_installs, min_installs/reviews FROM analytics
ORDER BY min_installs/reviews DESC
WHERE min_installs >= 100000 