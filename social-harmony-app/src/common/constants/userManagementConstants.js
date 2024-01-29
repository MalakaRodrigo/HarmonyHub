// Add users status
export const VALID = 'Valid';
export const INVALID_EMAIL = 'Invalid Email Address';
export const USER_EXISTS = 'Already Exists';

export const DEFAULT_ROLE_ID = 1;

// User status
export const ACTIVE = 'ACTIVE';
export const INVITED = 'INVITED';
export const DEACTIVATED = 'DEACTIVATED';

export const TAB_STATUS_TO_STATE_MAP = {
  [ACTIVE]: 'activeUsers',
  [INVITED]: 'invitedUsers',
  [DEACTIVATED]: 'deactivatedUsers',
};

// User sub status
export const FORCE_CHANGE_PASSWORD = 'FORCE_CHANGE_PASSWORD';
export const CREATING = 'CREATING';

// User roles
export const NORMAL_USER = { roleId: 1, roleName: 'Normal User' };
export const MANAGER = { roleId: 2, roleName: 'Manager' };
export const ADMINISTRATOR = { roleId: 3, roleName: 'Administrator' };
export const VIEWER = { roleId: 4, roleName: 'Viewer' };

export const ROLE_NAME_TO_ROLE_ID_MAP = {
  [NORMAL_USER.roleName]: NORMAL_USER.roleId,
  [MANAGER.roleName]: MANAGER.roleId,
  [ADMINISTRATOR.roleName]: ADMINISTRATOR.roleId,
  [VIEWER.roleName]: VIEWER.roleId,
};

// Cognito messages
export const INVALID_CODE_RECEIVED_FOR_USER = 'Invalid code received for user';
export const CODE_MISMATCH_AND_FAIL_ENABLE_SOFTWARE_TOKEN_MFA =
  'Code mismatch and fail enable Software Token MFA';
export const INVALID_VERIFICATION_CODE_PROVIDED =
  'Invalid verification code provided, please try again.';
export const INVALID_CODE_OR_AUTH_STATE_FOR_THE_USER =
  'Invalid code or auth state for the user.';

// velaris messages
export const INVALID_CODE = 'Invalid Code';
export const PLEASE_USE_SSO_OPTION =
  'Please use the single sign-on (SSO) option in the login page';
export const SSO_NOT_ENABLED = 'Single sign-on (SSO) is not enabled';

// MFA
export const MFA_TYPES = {
  SMS_MFA: 'SMS_MFA',
  SOFTWARE_TOKEN_MFA: 'SOFTWARE_TOKEN_MFA',
};

// MFA - SMS Setup Steps
export const SMS_SETUP_STEPS = {
  REGISTER_PHONE: 'REGISTER PHONE',
  VERIFY_PHONE: 'VERIFY PHONE',
};

export const SSO_TYPES = {
  NONE: 'NONE',
  GMAIL: 'GMAIL',
  OUTLOOK: 'OUTLOOK',
};
