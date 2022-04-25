// Copyright (c) 2022 Madeleine Forgeron All rights reserved
//
// Created by: Madeleine Forgeron
// Created on: April 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates SA of a ellipsoid.
 */
function calculate() {
  // input
  let axisA = parseFloat(document.getElementById('axis-a-of-ellipsoid').value) 
  let axisB = parseFloat(document.getElementById('axis-b-of-ellipsoid').value)
  let axisC = parseFloat(document.getElementById('axis-c-of-ellipsoid').value)
  
  // process
  let SA = (4 * (Math.PI) * (((axisA * axisB) ** 1.6 + (axisA * axisC) ** 1.6 + (axisB * axisC) ** 1.6) / 3) ** 0.625)
  
  // output
  document.getElementById('SA').innerHTML = 'The volume of the ellipsoid is: ' + SA.toFixed(2) + ' cm³'
}