CREATE DATABASE IF NOT EXISTS netflix_clone;
USE netflix_clone;

CREATE TABLE users (
  user_id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE subscription_plans(
    subscription_plan_id INT PRIMARY KEY AUTO_INCREMENT,
    plan_name ENUM('Standard', 'Premium', 'Basic') NOT NULL,
    number_of_screens INT NOT NULL,
    price FLOAT NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

CREATE TABLE subscriptions(
    subscription_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    subscription_plan_id INT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE,
    status Enum("Active", "Expired", "Cancelled") DEFAULT "Active" ,
    auto_renew BOOLEAN DEFAULT TRUE,
    payment_method VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (subscription_plan_id) REFERENCES subscription_plans(subscription_plan_id)

);





CREATE TABLE profiles (
  profile_id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  profile_name VARCHAR(50) NOT NULL,
  avatar_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE content (
  content_id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  description TEXT,
  release_date DATE,
  type ENUM('Movie', 'TV Show', 'Series') NOT NULL,
  thumbnail_url VARCHAR(255),
  director VARCHAR(100),
  country VARCHAR(100),
  date_added DATE,
  released_year INT,
  -- cast VARCHAR(500),  -- Comma-separated: "Actor1, Actor2, Actor3"
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE genres (
  genre_id INT PRIMARY KEY AUTO_INCREMENT,
  genre_name VARCHAR(50) NOT NULL
);

CREATE TABLE content_genres (
  content_id INT,
  genre_id INT,
  PRIMARY KEY (content_id, genre_id),
  FOREIGN KEY (content_id) REFERENCES content(content_id),
  FOREIGN KEY (genre_id) REFERENCES genres(genre_id)
);

CREATE TABLE seasons (
  season_id INT PRIMARY KEY AUTO_INCREMENT,
  content_id INT NOT NULL,
  season_number INT NOT NULL,
  release_date DATE,
  description TEXT,
  FOREIGN KEY (content_id) REFERENCES content(content_id)
);

CREATE TABLE episodes (
  episode_id INT PRIMARY KEY AUTO_INCREMENT,
  season_id INT NOT NULL,
  episode_number INT NOT NULL,
  title VARCHAR(100) NOT NULL,
  description TEXT,
  duration INT,
  release_date DATE,
  FOREIGN KEY (season_id) REFERENCES seasons(season_id)
);


CREATE TABLE watch_history (
  history_id INT PRIMARY KEY AUTO_INCREMENT,
  profile_id INT NOT NULL,
  content_id INT NOT NULL,
  watched_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  progress INT,
  FOREIGN KEY (profile_id) REFERENCES profiles(profile_id),
  FOREIGN KEY (content_id) REFERENCES content(content_id)
);

CREATE TABLE watchlist (
  watchlist_id INT PRIMARY KEY AUTO_INCREMENT,
  profile_id INT NOT NULL,
  content_id INT NOT NULL,
  added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (profile_id) REFERENCES profiles(profile_id),
  FOREIGN KEY (content_id) REFERENCES content(content_id)
);


