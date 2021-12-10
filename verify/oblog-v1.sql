-- Verify oblog:oblog-v1 on pg

BEGIN;

-- XXX Add verifications here.
select * from post where false;
select * from category where false;

ROLLBACK;
