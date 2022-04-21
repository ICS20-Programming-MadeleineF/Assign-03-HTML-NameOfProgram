// Copyright (c) 2022 Madeleine Forgeron All rights reserved
//
// Created by: Madeleine Forgeron
// Created on: April 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates volume of a cone.
 */
function calculate() {
  // input
  let radius = parseFloat(document.getElementById('radius-of-cone').value) 
  let height = parseFloat(document.getElementById('height-of-cone').value)
  
  // process
  let volume = (1/6) * sideA * height
  
  // output
  document.getElementById('volume').innerHTML = 'The volume of the cone is: ' + volume.toFixed(2) + ' ml³'
}