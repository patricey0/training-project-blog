-- Revert oblog:oblog-v1 from pg

BEGIN;

-- XXX Add DDLs here.
drop table post;
drop table category;

COMMIT;
