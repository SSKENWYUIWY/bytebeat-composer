synth = (t, v) => (t & 255) >> v,
gate = (t, f, o) => (t >> f) % 7 > o,
groovy_melody = [20, 22, 24, 27, 18, 15, 24, 20],
q = t >> 19,
o = (1 == (t >> 16) % 2 ? (t >> 15) % 2 + 1 : 0) + q,
p = (t >> 14) % 2,
[
	synth((2 + o) * t, (t >> 10) % 8 + 3) +
		synth((4 + o) * t, (t >> 8) % 8 + 3) * gate(t, 14, 1) +
		synth((8 + o) * t, (t >> 7) % 8 + 4) * gate(t, 15, 1) +
		synth((9 + o) * t, (5 * t + 2560 >> 10) % 8 + 3) * gate(t, 16, 1) +
		synth((10 + o) * t, (3 * t >> 10) % 8 + 4) * gate(t, 16, 1) +
		synth((12 + o) * t, (7 * t >> 10) % 8 + 3) * gate(t, 17, 1) +
		synth(
			(groovy_melody[((1 + 2 * p) * t >> 14 - p) % 8] + 7 * q) * t,
			((1 + 2 * p) * t >> 11 - p) % 8 + 1
		) / 3 * gate(t, 17, 1) +
		(((t * t * t % 247327 & 255) << (t >> 5 - (t >> 11) % 2 + (t >> 12) % 2) & 255) >> 3) *
			gate(t, 18, 1) +
		(((t * t % 247327 & 255) << (3 * t >> 7 - (t >> 12) % 2 + (t >> 13) % 2) & 255) >> 3),
	synth((2 + o) * t, (t >> 10) % 8 + 3) +
		synth((4 + o) * t, (t >> 8) % 8 + 4) * gate(t, 14, 1) +
		synth((8 + o) * t, (t >> 7) % 8 + 3) * gate(t, 15, 1) +
		synth((9 + o) * t, (5 * t + 2560 >> 10) % 8 + 4) * gate(t, 16, 1) +
		synth((10 + o) * t, (3 * t >> 10) % 8 + 3) * gate(t, 16, 1) +
		synth((12 + o) * t, (7 * t >> 10) % 8 + 4) * gate(t, 17, 1) +
		synth(
			(groovy_melody[((1 + 2 * (1 - p)) * t >> 14 - (1 - p)) % 8] + 7 * q) * (t + (t >> 6)),
			((1 + 2 * (1 - p)) * t >> 11 - (1 - p)) % 8 + 1
		) / 3 * gate(t, 17, 1) +
		(((t * t * t % 247327 & 255) << (t >> 5 + o - (t >> 11) % 2) & 255) >> 3) * gate(t, 18, 1) +
		(((t * t % 247327 & 255) << (3 * t >> 7 - o - (t >> 12) % 2 + (t >> 13) % 2) & 255) >> 3)
];
