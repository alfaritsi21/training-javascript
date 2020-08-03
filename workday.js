const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
      let cek = dataDay.find((item) => {
        return item === day
      })
      if(cek) {
        resolve(cek)
      } else {
        reject(new Error('Hari ini bukan hari kerja'))
      }
    }, 3000)
  })
}

// A. THEN CATCH
cekHariKerja('senin')   
// memanggil function cekHariKerja dengan parameter 'minggu'
.then((cek) => {
  console.log(cek);      
  // menggunakan then untuk mengecek apakah terdapat element array yang sama dengan parameter
  // apabila sama maka masuk ke dalam resolve yang ada di function cekHariKerja
})
.catch((error) => {
  console.log(error);
  // menggunakan catch untuk mengecek error jika element array tidak sama dengan parameter
  // apabila masuk ke catch maka masuk ke dalam reject yang ada di function cekHariKerja
})

// B. TRY CATCH
async function cekDay(day) {
  // menggunakan asynchronous untuk mengubah proses menjadi synchronous
  try {
  // menggunakan try untuk mencoba mengecek apakah terdapat element array yang sama dengan parameter
    const result = await cekHariKerja(day)
    // menggunakan await untuk menunggu agar result dijalankan terlebih dahulu sampai selesai
    console.log(result)
  } catch (error) {
    // menggunakan catch untuk mengecek error jika element array tidak sama dengan parameter
    // apabila masuk ke catch maka masuk ke dalam reject yang ada di function cekHariKerja
    console.log(error)
  }
}

cekDay('senin')
// memanggil fungsi cekDay menggunakan parameter 'sabtu'