import { createRoutine } from 'redux-saga-routines';

export const logIn = createRoutine('LOG_IN');
export const signUp = createRoutine('SIGN_UP');

export const gmailLogin = createRoutine('GMAIL_LOGIN');
export const getGmailLogin = createRoutine('GET_GMAIL_LOGIN');
export const getEmails = createRoutine('GET_MAILS');
export const fetchFieldPins = createRoutine('FETCH_FIELD_PINS');
export const createFieldPin = createRoutine('CREATE_FIELD_PIN');
export const deleteFieldPin = createRoutine('DELETE_FIELD_PIN');
export const uploadFileInProgress = createRoutine('UPLOAD_FILE_IN_PROGRESS');

export const updateTableColumnDefinition = createRoutine(
  'UPDATE_TABLE_COLUMN_DEFINITION'
);

// auth
export const setUsername = createRoutine('SET_USERNAME');
export const ssoLogIn = createRoutine('SSO_LOG_IN');
export const logOut = createRoutine('LOG_OUT');
export const restoreSession = createRoutine('RESTORE_SESSION');
export const resetSession = createRoutine('RESET_SESSION');
export const completeNewPassword = createRoutine('COMPLETE_NEW_PASSWORD');
export const forgotPassword = createRoutine('FORGOT_PASSWORD');
export const forgotPasswordSubmit = createRoutine('FORGOT_PASSWORD_SUBMIT');
export const showCognitoChallenge = createRoutine('SHOW_COGNITO_CHALLENGE');
export const resetErrorMessage = createRoutine('RESET_ERROR_MESSAGE');
export const set2FAuthenticationModalVisibleStatus = createRoutine(
  'SET_2F_AUTHENTICATION_MODAL_VISIBLE_STATUS'
);
export const setAuthenticatorAppModalVisibleStatus = createRoutine(
  'SET_AUTHENTICATOR_APP_MODAL_VISIBLE_STATUS'
);
export const setAuthenticatorSMSModalVisibleStatus = createRoutine(
  'SET_AUTHENTICATOR_SMS_MODAL_VISIBLE_STATUS'
);
export const setSecurityDrawerVisibleStatus = createRoutine(
  'SET_SECURITY_DRAWER_VISIBLE_STATUS'
);
export const setupTOTP = createRoutine('SETUP_TOTP');
export const verifyTOTP = createRoutine('VERIFY_TOTP');
export const verifyMFA = createRoutine('VERIFY_MFA');
export const setupMobile = createRoutine('SETUP_MOBILE');
export const resendMobileVerificationCode = createRoutine(
  'RESEND_MOBILE_VERIFICATION_CODE'
);
export const resendMobileMFACode = createRoutine('RESEND_MOBILE_MFA_CODE');
export const verifyMobile = createRoutine('VERIFY_MOBILE');
export const setSetupMobileStep = createRoutine('SET_SETUP_MOBILE_STEP');

export const disableMFA = createRoutine('DISABLE_MFA');
export const getPreferredMFA = createRoutine('GET_PREFERRED_MFA');
export const getHelpJuiceSSOToken = createRoutine('GET_HELP_JUICE_SSO_TOKEN');

// user profile
export const fetchCurrentUser = createRoutine('FETCH_CURRENT_USER');
export const updateCurrentUser = createRoutine('UPDATE_CURRENT_USER');
export const updateProfileWizardActiveKey = createRoutine(
  'UPDATE_PROFILE_WIZARD_ACTIVE_KEY'
);

// users management // TODO : evaluate and remove unwanted actions
export const createUser = createRoutine('CREATE_USER');
export const fetchUsers = createRoutine('FETCH_USERS');
export const previewUsers = createRoutine('PREVIEW_USERS');
export const setUserManagementModelState = createRoutine(
  'SET_USER_MANAGEMENT_MODEL_STATE'
);
export const setSelectedUsers = createRoutine('SET_SELECTED_USERS');
export const updatePreviewUserRole = createRoutine('UPDATE_PREVIEW_USER_ROLE');

export const inviteUsers = createRoutine('INVITE_USERS');
export const updateUser = createRoutine('UPDATE_USER');

