const myPromese = new Promise((resolve, reject) => {
  setTimeout(() => {
    //Yo quiero mi dinero
    //resolve("Dinero obtenido");
    reject("No tengo dinero");
  }, 2000);
});

myPromese
  .then((myMoney) => console.log(myMoney))
  .catch((err) => console.warn(err)) //Warning
  .finally(() => console.log("Finalizado"));
