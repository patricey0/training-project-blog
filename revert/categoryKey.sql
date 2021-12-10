-- Revert oblog:categoryKey from pg

BEGIN;

-- XXX Add DDLs here.
drop table post;

CREATE TABLE post (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    slug text not null,
    title text not null,
    excerpt text not null,
    content text not null
);


COMMIT;
