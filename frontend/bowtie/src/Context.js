import React from "react";
import {useState} from "react";

export const OptionsContext = React.createContext();
// Default options values
export const optionsContextDefaultValues = {
    images: true,
    release_date_released: false,
    release_date_unreleased: true,
  }
