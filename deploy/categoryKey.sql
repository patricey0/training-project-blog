-- Deploy oblog:categoryKey to pg

BEGIN;

-- XXX Add DDLs here.
drop table post;

CREATE TABLE post (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    slug text not null,
    title text not null,
    excerpt text not null,
    content text not null,
    category_id int REFERENCES category(id)
);


COMMIT;
