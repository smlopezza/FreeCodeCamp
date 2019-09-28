/*
Design a cash register drawer function checkCashRegister()that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cidis a 2D array listing available currency.

The checkCashRegister()function should always return an object with a statuskey and a changekey.

Return {status: "INSUFFICIENT_FUNDS", change: []}if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]}with cash-in-drawer as the value for the key changeif it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the changekey.

*/

function checkCashRegister(price, cash, cid) {
  const change = parseFloat(cash-price).toFixed(2);
  var inDrawer=0;
  var cashRegisterReturn = {status: "", change: []};
  var valueBills = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]];
  var Bills = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
  var change2 = change;

  // calculates the number of bills of every denomination
  for(let i=0; i<cid.length; i++){
    inDrawer += cid[i][1];
    Bills[i][1] =  parseInt(cid[i][1]/valueBills[i][1]);
  }

  let m=0;
  let nBills=0;

  if (change > inDrawer){
    console.log("I am here")
    cashRegisterReturn.status = "INSUFFICIENT_FUNDS";
    cashRegisterReturn.change = [];
  } else if(change == inDrawer){
    cashRegisterReturn.status = "CLOSED";
    cashRegisterReturn.change = cid;
  } else {
    inDrawer = parseFloat(inDrawer).toFixed(2);
    cashRegisterReturn.status = "OPEN";
    for (let k = 0; k < valueBills.length; k++){
      nBills = 0;
      while ( (change2 >= valueBills[8-k][1]) && (Bills[8-k][1] != 0) ){

          //console.log("Change = ", change2)
          //console.log("Bill = ", valueBills[8-k][0]);

          change2 = parseFloat(change2 - valueBills[8-k][1]).toFixed(2);
          nBills += valueBills[8-k][1];;
          //console.log("nBills", nBills);
          Bills[8-k][1] -=1;
          //console.log("rest", Bills[8-k][1]);
      }
      if (nBills > 0){
          //console.log("Aqui estoy")
          cashRegisterReturn.change[m] = [valueBills[8-k][0], nBills];
          console.log(cashRegisterReturn.change[m]);
          m +=1;
        }
    }

      if (change2 > 0){
        cashRegisterReturn.status = "INSUFFICIENT_FUNDS";
        cashRegisterReturn.change = [];
      }
  }
  console.log(cashRegisterReturn.change[0]);
  console.log(change2);

  return cashRegisterReturn;
}
// should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
