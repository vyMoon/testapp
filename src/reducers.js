const initialUserState = {
  tokens: null,
  user: null
}

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case 'tokens' :
      return {
        ...state,
        tokens: {...action.tokens}
      };
    case 'user' :
      return {
        ...state,
        user: {...action.user}
      }
    case 'logout' :
      return {
        ...state,
        user: null,
        tokens: null,
      }
    default:
      return state;
  }
}

const initError = { status: null, message: ''};

const initialSearchState = {
  amount: 20,
  subject: 'artist',
  string: '',
  music: {subject: null, data: null},
  error: initError,
}



export const searchReducer = (state = initialSearchState, action) => {
  switch (action.type) {
    case 'string' :
      return {
        ...state,
        string: action.string
      }
    case 'subject':
      return {
        ...state,
        subject: action.value,
      }
    case 'amount' :
      return {
        ...state,
        amount: action.value,
      }
    case 'music' :
      return {
        ...state,
        error: initError,
        music: {...action.music}
      }
    case 'error' :
      return {
        ...state,
        error: action.error
      }
    default: 
    return state;
  }
}
