@extends('layouts.pdf')

@section('title', 'LAPORAN TRANSAKSI')

@push('style')
@endpush

@section('main')
    <table width="100%" border="0" cellpadding="2.5" cellspacing="0">
        <tbody>
            <tr>
                <td align="center">
                    <h3>LAPORAN TRANSAKSI SEETRIP</h3>
                </td>
            </tr>
        </tbody>
    </table>
    <hr style="height:1px;background-color:black;">
    <br>
    <div style="width: 100%; display: inline-block; vertical-align: top;">
        <table width="100%" border="1" cellpadding="2.5" cellspacing="0">
            <thead>
                <tr>
                    <th scope="col" width="5%">#</th>
                    <th scope="col">Nomor</th>
                    <th scope="col">Tanggal</th>
                    <th scope="col">Nama</th>
                    <th scope="col">Destinasi</th>
                    <th scope="col">Pembayaran</th>
                    <th scope="col">Kuantitas </th>
                    <th scope="col">Total</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($transactions as $transaksi)
                    <tr>
                        <td align="center">{{ $loop->iteration }}</td>
                        <td>{{ $transaksi->nomor_pemesanan }}</td>
                        <td>{{ formatTanggal($transaksi->created_at, 'j F Y') }}</td>
                        <td>{{ $transaksi->user->nama }}</td>
                        <td>{{ $transaksi->destinationPrice->destination->nama . ' - ' . $transaksi->destinationPrice->nama }}
                        </td>
                        <td>{{ $transaksi->wallet->nama_bank }}</td>
                        <td>{{ $transaksi->quantitas }}</td>
                        <td align="right">{{ formatRupiah($transaksi->total_harga) }}</td>
                    </tr>
                @endforeach
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="7" align="right"><b>Total</b></td>
                    <td align="right"><b>{{ formatRupiah($transactions->sum('total_harga') ?? 0) }}</b></td>
                </tr>
            </tfoot>
        </table>
    </div>



@endsection
