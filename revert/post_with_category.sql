-- Revert oblog:post_with_category from pg

BEGIN;

-- XXX Add DDLs here.
drop view post_with_category;

COMMIT;
