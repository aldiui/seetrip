<?php

use Carbon\Carbon;

if (!function_exists('formatTanggal')) {
    function formatTanggal($tanggal = null, $format = 'l, j F Y')
    {
        $parsedDate = Carbon::parse($tanggal)->locale('id')->settings(['formatFunction' => 'translatedFormat']);
        return $parsedDate->format($format);
    }
}

if (!function_exists('formatRupiah')) {
    function formatRupiah($amount, $mode = null)
    {
        $isNegative = $amount < 0;

        $amount = abs($amount);

        $formatted = $mode == 1 ? number_format($amount, 0, ',', '.') : "Rp. " . number_format($amount, 0, ',', '.');

        if ($isNegative) {
            $formatted = '- ' . $formatted;
        }

        return $formatted;
    }
}

if (!function_exists('convertToEmbedUrl')) {
    function convertToEmbedUrl($url)
    {
        if (preg_match('/youtu.be\/([^\?]*)/', $url, $match) || preg_match('/youtube.com\/watch\?v=([^\&\?\/]+)/', $url, $match)) {
            return 'https://www.youtube.com/embed/' . $match[1];
        }
        return $url;
    }
}
