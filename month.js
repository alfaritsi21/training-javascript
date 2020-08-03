const getmonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = ['January', 'February', 'March', 'April', 'May', 'Juni', 'July', 'August',
    'September', 'October', 'November', 'Desember'];
    if(!error) {
      callback(null, month)
    } else {
      callback(new Error('Sorry Data Not Found', []))
    }
  }, 4000)
}

function checkMonth(isError, month) {
  if(!isError) {
    month.map((data) => {
      return console.log(data);
    })
  } else {
    console.log(isError)
  }
}

getmonth(checkMonth)