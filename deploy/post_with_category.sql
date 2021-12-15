-- Deploy oblog:post_with_category to pg

BEGIN;

-- XXX Add DDLs here.
create view post_with_category AS
select post.*, category.label AS category
from post
join category ON category.id = post.category_id;

COMMIT;
