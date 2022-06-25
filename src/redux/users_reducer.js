import { usersAPI } from "../api/api";

const SET_USERS = "SET_USERS";
const SET_NEW_USERS = "SET_NEW_USERS"

const initialState = {
  users: [],
  count : 6,
  page : 1,
  total_users : 0
};

const users_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users : [...state.users,...action.users],
        total_users : action.total_users,
        page : state.page + 1
      };
      case SET_NEW_USERS :
        return {
          ...state,
          users : action.users,
          page  : 2
        }

    default:
      return state;
  }
};

const setUserActionCreator = (usersCount,serverUsers) => {
  return {
    type: SET_USERS,
    users : serverUsers,
    total_users : usersCount
  };
};

const setNewUsersActionCreator = (serverUsers) => {
  return {
    type :SET_NEW_USERS,
    users : serverUsers
  }
}

export const getUsersThunkCreator = (page,count) => {
  return (dispatch) => {
    
    usersAPI.getUsers(page,count).then((response) => {
       let {total_users,users} = response.data
      
       dispatch(setUserActionCreator(total_users,users));
    });
  };
};

export const getNewUsersThunkCreator = () => {
  return (dispatch) => {
    usersAPI.getNewUsers()
    .then(response => {
      let {users} = response.data
      dispatch(setNewUsersActionCreator(users))
    })
  }
}

export default users_Reducer;