export const updateUserStatus = createRoutine('UPDATE_USER_STATUS');
export const disableUserMFA = createRoutine('DISABLE_USER_MFA');
export const resendUserInvitation = createRoutine('RESEND_USER_INVITATION');

export const setInviteUsersPanelVisibleStatus = createRoutine(
  'SET_INVITE_USERS_PANEL_VISIBLE_STATUS'
);
export const setEditUserInfoPanelVisibleStatus = createRoutine(
  'SET_EDIT_USER_INFO_PANEL_VISIBLE_STATUS'
);
export const setEditUserRolePanelVisibleStatus = createRoutine(
  'SET_EDIT_USER_ROLE_PANEL_VISIBLE_STATUS'
);

export const setDeactivateUserModelVisibleStatus = createRoutine(
  'SET_DEACTIVATE_USER_MODEL_VISIBLE_STATUS'
);

export const setReactivateUserModelVisibleStatus = createRoutine(
  'SET_REACTIVATE_USER_MODEL_VISIBLE_STATUS'
);

export const setResendInvitationModelVisibleStatus = createRoutine(
  'SET_RESEND_INVITATION_MODEL_VISIBLE_STATUS'
);

export const setRevokeInvitationModelVisibleStatus = createRoutine(
  'SET_REVOKE_INVITATION_MODEL_VISIBLE_STATUS'
);

export const setDisableMFAModelVisibleStatus = createRoutine(
  'SET_DISABLE_MFA_MODEL_VISIBLE_STATUS'
);
//

export const setUserProfileVisibleStatus = createRoutine(
  'SET_USER_PROFILE_VISIBLE_STATUS'
);

// currency
export const fetchActiveCurrencies = createRoutine('FETCH_ACTIVE_CURRENCIES');
export const fetchCurrencyDefinitions = createRoutine(
  'FETCH_CURRENCY_DEFINITIONS'
);
export const fetchMonthlyExchangeRates = createRoutine(
  'FETCH_MONTHLY_EXCHANGE_RATES'
);
export const updateDefaultCurrency = createRoutine('UPDATE_DEFAULT_CURRENCY');
export const updateDisplayCurrency = createRoutine('UPDATE_DISPLAY_CURRENCY');
export const postExchangeRates = createRoutine('POST_EXCHANGE_RATES');
export const addCurrencyTypes = createRoutine('ADD_CURRENCY_TYPES');

// lifecycles
export const fetchLifecycleStages = createRoutine('FETCH_LIFECYCLE_STAGES');
export const fetchLifecycleStageSystemUsage = createRoutine(
  'FETCH_LIFECYCLE_STAGE_SYSTEM_USAGE'
);
export const setDefaultLifecycleStage = createRoutine(
  'SET_DEFAULT_LIFECYCLE_STAGE'
);
export const addLifecycleStage = createRoutine('ADD_LIFECYCLE_STAGE');
export const deleteLifecycleStage = createRoutine('DELETE_LIFECYCLE_STAGE');
export const reorderLifecycleStage = createRoutine('REORDER_LIFECYCLE_STAGE');
export const renameLifecycleStage = createRoutine('RENAME_LIFECYCLE_STAGE');

export const fetchSummaryCollapseStatus = createRoutine(
  'FETCH_SUMMARY_COLLAPSE_STATUS'
);
export const saveSummaryCollapseStatus = createRoutine(
  'SAVE_SUMMARY_COLLAPSE_STATUS'
);

export const toggleMoveLinkedEntityForm = createRoutine(
  'TOGGLE_MOVE_LINKED_ENTITY_FORM'
);
export const toggleMoveEntityForm = createRoutine('TOGGLE_MOVE_ENTITY_FORM');
export const moveLinkedEntities = createRoutine('MOVE_LINKED_ENTITIES');
export const moveEntity = createRoutine('MOVE_ENTITY');

// image upload
export const uploadProfileImage = createRoutine('UPDATE_PROFILE_IMAGE');

export const uploadPublicImage = createRoutine('UPLOAD_PUBLIC_IMAGE');
export const uplaodVideoFeed = createRoutine('UPLOAD_VIDEO_IMAGE');
