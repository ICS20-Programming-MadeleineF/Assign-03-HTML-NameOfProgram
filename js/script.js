// Copyright (c) 2022 Madeleine Forgeron All rights reserved
//
// Created by: Madeleine Forgeron
// Created on: April 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates volume of a ellipsoid.
 */
function calculate() {
  // insert axis'
  let axisA = parseFloat(document.getElementById('axis-a-of-ellipsoid').value) 
  let axisB = parseFloat(document.getElementById('axis-b-of-ellipsoid').value)
  let axisC = parseFloat(document.getElementById('axis-c-of-ellipsoid').value)
  
  // calculates volume with formula
  let volume = (4/3) * (Math.PI) * axisA * axisB * axisC
  
  // displays volume
  document.getElementById('volume').innerHTML = 'The volume of the ellipsoid is: ' + volume.toFixed(2) + ' cm³'
}