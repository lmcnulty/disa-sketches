#!/bin/sh

echo "<!doctype html>
<html>
<head>
<meta charset='utf-8'>
<title>Disa Sketches</title>
<style>
html {
	margin: 0px;
}
body {
	background: white;
	max-width: 600px;
	margin: auto;
	padding: 10px;
}
h1:first-child {
	text-align: center;
	font-size: 150%;
}
h2 {
	font-size: 115%;
	margin-top: 2em;
	border-bottom: 1px solid darkgrey;
}
h1 + h2 {
	margin-top: 0px;
}
</style>
</head>
<body>" > index.html
markdown README.md >> index.html
echo "</body></html>" >> index.html

