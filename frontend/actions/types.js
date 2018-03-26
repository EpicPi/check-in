//auth event types
export const FETCH_USER = 'fetch_user';
export const SET_USER_TYPE = 'set_type';
export const RESET_USER_TYPE = 'reset_type';

//host event types
export const HOST_ADD_EVENT = 'host_add_event';
export const HOST_GET_EVENTS = 'host_get_events';
export const HOST_GOT_EVENTS = 'host_got_events';
export const HOST_REMOVE_EVENT = 'host_remove_event';
export const HOST_REPLACE = 'host_replace';
export const HOST_EDIT_EVENT = 'host_edit_event';
export const HOST_CHECK_SIGNUP_CODE = 'host_check_code';
export const HOST_CHECKED_SIGNUP_CODE = 'host_checked_code';
export const HOST_RESET_SIGNUP_EVENT = 'host_reset_event';
export const HOST_CHECKIN = 'host_checkin';

//guest event types
export const GUEST_JOIN_EVENT = 'guest_join_event';
export const GUEST_GET_EVENTS = 'guest_get_events';
export const GUEST_GOT_EVENTS = 'guest_got_events';
export const GUEST_FIND_EVENT = 'guest_find_event';
export const GUEST_FOUND_EVENT = 'guest_found_event';
export const GUEST_RESET_JOIN_FIND = 'guest_reset_join_find';
export const GUEST_CHECKIN = 'guest_checkin';
export const GUEST_CHECK_CHECKIN_CODE = 'guest_check_checkin';
export const GUEST_CHECKED_CHECKIN_CODE = 'guest_checked_checkin';
export const GUEST_RESET_CHECKIN_CODE = 'guest_reset_checkin';

//event event types
export const SELECT_EVENT = 'select event';
export const GET_RSVPS = 'get_rsvps';
export const GOT_RSVPS = 'got_rsvps';
export const GET_ATTENDS = 'get_attends';
export const GOT_ATTENDS = 'got_attends';
export const RESET_EVENT = 'reset_event';
export const REPLACE_RSVPS = 'replace_rsvps';
export const REPLACED_RSVPS = 'replaced_rsvps';
export const REPLACE_ALL_RSVPS = 'replace_all_rsvps';
export const REMOVE_GUEST = 'remove_guest';
export const CHANGE_GUEST = 'change_guest';
export const ADD_GUEST = 'add_guest';

// open event types
export const OPEN_GET_EVENT = 'open_get_event';
export const OPEN_GOT_EVENT = 'open_got_event';
export const OPEN_JOIN_EVENT = 'open_join_event';
