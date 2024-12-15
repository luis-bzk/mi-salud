select
  use_id,
  use_name,
  use_last_name,
  use_email,
  use_password,
  use_token,
  use_created_date,
  use_record_status
from
  core.core_user use
where
  use.use_email = "$1"
  and use.use_record_status = "$2";