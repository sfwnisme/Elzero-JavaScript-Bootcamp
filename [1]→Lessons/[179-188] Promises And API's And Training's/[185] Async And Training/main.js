/* ===============[Promise Regular Way]=============== */
function data1() {
  return new Promise((res, rej) => {
    const shop = [];
    if (shop.length > 0) {
      res("Available Monitors");
    } else {
      rej(Error("-----> NOO"));
    }
  });
}

data1()
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

/* ===============[Promise Regular Way 2]=============== */

function data2() {
  const devices = [];
  if (devices.length > 0) {
    return Promise.resolve("We Have PC");
  } else {
    return Promise.reject(Error("-----> NOO"));
  }
}
data2()
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

/* ===============[Regular Function Way]=============== */

 function data3() {
  let student =["Ahmed"];
  if(student.length > 0) {
    return "Good Student";
  } else {
    return Error("-----> NOO");
  }
}

console.log(data3());

/* ===============[Async Way]=============== */

async function data4() {
  let book =["Stories"];
  if(book.length > 0) {
    return "There's A Great Stroy Named Oxford Bookworms";
  } else {
    throw new Error("-----> NOO");
  }
}

console.log(data4());
data4().then((result) => console.log(result))