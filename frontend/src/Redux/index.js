export const fetchSnacks = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/snacks")
    .then(res => res.json())
    .then(snacks => dispatch(saveSnacksToState(snacks)))
  }
}

export const saveSnacksToState = (snacks) => {
  return {type: "SAVE_SNACKS_TO_STATE", payload: snacks}
}

// userObj = {username: "eric", password: "123"}
export const fetchLogIn = (userObj, push) => {
  return (dispatch) => {
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userObj)
    })
    .then(res => res.json())
    .then((information) => {
      if (information.jwt) {
        dispatch(saveUserToState(information.user))
        dispatch(saveTokenToState(information.jwt))
        localStorage.setItem("jwt", information.jwt)
        push("/profile")
      }
    })
  }
}

export const saveUserToState = (userObj) => {
  return {type: "SAVE_USER_TO_STATE", payload: userObj}
}

export const saveTokenToState = (token) => {
  return {type: "SAVE_TOKEN_TO_STATE", payload: token}
}

export const fetchSnackBuying = (snackID, token) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/snacks/${snackID}/buy`, {
      method: "POST",
      headers: {"Authorization": token}
    })
    .then(res => res.json())
    .then(snack => {
      if (!snack.message) {
        dispatch(saveSnackToUser(snack))
      }
    })
  }
}

export const saveSnackToUser = (snack) => {
  return {type: "SAVE_SNACK_TO_USER", payload: snack}
}








//
