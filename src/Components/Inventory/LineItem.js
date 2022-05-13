import * as React from 'react';
import { useSelector } from "react-redux";

import BlankInventory from './inventory-blanks';
import MaiInventory from './inventory-mai';
import MaitInventory from './inventory-mait';
import FfiInventory from './inventory-ffi';
import FfitInventory from './inventory-ffit';

function LineItem() {

  const inventory = useSelector((state) => state.inventory.value);

  switch(inventory.inventoryChoice) {
    case "inventory-blank":
      return <BlankInventory/>
    case "inventory-mai":
      return <MaiInventory/>
    case "inventory-mait":
      return <MaitInventory/>
    case "inventory-ffi":
      return <FfiInventory/>
    case "inventory-ffit":
      return <FfitInventory/>
    default:
    return <MaiInventory/>
  }
}

export default LineItem;