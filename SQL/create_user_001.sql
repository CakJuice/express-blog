-- Your SQL goes here
CREATE TABLE cj_user (
  id SERIAL PRIMARY KEY,
  username VARCHAR(64) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL
);

CREATE UNIQUE INDEX index_cj_user_username ON cj_user (username);
CREATE UNIQUE INDEX index_cj_user_email ON cj_user (email);

ALTER TABLE cj_user ADD CONSTRAINT unique_cj_user_username UNIQUE USING INDEX index_cj_user_username;
ALTER TABLE cj_user ADD CONSTRAINT unique_cj_user_email UNIQUE USING INDEX index_cj_user_email;
