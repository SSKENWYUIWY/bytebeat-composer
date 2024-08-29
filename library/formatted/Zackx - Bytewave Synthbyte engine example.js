x = j => min(max(( // Stereo function
	s = (a, b) => t * 2 ** (parseInt(a, 36) / 12) / b * 1.4 % 64 - 32, // Parse tune
	w = t => t > 0 && (
		e = a => s('07BE749G67CJEB9B'[15 & t >> 13], a * '1325'[3 & t >> 17] * j * 2), // Melody
		e(1) + e(j)
	) * (1 - t / 8192 % 1 * .75), // Melody decay
	w(t) + w(t - (d = 12288)) / 3 + w(t - d * 2) / 4 + w(t - d * 3) / 5 - // Delay
	(
		b = a => s('C5C8'[3 & t >> 17], a * 4), // Bass
		b(8) + b(8 / j)
	) * (1 - t / 8192 % 1) * (t / 16384 % 2) // Bass decay
), -128), 127),
[x(1.005), x(.995)] // Output