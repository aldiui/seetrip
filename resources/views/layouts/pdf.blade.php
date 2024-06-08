<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" name="viewport">
    <title>@yield('title') - {{ config('app.name') }}</title>
    <style>
        body {
            font-family: 'Times New Roman', Times, serif;
            line-height: 1.5;
            margin: 0;
            padding: 0;
            font-size: 12px;
        }

        h3 {
            margin: 2;
            font-size: 14px;
        }
    </style>
    @stack('style')
</head>
</head>

<body>
    @yield('main')
</body>

</html>
