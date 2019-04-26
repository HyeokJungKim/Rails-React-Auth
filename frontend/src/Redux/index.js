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
