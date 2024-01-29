export const cognitoLoginErrorMessageFormatter = (
    originalMessage,
    IsSSO = false
  ) => {
    if (IsSSO && originalMessage === 'Incorrect username or password') {
      return 'Incorrect email address';
    }
    if (originalMessage[originalMessage.length - 1] === '.') {
      return originalMessage.slice(0, -1);
    }
  
    return originalMessage;
  };
  