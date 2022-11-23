CREATE TABLE IF NOT EXISTS public.users (
  id        SERIAL NOT NULL CONSTRAINT user_pkey PRIMARY KEY,
  username  VARCHAR(512) NOT NULL CONSTRAINT user_username_key UNIQUE,
  password  VARCHAR(512) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.emails (
    id SERIAL NOT NULL CONSTRAINT emails_pkey PRIMARY KEY,
    userid integer,
    email VARCHAR(512) NOT NULL CONSTRAINT user_username_key UNIQUE
);

CREATE TABLE IF NOT EXISTS public.access_tokens (
    id SERIAL NOT NULL CONSTRAINT access_tokens_pkey PRIMARY KEY,
    userid integer,
    access_token TEXT NOT NULL,
    refresh_token TEXT NOT NULL
);