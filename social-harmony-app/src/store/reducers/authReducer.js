import { logIn, signUp, logOut } from "../routines";
import { DEFAULT_ERROR_MESSAGE } from "../../common/constants/commonConstants";

const initialState = {
  isValidSession: false,
  isSessionError: false,
  username: null,
  isLoading: false,
  errorMessage: "",
  isError: false,
  isLoginError: false,
  isForgotPasswordError: false,
  isSuccess: false,
};

const commonDefaultValuesForTrigger = {
  isLoading: true,
  isError: false,
  isLoginError: false,
  isForgotPasswordError: false,
  isSuccess: false,
  isShowChallenge: false,
  challengeName: "",
  challengeUser: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case logIn.TRIGGER:
    case signUp.TRIGGER:
      return {
        ...state,
        ...commonDefaultValuesForTrigger,
        temporaryPassword: "",
      };

    case logIn.SUCCESS:
    case signUp.SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        isError: false,
        isLoginError: false,
        isForgotPasswordError: false,
        isValidSession: true,
        username: action.payload.name,
        useremail: action.payload.email,
      };
    }

    case logOut.SUCCESS:
      return {
        ...initialState,
      };

    case logIn.FAILURE:
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

    default:
      return state;
  }
};

export default authReducer;
