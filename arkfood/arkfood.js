const arkFood = (harga, voucher, jarak, pajak) => {

    // harga
    console.log(`harga : ${harga}`)

    // potongan 
    if (harga >= 50000 && voucher == 'ARKAFOOD5') {
        if (harga > 100000) {
            voucher = 50000
        } else {
            voucher = harga * 0.5
        }
    } else if (harga >= 25000 && voucher == 'DITRAKTIRDEMY'){
        if (harga > 100000) {
            voucher = 30000
        } else {
            voucher = harga * 0.3
        }
    } else {
        voucher = 0
        
    } 
    console.log(`potongan : ${voucher}`)

    // jarak
    let totalOngkir = ongkir(jarak)
    console.log(`Biaya antar : ${totalOngkir}`)

    // pajak
    let totalPajak1 = totalPajak(harga, pajak)
    console.log(`Pajak : ${totalPajak1}`)

    // subtotal
    let subtotal = harga + totalOngkir + totalPajak1 - voucher 
    console.log(`Subtotal : ${subtotal}`)
}

function ongkir (jarak) {
    let hargaOngkir = 5000
    let ongkirTambahan = 3000
    let hasil = 0
    let total = 0
    if (jarak <= 2) {
        return jarak = hargaOngkir
    } else {
        for (let i = 3; i <= jarak; i++) {
            hasil = (ongkirTambahan + i) - i
            total += hasil
        }
        return jarak = hargaOngkir + total
    }
}

function totalPajak (harga, pajak) {
    let totalPajak2 = 0
    if (pajak === true) {
       totalPajak2 = harga * 0.05
    } else {
        totalPajak2 = 0
    }
    return totalPajak2

}

arkFood (75000, 'ARKAFOOD5', 5, true)
