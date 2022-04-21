// Copyright (c) 2022 Madeleine Forgeron All rights reserved
//
// Created by: Madeleine Forgeron
// Created on: April 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates volume of a torus.
 */
function calculate() {
  // input
  let Mradius = parseFloat(document.getElementById('Mradius-of-torus').value) 
  let mradius = parseFloat(document.getElementById('mradius-of-torus').value)
  
  // process
  let volume = (1/6) * sideA * height
  
  // output
  document.getElementById('volume').innerHTML = 'The volume of the torus is: ' + volume.toFixed(2) + ' ml³'
}