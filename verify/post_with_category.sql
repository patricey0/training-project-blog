-- Verify oblog:post_with_category on pg

BEGIN;

-- XXX Add verifications here.
select * from post_with_category where false;

ROLLBACK;
