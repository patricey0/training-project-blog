-- Deploy oblog:oblog-v1 to pg

BEGIN;

-- XXX Add DDLs here.
CREATE TABLE post (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    slug text not null,
    title text not null,
    excerpt text not null,
    content text not null
);

CREATE TABLE category (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    label text not null,
    "route" text not null
);

COMMIT;
