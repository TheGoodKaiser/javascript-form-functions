function add(a,b) {
	var a = new Number(a);
	var b = new Number(b);
	return a+b
}

function subtract(a,b) {
	var a = new Number(a);
	var b = new Number(b);
	if (a>b) {
		return a-b;
	} else {
		return b-a;
	}
}

function tax(a,b) {
	var a = new Number(a);
	var b = new Number(b);
	return a*(b/100)
}

function stringLength (a) {
	if (a.length<5) {
		return "short string";
	} else if (a.length>=5 && a.length<10) {
		return "medium string";
	} else if (a.length>=10) {
		return "long string";
	}
}

function startsWith (a) {
	var a = a.charAt(0).toUpperCase()+a.slice(1);
	return a;
}

function stringRepeat (s, n) {
	var a = [];
	for (var i = 0; i<n; i++) {
		a.push(s);
	}
	return a.join("");
}

function nSum (n) {
	var n = new Number(n);
	var sum=0;
	for (var i = 0; i<=n; i++) {
		sum+=i;
	}
	return sum;
}

function join (a, b) {
	return a.join(b);
}

function countLetters (a) {
	var count = {};
	var arr = a.split("");
	for(var i = 0; i<a.length; i++) {
		var h = arr[i];
		if (!count.hasOwnProperty(h)) {
			count[h] = 1;
		} else if (count.hasOwnProperty(h)) {
			count[h] = count[h] + 1;
		}
	}
	var out = "";
	for(var prop in count) {
		var put = count[prop];
		out = " " + out + prop + ": " + put + ", ";
	}

	return out.substring(0, (out.length-2));
}
function maze () {
	return [[true, true, true, "start", true],
			[true, false, false, false, false],
			[false, false, true, true, false],
			[true, false, true, true, false],
			[false, false, false, true, true,],
			[false, true, false, false, false],
			[false, false, true, false, true],
			[true, false, true, false, false],
			[false, false, false, true, false],
			[false, true, false, true, false],
			[false, false, false, false, true],
			[false, true, true, false, false],
			[true, false, false, false, true],
			["end", true, false, true, true],
			[false, true, false, false, false],
			[false, true, false, true, false],
			[false, true, false, false, false],
			[false, true, false, true, false],
			[false, true, false, true, false],
			[false, true, false, true, false],
			[false, true, true, false, false],
			[false, false, false, true, false],
			[true, false, true, false, false],
			[true, false, false, false, true]]
}