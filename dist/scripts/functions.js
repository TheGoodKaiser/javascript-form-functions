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
	for(var i = 0; i<a.length; i++) {
		var arr = a.split("");
		var count = {};
		var h = arr[i];
		count[arr[i]] = 0;
		for (h in arr) {
			count[arr[i]]+=count[arr[i]];
		}
	}
	return count;
}