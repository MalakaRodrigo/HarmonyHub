import {
    logIn,
    signUp,
    ssoLogIn,
    logOut,
    restoreSession,
    resetSession,
    setUsername,
    completeNewPassword,
    forgotPassword,
    forgotPasswordSubmit,
    resetErrorMessage,
    setSecurityDrawerVisibleStatus,
    set2FAuthenticationModalVisibleStatus,
    setAuthenticatorAppModalVisibleStatus,
    setAuthenticatorSMSModalVisibleStatus,
    setupTOTP,
    verifyTOTP,
    verifyMFA,
    getPreferredMFA,
    disableMFA,
    setupMobile,
    resendMobileVerificationCode,
    verifyMobile,
    setSetupMobileStep,
    resendMobileMFACode,
  } from '../routines';
  import {
    SESSION_EXPIRED_ERROR,
    DEFAULT_ERROR_MESSAGE,
  } from '../../common/constants/commonConstants';
  
  import { SMS_SETUP_STEPS } from '../../common/constants/userManagementConstants';
  
  const initialState = {
    isValidSession: false,
    isSessionError: false,
    username: null,
    isLoading: false,
    errorMessage: '',
    isError: false,
    isLoginError: false,
    isForgotPasswordError: false,
    isSuccess: false,
    isShowChallenge: false,
    challengeName: '',
    temporaryPassword: '',
    displaySuccessMessage: false,
    isSecurityDrawerVisible: false,
    isAuthenticatorAppModalVisible: false,
    isAuthenticatorSMSModalVisible: false,
    is2FAuthenticationModalVisible: false,
    isSetupTOTPLoading: false,
    totpAuthorizationCode: '',
    totpAuthorizationURL: '',
    isVerifyTOTPLoading: false,
    isMFAactivationError: false,
    isMFAactivationSuccess: false,
    challengeUser: {},
    isPreferredMFALoading: false,
    preferredMFA: '',
    isDisableMFALoading: false,
    mobileNumberSetupStep: SMS_SETUP_STEPS.REGISTER_PHONE,
    isSetupMobileLoading: false,
    isVerifyMobileLoading: false,
    isResendMFALoading: false,
  };
  
  const commonDefaultValuesForTrigger = {
    isLoading: true,
    isError: false,
    isLoginError: false,
    isForgotPasswordError: false,
    isSuccess: false,
    isShowChallenge: false,
    challengeName: '',
    challengeUser: {},
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case logIn.TRIGGER:
      case signUp.TRIGGER:
        return {
          ...state,
          ...commonDefaultValuesForTrigger,
          temporaryPassword: '',
        };
      case resetSession.TRIGGER: {
        return {
          ...state,
        };
      }
      case logIn.SUCCESS:
      case signUp.SUCCESS:
      case restoreSession.SUCCESS: {
        console.log('action.payload')
        return {
          ...state,
          isLoading: false,
          isError: false,
          isLoginError: false,
          isForgotPasswordError: false,
          isValidSession: true,
          challengeUser: {},
          temporaryPassword: '',
          username: action.payload.name,
          userId: action.payload.sessionId,
        };
      }
  
      case forgotPasswordSubmit.SUCCESS:
      case forgotPassword.SUCCESS:
        return {
          ...state,
          isLoading: false,
          isForgotPasswordError: false,
          displaySuccessMessage: true,
          isSuccess: true,
        };
  
      case logOut.SUCCESS:
        return {
          ...initialState,
        };
  
      case forgotPassword.FAILURE: {
        return {
          ...state,
          isLoading: false,
          isForgotPasswordError: true,
          errorMessage:
            action.payload?.error.message ||
            action.payload?.error.response?.data?.message ||
            DEFAULT_ERROR_MESSAGE,
          isError: true,
        };
      }
      case completeNewPassword.FAILURE:
      case forgotPasswordSubmit.FAILURE:
      case logIn.FAILURE:
      case ssoLogIn.FAILURE:
      case verifyMFA.FAILURE:
      case resendMobileMFACode.FAILURE:
        return {
          ...state,
          isLoading: false,
          isLoginError: true,
          challengeUser: action.payload.challengeUser || {},
          errorMessage:
            action.payload?.error.message ||
            action.payload?.error.response?.data?.message ||
            DEFAULT_ERROR_MESSAGE,
          isError: true,
          isResendMFALoading: false,
        };
  
      case resetErrorMessage.TRIGGER:
        return {
          ...state,
          errorMessage: '',
          displaySuccessMessage: false,
        };
  
      case setUsername.TRIGGER:
        return {
          ...state,
          username: action.payload.username,
        };
  
      case restoreSession.FAILURE: {
        return {
          ...initialState,
          isLoading: false,
        };
      }
      case setSecurityDrawerVisibleStatus.TRIGGER: {
        return {
          ...state,
          isMFAactivationError: false,
          isMFAactivationSuccess: false,
          isSecurityDrawerVisible: action.payload.isVisible,
        };
      }
      case set2FAuthenticationModalVisibleStatus.TRIGGER: {
        return {
          ...state,
          is2FAuthenticationModalVisible: action.payload.isVisible,
        };
      }
      case setAuthenticatorAppModalVisibleStatus.TRIGGER: {
        return {
          ...state,
          isAuthenticatorAppModalVisible: action.payload.isVisible,
        };
      }
  
      case setAuthenticatorSMSModalVisibleStatus.TRIGGER: {
        return {
          ...state,
          isAuthenticatorSMSModalVisible: action.payload.isVisible,
        };
      }
  
      case setupTOTP.TRIGGER: {
        return {
          ...state,
          isSetupTOTPLoading: true,
        };
      }
  
      case setupTOTP.SUCCESS: {
        return {
          ...state,
          isSetupTOTPLoading: false,
          totpAuthorizationCode: action.payload.authCode,
          totpAuthorizationURL: action.payload.authURL,
        };
      }
  
      case verifyTOTP.TRIGGER: {
        return {
          ...state,
          isVerifyTOTPLoading: true,
          isMFAactivationError: false,
          isMFAactivationSuccess: false,
          errorMessage: '',
        };
      }
  
      case verifyTOTP.SUCCESS: {
        return {
          ...state,
          isVerifyTOTPLoading: false,
          isMFAactivationSuccess: true,
        };
      }
  
      case resendMobileVerificationCode.TRIGGER:
      case setupMobile.TRIGGER: {
        return {
          ...state,
          isMFAactivationError: false,
          isMFAactivationSuccess: false,
          isSetupMobileLoading: true,
        };
      }
      case resendMobileVerificationCode.SUCCESS:
      case setupMobile.SUCCESS: {
        return {
          ...state,
          isSetupMobileLoading: false,
          mobileNumberSetupStep: SMS_SETUP_STEPS.VERIFY_PHONE,
        };
      }
  
      case verifyMobile.TRIGGER: {
        return {
          ...state,
          isMFAactivationError: false,
          isMFAactivationSuccess: false,
          isVerifyMobileLoading: true,
        };
      }
  
      case verifyMobile.SUCCESS: {
        return {
          ...state,
          isVerifyMobileLoading: false,
          isMFAactivationSuccess: true,
        };
      }
  
      case resendMobileVerificationCode.FAILURE:
      case setupMobile.FAILURE: {
        if (action.payload.noAlert) {
          return {
            ...state,
            isVerifyMobileLoading: false,
            isMFAactivationError: true,
            isMFAactivationSuccess: false,
            isSetupMobileLoading: false,
            errorMessage: action.payload.error.message,
          };
        }
        return { ...state };
      }
  
      case verifyMobile.FAILURE: {
        if (action.payload.noAlert) {
          return {
            ...state,
            isVerifyMobileLoading: false,
            isMFAactivationError: true,
            isMFAactivationSuccess: false,
            errorMessage: action.payload.error.message,
          };
        }
        return { ...state };
      }
  
      case verifyTOTP.FAILURE: {
        if (action.payload.noAlert) {
          return {
            ...state,
            isVerifyTOTPLoading: false,
            isMFAactivationError: true,
            isMFAactivationSuccess: false,
            errorMessage: action.payload.error.message,
          };
        }
        return { ...state };
      }
  
      case setSetupMobileStep.TRIGGER: {
        return {
          ...state,
          isPreferredMFALoading: false,
          isMFAactivationError: false,
          isVerifyMobileLoading: false,
          isMFAactivationSuccess: false,
          isSetupMobileLoading: false,
          mobileNumberSetupStep: action.payload.step,
        };
      }
  
      case getPreferredMFA.TRIGGER: {
        return {
          ...state,
          isPreferredMFALoading: true,
        };
      }
  
      case getPreferredMFA.SUCCESS: {
        return {
          ...state,
          isPreferredMFALoading: false,
          preferredMFA: action.payload.preferredMFA,
        };
      }
  
      case disableMFA.TRIGGER: {
        return {
          ...state,
          isDisableMFALoading: true,
        };
      }
      case disableMFA.SUCCESS: {
        return {
          ...state,
          isMFAactivationError: false,
          isMFAactivationSuccess: false,
          isDisableMFALoading: false,
        };
      }
      case (action.type.match('/FAILURE') || {}).input:
        if (
          action.payload.error.message === SESSION_EXPIRED_ERROR ||
          (typeof action.payload.error === 'string' &&
            action.payload.error.includes(SESSION_EXPIRED_ERROR))
        ) {
          return {
            ...state,
            isSessionError: true,
          };
        }
        return {
          ...state,
        };
  
      default:
        return state;
    }
  };
  
  export default authReducer;
  