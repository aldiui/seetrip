@extends('layouts.pdf')

@section('title', 'LAPORAN PENARIKAN')

@push('style')
@endpush

@section('main')
    <table width="100%" border="0" cellpadding="2.5" cellspacing="0">
        <tbody>
            <tr>
                <td align="center">
                    <h3>LAPORAN PENARIKAN SEETRIP</h3>
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
                    <th scope="col">Biaya Admin</th>
                    <th scope="col">Total</th>
                </tr>
            </thead>
            <tbody>
                @forelse ($withdraws as $withdraw)
                    <tr>
                        <td align="center">{{ $loop->iteration }}</td>
                        <td>{{ $withdraw->nomor_pembayaran }}</td>
                        <td>{{ formatTanggal($withdraw->created_at, 'j F Y') }}</td>
                        <td>{{ $withdraw->user->nama }}</td>
                        <td>{{ $withdraw->wallet->nama_bank }}</td>
                        <td align="right">{{ formatRupiah($withdraw->nominal) }}</td>
                        <td align="right">{{ formatRupiah($withdraw->biaya_admin) }}</td>
                        <td align="right">{{ formatRupiah($withdraw->nominal - $withdraw->biaya_admin) }}</td>
                    </tr>
                @empty
                    <tr>
                        <td align="center" colspan="8">Tidak ada data</td>
                    </tr>
                @endforelse
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="5" align="right"><b>Total</b></td>
                    <td align="right"><b>{{ formatRupiah($withdraws->sum('nominal') ?? 0) }}</b></td>
                    <td align="right"><b>{{ formatRupiah($withdraws->sum('biaya_admin') ?? 0) }}</b></td>
                    <td align="right">
                        <b>{{ formatRupiah(($withdraws->sum('nominal') ?? 0) - ($withdraws->sum('biaya_admin') ?? 0)) }}</b>
                    </td>
                </tr>
        </table>
    </div>



@endsection
