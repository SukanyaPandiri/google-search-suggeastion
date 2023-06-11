const SuggestionItem = props => {
  const {suggestionDetails, updateSearchInput} = props
  const {suggestion} = suggestionDetails

  const onClickSuggestion = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li>
      <div>
        <p>{suggestion}</p>
        <button type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            alt="arrow"
            onClick={onClickSuggestion}
          />
        </button>
      </div>
    </li>
  )
}

export default SuggestionItem
