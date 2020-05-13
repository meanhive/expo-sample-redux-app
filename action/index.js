export const QUOTES_AVAILABLE = "QUOTES_AVAILABLE";
export const ADD_QUOTE = "ADD_QUOTE";
export const UPDATE_QUOTE = "UPDATE_QUOTE";
export const DELETE_QUOTE = "DELETE_QUOTE";

import { AsyncStorage } from "react-native";

//add new Quote

export function addQuote(quote) {}

// Read  an existing Quotes
export function getQuotes() {
  return (dispatch) => {
    AsyncStorage.getItem("data", (err, quotes) => {
      if (quotes !== null) {
        dispatch({ type: QUOTES_AVAILABLE, quotes: JSON.parse(quotes) });
      }
    });
  };
}

// Update Quotes
export function updateQuote(quote) {}

//read single quote data and index
function getIndex(data, id) {}

// Delete Quote
export function deleteQuote(id) {}
