/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */ ! function(a, b) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
		if(!a.document) throw new Error("jQuery requires a window with a document");
		return b(a)
	} : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
	"use strict";
	var c = [],
		d = a.document,
		e = Object.getPrototypeOf,
		f = c.slice,
		g = c.concat,
		h = c.push,
		i = c.indexOf,
		j = {},
		k = j.toString,
		l = j.hasOwnProperty,
		m = l.toString,
		n = m.call(Object),
		o = {};

	function p(a, b) {
		b = b || d;
		var c = b.createElement("script");
		c.text = a, b.head.appendChild(c).parentNode.removeChild(c)
	}
	var q = "3.2.1",
		r = function(a, b) {
			return new r.fn.init(a, b)
		},
		s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		t = /^-ms-/,
		u = /-([a-z])/g,
		v = function(a, b) {
			return b.toUpperCase()
		};
	r.fn = r.prototype = {
		jquery: q,
		constructor: r,
		length: 0,
		toArray: function() {
			return f.call(this)
		},
		get: function(a) {
			return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a]
		},
		pushStack: function(a) {
			var b = r.merge(this.constructor(), a);
			return b.prevObject = this, b
		},
		each: function(a) {
			return r.each(this, a)
		},
		map: function(a) {
			return this.pushStack(r.map(this, function(b, c) {
				return a.call(b, c, b)
			}))
		},
		slice: function() {
			return this.pushStack(f.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(a) {
			var b = this.length,
				c = +a + (a < 0 ? b : 0);
			return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor()
		},
		push: h,
		sort: c.sort,
		splice: c.splice
	}, r.extend = r.fn.extend = function() {
		var a, b, c, d, e, f, g = arguments[0] || {},
			h = 1,
			i = arguments.length,
			j = !1;
		for("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++)
			if(null != (a = arguments[h]))
				for(b in a) c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = Array.isArray(d))) ? (e ? (e = !1, f = c && Array.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
		return g
	}, r.extend({
		expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(a) {
			throw new Error(a)
		},
		noop: function() {},
		isFunction: function(a) {
			return "function" === r.type(a)
		},
		isWindow: function(a) {
			return null != a && a === a.window
		},
		isNumeric: function(a) {
			var b = r.type(a);
			return("number" === b || "string" === b) && !isNaN(a - parseFloat(a))
		},
		isPlainObject: function(a) {
			var b, c;
			return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n))
		},
		isEmptyObject: function(a) {
			var b;
			for(b in a) return !1;
			return !0
		},
		type: function(a) {
			return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a
		},
		globalEval: function(a) {
			p(a)
		},
		camelCase: function(a) {
			return a.replace(t, "ms-").replace(u, v)
		},
		each: function(a, b) {
			var c, d = 0;
			if(w(a)) {
				for(c = a.length; d < c; d++)
					if(b.call(a[d], d, a[d]) === !1) break
			} else
				for(d in a)
					if(b.call(a[d], d, a[d]) === !1) break; return a
		},
		trim: function(a) {
			return null == a ? "" : (a + "").replace(s, "")
		},
		makeArray: function(a, b) {
			var c = b || [];
			return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c
		},
		inArray: function(a, b, c) {
			return null == b ? -1 : i.call(b, a, c)
		},
		merge: function(a, b) {
			for(var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
			return a.length = e, a
		},
		grep: function(a, b, c) {
			for(var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
			return e
		},
		map: function(a, b, c) {
			var d, e, f = 0,
				h = [];
			if(w(a))
				for(d = a.length; f < d; f++) e = b(a[f], f, c), null != e && h.push(e);
			else
				for(f in a) e = b(a[f], f, c), null != e && h.push(e);
			return g.apply([], h)
		},
		guid: 1,
		proxy: function(a, b) {
			var c, d, e;
			if("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function() {
				return a.apply(b || this, d.concat(f.call(arguments)))
			}, e.guid = a.guid = a.guid || r.guid++, e
		},
		now: Date.now,
		support: o
	}), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
		j["[object " + b + "]"] = b.toLowerCase()
	});

	function w(a) {
		var b = !!a && "length" in a && a.length,
			c = r.type(a);
		return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
	}
	var x = function(a) {
		var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
			v = a.document,
			w = 0,
			x = 0,
			y = ha(),
			z = ha(),
			A = ha(),
			B = function(a, b) {
				return a === b && (l = !0), 0
			},
			C = {}.hasOwnProperty,
			D = [],
			E = D.pop,
			F = D.push,
			G = D.push,
			H = D.slice,
			I = function(a, b) {
				for(var c = 0, d = a.length; c < d; c++)
					if(a[c] === b) return c;
				return -1
			},
			J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			K = "[\\x20\\t\\r\\n\\f]",
			L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
			M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
			N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
			O = new RegExp(K + "+", "g"),
			P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
			Q = new RegExp("^" + K + "*," + K + "*"),
			R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
			S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
			T = new RegExp(N),
			U = new RegExp("^" + L + "$"),
			V = {
				ID: new RegExp("^#(" + L + ")"),
				CLASS: new RegExp("^\\.(" + L + ")"),
				TAG: new RegExp("^(" + L + "|[*])"),
				ATTR: new RegExp("^" + M),
				PSEUDO: new RegExp("^" + N),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + J + ")$", "i"),
				needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
			},
			W = /^(?:input|select|textarea|button)$/i,
			X = /^h\d$/i,
			Y = /^[^{]+\{\s*\[native \w/,
			Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			$ = /[+~]/,
			_ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
			aa = function(a, b, c) {
				var d = "0x" + b - 65536;
				return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
			},
			ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
			ca = function(a, b) {
				return b ? "\0" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
			},
			da = function() {
				m()
			},
			ea = ta(function(a) {
				return a.disabled === !0 && ("form" in a || "label" in a)
			}, {
				dir: "parentNode",
				next: "legend"
			});
		try {
			G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType
		} catch(fa) {
			G = {
				apply: D.length ? function(a, b) {
					F.apply(a, H.call(b))
				} : function(a, b) {
					var c = a.length,
						d = 0;
					while(a[c++] = b[d++]);
					a.length = c - 1
				}
			}
		}

		function ga(a, b, d, e) {
			var f, h, j, k, l, o, r, s = b && b.ownerDocument,
				w = b ? b.nodeType : 9;
			if(d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;
			if(!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
				if(11 !== w && (l = Z.exec(a)))
					if(f = l[1]) {
						if(9 === w) {
							if(!(j = b.getElementById(f))) return d;
							if(j.id === f) return d.push(j), d
						} else if(s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
					} else {
						if(l[2]) return G.apply(d, b.getElementsByTagName(a)), d;
						if((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d
					}
				if(c.qsa && !A[a + " "] && (!q || !q.test(a))) {
					if(1 !== w) s = b, r = a;
					else if("object" !== b.nodeName.toLowerCase()) {
						(k = b.getAttribute("id")) ? k = k.replace(ba, ca): b.setAttribute("id", k = u), o = g(a), h = o.length;
						while(h--) o[h] = "#" + k + " " + sa(o[h]);
						r = o.join(","), s = $.test(a) && qa(b.parentNode) || b
					}
					if(r) try {
						return G.apply(d, s.querySelectorAll(r)), d
					} catch(x) {} finally {
						k === u && b.removeAttribute("id")
					}
				}
			}
			return i(a.replace(P, "$1"), b, d, e)
		}

		function ha() {
			var a = [];

			function b(c, e) {
				return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
			}
			return b
		}

		function ia(a) {
			return a[u] = !0, a
		}

		function ja(a) {
			var b = n.createElement("fieldset");
			try {
				return !!a(b)
			} catch(c) {
				return !1
			} finally {
				b.parentNode && b.parentNode.removeChild(b), b = null
			}
		}

		function ka(a, b) {
			var c = a.split("|"),
				e = c.length;
			while(e--) d.attrHandle[c[e]] = b
		}

		function la(a, b) {
			var c = b && a,
				d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
			if(d) return d;
			if(c)
				while(c = c.nextSibling)
					if(c === b) return -1;
			return a ? 1 : -1
		}

		function ma(a) {
			return function(b) {
				var c = b.nodeName.toLowerCase();
				return "input" === c && b.type === a
			}
		}

		function na(a) {
			return function(b) {
				var c = b.nodeName.toLowerCase();
				return("input" === c || "button" === c) && b.type === a
			}
		}

		function oa(a) {
			return function(b) {
				return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a
			}
		}

		function pa(a) {
			return ia(function(b) {
				return b = +b, ia(function(c, d) {
					var e, f = a([], c.length, b),
						g = f.length;
					while(g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
				})
			})
		}

		function qa(a) {
			return a && "undefined" != typeof a.getElementsByTagName && a
		}
		c = ga.support = {}, f = ga.isXML = function(a) {
			var b = a && (a.ownerDocument || a).documentElement;
			return !!b && "HTML" !== b.nodeName
		}, m = ga.setDocument = function(a) {
			var b, e, g = a ? a.ownerDocument || a : v;
			return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function(a) {
				return a.className = "i", !a.getAttribute("className")
			}), c.getElementsByTagName = ja(function(a) {
				return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
			}), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function(a) {
				return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
			}), c.getById ? (d.filter.ID = function(a) {
				var b = a.replace(_, aa);
				return function(a) {
					return a.getAttribute("id") === b
				}
			}, d.find.ID = function(a, b) {
				if("undefined" != typeof b.getElementById && p) {
					var c = b.getElementById(a);
					return c ? [c] : []
				}
			}) : (d.filter.ID = function(a) {
				var b = a.replace(_, aa);
				return function(a) {
					var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
					return c && c.value === b
				}
			}, d.find.ID = function(a, b) {
				if("undefined" != typeof b.getElementById && p) {
					var c, d, e, f = b.getElementById(a);
					if(f) {
						if(c = f.getAttributeNode("id"), c && c.value === a) return [f];
						e = b.getElementsByName(a), d = 0;
						while(f = e[d++])
							if(c = f.getAttributeNode("id"), c && c.value === a) return [f]
					}
					return []
				}
			}), d.find.TAG = c.getElementsByTagName ? function(a, b) {
				return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
			} : function(a, b) {
				var c, d = [],
					e = 0,
					f = b.getElementsByTagName(a);
				if("*" === a) {
					while(c = f[e++]) 1 === c.nodeType && d.push(c);
					return d
				}
				return f
			}, d.find.CLASS = c.getElementsByClassName && function(a, b) {
				if("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a)
			}, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function(a) {
				o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
			}), ja(function(a) {
				a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
				var b = n.createElement("input");
				b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
			})), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
				c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N)
			}), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function(a, b) {
				var c = 9 === a.nodeType ? a.documentElement : a,
					d = b && b.parentNode;
				return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
			} : function(a, b) {
				if(b)
					while(b = b.parentNode)
						if(b === a) return !0;
				return !1
			}, B = b ? function(a, b) {
				if(a === b) return l = !0, 0;
				var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
				return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1)
			} : function(a, b) {
				if(a === b) return l = !0, 0;
				var c, d = 0,
					e = a.parentNode,
					f = b.parentNode,
					g = [a],
					h = [b];
				if(!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;
				if(e === f) return la(a, b);
				c = a;
				while(c = c.parentNode) g.unshift(c);
				c = b;
				while(c = c.parentNode) h.unshift(c);
				while(g[d] === h[d]) d++;
				return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
			}, n) : n
		}, ga.matches = function(a, b) {
			return ga(a, null, null, b)
		}, ga.matchesSelector = function(a, b) {
			if((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
				var d = s.call(a, b);
				if(d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
			} catch(e) {}
			return ga(b, n, null, [a]).length > 0
		}, ga.contains = function(a, b) {
			return(a.ownerDocument || a) !== n && m(a), t(a, b)
		}, ga.attr = function(a, b) {
			(a.ownerDocument || a) !== n && m(a);
			var e = d.attrHandle[b.toLowerCase()],
				f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
			return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
		}, ga.escape = function(a) {
			return(a + "").replace(ba, ca)
		}, ga.error = function(a) {
			throw new Error("Syntax error, unrecognized expression: " + a)
		}, ga.uniqueSort = function(a) {
			var b, d = [],
				e = 0,
				f = 0;
			if(l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
				while(b = a[f++]) b === a[f] && (e = d.push(f));
				while(e--) a.splice(d[e], 1)
			}
			return k = null, a
		}, e = ga.getText = function(a) {
			var b, c = "",
				d = 0,
				f = a.nodeType;
			if(f) {
				if(1 === f || 9 === f || 11 === f) {
					if("string" == typeof a.textContent) return a.textContent;
					for(a = a.firstChild; a; a = a.nextSibling) c += e(a)
				} else if(3 === f || 4 === f) return a.nodeValue
			} else
				while(b = a[d++]) c += e(b);
			return c
		}, d = ga.selectors = {
			cacheLength: 50,
			createPseudo: ia,
			match: V,
			attrHandle: {},
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function(a) {
					return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
				},
				CHILD: function(a) {
					return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
				},
				PSEUDO: function(a) {
					var b, c = !a[6] && a[2];
					return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
				}
			},
			filter: {
				TAG: function(a) {
					var b = a.replace(_, aa).toLowerCase();
					return "*" === a ? function() {
						return !0
					} : function(a) {
						return a.nodeName && a.nodeName.toLowerCase() === b
					}
				},
				CLASS: function(a) {
					var b = y[a + " "];
					return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function(a) {
						return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
					})
				},
				ATTR: function(a, b, c) {
					return function(d) {
						var e = ga.attr(d, a);
						return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"))
					}
				},
				CHILD: function(a, b, c, d, e) {
					var f = "nth" !== a.slice(0, 3),
						g = "last" !== a.slice(-4),
						h = "of-type" === b;
					return 1 === d && 0 === e ? function(a) {
						return !!a.parentNode
					} : function(b, c, i) {
						var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
							q = b.parentNode,
							r = h && b.nodeName.toLowerCase(),
							s = !i && !h,
							t = !1;
						if(q) {
							if(f) {
								while(p) {
									m = b;
									while(m = m[p])
										if(h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
									o = p = "only" === a && !o && "nextSibling"
								}
								return !0
							}
							if(o = [g ? q.firstChild : q.lastChild], g && s) {
								m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
								while(m = ++n && m && m[p] || (t = n = 0) || o.pop())
									if(1 === m.nodeType && ++t && m === b) {
										k[a] = [w, n, t];
										break
									}
							} else if(s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
								while(m = ++n && m && m[p] || (t = n = 0) || o.pop())
									if((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
							return t -= e, t === d || t % d === 0 && t / d >= 0
						}
					}
				},
				PSEUDO: function(a, b) {
					var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
					return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
						var d, f = e(a, b),
							g = f.length;
						while(g--) d = I(a, f[g]), a[d] = !(c[d] = f[g])
					}) : function(a) {
						return e(a, 0, c)
					}) : e
				}
			},
			pseudos: {
				not: ia(function(a) {
					var b = [],
						c = [],
						d = h(a.replace(P, "$1"));
					return d[u] ? ia(function(a, b, c, e) {
						var f, g = d(a, null, e, []),
							h = a.length;
						while(h--)(f = g[h]) && (a[h] = !(b[h] = f))
					}) : function(a, e, f) {
						return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
					}
				}),
				has: ia(function(a) {
					return function(b) {
						return ga(a, b).length > 0
					}
				}),
				contains: ia(function(a) {
					return a = a.replace(_, aa),
						function(b) {
							return(b.textContent || b.innerText || e(b)).indexOf(a) > -1
						}
				}),
				lang: ia(function(a) {
					return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(),
						function(b) {
							var c;
							do
								if(c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
							while((b = b.parentNode) && 1 === b.nodeType);
							return !1
						}
				}),
				target: function(b) {
					var c = a.location && a.location.hash;
					return c && c.slice(1) === b.id
				},
				root: function(a) {
					return a === o
				},
				focus: function(a) {
					return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
				},
				enabled: oa(!1),
				disabled: oa(!0),
				checked: function(a) {
					var b = a.nodeName.toLowerCase();
					return "input" === b && !!a.checked || "option" === b && !!a.selected
				},
				selected: function(a) {
					return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
				},
				empty: function(a) {
					for(a = a.firstChild; a; a = a.nextSibling)
						if(a.nodeType < 6) return !1;
					return !0
				},
				parent: function(a) {
					return !d.pseudos.empty(a)
				},
				header: function(a) {
					return X.test(a.nodeName)
				},
				input: function(a) {
					return W.test(a.nodeName)
				},
				button: function(a) {
					var b = a.nodeName.toLowerCase();
					return "input" === b && "button" === a.type || "button" === b
				},
				text: function(a) {
					var b;
					return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
				},
				first: pa(function() {
					return [0]
				}),
				last: pa(function(a, b) {
					return [b - 1]
				}),
				eq: pa(function(a, b, c) {
					return [c < 0 ? c + b : c]
				}),
				even: pa(function(a, b) {
					for(var c = 0; c < b; c += 2) a.push(c);
					return a
				}),
				odd: pa(function(a, b) {
					for(var c = 1; c < b; c += 2) a.push(c);
					return a
				}),
				lt: pa(function(a, b, c) {
					for(var d = c < 0 ? c + b : c; --d >= 0;) a.push(d);
					return a
				}),
				gt: pa(function(a, b, c) {
					for(var d = c < 0 ? c + b : c; ++d < b;) a.push(d);
					return a
				})
			}
		}, d.pseudos.nth = d.pseudos.eq;
		for(b in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) d.pseudos[b] = ma(b);
		for(b in {
				submit: !0,
				reset: !0
			}) d.pseudos[b] = na(b);

		function ra() {}
		ra.prototype = d.filters = d.pseudos, d.setFilters = new ra, g = ga.tokenize = function(a, b) {
			var c, e, f, g, h, i, j, k = z[a + " "];
			if(k) return b ? 0 : k.slice(0);
			h = a, i = [], j = d.preFilter;
			while(h) {
				c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({
					value: c,
					type: e[0].replace(P, " ")
				}), h = h.slice(c.length));
				for(g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
					value: c,
					type: g,
					matches: e
				}), h = h.slice(c.length));
				if(!c) break
			}
			return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
		};

		function sa(a) {
			for(var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
			return d
		}

		function ta(a, b, c) {
			var d = b.dir,
				e = b.next,
				f = e || d,
				g = c && "parentNode" === f,
				h = x++;
			return b.first ? function(b, c, e) {
				while(b = b[d])
					if(1 === b.nodeType || g) return a(b, c, e);
				return !1
			} : function(b, c, i) {
				var j, k, l, m = [w, h];
				if(i) {
					while(b = b[d])
						if((1 === b.nodeType || g) && a(b, c, i)) return !0
				} else
					while(b = b[d])
						if(1 === b.nodeType || g)
							if(l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;
							else {
								if((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];
								if(k[f] = m, m[2] = a(b, c, i)) return !0
							} return !1
			}
		}

		function ua(a) {
			return a.length > 1 ? function(b, c, d) {
				var e = a.length;
				while(e--)
					if(!a[e](b, c, d)) return !1;
				return !0
			} : a[0]
		}

		function va(a, b, c) {
			for(var d = 0, e = b.length; d < e; d++) ga(a, b[d], c);
			return c
		}

		function wa(a, b, c, d, e) {
			for(var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
			return g
		}

		function xa(a, b, c, d, e, f) {
			return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function(f, g, h, i) {
				var j, k, l, m = [],
					n = [],
					o = g.length,
					p = f || va(b || "*", h.nodeType ? [h] : h, []),
					q = !a || !f && b ? p : wa(p, m, a, h, i),
					r = c ? e || (f ? a : o || d) ? [] : g : q;
				if(c && c(q, r, h, i), d) {
					j = wa(r, n), d(j, [], h, i), k = j.length;
					while(k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
				}
				if(f) {
					if(e || a) {
						if(e) {
							j = [], k = r.length;
							while(k--)(l = r[k]) && j.push(q[k] = l);
							e(null, r = [], j, i)
						}
						k = r.length;
						while(k--)(l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
					}
				} else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r)
			})
		}

		function ya(a) {
			for(var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function(a) {
					return a === b
				}, h, !0), l = ta(function(a) {
					return I(b, a) > -1
				}, h, !0), m = [function(a, c, d) {
					var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
					return b = null, e
				}]; i < f; i++)
				if(c = d.relative[a[i].type]) m = [ta(ua(m), c)];
				else {
					if(c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
						for(e = ++i; e < f; e++)
							if(d.relative[a[e].type]) break;
						return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({
							value: " " === a[i - 2].type ? "*" : ""
						})).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a))
					}
					m.push(c)
				}
			return ua(m)
		}

		function za(a, b) {
			var c = b.length > 0,
				e = a.length > 0,
				f = function(f, g, h, i, k) {
					var l, o, q, r = 0,
						s = "0",
						t = f && [],
						u = [],
						v = j,
						x = f || e && d.find.TAG("*", k),
						y = w += null == v ? 1 : Math.random() || .1,
						z = x.length;
					for(k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
						if(e && l) {
							o = 0, g || l.ownerDocument === n || (m(l), h = !p);
							while(q = a[o++])
								if(q(l, g || n, h)) {
									i.push(l);
									break
								}
							k && (w = y)
						}
						c && ((l = !q && l) && r--, f && t.push(l))
					}
					if(r += s, c && s !== r) {
						o = 0;
						while(q = b[o++]) q(t, u, g, h);
						if(f) {
							if(r > 0)
								while(s--) t[s] || u[s] || (u[s] = E.call(i));
							u = wa(u)
						}
						G.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i)
					}
					return k && (w = y, j = v), t
				};
			return c ? ia(f) : f
		}
		return h = ga.compile = function(a, b) {
			var c, d = [],
				e = [],
				f = A[a + " "];
			if(!f) {
				b || (b = g(a)), c = b.length;
				while(c--) f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
				f = A(a, za(e, d)), f.selector = a
			}
			return f
		}, i = ga.select = function(a, b, c, e) {
			var f, i, j, k, l, m = "function" == typeof a && a,
				n = !e && g(a = m.selector || a);
			if(c = c || [], 1 === n.length) {
				if(i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
					if(b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c;
					m && (b = b.parentNode), a = a.slice(i.shift().value.length)
				}
				f = V.needsContext.test(a) ? 0 : i.length;
				while(f--) {
					if(j = i[f], d.relative[k = j.type]) break;
					if((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
						if(i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c;
						break
					}
				}
			}
			return(m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c
		}, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function(a) {
			return 1 & a.compareDocumentPosition(n.createElement("fieldset"))
		}), ja(function(a) {
			return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
		}) || ka("type|href|height|width", function(a, b, c) {
			if(!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
		}), c.attributes && ja(function(a) {
			return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
		}) || ka("value", function(a, b, c) {
			if(!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue
		}), ja(function(a) {
			return null == a.getAttribute("disabled")
		}) || ka(J, function(a, b, c) {
			var d;
			if(!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
		}), ga
	}(a);
	r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;
	var y = function(a, b, c) {
			var d = [],
				e = void 0 !== c;
			while((a = a[b]) && 9 !== a.nodeType)
				if(1 === a.nodeType) {
					if(e && r(a).is(c)) break;
					d.push(a)
				}
			return d
		},
		z = function(a, b) {
			for(var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
			return c
		},
		A = r.expr.match.needsContext;

	function B(a, b) {
		return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
	}
	var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
		D = /^.[^:#\[\.,]*$/;

	function E(a, b, c) {
		return r.isFunction(b) ? r.grep(a, function(a, d) {
			return !!b.call(a, d, a) !== c
		}) : b.nodeType ? r.grep(a, function(a) {
			return a === b !== c
		}) : "string" != typeof b ? r.grep(a, function(a) {
			return i.call(b, a) > -1 !== c
		}) : D.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function(a) {
			return i.call(b, a) > -1 !== c && 1 === a.nodeType
		}))
	}
	r.filter = function(a, b, c) {
		var d = b[0];
		return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function(a) {
			return 1 === a.nodeType
		}))
	}, r.fn.extend({
		find: function(a) {
			var b, c, d = this.length,
				e = this;
			if("string" != typeof a) return this.pushStack(r(a).filter(function() {
				for(b = 0; b < d; b++)
					if(r.contains(e[b], this)) return !0
			}));
			for(c = this.pushStack([]), b = 0; b < d; b++) r.find(a, e[b], c);
			return d > 1 ? r.uniqueSort(c) : c
		},
		filter: function(a) {
			return this.pushStack(E(this, a || [], !1))
		},
		not: function(a) {
			return this.pushStack(E(this, a || [], !0))
		},
		is: function(a) {
			return !!E(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length
		}
	});
	var F, G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
		H = r.fn.init = function(a, b, c) {
			var e, f;
			if(!a) return this;
			if(c = c || F, "string" == typeof a) {
				if(e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : G.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
				if(e[1]) {
					if(b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), C.test(e[1]) && r.isPlainObject(b))
						for(e in b) r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
					return this
				}
				return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this
			}
			return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this)
		};
	H.prototype = r.fn, F = r(d);
	var I = /^(?:parents|prev(?:Until|All))/,
		J = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	r.fn.extend({
		has: function(a) {
			var b = r(a, this),
				c = b.length;
			return this.filter(function() {
				for(var a = 0; a < c; a++)
					if(r.contains(this, b[a])) return !0
			})
		},
		closest: function(a, b) {
			var c, d = 0,
				e = this.length,
				f = [],
				g = "string" != typeof a && r(a);
			if(!A.test(a))
				for(; d < e; d++)
					for(c = this[d]; c && c !== b; c = c.parentNode)
						if(c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
							f.push(c);
							break
						}
			return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f)
		},
		index: function(a) {
			return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(a, b) {
			return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))))
		},
		addBack: function(a) {
			return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
		}
	});

	function K(a, b) {
		while((a = a[b]) && 1 !== a.nodeType);
		return a
	}
	r.each({
		parent: function(a) {
			var b = a.parentNode;
			return b && 11 !== b.nodeType ? b : null
		},
		parents: function(a) {
			return y(a, "parentNode")
		},
		parentsUntil: function(a, b, c) {
			return y(a, "parentNode", c)
		},
		next: function(a) {
			return K(a, "nextSibling")
		},
		prev: function(a) {
			return K(a, "previousSibling")
		},
		nextAll: function(a) {
			return y(a, "nextSibling")
		},
		prevAll: function(a) {
			return y(a, "previousSibling")
		},
		nextUntil: function(a, b, c) {
			return y(a, "nextSibling", c)
		},
		prevUntil: function(a, b, c) {
			return y(a, "previousSibling", c)
		},
		siblings: function(a) {
			return z((a.parentNode || {}).firstChild, a)
		},
		children: function(a) {
			return z(a.firstChild)
		},
		contents: function(a) {
			return B(a, "iframe") ? a.contentDocument : (B(a, "template") && (a = a.content || a), r.merge([], a.childNodes))
		}
	}, function(a, b) {
		r.fn[a] = function(c, d) {
			var e = r.map(this, b, c);
			return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (J[a] || r.uniqueSort(e), I.test(a) && e.reverse()), this.pushStack(e)
		}
	});
	var L = /[^\x20\t\r\n\f]+/g;

	function M(a) {
		var b = {};
		return r.each(a.match(L) || [], function(a, c) {
			b[c] = !0
		}), b
	}
	r.Callbacks = function(a) {
		a = "string" == typeof a ? M(a) : r.extend({}, a);
		var b, c, d, e, f = [],
			g = [],
			h = -1,
			i = function() {
				for(e = e || a.once, d = b = !0; g.length; h = -1) {
					c = g.shift();
					while(++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
				}
				a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
			},
			j = {
				add: function() {
					return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
						r.each(b, function(b, c) {
							r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c)
						})
					}(arguments), c && !b && i()), this
				},
				remove: function() {
					return r.each(arguments, function(a, b) {
						var c;
						while((c = r.inArray(b, f, c)) > -1) f.splice(c, 1), c <= h && h--
					}), this
				},
				has: function(a) {
					return a ? r.inArray(a, f) > -1 : f.length > 0
				},
				empty: function() {
					return f && (f = []), this
				},
				disable: function() {
					return e = g = [], f = c = "", this
				},
				disabled: function() {
					return !f
				},
				lock: function() {
					return e = g = [], c || b || (f = c = ""), this
				},
				locked: function() {
					return !!e
				},
				fireWith: function(a, c) {
					return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
				},
				fire: function() {
					return j.fireWith(this, arguments), this
				},
				fired: function() {
					return !!d
				}
			};
		return j
	};

	function N(a) {
		return a
	}

	function O(a) {
		throw a
	}

	function P(a, b, c, d) {
		var e;
		try {
			a && r.isFunction(e = a.promise) ? e.call(a).done(b).fail(c) : a && r.isFunction(e = a.then) ? e.call(a, b, c) : b.apply(void 0, [a].slice(d))
		} catch(a) {
			c.apply(void 0, [a])
		}
	}
	r.extend({
		Deferred: function(b) {
			var c = [
					["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2],
					["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"],
					["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]
				],
				d = "pending",
				e = {
					state: function() {
						return d
					},
					always: function() {
						return f.done(arguments).fail(arguments), this
					},
					"catch": function(a) {
						return e.then(null, a)
					},
					pipe: function() {
						var a = arguments;
						return r.Deferred(function(b) {
							r.each(c, function(c, d) {
								var e = r.isFunction(a[d[4]]) && a[d[4]];
								f[d[1]](function() {
									var a = e && e.apply(this, arguments);
									a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments)
								})
							}), a = null
						}).promise()
					},
					then: function(b, d, e) {
						var f = 0;

						function g(b, c, d, e) {
							return function() {
								var h = this,
									i = arguments,
									j = function() {
										var a, j;
										if(!(b < f)) {
											if(a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");
											j = a && ("object" == typeof a || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, N, e), g(f, c, O, e)) : (f++, j.call(a, g(f, c, N, e), g(f, c, O, e), g(f, c, N, c.notifyWith))) : (d !== N && (h = void 0, i = [a]), (e || c.resolveWith)(h, i))
										}
									},
									k = e ? j : function() {
										try {
											j()
										} catch(a) {
											r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== O && (h = void 0, i = [a]), c.rejectWith(h, i))
										}
									};
								b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k))
							}
						}
						return r.Deferred(function(a) {
							c[0][3].add(g(0, a, r.isFunction(e) ? e : N, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : N)), c[2][3].add(g(0, a, r.isFunction(d) ? d : O))
						}).promise()
					},
					promise: function(a) {
						return null != a ? r.extend(a, e) : e
					}
				},
				f = {};
			return r.each(c, function(a, b) {
				var g = b[2],
					h = b[5];
				e[b[1]] = g.add, h && g.add(function() {
					d = h
				}, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function() {
					return f[b[0] + "With"](this === f ? void 0 : this, arguments), this
				}, f[b[0] + "With"] = g.fireWith
			}), e.promise(f), b && b.call(f, f), f
		},
		when: function(a) {
			var b = arguments.length,
				c = b,
				d = Array(c),
				e = f.call(arguments),
				g = r.Deferred(),
				h = function(a) {
					return function(c) {
						d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e)
					}
				};
			if(b <= 1 && (P(a, g.done(h(c)).resolve, g.reject, !b), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();
			while(c--) P(e[c], h(c), g.reject);
			return g.promise()
		}
	});
	var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	r.Deferred.exceptionHook = function(b, c) {
		a.console && a.console.warn && b && Q.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c)
	}, r.readyException = function(b) {
		a.setTimeout(function() {
			throw b
		})
	};
	var R = r.Deferred();
	r.fn.ready = function(a) {
		return R.then(a)["catch"](function(a) {
			r.readyException(a)
		}), this
	}, r.extend({
		isReady: !1,
		readyWait: 1,
		ready: function(a) {
			(a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || R.resolveWith(d, [r]))
		}
	}), r.ready.then = R.then;

	function S() {
		d.removeEventListener("DOMContentLoaded", S),
			a.removeEventListener("load", S), r.ready()
	}
	"complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", S), a.addEventListener("load", S));
	var T = function(a, b, c, d, e, f, g) {
			var h = 0,
				i = a.length,
				j = null == c;
			if("object" === r.type(c)) {
				e = !0;
				for(h in c) T(a, b, h, c[h], !0, f, g)
			} else if(void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
					return j.call(r(a), c)
				})), b))
				for(; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
			return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
		},
		U = function(a) {
			return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
		};

	function V() {
		this.expando = r.expando + V.uid++
	}
	V.uid = 1, V.prototype = {
		cache: function(a) {
			var b = a[this.expando];
			return b || (b = {}, U(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
				value: b,
				configurable: !0
			}))), b
		},
		set: function(a, b, c) {
			var d, e = this.cache(a);
			if("string" == typeof b) e[r.camelCase(b)] = c;
			else
				for(d in b) e[r.camelCase(d)] = b[d];
			return e
		},
		get: function(a, b) {
			return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)]
		},
		access: function(a, b, c) {
			return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b)
		},
		remove: function(a, b) {
			var c, d = a[this.expando];
			if(void 0 !== d) {
				if(void 0 !== b) {
					Array.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(L) || []), c = b.length;
					while(c--) delete d[b[c]]
				}(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
			}
		},
		hasData: function(a) {
			var b = a[this.expando];
			return void 0 !== b && !r.isEmptyObject(b)
		}
	};
	var W = new V,
		X = new V,
		Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		Z = /[A-Z]/g;

	function $(a) {
		return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : Y.test(a) ? JSON.parse(a) : a)
	}

	function _(a, b, c) {
		var d;
		if(void 0 === c && 1 === a.nodeType)
			if(d = "data-" + b.replace(Z, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
				try {
					c = $(c)
				} catch(e) {}
				X.set(a, b, c)
			} else c = void 0;
		return c
	}
	r.extend({
		hasData: function(a) {
			return X.hasData(a) || W.hasData(a)
		},
		data: function(a, b, c) {
			return X.access(a, b, c)
		},
		removeData: function(a, b) {
			X.remove(a, b)
		},
		_data: function(a, b, c) {
			return W.access(a, b, c)
		},
		_removeData: function(a, b) {
			W.remove(a, b)
		}
	}), r.fn.extend({
		data: function(a, b) {
			var c, d, e, f = this[0],
				g = f && f.attributes;
			if(void 0 === a) {
				if(this.length && (e = X.get(f), 1 === f.nodeType && !W.get(f, "hasDataAttrs"))) {
					c = g.length;
					while(c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), _(f, d, e[d])));
					W.set(f, "hasDataAttrs", !0)
				}
				return e
			}
			return "object" == typeof a ? this.each(function() {
				X.set(this, a)
			}) : T(this, function(b) {
				var c;
				if(f && void 0 === b) {
					if(c = X.get(f, a), void 0 !== c) return c;
					if(c = _(f, a), void 0 !== c) return c
				} else this.each(function() {
					X.set(this, a, b)
				})
			}, null, b, arguments.length > 1, null, !0)
		},
		removeData: function(a) {
			return this.each(function() {
				X.remove(this, a)
			})
		}
	}), r.extend({
		queue: function(a, b, c) {
			var d;
			if(a) return b = (b || "fx") + "queue", d = W.get(a, b), c && (!d || Array.isArray(c) ? d = W.access(a, b, r.makeArray(c)) : d.push(c)), d || []
		},
		dequeue: function(a, b) {
			b = b || "fx";
			var c = r.queue(a, b),
				d = c.length,
				e = c.shift(),
				f = r._queueHooks(a, b),
				g = function() {
					r.dequeue(a, b)
				};
			"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
		},
		_queueHooks: function(a, b) {
			var c = b + "queueHooks";
			return W.get(a, c) || W.access(a, c, {
				empty: r.Callbacks("once memory").add(function() {
					W.remove(a, [b + "queue", c])
				})
			})
		}
	}), r.fn.extend({
		queue: function(a, b) {
			var c = 2;
			return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function() {
				var c = r.queue(this, a, b);
				r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a)
			})
		},
		dequeue: function(a) {
			return this.each(function() {
				r.dequeue(this, a)
			})
		},
		clearQueue: function(a) {
			return this.queue(a || "fx", [])
		},
		promise: function(a, b) {
			var c, d = 1,
				e = r.Deferred(),
				f = this,
				g = this.length,
				h = function() {
					--d || e.resolveWith(f, [f])
				};
			"string" != typeof a && (b = a, a = void 0), a = a || "fx";
			while(g--) c = W.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
			return h(), e.promise(b)
		}
	});
	var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i"),
		ca = ["Top", "Right", "Bottom", "Left"],
		da = function(a, b) {
			return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display")
		},
		ea = function(a, b, c, d) {
			var e, f, g = {};
			for(f in b) g[f] = a.style[f], a.style[f] = b[f];
			e = c.apply(a, d || []);
			for(f in b) a.style[f] = g[f];
			return e
		};

	function fa(a, b, c, d) {
		var e, f = 1,
			g = 20,
			h = d ? function() {
				return d.cur()
			} : function() {
				return r.css(a, b, "")
			},
			i = h(),
			j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
			k = (r.cssNumber[b] || "px" !== j && +i) && ba.exec(r.css(a, b));
		if(k && k[3] !== j) {
			j = j || k[3], c = c || [], k = +i || 1;
			do f = f || ".5", k /= f, r.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
		}
		return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
	}
	var ga = {};

	function ha(a) {
		var b, c = a.ownerDocument,
			d = a.nodeName,
			e = ga[d];
		return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), ga[d] = e, e)
	}

	function ia(a, b) {
		for(var c, d, e = [], f = 0, g = a.length; f < g; f++) d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = W.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && da(d) && (e[f] = ha(d))) : "none" !== c && (e[f] = "none", W.set(d, "display", c)));
		for(f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]);
		return a
	}
	r.fn.extend({
		show: function() {
			return ia(this, !0)
		},
		hide: function() {
			return ia(this)
		},
		toggle: function(a) {
			return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
				da(this) ? r(this).show() : r(this).hide()
			})
		}
	});
	var ja = /^(?:checkbox|radio)$/i,
		ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
		la = /^$|\/(?:java|ecma)script/i,
		ma = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
	ma.optgroup = ma.option, ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead, ma.th = ma.td;

	function na(a, b) {
		var c;
		return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && B(a, b) ? r.merge([a], c) : c
	}

	function oa(a, b) {
		for(var c = 0, d = a.length; c < d; c++) W.set(a[c], "globalEval", !b || W.get(b[c], "globalEval"))
	}
	var pa = /<|&#?\w+;/;

	function qa(a, b, c, d, e) {
		for(var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++)
			if(f = a[n], f || 0 === f)
				if("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);
				else if(pa.test(f)) {
			g = g || l.appendChild(b.createElement("div")), h = (ka.exec(f) || ["", ""])[1].toLowerCase(), i = ma[h] || ma._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];
			while(k--) g = g.lastChild;
			r.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
		} else m.push(b.createTextNode(f));
		l.textContent = "", n = 0;
		while(f = m[n++])
			if(d && r.inArray(f, d) > -1) e && e.push(f);
			else if(j = r.contains(f.ownerDocument, f), g = na(l.appendChild(f), "script"), j && oa(g), c) {
			k = 0;
			while(f = g[k++]) la.test(f.type || "") && c.push(f)
		}
		return l
	}! function() {
		var a = d.createDocumentFragment(),
			b = a.appendChild(d.createElement("div")),
			c = d.createElement("input");
		c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
	}();
	var ra = d.documentElement,
		sa = /^key/,
		ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		ua = /^([^.]*)(?:\.(.+)|)/;

	function va() {
		return !0
	}

	function wa() {
		return !1
	}

	function xa() {
		try {
			return d.activeElement
		} catch(a) {}
	}

	function ya(a, b, c, d, e, f) {
		var g, h;
		if("object" == typeof b) {
			"string" != typeof c && (d = d || c, c = void 0);
			for(h in b) ya(a, h, c, d, b[h], f);
			return a
		}
		if(null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = wa;
		else if(!e) return a;
		return 1 === f && (g = e, e = function(a) {
			return r().off(a), g.apply(this, arguments)
		}, e.guid = g.guid || (g.guid = r.guid++)), a.each(function() {
			r.event.add(this, b, e, d, c)
		})
	}
	r.event = {
		global: {},
		add: function(a, b, c, d, e) {
			var f, g, h, i, j, k, l, m, n, o, p, q = W.get(a);
			if(q) {
				c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(ra, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
					return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0
				}), b = (b || "").match(L) || [""], j = b.length;
				while(j--) h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({
					type: n,
					origType: p,
					data: d,
					handler: c,
					guid: c.guid,
					selector: e,
					needsContext: e && r.expr.match.needsContext.test(e),
					namespace: o.join(".")
				}, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0)
			}
		},
		remove: function(a, b, c, d, e) {
			var f, g, h, i, j, k, l, m, n, o, p, q = W.hasData(a) && W.get(a);
			if(q && (i = q.events)) {
				b = (b || "").match(L) || [""], j = b.length;
				while(j--)
					if(h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
						l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
						while(f--) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
						g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n])
					} else
						for(n in i) r.event.remove(a, n + b[j], c, d, !0);
				r.isEmptyObject(i) && W.remove(a, "handle events")
			}
		},
		dispatch: function(a) {
			var b = r.event.fix(a),
				c, d, e, f, g, h, i = new Array(arguments.length),
				j = (W.get(this, "events") || {})[b.type] || [],
				k = r.event.special[b.type] || {};
			for(i[0] = b, c = 1; c < arguments.length; c++) i[c] = arguments[c];
			if(b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
				h = r.event.handlers.call(this, b, j), c = 0;
				while((f = h[c++]) && !b.isPropagationStopped()) {
					b.currentTarget = f.elem, d = 0;
					while((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()))
				}
				return k.postDispatch && k.postDispatch.call(this, b), b.result
			}
		},
		handlers: function(a, b) {
			var c, d, e, f, g, h = [],
				i = b.delegateCount,
				j = a.target;
			if(i && j.nodeType && !("click" === a.type && a.button >= 1))
				for(; j !== this; j = j.parentNode || this)
					if(1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
						for(f = [], g = {}, c = 0; c < i; c++) d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);
						f.length && h.push({
							elem: j,
							handlers: f
						})
					}
			return j = this, i < b.length && h.push({
				elem: j,
				handlers: b.slice(i)
			}), h
		},
		addProp: function(a, b) {
			Object.defineProperty(r.Event.prototype, a, {
				enumerable: !0,
				configurable: !0,
				get: r.isFunction(b) ? function() {
					if(this.originalEvent) return b(this.originalEvent)
				} : function() {
					if(this.originalEvent) return this.originalEvent[a]
				},
				set: function(b) {
					Object.defineProperty(this, a, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: b
					})
				}
			})
		},
		fix: function(a) {
			return a[r.expando] ? a : new r.Event(a)
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					if(this !== xa() && this.focus) return this.focus(), !1
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if(this === xa() && this.blur) return this.blur(), !1
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					if("checkbox" === this.type && this.click && B(this, "input")) return this.click(), !1
				},
				_default: function(a) {
					return B(a.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(a) {
					void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
				}
			}
		}
	}, r.removeEvent = function(a, b, c) {
		a.removeEventListener && a.removeEventListener(b, c)
	}, r.Event = function(a, b) {
		return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? va : wa, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void(this[r.expando] = !0)) : new r.Event(a, b)
	}, r.Event.prototype = {
		constructor: r.Event,
		isDefaultPrevented: wa,
		isPropagationStopped: wa,
		isImmediatePropagationStopped: wa,
		isSimulated: !1,
		preventDefault: function() {
			var a = this.originalEvent;
			this.isDefaultPrevented = va, a && !this.isSimulated && a.preventDefault()
		},
		stopPropagation: function() {
			var a = this.originalEvent;
			this.isPropagationStopped = va, a && !this.isSimulated && a.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var a = this.originalEvent;
			this.isImmediatePropagationStopped = va, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
		}
	}, r.each({
		altKey: !0,
		bubbles: !0,
		cancelable: !0,
		changedTouches: !0,
		ctrlKey: !0,
		detail: !0,
		eventPhase: !0,
		metaKey: !0,
		pageX: !0,
		pageY: !0,
		shiftKey: !0,
		view: !0,
		"char": !0,
		charCode: !0,
		key: !0,
		keyCode: !0,
		button: !0,
		buttons: !0,
		clientX: !0,
		clientY: !0,
		offsetX: !0,
		offsetY: !0,
		pointerId: !0,
		pointerType: !0,
		screenX: !0,
		screenY: !0,
		targetTouches: !0,
		toElement: !0,
		touches: !0,
		which: function(a) {
			var b = a.button;
			return null == a.which && sa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ta.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which
		}
	}, r.event.addProp), r.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(a, b) {
		r.event.special[a] = {
			delegateType: b,
			bindType: b,
			handle: function(a) {
				var c, d = this,
					e = a.relatedTarget,
					f = a.handleObj;
				return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
			}
		}
	}), r.fn.extend({
		on: function(a, b, c, d) {
			return ya(this, a, b, c, d)
		},
		one: function(a, b, c, d) {
			return ya(this, a, b, c, d, 1)
		},
		off: function(a, b, c) {
			var d, e;
			if(a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
			if("object" == typeof a) {
				for(e in a) this.off(e, b, a[e]);
				return this
			}
			return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = wa), this.each(function() {
				r.event.remove(this, a, c, b)
			})
		}
	});
	var za = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
		Aa = /<script|<style|<link/i,
		Ba = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Ca = /^true\/(.*)/,
		Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function Ea(a, b) {
		return B(a, "table") && B(11 !== b.nodeType ? b : b.firstChild, "tr") ? r(">tbody", a)[0] || a : a
	}

	function Fa(a) {
		return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
	}

	function Ga(a) {
		var b = Ca.exec(a.type);
		return b ? a.type = b[1] : a.removeAttribute("type"), a
	}

	function Ha(a, b) {
		var c, d, e, f, g, h, i, j;
		if(1 === b.nodeType) {
			if(W.hasData(a) && (f = W.access(a), g = W.set(b, f), j = f.events)) {
				delete g.handle, g.events = {};
				for(e in j)
					for(c = 0, d = j[e].length; c < d; c++) r.event.add(b, e, j[e][c])
			}
			X.hasData(a) && (h = X.access(a), i = r.extend({}, h), X.set(b, i))
		}
	}

	function Ia(a, b) {
		var c = b.nodeName.toLowerCase();
		"input" === c && ja.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
	}

	function Ja(a, b, c, d) {
		b = g.apply([], b);
		var e, f, h, i, j, k, l = 0,
			m = a.length,
			n = m - 1,
			q = b[0],
			s = r.isFunction(q);
		if(s || m > 1 && "string" == typeof q && !o.checkClone && Ba.test(q)) return a.each(function(e) {
			var f = a.eq(e);
			s && (b[0] = q.call(this, e, f.html())), Ja(f, b, c, d)
		});
		if(m && (e = qa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
			for(h = r.map(na(e, "script"), Fa), i = h.length; l < m; l++) j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, na(j, "script"))), c.call(a[l], j, l);
			if(i)
				for(k = h[h.length - 1].ownerDocument, r.map(h, Ga), l = 0; l < i; l++) j = h[l], la.test(j.type || "") && !W.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Da, ""), k))
		}
		return a
	}

	function Ka(a, b, c) {
		for(var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || r.cleanData(na(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && oa(na(d, "script")), d.parentNode.removeChild(d));
		return a
	}
	r.extend({
		htmlPrefilter: function(a) {
			return a.replace(za, "<$1></$2>")
		},
		clone: function(a, b, c) {
			var d, e, f, g, h = a.cloneNode(!0),
				i = r.contains(a.ownerDocument, a);
			if(!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a)))
				for(g = na(h), f = na(a), d = 0, e = f.length; d < e; d++) Ia(f[d], g[d]);
			if(b)
				if(c)
					for(f = f || na(a), g = g || na(h), d = 0, e = f.length; d < e; d++) Ha(f[d], g[d]);
				else Ha(a, h);
			return g = na(h, "script"), g.length > 0 && oa(g, !i && na(a, "script")), h
		},
		cleanData: function(a) {
			for(var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++)
				if(U(c)) {
					if(b = c[W.expando]) {
						if(b.events)
							for(d in b.events) e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
						c[W.expando] = void 0
					}
					c[X.expando] && (c[X.expando] = void 0)
				}
		}
	}), r.fn.extend({
		detach: function(a) {
			return Ka(this, a, !0)
		},
		remove: function(a) {
			return Ka(this, a)
		},
		text: function(a) {
			return T(this, function(a) {
				return void 0 === a ? r.text(this) : this.empty().each(function() {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
				})
			}, null, a, arguments.length)
		},
		append: function() {
			return Ja(this, arguments, function(a) {
				if(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = Ea(this, a);
					b.appendChild(a)
				}
			})
		},
		prepend: function() {
			return Ja(this, arguments, function(a) {
				if(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = Ea(this, a);
					b.insertBefore(a, b.firstChild)
				}
			})
		},
		before: function() {
			return Ja(this, arguments, function(a) {
				this.parentNode && this.parentNode.insertBefore(a, this)
			})
		},
		after: function() {
			return Ja(this, arguments, function(a) {
				this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
			})
		},
		empty: function() {
			for(var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (r.cleanData(na(a, !1)), a.textContent = "");
			return this
		},
		clone: function(a, b) {
			return a = null != a && a, b = null == b ? a : b, this.map(function() {
				return r.clone(this, a, b)
			})
		},
		html: function(a) {
			return T(this, function(a) {
				var b = this[0] || {},
					c = 0,
					d = this.length;
				if(void 0 === a && 1 === b.nodeType) return b.innerHTML;
				if("string" == typeof a && !Aa.test(a) && !ma[(ka.exec(a) || ["", ""])[1].toLowerCase()]) {
					a = r.htmlPrefilter(a);
					try {
						for(; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (r.cleanData(na(b, !1)), b.innerHTML = a);
						b = 0
					} catch(e) {}
				}
				b && this.empty().append(a)
			}, null, a, arguments.length)
		},
		replaceWith: function() {
			var a = [];
			return Ja(this, arguments, function(b) {
				var c = this.parentNode;
				r.inArray(this, a) < 0 && (r.cleanData(na(this)), c && c.replaceChild(b, this))
			}, a)
		}
	}), r.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(a, b) {
		r.fn[a] = function(a) {
			for(var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
			return this.pushStack(d)
		}
	});
	var La = /^margin/,
		Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"),
		Na = function(b) {
			var c = b.ownerDocument.defaultView;
			return c && c.opener || (c = a), c.getComputedStyle(b)
		};
	! function() {
		function b() {
			if(i) {
				i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", ra.appendChild(h);
				var b = a.getComputedStyle(i);
				c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, ra.removeChild(h), i = null
			}
		}
		var c, e, f, g, h = d.createElement("div"),
			i = d.createElement("div");
		i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, {
			pixelPosition: function() {
				return b(), c
			},
			boxSizingReliable: function() {
				return b(), e
			},
			pixelMarginRight: function() {
				return b(), f
			},
			reliableMarginLeft: function() {
				return b(), g
			}
		}))
	}();

	function Oa(a, b, c) {
		var d, e, f, g, h = a.style;
		return c = c || Na(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && Ma.test(g) && La.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
	}

	function Pa(a, b) {
		return {
			get: function() {
				return a() ? void delete this.get : (this.get = b).apply(this, arguments)
			}
		}
	}
	var Qa = /^(none|table(?!-c[ea]).+)/,
		Ra = /^--/,
		Sa = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Ta = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		Ua = ["Webkit", "Moz", "ms"],
		Va = d.createElement("div").style;

	function Wa(a) {
		if(a in Va) return a;
		var b = a[0].toUpperCase() + a.slice(1),
			c = Ua.length;
		while(c--)
			if(a = Ua[c] + b, a in Va) return a
	}

	function Xa(a) {
		var b = r.cssProps[a];
		return b || (b = r.cssProps[a] = Wa(a) || a), b
	}

	function Ya(a, b, c) {
		var d = ba.exec(b);
		return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
	}

	function Za(a, b, c, d, e) {
		var f, g = 0;
		for(f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) "margin" === c && (g += r.css(a, c + ca[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ca[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ca[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ca[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ca[f] + "Width", !0, e)));
		return g
	}

	function $a(a, b, c) {
		var d, e = Na(a),
			f = Oa(a, b, e),
			g = "border-box" === r.css(a, "boxSizing", !1, e);
		return Ma.test(f) ? f : (d = g && (o.boxSizingReliable() || f === a.style[b]), "auto" === f && (f = a["offset" + b[0].toUpperCase() + b.slice(1)]), f = parseFloat(f) || 0, f + Za(a, b, c || (g ? "border" : "content"), d, e) + "px")
	}
	r.extend({
		cssHooks: {
			opacity: {
				get: function(a, b) {
					if(b) {
						var c = Oa(a, "opacity");
						return "" === c ? "1" : c
					}
				}
			}
		},
		cssNumber: {
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": "cssFloat"
		},
		style: function(a, b, c, d) {
			if(a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
				var e, f, g, h = r.camelCase(b),
					i = Ra.test(b),
					j = a.style;
				return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : j[b] : (f = typeof c, "string" === f && (e = ba.exec(c)) && e[1] && (c = fa(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (j[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i ? j.setProperty(b, c) : j[b] = c)), void 0)
			}
		},
		css: function(a, b, c, d) {
			var e, f, g, h = r.camelCase(b),
				i = Ra.test(b);
			return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Oa(a, b, d)), "normal" === e && b in Ta && (e = Ta[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
		}
	}), r.each(["height", "width"], function(a, b) {
		r.cssHooks[b] = {
			get: function(a, c, d) {
				if(c) return !Qa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? $a(a, b, d) : ea(a, Sa, function() {
					return $a(a, b, d)
				})
			},
			set: function(a, c, d) {
				var e, f = d && Na(a),
					g = d && Za(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);
				return g && (e = ba.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Ya(a, c, g)
			}
		}
	}), r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function(a, b) {
		if(b) return(parseFloat(Oa(a, "marginLeft")) || a.getBoundingClientRect().left - ea(a, {
			marginLeft: 0
		}, function() {
			return a.getBoundingClientRect().left
		})) + "px"
	}), r.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(a, b) {
		r.cssHooks[a + b] = {
			expand: function(c) {
				for(var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + ca[d] + b] = f[d] || f[d - 2] || f[0];
				return e
			}
		}, La.test(a) || (r.cssHooks[a + b].set = Ya)
	}), r.fn.extend({
		css: function(a, b) {
			return T(this, function(a, b, c) {
				var d, e, f = {},
					g = 0;
				if(Array.isArray(b)) {
					for(d = Na(a), e = b.length; g < e; g++) f[b[g]] = r.css(a, b[g], !1, d);
					return f
				}
				return void 0 !== c ? r.style(a, b, c) : r.css(a, b)
			}, a, b, arguments.length > 1)
		}
	});

	function _a(a, b, c, d, e) {
		return new _a.prototype.init(a, b, c, d, e)
	}
	r.Tween = _a, _a.prototype = {
		constructor: _a,
		init: function(a, b, c, d, e, f) {
			this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px")
		},
		cur: function() {
			var a = _a.propHooks[this.prop];
			return a && a.get ? a.get(this) : _a.propHooks._default.get(this)
		},
		run: function(a) {
			var b, c = _a.propHooks[this.prop];
			return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : _a.propHooks._default.set(this), this
		}
	}, _a.prototype.init.prototype = _a.prototype, _a.propHooks = {
		_default: {
			get: function(a) {
				var b;
				return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
			},
			set: function(a) {
				r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit)
			}
		}
	}, _a.propHooks.scrollTop = _a.propHooks.scrollLeft = {
		set: function(a) {
			a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
		}
	}, r.easing = {
		linear: function(a) {
			return a
		},
		swing: function(a) {
			return .5 - Math.cos(a * Math.PI) / 2
		},
		_default: "swing"
	}, r.fx = _a.prototype.init, r.fx.step = {};
	var ab, bb, cb = /^(?:toggle|show|hide)$/,
		db = /queueHooks$/;

	function eb() {
		bb && (d.hidden === !1 && a.requestAnimationFrame ? a.requestAnimationFrame(eb) : a.setTimeout(eb, r.fx.interval), r.fx.tick())
	}

	function fb() {
		return a.setTimeout(function() {
			ab = void 0
		}), ab = r.now()
	}

	function gb(a, b) {
		var c, d = 0,
			e = {
				height: a
			};
		for(b = b ? 1 : 0; d < 4; d += 2 - b) c = ca[d], e["margin" + c] = e["padding" + c] = a;
		return b && (e.opacity = e.width = a), e
	}

	function hb(a, b, c) {
		for(var d, e = (kb.tweeners[b] || []).concat(kb.tweeners["*"]), f = 0, g = e.length; f < g; f++)
			if(d = e[f].call(c, b, a)) return d
	}

	function ib(a, b, c) {
		var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b,
			m = this,
			n = {},
			o = a.style,
			p = a.nodeType && da(a),
			q = W.get(a, "fxshow");
		c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function() {
			g.unqueued || h()
		}), g.unqueued++, m.always(function() {
			m.always(function() {
				g.unqueued--, r.queue(a, "fx").length || g.empty.fire()
			})
		}));
		for(d in b)
			if(e = b[d], cb.test(e)) {
				if(delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
					if("show" !== e || !q || void 0 === q[d]) continue;
					p = !0
				}
				n[d] = q && q[d] || r.style(a, d)
			}
		if(i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
			l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = W.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ia([a], !0), j = a.style.display || j, k = r.css(a, "display"), ia([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function() {
				o.display = j
			}), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function() {
				o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
			})), i = !1;
			for(d in n) i || (q ? "hidden" in q && (p = q.hidden) : q = W.access(a, "fxshow", {
				display: j
			}), f && (q.hidden = !p), p && ia([a], !0), m.done(function() {
				p || ia([a]), W.remove(a, "fxshow");
				for(d in n) r.style(a, d, n[d])
			})), i = hb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0))
		}
	}

	function jb(a, b) {
		var c, d, e, f, g;
		for(c in a)
			if(d = r.camelCase(c), e = b[d], f = a[c], Array.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
				f = g.expand(f), delete a[d];
				for(c in f) c in a || (a[c] = f[c], b[c] = e)
			} else b[d] = e
	}

	function kb(a, b, c) {
		var d, e, f = 0,
			g = kb.prefilters.length,
			h = r.Deferred().always(function() {
				delete i.elem
			}),
			i = function() {
				if(e) return !1;
				for(var b = ab || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f);
				return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (i || h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j]), !1)
			},
			j = h.promise({
				elem: a,
				props: r.extend({}, b),
				opts: r.extend(!0, {
					specialEasing: {},
					easing: r.easing._default
				}, c),
				originalProperties: b,
				originalOptions: c,
				startTime: ab || fb(),
				duration: c.duration,
				tweens: [],
				createTween: function(b, c) {
					var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
					return j.tweens.push(d), d
				},
				stop: function(b) {
					var c = 0,
						d = b ? j.tweens.length : 0;
					if(e) return this;
					for(e = !0; c < d; c++) j.tweens[c].run(1);
					return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
				}
			}),
			k = j.props;
		for(jb(k, j.opts.specialEasing); f < g; f++)
			if(d = kb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
		return r.map(k, hb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always), r.fx.timer(r.extend(i, {
			elem: a,
			anim: j,
			queue: j.opts.queue
		})), j
	}
	r.Animation = r.extend(kb, {
			tweeners: {
				"*": [function(a, b) {
					var c = this.createTween(a, b);
					return fa(c.elem, a, ba.exec(b), c), c
				}]
			},
			tweener: function(a, b) {
				r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(L);
				for(var c, d = 0, e = a.length; d < e; d++) c = a[d], kb.tweeners[c] = kb.tweeners[c] || [], kb.tweeners[c].unshift(b)
			},
			prefilters: [ib],
			prefilter: function(a, b) {
				b ? kb.prefilters.unshift(a) : kb.prefilters.push(a)
			}
		}), r.speed = function(a, b, c) {
			var d = a && "object" == typeof a ? r.extend({}, a) : {
				complete: c || !c && b || r.isFunction(a) && a,
				duration: a,
				easing: c && b || b && !r.isFunction(b) && b
			};
			return r.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in r.fx.speeds ? d.duration = r.fx.speeds[d.duration] : d.duration = r.fx.speeds._default), null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
				r.isFunction(d.old) && d.old.call(this), d.queue && r.dequeue(this, d.queue)
			}, d
		}, r.fn.extend({
			fadeTo: function(a, b, c, d) {
				return this.filter(da).css("opacity", 0).show().end().animate({
					opacity: b
				}, a, c, d)
			},
			animate: function(a, b, c, d) {
				var e = r.isEmptyObject(a),
					f = r.speed(b, c, d),
					g = function() {
						var b = kb(this, r.extend({}, a), f);
						(e || W.get(this, "finish")) && b.stop(!0)
					};
				return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
			},
			stop: function(a, b, c) {
				var d = function(a) {
					var b = a.stop;
					delete a.stop, b(c)
				};
				return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
					var b = !0,
						e = null != a && a + "queueHooks",
						f = r.timers,
						g = W.get(this);
					if(e) g[e] && g[e].stop && d(g[e]);
					else
						for(e in g) g[e] && g[e].stop && db.test(e) && d(g[e]);
					for(e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
					!b && c || r.dequeue(this, a)
				})
			},
			finish: function(a) {
				return a !== !1 && (a = a || "fx"), this.each(function() {
					var b, c = W.get(this),
						d = c[a + "queue"],
						e = c[a + "queueHooks"],
						f = r.timers,
						g = d ? d.length : 0;
					for(c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
					for(b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
					delete c.finish
				})
			}
		}), r.each(["toggle", "show", "hide"], function(a, b) {
			var c = r.fn[b];
			r.fn[b] = function(a, d, e) {
				return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e)
			}
		}), r.each({
			slideDown: gb("show"),
			slideUp: gb("hide"),
			slideToggle: gb("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function(a, b) {
			r.fn[a] = function(a, c, d) {
				return this.animate(b, a, c, d)
			}
		}), r.timers = [], r.fx.tick = function() {
			var a, b = 0,
				c = r.timers;
			for(ab = r.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
			c.length || r.fx.stop(), ab = void 0
		}, r.fx.timer = function(a) {
			r.timers.push(a), r.fx.start()
		}, r.fx.interval = 13, r.fx.start = function() {
			bb || (bb = !0, eb())
		}, r.fx.stop = function() {
			bb = null
		}, r.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, r.fn.delay = function(b, c) {
			return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
				var e = a.setTimeout(c, b);
				d.stop = function() {
					a.clearTimeout(e)
				}
			})
		},
		function() {
			var a = d.createElement("input"),
				b = d.createElement("select"),
				c = b.appendChild(d.createElement("option"));
			a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value
		}();
	var lb, mb = r.expr.attrHandle;
	r.fn.extend({
		attr: function(a, b) {
			return T(this, r.attr, a, b, arguments.length > 1)
		},
		removeAttr: function(a) {
			return this.each(function() {
				r.removeAttr(this, a)
			})
		}
	}), r.extend({
		attr: function(a, b, c) {
			var d, e, f = a.nodeType;
			if(3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? lb : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b),
				null == d ? void 0 : d))
		},
		attrHooks: {
			type: {
				set: function(a, b) {
					if(!o.radioValue && "radio" === b && B(a, "input")) {
						var c = a.value;
						return a.setAttribute("type", b), c && (a.value = c), b
					}
				}
			}
		},
		removeAttr: function(a, b) {
			var c, d = 0,
				e = b && b.match(L);
			if(e && 1 === a.nodeType)
				while(c = e[d++]) a.removeAttribute(c)
		}
	}), lb = {
		set: function(a, b, c) {
			return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c
		}
	}, r.each(r.expr.match.bool.source.match(/\w+/g), function(a, b) {
		var c = mb[b] || r.find.attr;
		mb[b] = function(a, b, d) {
			var e, f, g = b.toLowerCase();
			return d || (f = mb[g], mb[g] = e, e = null != c(a, b, d) ? g : null, mb[g] = f), e
		}
	});
	var nb = /^(?:input|select|textarea|button)$/i,
		ob = /^(?:a|area)$/i;
	r.fn.extend({
		prop: function(a, b) {
			return T(this, r.prop, a, b, arguments.length > 1)
		},
		removeProp: function(a) {
			return this.each(function() {
				delete this[r.propFix[a] || a]
			})
		}
	}), r.extend({
		prop: function(a, b, c) {
			var d, e, f = a.nodeType;
			if(3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
		},
		propHooks: {
			tabIndex: {
				get: function(a) {
					var b = r.find.attr(a, "tabindex");
					return b ? parseInt(b, 10) : nb.test(a.nodeName) || ob.test(a.nodeName) && a.href ? 0 : -1
				}
			}
		},
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	}), o.optSelected || (r.propHooks.selected = {
		get: function(a) {
			var b = a.parentNode;
			return b && b.parentNode && b.parentNode.selectedIndex, null
		},
		set: function(a) {
			var b = a.parentNode;
			b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
		}
	}), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		r.propFix[this.toLowerCase()] = this
	});

	function pb(a) {
		var b = a.match(L) || [];
		return b.join(" ")
	}

	function qb(a) {
		return a.getAttribute && a.getAttribute("class") || ""
	}
	r.fn.extend({
		addClass: function(a) {
			var b, c, d, e, f, g, h, i = 0;
			if(r.isFunction(a)) return this.each(function(b) {
				r(this).addClass(a.call(this, b, qb(this)))
			});
			if("string" == typeof a && a) {
				b = a.match(L) || [];
				while(c = this[i++])
					if(e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
						g = 0;
						while(f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
						h = pb(d), e !== h && c.setAttribute("class", h)
					}
			}
			return this
		},
		removeClass: function(a) {
			var b, c, d, e, f, g, h, i = 0;
			if(r.isFunction(a)) return this.each(function(b) {
				r(this).removeClass(a.call(this, b, qb(this)))
			});
			if(!arguments.length) return this.attr("class", "");
			if("string" == typeof a && a) {
				b = a.match(L) || [];
				while(c = this[i++])
					if(e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
						g = 0;
						while(f = b[g++])
							while(d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
						h = pb(d), e !== h && c.setAttribute("class", h)
					}
			}
			return this
		},
		toggleClass: function(a, b) {
			var c = typeof a;
			return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function(c) {
				r(this).toggleClass(a.call(this, c, qb(this), b), b)
			}) : this.each(function() {
				var b, d, e, f;
				if("string" === c) {
					d = 0, e = r(this), f = a.match(L) || [];
					while(b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
				} else void 0 !== a && "boolean" !== c || (b = qb(this), b && W.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : W.get(this, "__className__") || ""))
			})
		},
		hasClass: function(a) {
			var b, c, d = 0;
			b = " " + a + " ";
			while(c = this[d++])
				if(1 === c.nodeType && (" " + pb(qb(c)) + " ").indexOf(b) > -1) return !0;
			return !1
		}
	});
	var rb = /\r/g;
	r.fn.extend({
		val: function(a) {
			var b, c, d, e = this[0]; {
				if(arguments.length) return d = r.isFunction(a), this.each(function(c) {
					var e;
					1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = r.map(e, function(a) {
						return null == a ? "" : a + ""
					})), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
				});
				if(e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
			}
		}
	}), r.extend({
		valHooks: {
			option: {
				get: function(a) {
					var b = r.find.attr(a, "value");
					return null != b ? b : pb(r.text(a))
				}
			},
			select: {
				get: function(a) {
					var b, c, d, e = a.options,
						f = a.selectedIndex,
						g = "select-one" === a.type,
						h = g ? null : [],
						i = g ? f + 1 : e.length;
					for(d = f < 0 ? i : g ? f : 0; d < i; d++)
						if(c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !B(c.parentNode, "optgroup"))) {
							if(b = r(c).val(), g) return b;
							h.push(b)
						}
					return h
				},
				set: function(a, b) {
					var c, d, e = a.options,
						f = r.makeArray(b),
						g = e.length;
					while(g--) d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
					return c || (a.selectedIndex = -1), f
				}
			}
		}
	}), r.each(["radio", "checkbox"], function() {
		r.valHooks[this] = {
			set: function(a, b) {
				if(Array.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1
			}
		}, o.checkOn || (r.valHooks[this].get = function(a) {
			return null === a.getAttribute("value") ? "on" : a.value
		})
	});
	var sb = /^(?:focusinfocus|focusoutblur)$/;
	r.extend(r.event, {
		trigger: function(b, c, e, f) {
			var g, h, i, j, k, m, n, o = [e || d],
				p = l.call(b, "type") ? b.type : b,
				q = l.call(b, "namespace") ? b.namespace.split(".") : [];
			if(h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !sb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
				if(!f && !n.noBubble && !r.isWindow(e)) {
					for(j = n.delegateType || p, sb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), i = h;
					i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a)
				}
				g = 0;
				while((h = o[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : n.bindType || p, m = (W.get(h, "events") || {})[b.type] && W.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && U(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
				return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !U(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result
			}
		},
		simulate: function(a, b, c) {
			var d = r.extend(new r.Event, c, {
				type: a,
				isSimulated: !0
			});
			r.event.trigger(d, null, b)
		}
	}), r.fn.extend({
		trigger: function(a, b) {
			return this.each(function() {
				r.event.trigger(a, b, this)
			})
		},
		triggerHandler: function(a, b) {
			var c = this[0];
			if(c) return r.event.trigger(a, b, c, !0)
		}
	}), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a, b) {
		r.fn[b] = function(a, c) {
			return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
		}
	}), r.fn.extend({
		hover: function(a, b) {
			return this.mouseenter(a).mouseleave(b || a)
		}
	}), o.focusin = "onfocusin" in a, o.focusin || r.each({
		focus: "focusin",
		blur: "focusout"
	}, function(a, b) {
		var c = function(a) {
			r.event.simulate(b, a.target, r.event.fix(a))
		};
		r.event.special[b] = {
			setup: function() {
				var d = this.ownerDocument || this,
					e = W.access(d, b);
				e || d.addEventListener(a, c, !0), W.access(d, b, (e || 0) + 1)
			},
			teardown: function() {
				var d = this.ownerDocument || this,
					e = W.access(d, b) - 1;
				e ? W.access(d, b, e) : (d.removeEventListener(a, c, !0), W.remove(d, b))
			}
		}
	});
	var tb = a.location,
		ub = r.now(),
		vb = /\?/;
	r.parseXML = function(b) {
		var c;
		if(!b || "string" != typeof b) return null;
		try {
			c = (new a.DOMParser).parseFromString(b, "text/xml")
		} catch(d) {
			c = void 0
		}
		return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c
	};
	var wb = /\[\]$/,
		xb = /\r?\n/g,
		yb = /^(?:submit|button|image|reset|file)$/i,
		zb = /^(?:input|select|textarea|keygen)/i;

	function Ab(a, b, c, d) {
		var e;
		if(Array.isArray(b)) r.each(b, function(b, e) {
			c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
		});
		else if(c || "object" !== r.type(b)) d(a, b);
		else
			for(e in b) Ab(a + "[" + e + "]", b[e], c, d)
	}
	r.param = function(a, b) {
		var c, d = [],
			e = function(a, b) {
				var c = r.isFunction(b) ? b() : b;
				d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c)
			};
		if(Array.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function() {
			e(this.name, this.value)
		});
		else
			for(c in a) Ab(c, a[c], b, e);
		return d.join("&")
	}, r.fn.extend({
		serialize: function() {
			return r.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var a = r.prop(this, "elements");
				return a ? r.makeArray(a) : this
			}).filter(function() {
				var a = this.type;
				return this.name && !r(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !ja.test(a))
			}).map(function(a, b) {
				var c = r(this).val();
				return null == c ? null : Array.isArray(c) ? r.map(c, function(a) {
					return {
						name: b.name,
						value: a.replace(xb, "\r\n")
					}
				}) : {
					name: b.name,
					value: c.replace(xb, "\r\n")
				}
			}).get()
		}
	});
	var Bb = /%20/g,
		Cb = /#.*$/,
		Db = /([?&])_=[^&]*/,
		Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		Gb = /^(?:GET|HEAD)$/,
		Hb = /^\/\//,
		Ib = {},
		Jb = {},
		Kb = "*/".concat("*"),
		Lb = d.createElement("a");
	Lb.href = tb.href;

	function Mb(a) {
		return function(b, c) {
			"string" != typeof b && (c = b, b = "*");
			var d, e = 0,
				f = b.toLowerCase().match(L) || [];
			if(r.isFunction(c))
				while(d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
		}
	}

	function Nb(a, b, c, d) {
		var e = {},
			f = a === Jb;

		function g(h) {
			var i;
			return e[h] = !0, r.each(a[h] || [], function(a, h) {
				var j = h(b, c, d);
				return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
			}), i
		}
		return g(b.dataTypes[0]) || !e["*"] && g("*")
	}

	function Ob(a, b) {
		var c, d, e = r.ajaxSettings.flatOptions || {};
		for(c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
		return d && r.extend(!0, a, d), a
	}

	function Pb(a, b, c) {
		var d, e, f, g, h = a.contents,
			i = a.dataTypes;
		while("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
		if(d)
			for(e in h)
				if(h[e] && h[e].test(d)) {
					i.unshift(e);
					break
				}
		if(i[0] in c) f = i[0];
		else {
			for(e in c) {
				if(!i[0] || a.converters[e + " " + i[0]]) {
					f = e;
					break
				}
				g || (g = e)
			}
			f = f || g
		}
		if(f) return f !== i[0] && i.unshift(f), c[f]
	}

	function Qb(a, b, c, d) {
		var e, f, g, h, i, j = {},
			k = a.dataTypes.slice();
		if(k[1])
			for(g in a.converters) j[g.toLowerCase()] = a.converters[g];
		f = k.shift();
		while(f)
			if(a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
				if("*" === f) f = i;
				else if("*" !== i && i !== f) {
			if(g = j[i + " " + f] || j["* " + f], !g)
				for(e in j)
					if(h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
						g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
						break
					}
			if(g !== !0)
				if(g && a["throws"]) b = g(b);
				else try {
					b = g(b)
				} catch(l) {
					return {
						state: "parsererror",
						error: g ? l : "No conversion from " + i + " to " + f
					}
				}
		}
		return {
			state: "success",
			data: b
		}
	}
	r.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: tb.href,
			type: "GET",
			isLocal: Fb.test(tb.protocol),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Kb,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": JSON.parse,
				"text xml": r.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(a, b) {
			return b ? Ob(Ob(a, r.ajaxSettings), b) : Ob(r.ajaxSettings, a)
		},
		ajaxPrefilter: Mb(Ib),
		ajaxTransport: Mb(Jb),
		ajax: function(b, c) {
			"object" == typeof b && (c = b, b = void 0), c = c || {};
			var e, f, g, h, i, j, k, l, m, n, o = r.ajaxSetup({}, c),
				p = o.context || o,
				q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
				s = r.Deferred(),
				t = r.Callbacks("once memory"),
				u = o.statusCode || {},
				v = {},
				w = {},
				x = "canceled",
				y = {
					readyState: 0,
					getResponseHeader: function(a) {
						var b;
						if(k) {
							if(!h) {
								h = {};
								while(b = Eb.exec(g)) h[b[1].toLowerCase()] = b[2]
							}
							b = h[a.toLowerCase()]
						}
						return null == b ? null : b
					},
					getAllResponseHeaders: function() {
						return k ? g : null
					},
					setRequestHeader: function(a, b) {
						return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this
					},
					overrideMimeType: function(a) {
						return null == k && (o.mimeType = a), this
					},
					statusCode: function(a) {
						var b;
						if(a)
							if(k) y.always(a[y.status]);
							else
								for(b in a) u[b] = [u[b], a[b]];
						return this
					},
					abort: function(a) {
						var b = a || x;
						return e && e.abort(b), A(0, b), this
					}
				};
			if(s.promise(y), o.url = ((b || o.url || tb.href) + "").replace(Hb, tb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(L) || [""], null == o.crossDomain) {
				j = d.createElement("a");
				try {
					j.href = o.url, j.href = j.href, o.crossDomain = Lb.protocol + "//" + Lb.host != j.protocol + "//" + j.host
				} catch(z) {
					o.crossDomain = !0
				}
			}
			if(o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Nb(Ib, o, c, y), k) return y;
			l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Gb.test(o.type), f = o.url.replace(Cb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Bb, "+")) : (n = o.url.slice(f.length), o.data && (f += (vb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Db, "$1"), n = (vb.test(f) ? "&" : "?") + "_=" + ub++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Kb + "; q=0.01" : "") : o.accepts["*"]);
			for(m in o.headers) y.setRequestHeader(m, o.headers[m]);
			if(o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();
			if(x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Nb(Jb, o, c, y)) {
				if(y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;
				o.async && o.timeout > 0 && (i = a.setTimeout(function() {
					y.abort("timeout")
				}, o.timeout));
				try {
					k = !1, e.send(v, A)
				} catch(z) {
					if(k) throw z;
					A(-1, z)
				}
			} else A(-1, "No Transport");

			function A(b, c, d, h) {
				var j, m, n, v, w, x = c;
				k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Pb(o, y, d)), v = Qb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")))
			}
			return y
		},
		getJSON: function(a, b, c) {
			return r.get(a, b, c, "json")
		},
		getScript: function(a, b) {
			return r.get(a, void 0, b, "script")
		}
	}), r.each(["get", "post"], function(a, b) {
		r[b] = function(a, c, d, e) {
			return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({
				url: a,
				type: b,
				dataType: e,
				data: c,
				success: d
			}, r.isPlainObject(a) && a))
		}
	}), r._evalUrl = function(a) {
		return r.ajax({
			url: a,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			"throws": !0
		})
	}, r.fn.extend({
		wrapAll: function(a) {
			var b;
			return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
				var a = this;
				while(a.firstElementChild) a = a.firstElementChild;
				return a
			}).append(this)), this
		},
		wrapInner: function(a) {
			return r.isFunction(a) ? this.each(function(b) {
				r(this).wrapInner(a.call(this, b))
			}) : this.each(function() {
				var b = r(this),
					c = b.contents();
				c.length ? c.wrapAll(a) : b.append(a)
			})
		},
		wrap: function(a) {
			var b = r.isFunction(a);
			return this.each(function(c) {
				r(this).wrapAll(b ? a.call(this, c) : a)
			})
		},
		unwrap: function(a) {
			return this.parent(a).not("body").each(function() {
				r(this).replaceWith(this.childNodes)
			}), this
		}
	}), r.expr.pseudos.hidden = function(a) {
		return !r.expr.pseudos.visible(a)
	}, r.expr.pseudos.visible = function(a) {
		return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
	}, r.ajaxSettings.xhr = function() {
		try {
			return new a.XMLHttpRequest
		} catch(b) {}
	};
	var Rb = {
			0: 200,
			1223: 204
		},
		Sb = r.ajaxSettings.xhr();
	o.cors = !!Sb && "withCredentials" in Sb, o.ajax = Sb = !!Sb, r.ajaxTransport(function(b) {
		var c, d;
		if(o.cors || Sb && !b.crossDomain) return {
			send: function(e, f) {
				var g, h = b.xhr();
				if(h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
					for(g in b.xhrFields) h[g] = b.xhrFields[g];
				b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
				for(g in e) h.setRequestHeader(g, e[g]);
				c = function(a) {
					return function() {
						c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Rb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
							binary: h.response
						} : {
							text: h.responseText
						}, h.getAllResponseHeaders()))
					}
				}, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
					4 === h.readyState && a.setTimeout(function() {
						c && d()
					})
				}, c = c("abort");
				try {
					h.send(b.hasContent && b.data || null)
				} catch(i) {
					if(c) throw i
				}
			},
			abort: function() {
				c && c()
			}
		}
	}), r.ajaxPrefilter(function(a) {
		a.crossDomain && (a.contents.script = !1)
	}), r.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function(a) {
				return r.globalEval(a), a
			}
		}
	}), r.ajaxPrefilter("script", function(a) {
		void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
	}), r.ajaxTransport("script", function(a) {
		if(a.crossDomain) {
			var b, c;
			return {
				send: function(e, f) {
					b = r("<script>").prop({
						charset: a.scriptCharset,
						src: a.url
					}).on("load error", c = function(a) {
						b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type)
					}), d.head.appendChild(b[0])
				},
				abort: function() {
					c && c()
				}
			}
		}
	});
	var Tb = [],
		Ub = /(=)\?(?=&|$)|\?\?/;
	r.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var a = Tb.pop() || r.expando + "_" + ub++;
			return this[a] = !0, a
		}
	}), r.ajaxPrefilter("json jsonp", function(b, c, d) {
		var e, f, g, h = b.jsonp !== !1 && (Ub.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ub.test(b.data) && "data");
		if(h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Ub, "$1" + e) : b.jsonp !== !1 && (b.url += (vb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
			return g || r.error(e + " was not called"), g[0]
		}, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
			g = arguments
		}, d.always(function() {
			void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Tb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0
		}), "script"
	}), o.createHTMLDocument = function() {
		var a = d.implementation.createHTMLDocument("").body;
		return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length
	}(), r.parseHTML = function(a, b, c) {
		if("string" != typeof a) return [];
		"boolean" == typeof b && (c = b, b = !1);
		var e, f, g;
		return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = C.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = qa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes))
	}, r.fn.load = function(a, b, c) {
		var d, e, f, g = this,
			h = a.indexOf(" ");
		return h > -1 && (d = pb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && r.ajax({
			url: a,
			type: e || "GET",
			dataType: "html",
			data: b
		}).done(function(a) {
			f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a)
		}).always(c && function(a, b) {
			g.each(function() {
				c.apply(this, f || [a.responseText, b, a])
			})
		}), this
	}, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
		r.fn[b] = function(a) {
			return this.on(b, a)
		}
	}), r.expr.pseudos.animated = function(a) {
		return r.grep(r.timers, function(b) {
			return a === b.elem
		}).length
	}, r.offset = {
		setOffset: function(a, b, c) {
			var d, e, f, g, h, i, j, k = r.css(a, "position"),
				l = r(a),
				m = {};
			"static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
		}
	}, r.fn.extend({
		offset: function(a) {
			if(arguments.length) return void 0 === a ? this : this.each(function(b) {
				r.offset.setOffset(this, a, b)
			});
			var b, c, d, e, f = this[0];
			if(f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), b = f.ownerDocument, c = b.documentElement, e = b.defaultView, {
				top: d.top + e.pageYOffset - c.clientTop,
				left: d.left + e.pageXOffset - c.clientLeft
			}) : {
				top: 0,
				left: 0
			}
		},
		position: function() {
			if(this[0]) {
				var a, b, c = this[0],
					d = {
						top: 0,
						left: 0
					};
				return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), B(a[0], "html") || (d = a.offset()), d = {
					top: d.top + r.css(a[0], "borderTopWidth", !0),
					left: d.left + r.css(a[0], "borderLeftWidth", !0)
				}), {
					top: b.top - d.top - r.css(c, "marginTop", !0),
					left: b.left - d.left - r.css(c, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				var a = this.offsetParent;
				while(a && "static" === r.css(a, "position")) a = a.offsetParent;
				return a || ra
			})
		}
	}), r.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(a, b) {
		var c = "pageYOffset" === b;
		r.fn[a] = function(d) {
			return T(this, function(a, d, e) {
				var f;
				return r.isWindow(a) ? f = a : 9 === a.nodeType && (f = a.defaultView), void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
			}, a, d, arguments.length)
		}
	}), r.each(["top", "left"], function(a, b) {
		r.cssHooks[b] = Pa(o.pixelPosition, function(a, c) {
			if(c) return c = Oa(a, b), Ma.test(c) ? r(a).position()[b] + "px" : c
		})
	}), r.each({
		Height: "height",
		Width: "width"
	}, function(a, b) {
		r.each({
			padding: "inner" + a,
			content: b,
			"": "outer" + a
		}, function(c, d) {
			r.fn[d] = function(e, f) {
				var g = arguments.length && (c || "boolean" != typeof e),
					h = c || (e === !0 || f === !0 ? "margin" : "border");
				return T(this, function(b, c, e) {
					var f;
					return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h)
				}, b, g ? e : void 0, g)
			}
		})
	}), r.fn.extend({
		bind: function(a, b, c) {
			return this.on(a, null, b, c)
		},
		unbind: function(a, b) {
			return this.off(a, null, b)
		},
		delegate: function(a, b, c, d) {
			return this.on(b, a, c, d)
		},
		undelegate: function(a, b, c) {
			return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
		}
	}), r.holdReady = function(a) {
		a ? r.readyWait++ : r.ready(!0)
	}, r.isArray = Array.isArray, r.parseJSON = JSON.parse, r.nodeName = B, "function" == typeof define && define.amd && define("jquery", [], function() {
		return r
	});
	var Vb = a.jQuery,
		Wb = a.$;
	return r.noConflict = function(b) {
		return a.$ === r && (a.$ = Wb), b && a.jQuery === r && (a.jQuery = Vb), r
	}, b || (a.jQuery = a.$ = r), r
});

! function(t, e) {
	"object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.io = e() : t.io = e()
}(this, function() {
	return function(t) {
		function e(r) {
			if(n[r]) return n[r].exports;
			var o = n[r] = {
				exports: {},
				id: r,
				loaded: !1
			};
			return t[r].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
		}
		var n = {};
		return e.m = t, e.c = n, e.p = "", e(0)
	}([function(t, e, n) {
		"use strict";

		function r(t, e) {
			"object" === ("undefined" == typeof t ? "undefined" : o(t)) && (e = t, t = void 0), e = e || {};
			var n, r = i(t),
				s = r.source,
				u = r.id,
				h = r.path,
				f = p[u] && h in p[u].nsps,
				l = e.forceNew || e["force new connection"] || !1 === e.multiplex || f;
			return l ? (c("ignoring socket cache for %s", s), n = a(s, e)) : (p[u] || (c("new io instance for %s", s), p[u] = a(s, e)), n = p[u]), r.query && !e.query && (e.query = r.query), n.socket(r.path, e)
		}
		var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
				return typeof t
			} : function(t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			},
			i = n(1),
			s = n(7),
			a = n(13),
			c = n(3)("socket.io-client");
		t.exports = e = r;
		var p = e.managers = {};
		e.protocol = s.protocol, e.connect = r, e.Manager = n(13), e.Socket = n(37)
	}, function(t, e, n) {
		(function(e) {
			"use strict";

			function r(t, n) {
				var r = t;
				n = n || e.location, null == t && (t = n.protocol + "//" + n.host), "string" == typeof t && ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? n.protocol + t : n.host + t), /^(https?|wss?):\/\//.test(t) || (i("protocol-less url %s", t), t = "undefined" != typeof n ? n.protocol + "//" + t : "https://" + t), i("parse %s", t), r = o(t)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
				var s = r.host.indexOf(":") !== -1,
					a = s ? "[" + r.host + "]" : r.host;
				return r.id = r.protocol + "://" + a + ":" + r.port, r.href = r.protocol + "://" + a + (n && n.port === r.port ? "" : ":" + r.port), r
			}
			var o = n(2),
				i = n(3)("socket.io-client:url");
			t.exports = r
		}).call(e, function() {
			return this
		}())
	}, function(t, e) {
		var n = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
			r = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
		t.exports = function(t) {
			var e = t,
				o = t.indexOf("["),
				i = t.indexOf("]");
			o != -1 && i != -1 && (t = t.substring(0, o) + t.substring(o, i).replace(/:/g, ";") + t.substring(i, t.length));
			for(var s = n.exec(t || ""), a = {}, c = 14; c--;) a[r[c]] = s[c] || "";
			return o != -1 && i != -1 && (a.source = e, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = !0), a
		}
	}, function(t, e, n) {
		(function(r) {
			function o() {
				return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type) || ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
			}

			function i(t) {
				var n = this.useColors;
				if(t[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + t[0] + (n ? "%c " : " ") + "+" + e.humanize(this.diff), n) {
					var r = "color: " + this.color;
					t.splice(1, 0, r, "color: inherit");
					var o = 0,
						i = 0;
					t[0].replace(/%[a-zA-Z%]/g, function(t) {
						"%%" !== t && (o++, "%c" === t && (i = o))
					}), t.splice(i, 0, r)
				}
			}

			function s() {
				return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
			}

			function a(t) {
				try {
					null == t ? e.storage.removeItem("debug") : e.storage.debug = t
				} catch(n) {}
			}

			function c() {
				var t;
				try {
					t = e.storage.debug
				} catch(n) {}
				return !t && "undefined" != typeof r && "env" in r && (t = r.env.DEBUG), t
			}

			function p() {
				try {
					return window.localStorage
				} catch(t) {}
			}
			e = t.exports = n(5), e.log = s, e.formatArgs = i, e.save = a, e.load = c, e.useColors = o, e.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : p(), e.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], e.formatters.j = function(t) {
				try {
					return JSON.stringify(t)
				} catch(e) {
					return "[UnexpectedJSONParseError]: " + e.message
				}
			}, e.enable(c())
		}).call(e, n(4))
	}, function(t, e) {
		function n() {
			throw new Error("setTimeout has not been defined")
		}

		function r() {
			throw new Error("clearTimeout has not been defined")
		}

		function o(t) {
			if(u === setTimeout) return setTimeout(t, 0);
			if((u === n || !u) && setTimeout) return u = setTimeout, setTimeout(t, 0);
			try {
				return u(t, 0)
			} catch(e) {
				try {
					return u.call(null, t, 0)
				} catch(e) {
					return u.call(this, t, 0)
				}
			}
		}

		function i(t) {
			if(h === clearTimeout) return clearTimeout(t);
			if((h === r || !h) && clearTimeout) return h = clearTimeout, clearTimeout(t);
			try {
				return h(t)
			} catch(e) {
				try {
					return h.call(null, t)
				} catch(e) {
					return h.call(this, t)
				}
			}
		}

		function s() {
			y && l && (y = !1, l.length ? d = l.concat(d) : m = -1, d.length && a())
		}

		function a() {
			if(!y) {
				var t = o(s);
				y = !0;
				for(var e = d.length; e;) {
					for(l = d, d = []; ++m < e;) l && l[m].run();
					m = -1, e = d.length
				}
				l = null, y = !1, i(t)
			}
		}

		function c(t, e) {
			this.fun = t, this.array = e
		}

		function p() {}
		var u, h, f = t.exports = {};
		! function() {
			try {
				u = "function" == typeof setTimeout ? setTimeout : n
			} catch(t) {
				u = n
			}
			try {
				h = "function" == typeof clearTimeout ? clearTimeout : r
			} catch(t) {
				h = r
			}
		}();
		var l, d = [],
			y = !1,
			m = -1;
		f.nextTick = function(t) {
			var e = new Array(arguments.length - 1);
			if(arguments.length > 1)
				for(var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
			d.push(new c(t, e)), 1 !== d.length || y || o(a)
		}, c.prototype.run = function() {
			this.fun.apply(null, this.array)
		}, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = p, f.addListener = p, f.once = p, f.off = p, f.removeListener = p, f.removeAllListeners = p, f.emit = p, f.prependListener = p, f.prependOnceListener = p, f.listeners = function(t) {
			return []
		}, f.binding = function(t) {
			throw new Error("process.binding is not supported")
		}, f.cwd = function() {
			return "/"
		}, f.chdir = function(t) {
			throw new Error("process.chdir is not supported")
		}, f.umask = function() {
			return 0
		}
	}, function(t, e, n) {
		function r(t) {
			var n, r = 0;
			for(n in t) r = (r << 5) - r + t.charCodeAt(n), r |= 0;
			return e.colors[Math.abs(r) % e.colors.length]
		}

		function o(t) {
			function n() {
				if(n.enabled) {
					var t = n,
						r = +new Date,
						o = r - (p || r);
					t.diff = o, t.prev = p, t.curr = r, p = r;
					for(var i = new Array(arguments.length), s = 0; s < i.length; s++) i[s] = arguments[s];
					i[0] = e.coerce(i[0]), "string" != typeof i[0] && i.unshift("%O");
					var a = 0;
					i[0] = i[0].replace(/%([a-zA-Z%])/g, function(n, r) {
						if("%%" === n) return n;
						a++;
						var o = e.formatters[r];
						if("function" == typeof o) {
							var s = i[a];
							n = o.call(t, s), i.splice(a, 1), a--
						}
						return n
					}), e.formatArgs.call(t, i);
					var c = n.log || e.log || console.log.bind(console);
					c.apply(t, i)
				}
			}
			return n.namespace = t, n.enabled = e.enabled(t), n.useColors = e.useColors(), n.color = r(t), "function" == typeof e.init && e.init(n), n
		}

		function i(t) {
			e.save(t), e.names = [], e.skips = [];
			for(var n = ("string" == typeof t ? t : "").split(/[\s,]+/), r = n.length, o = 0; o < r; o++) n[o] && (t = n[o].replace(/\*/g, ".*?"), "-" === t[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$")))
		}

		function s() {
			e.enable("")
		}

		function a(t) {
			var n, r;
			for(n = 0, r = e.skips.length; n < r; n++)
				if(e.skips[n].test(t)) return !1;
			for(n = 0, r = e.names.length; n < r; n++)
				if(e.names[n].test(t)) return !0;
			return !1
		}

		function c(t) {
			return t instanceof Error ? t.stack || t.message : t
		}
		e = t.exports = o.debug = o["default"] = o, e.coerce = c, e.disable = s, e.enable = i, e.enabled = a, e.humanize = n(6), e.names = [], e.skips = [], e.formatters = {};
		var p
	}, function(t, e) {
		function n(t) {
			if(t = String(t), !(t.length > 100)) {
				var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);
				if(e) {
					var n = parseFloat(e[1]),
						r = (e[2] || "ms").toLowerCase();
					switch(r) {
						case "years":
						case "year":
						case "yrs":
						case "yr":
						case "y":
							return n * u;
						case "days":
						case "day":
						case "d":
							return n * p;
						case "hours":
						case "hour":
						case "hrs":
						case "hr":
						case "h":
							return n * c;
						case "minutes":
						case "minute":
						case "mins":
						case "min":
						case "m":
							return n * a;
						case "seconds":
						case "second":
						case "secs":
						case "sec":
						case "s":
							return n * s;
						case "milliseconds":
						case "millisecond":
						case "msecs":
						case "msec":
						case "ms":
							return n;
						default:
							return
					}
				}
			}
		}

		function r(t) {
			return t >= p ? Math.round(t / p) + "d" : t >= c ? Math.round(t / c) + "h" : t >= a ? Math.round(t / a) + "m" : t >= s ? Math.round(t / s) + "s" : t + "ms"
		}

		function o(t) {
			return i(t, p, "day") || i(t, c, "hour") || i(t, a, "minute") || i(t, s, "second") || t + " ms"
		}

		function i(t, e, n) {
			if(!(t < e)) return t < 1.5 * e ? Math.floor(t / e) + " " + n : Math.ceil(t / e) + " " + n + "s"
		}
		var s = 1e3,
			a = 60 * s,
			c = 60 * a,
			p = 24 * c,
			u = 365.25 * p;
		t.exports = function(t, e) {
			e = e || {};
			var i = typeof t;
			if("string" === i && t.length > 0) return n(t);
			if("number" === i && isNaN(t) === !1) return e["long"] ? o(t) : r(t);
			throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t))
		}
	}, function(t, e, n) {
		function r() {}

		function o(t) {
			var n = "" + t.type;
			return e.BINARY_EVENT !== t.type && e.BINARY_ACK !== t.type || (n += t.attachments + "-"), t.nsp && "/" !== t.nsp && (n += t.nsp + ","), null != t.id && (n += t.id), null != t.data && (n += JSON.stringify(t.data)), h("encoded %j as %s", t, n), n
		}

		function i(t, e) {
			function n(t) {
				var n = d.deconstructPacket(t),
					r = o(n.packet),
					i = n.buffers;
				i.unshift(r), e(i)
			}
			d.removeBlobs(t, n)
		}

		function s() {
			this.reconstructor = null
		}

		function a(t) {
			var n = 0,
				r = {
					type: Number(t.charAt(0))
				};
			if(null == e.types[r.type]) return u();
			if(e.BINARY_EVENT === r.type || e.BINARY_ACK === r.type) {
				for(var o = "";
					"-" !== t.charAt(++n) && (o += t.charAt(n), n != t.length););
				if(o != Number(o) || "-" !== t.charAt(n)) throw new Error("Illegal attachments");
				r.attachments = Number(o)
			}
			if("/" === t.charAt(n + 1))
				for(r.nsp = ""; ++n;) {
					var i = t.charAt(n);
					if("," === i) break;
					if(r.nsp += i, n === t.length) break
				} else r.nsp = "/";
			var s = t.charAt(n + 1);
			if("" !== s && Number(s) == s) {
				for(r.id = ""; ++n;) {
					var i = t.charAt(n);
					if(null == i || Number(i) != i) {
						--n;
						break
					}
					if(r.id += t.charAt(n), n === t.length) break
				}
				r.id = Number(r.id)
			}
			return t.charAt(++n) && (r = c(r, t.substr(n))), h("decoded %s as %j", t, r), r
		}

		function c(t, e) {
			try {
				t.data = JSON.parse(e)
			} catch(n) {
				return u()
			}
			return t
		}

		function p(t) {
			this.reconPack = t, this.buffers = []
		}

		function u() {
			return {
				type: e.ERROR,
				data: "parser error"
			}
		}
		var h = n(3)("socket.io-parser"),
			f = n(8),
			l = n(9),
			d = n(11),
			y = n(12);
		e.protocol = 4, e.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], e.CONNECT = 0, e.DISCONNECT = 1, e.EVENT = 2, e.ACK = 3, e.ERROR = 4, e.BINARY_EVENT = 5, e.BINARY_ACK = 6, e.Encoder = r, e.Decoder = s, r.prototype.encode = function(t, n) {
			if(t.type !== e.EVENT && t.type !== e.ACK || !l(t.data) || (t.type = t.type === e.EVENT ? e.BINARY_EVENT : e.BINARY_ACK), h("encoding packet %j", t), e.BINARY_EVENT === t.type || e.BINARY_ACK === t.type) i(t, n);
			else {
				var r = o(t);
				n([r])
			}
		}, f(s.prototype), s.prototype.add = function(t) {
			var n;
			if("string" == typeof t) n = a(t), e.BINARY_EVENT === n.type || e.BINARY_ACK === n.type ? (this.reconstructor = new p(n), 0 === this.reconstructor.reconPack.attachments && this.emit("decoded", n)) : this.emit("decoded", n);
			else {
				if(!y(t) && !t.base64) throw new Error("Unknown type: " + t);
				if(!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
				n = this.reconstructor.takeBinaryData(t), n && (this.reconstructor = null, this.emit("decoded", n))
			}
		}, s.prototype.destroy = function() {
			this.reconstructor && this.reconstructor.finishedReconstruction()
		}, p.prototype.takeBinaryData = function(t) {
			if(this.buffers.push(t), this.buffers.length === this.reconPack.attachments) {
				var e = d.reconstructPacket(this.reconPack, this.buffers);
				return this.finishedReconstruction(), e
			}
			return null
		}, p.prototype.finishedReconstruction = function() {
			this.reconPack = null, this.buffers = []
		}
	}, function(t, e, n) {
		function r(t) {
			if(t) return o(t)
		}

		function o(t) {
			for(var e in r.prototype) t[e] = r.prototype[e];
			return t
		}
		t.exports = r, r.prototype.on = r.prototype.addEventListener = function(t, e) {
			return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this
		}, r.prototype.once = function(t, e) {
			function n() {
				this.off(t, n), e.apply(this, arguments)
			}
			return n.fn = e, this.on(t, n), this
		}, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(t, e) {
			if(this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
			var n = this._callbacks["$" + t];
			if(!n) return this;
			if(1 == arguments.length) return delete this._callbacks["$" + t], this;
			for(var r, o = 0; o < n.length; o++)
				if(r = n[o], r === e || r.fn === e) {
					n.splice(o, 1);
					break
				}
			return this
		}, r.prototype.emit = function(t) {
			this._callbacks = this._callbacks || {};
			var e = [].slice.call(arguments, 1),
				n = this._callbacks["$" + t];
			if(n) {
				n = n.slice(0);
				for(var r = 0, o = n.length; r < o; ++r) n[r].apply(this, e)
			}
			return this
		}, r.prototype.listeners = function(t) {
			return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || []
		}, r.prototype.hasListeners = function(t) {
			return !!this.listeners(t).length
		}
	}, function(t, e, n) {
		(function(e) {
			function r(t) {
				if(!t || "object" != typeof t) return !1;
				if(o(t)) {
					for(var n = 0, i = t.length; n < i; n++)
						if(r(t[n])) return !0;
					return !1
				}
				if("function" == typeof e.Buffer && e.Buffer.isBuffer && e.Buffer.isBuffer(t) || "function" == typeof e.ArrayBuffer && t instanceof ArrayBuffer || s && t instanceof Blob || a && t instanceof File) return !0;
				if(t.toJSON && "function" == typeof t.toJSON && 1 === arguments.length) return r(t.toJSON(), !0);
				for(var c in t)
					if(Object.prototype.hasOwnProperty.call(t, c) && r(t[c])) return !0;
				return !1
			}
			var o = n(10),
				i = Object.prototype.toString,
				s = "function" == typeof e.Blob || "[object BlobConstructor]" === i.call(e.Blob),
				a = "function" == typeof e.File || "[object FileConstructor]" === i.call(e.File);
			t.exports = r
		}).call(e, function() {
			return this
		}())
	}, function(t, e) {
		var n = {}.toString;
		t.exports = Array.isArray || function(t) {
			return "[object Array]" == n.call(t)
		}
	}, function(t, e, n) {
		(function(t) {
			function r(t, e) {
				if(!t) return t;
				if(s(t)) {
					var n = {
						_placeholder: !0,
						num: e.length
					};
					return e.push(t), n
				}
				if(i(t)) {
					for(var o = new Array(t.length), a = 0; a < t.length; a++) o[a] = r(t[a], e);
					return o
				}
				if("object" == typeof t && !(t instanceof Date)) {
					var o = {};
					for(var c in t) o[c] = r(t[c], e);
					return o
				}
				return t
			}

			function o(t, e) {
				if(!t) return t;
				if(t && t._placeholder) return e[t.num];
				if(i(t))
					for(var n = 0; n < t.length; n++) t[n] = o(t[n], e);
				else if("object" == typeof t)
					for(var r in t) t[r] = o(t[r], e);
				return t
			}
			var i = n(10),
				s = n(12),
				a = Object.prototype.toString,
				c = "function" == typeof t.Blob || "[object BlobConstructor]" === a.call(t.Blob),
				p = "function" == typeof t.File || "[object FileConstructor]" === a.call(t.File);
			e.deconstructPacket = function(t) {
				var e = [],
					n = t.data,
					o = t;
				return o.data = r(n, e), o.attachments = e.length, {
					packet: o,
					buffers: e
				}
			}, e.reconstructPacket = function(t, e) {
				return t.data = o(t.data, e), t.attachments = void 0, t
			}, e.removeBlobs = function(t, e) {
				function n(t, a, u) {
					if(!t) return t;
					if(c && t instanceof Blob || p && t instanceof File) {
						r++;
						var h = new FileReader;
						h.onload = function() {
							u ? u[a] = this.result : o = this.result, --r || e(o)
						}, h.readAsArrayBuffer(t)
					} else if(i(t))
						for(var f = 0; f < t.length; f++) n(t[f], f, t);
					else if("object" == typeof t && !s(t))
						for(var l in t) n(t[l], l, t)
				}
				var r = 0,
					o = t;
				n(o), r || e(o)
			}
		}).call(e, function() {
			return this
		}())
	}, function(t, e) {
		(function(e) {
			function n(t) {
				return e.Buffer && e.Buffer.isBuffer(t) || e.ArrayBuffer && t instanceof ArrayBuffer
			}
			t.exports = n
		}).call(e, function() {
			return this
		}())
	}, function(t, e, n) {
		"use strict";

		function r(t, e) {
			if(!(this instanceof r)) return new r(t, e);
			t && "object" === ("undefined" == typeof t ? "undefined" : o(t)) && (e = t, t = void 0), e = e || {}, e.path = e.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = e, this.reconnection(e.reconnection !== !1), this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0), this.reconnectionDelay(e.reconnectionDelay || 1e3), this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3), this.randomizationFactor(e.randomizationFactor || .5), this.backoff = new l({
				min: this.reconnectionDelay(),
				max: this.reconnectionDelayMax(),
				jitter: this.randomizationFactor()
			}), this.timeout(null == e.timeout ? 2e4 : e.timeout), this.readyState = "closed", this.uri = t, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [];
			var n = e.parser || c;
			this.encoder = new n.Encoder, this.decoder = new n.Decoder, this.autoConnect = e.autoConnect !== !1, this.autoConnect && this.open()
		}
		var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
				return typeof t
			} : function(t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			},
			i = n(14),
			s = n(37),
			a = n(8),
			c = n(7),
			p = n(39),
			u = n(40),
			h = n(3)("socket.io-client:manager"),
			f = n(36),
			l = n(41),
			d = Object.prototype.hasOwnProperty;
		t.exports = r, r.prototype.emitAll = function() {
			this.emit.apply(this, arguments);
			for(var t in this.nsps) d.call(this.nsps, t) && this.nsps[t].emit.apply(this.nsps[t], arguments)
		}, r.prototype.updateSocketIds = function() {
			for(var t in this.nsps) d.call(this.nsps, t) && (this.nsps[t].id = this.generateId(t))
		}, r.prototype.generateId = function(t) {
			return("/" === t ? "" : t + "#") + this.engine.id
		}, a(r.prototype), r.prototype.reconnection = function(t) {
			return arguments.length ? (this._reconnection = !!t, this) : this._reconnection
		}, r.prototype.reconnectionAttempts = function(t) {
			return arguments.length ? (this._reconnectionAttempts = t, this) : this._reconnectionAttempts
		}, r.prototype.reconnectionDelay = function(t) {
			return arguments.length ? (this._reconnectionDelay = t, this.backoff && this.backoff.setMin(t), this) : this._reconnectionDelay
		}, r.prototype.randomizationFactor = function(t) {
			return arguments.length ? (this._randomizationFactor = t, this.backoff && this.backoff.setJitter(t), this) : this._randomizationFactor
		}, r.prototype.reconnectionDelayMax = function(t) {
			return arguments.length ? (this._reconnectionDelayMax = t, this.backoff && this.backoff.setMax(t), this) : this._reconnectionDelayMax
		}, r.prototype.timeout = function(t) {
			return arguments.length ? (this._timeout = t, this) : this._timeout
		}, r.prototype.maybeReconnectOnOpen = function() {
			!this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
		}, r.prototype.open = r.prototype.connect = function(t, e) {
			if(h("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;
			h("opening %s", this.uri), this.engine = i(this.uri, this.opts);
			var n = this.engine,
				r = this;
			this.readyState = "opening", this.skipReconnect = !1;
			var o = p(n, "open", function() {
					r.onopen(), t && t()
				}),
				s = p(n, "error", function(e) {
					if(h("connect_error"), r.cleanup(), r.readyState = "closed", r.emitAll("connect_error", e), t) {
						var n = new Error("Connection error");
						n.data = e, t(n)
					} else r.maybeReconnectOnOpen()
				});
			if(!1 !== this._timeout) {
				var a = this._timeout;
				h("connect attempt will timeout after %d", a);
				var c = setTimeout(function() {
					h("connect attempt timed out after %d", a), o.destroy(), n.close(), n.emit("error", "timeout"), r.emitAll("connect_timeout", a)
				}, a);
				this.subs.push({
					destroy: function() {
						clearTimeout(c)
					}
				})
			}
			return this.subs.push(o), this.subs.push(s), this
		}, r.prototype.onopen = function() {
			h("open"), this.cleanup(), this.readyState = "open", this.emit("open");
			var t = this.engine;
			this.subs.push(p(t, "data", u(this, "ondata"))), this.subs.push(p(t, "ping", u(this, "onping"))), this.subs.push(p(t, "pong", u(this, "onpong"))), this.subs.push(p(t, "error", u(this, "onerror"))), this.subs.push(p(t, "close", u(this, "onclose"))), this.subs.push(p(this.decoder, "decoded", u(this, "ondecoded")))
		}, r.prototype.onping = function() {
			this.lastPing = new Date, this.emitAll("ping")
		}, r.prototype.onpong = function() {
			this.emitAll("pong", new Date - this.lastPing)
		}, r.prototype.ondata = function(t) {
			this.decoder.add(t)
		}, r.prototype.ondecoded = function(t) {
			this.emit("packet", t)
		}, r.prototype.onerror = function(t) {
			h("error", t), this.emitAll("error", t)
		}, r.prototype.socket = function(t, e) {
			function n() {
				~f(o.connecting, r) || o.connecting.push(r)
			}
			var r = this.nsps[t];
			if(!r) {
				r = new s(this, t, e), this.nsps[t] = r;
				var o = this;
				r.on("connecting", n), r.on("connect", function() {
					r.id = o.generateId(t)
				}), this.autoConnect && n()
			}
			return r
		}, r.prototype.destroy = function(t) {
			var e = f(this.connecting, t);
			~e && this.connecting.splice(e, 1), this.connecting.length || this.close()
		}, r.prototype.packet = function(t) {
			h("writing packet %j", t);
			var e = this;
			t.query && 0 === t.type && (t.nsp += "?" + t.query), e.encoding ? e.packetBuffer.push(t) : (e.encoding = !0, this.encoder.encode(t, function(n) {
				for(var r = 0; r < n.length; r++) e.engine.write(n[r], t.options);
				e.encoding = !1, e.processPacketQueue()
			}))
		}, r.prototype.processPacketQueue = function() {
			if(this.packetBuffer.length > 0 && !this.encoding) {
				var t = this.packetBuffer.shift();
				this.packet(t)
			}
		}, r.prototype.cleanup = function() {
			h("cleanup");
			for(var t = this.subs.length, e = 0; e < t; e++) {
				var n = this.subs.shift();
				n.destroy()
			}
			this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy()
		}, r.prototype.close = r.prototype.disconnect = function() {
			h("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, "opening" === this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close()
		}, r.prototype.onclose = function(t) {
			h("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", t), this._reconnection && !this.skipReconnect && this.reconnect()
		}, r.prototype.reconnect = function() {
			if(this.reconnecting || this.skipReconnect) return this;
			var t = this;
			if(this.backoff.attempts >= this._reconnectionAttempts) h("reconnect failed"), this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1;
			else {
				var e = this.backoff.duration();
				h("will wait %dms before reconnect attempt", e), this.reconnecting = !0;
				var n = setTimeout(function() {
					t.skipReconnect || (h("attempting reconnect"), t.emitAll("reconnect_attempt", t.backoff.attempts), t.emitAll("reconnecting", t.backoff.attempts), t.skipReconnect || t.open(function(e) {
						e ? (h("reconnect attempt error"), t.reconnecting = !1, t.reconnect(), t.emitAll("reconnect_error", e.data)) : (h("reconnect success"), t.onreconnect())
					}))
				}, e);
				this.subs.push({
					destroy: function() {
						clearTimeout(n)
					}
				})
			}
		}, r.prototype.onreconnect = function() {
			var t = this.backoff.attempts;
			this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", t)
		}
	}, function(t, e, n) {
		t.exports = n(15), t.exports.parser = n(22)
	}, function(t, e, n) {
		(function(e) {
			function r(t, n) {
				if(!(this instanceof r)) return new r(t, n);
				n = n || {}, t && "object" == typeof t && (n = t, t = null), t ? (t = u(t), n.hostname = t.host, n.secure = "https" === t.protocol || "wss" === t.protocol, n.port = t.port, t.query && (n.query = t.query)) : n.host && (n.hostname = u(n.host).host), this.secure = null != n.secure ? n.secure : e.location && "https:" === location.protocol, n.hostname && !n.port && (n.port = this.secure ? "443" : "80"), this.agent = n.agent || !1, this.hostname = n.hostname || (e.location ? location.hostname : "localhost"), this.port = n.port || (e.location && location.port ? location.port : this.secure ? 443 : 80), this.query = n.query || {}, "string" == typeof this.query && (this.query = h.decode(this.query)), this.upgrade = !1 !== n.upgrade, this.path = (n.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!n.forceJSONP, this.jsonp = !1 !== n.jsonp, this.forceBase64 = !!n.forceBase64, this.enablesXDR = !!n.enablesXDR, this.timestampParam = n.timestampParam || "t", this.timestampRequests = n.timestampRequests, this.transports = n.transports || ["polling", "websocket"], this.transportOptions = n.transportOptions || {}, this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = n.policyPort || 843, this.rememberUpgrade = n.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = n.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== n.perMessageDeflate && (n.perMessageDeflate || {}), !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = n.pfx || null, this.key = n.key || null, this.passphrase = n.passphrase || null, this.cert = n.cert || null, this.ca = n.ca || null, this.ciphers = n.ciphers || null, this.rejectUnauthorized = void 0 === n.rejectUnauthorized || n.rejectUnauthorized, this.forceNode = !!n.forceNode;
				var o = "object" == typeof e && e;
				o.global === o && (n.extraHeaders && Object.keys(n.extraHeaders).length > 0 && (this.extraHeaders = n.extraHeaders), n.localAddress && (this.localAddress = n.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open()
			}

			function o(t) {
				var e = {};
				for(var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
				return e
			}
			var i = n(16),
				s = n(8),
				a = n(3)("engine.io-client:socket"),
				c = n(36),
				p = n(22),
				u = n(2),
				h = n(30);
			t.exports = r, r.priorWebsocketSuccess = !1, s(r.prototype), r.protocol = p.protocol, r.Socket = r, r.Transport = n(21), r.transports = n(16), r.parser = n(22), r.prototype.createTransport = function(t) {
				a('creating transport "%s"', t);
				var e = o(this.query);
				e.EIO = p.protocol, e.transport = t;
				var n = this.transportOptions[t] || {};
				this.id && (e.sid = this.id);
				var r = new i[t]({
					query: e,
					socket: this,
					agent: n.agent || this.agent,
					hostname: n.hostname || this.hostname,
					port: n.port || this.port,
					secure: n.secure || this.secure,
					path: n.path || this.path,
					forceJSONP: n.forceJSONP || this.forceJSONP,
					jsonp: n.jsonp || this.jsonp,
					forceBase64: n.forceBase64 || this.forceBase64,
					enablesXDR: n.enablesXDR || this.enablesXDR,
					timestampRequests: n.timestampRequests || this.timestampRequests,
					timestampParam: n.timestampParam || this.timestampParam,
					policyPort: n.policyPort || this.policyPort,
					pfx: n.pfx || this.pfx,
					key: n.key || this.key,
					passphrase: n.passphrase || this.passphrase,
					cert: n.cert || this.cert,
					ca: n.ca || this.ca,
					ciphers: n.ciphers || this.ciphers,
					rejectUnauthorized: n.rejectUnauthorized || this.rejectUnauthorized,
					perMessageDeflate: n.perMessageDeflate || this.perMessageDeflate,
					extraHeaders: n.extraHeaders || this.extraHeaders,
					forceNode: n.forceNode || this.forceNode,
					localAddress: n.localAddress || this.localAddress,
					requestTimeout: n.requestTimeout || this.requestTimeout,
					protocols: n.protocols || void 0
				});
				return r
			}, r.prototype.open = function() {
				var t;
				if(this.rememberUpgrade && r.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) t = "websocket";
				else {
					if(0 === this.transports.length) {
						var e = this;
						return void setTimeout(function() {
							e.emit("error", "No transports available")
						}, 0)
					}
					t = this.transports[0]
				}
				this.readyState = "opening";
				try {
					t = this.createTransport(t)
				} catch(n) {
					return this.transports.shift(), void this.open()
				}
				t.open(), this.setTransport(t)
			}, r.prototype.setTransport = function(t) {
				a("setting transport %s", t.name);
				var e = this;
				this.transport && (a("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = t, t.on("drain", function() {
					e.onDrain()
				}).on("packet", function(t) {
					e.onPacket(t)
				}).on("error", function(t) {
					e.onError(t)
				}).on("close", function() {
					e.onClose("transport close")
				})
			}, r.prototype.probe = function(t) {
				function e() {
					if(f.onlyBinaryUpgrades) {
						var e = !this.supportsBinary && f.transport.supportsBinary;
						h = h || e
					}
					h || (a('probe transport "%s" opened', t), u.send([{
						type: "ping",
						data: "probe"
					}]), u.once("packet", function(e) {
						if(!h)
							if("pong" === e.type && "probe" === e.data) {
								if(a('probe transport "%s" pong', t), f.upgrading = !0, f.emit("upgrading", u), !u) return;
								r.priorWebsocketSuccess = "websocket" === u.name, a('pausing current transport "%s"', f.transport.name), f.transport.pause(function() {
									h || "closed" !== f.readyState && (a("changing transport and sending upgrade packet"), p(), f.setTransport(u), u.send([{
										type: "upgrade"
									}]), f.emit("upgrade", u), u = null, f.upgrading = !1, f.flush())
								})
							} else {
								a('probe transport "%s" failed', t);
								var n = new Error("probe error");
								n.transport = u.name, f.emit("upgradeError", n)
							}
					}))
				}

				function n() {
					h || (h = !0, p(), u.close(), u = null)
				}

				function o(e) {
					var r = new Error("probe error: " + e);
					r.transport = u.name, n(), a('probe transport "%s" failed because of error: %s', t, e), f.emit("upgradeError", r)
				}

				function i() {
					o("transport closed")
				}

				function s() {
					o("socket closed")
				}

				function c(t) {
					u && t.name !== u.name && (a('"%s" works - aborting "%s"', t.name, u.name), n())
				}

				function p() {
					u.removeListener("open", e), u.removeListener("error", o), u.removeListener("close", i), f.removeListener("close", s), f.removeListener("upgrading", c)
				}
				a('probing transport "%s"', t);
				var u = this.createTransport(t, {
						probe: 1
					}),
					h = !1,
					f = this;
				r.priorWebsocketSuccess = !1, u.once("open", e), u.once("error", o), u.once("close", i), this.once("close", s), this.once("upgrading", c), u.open()
			}, r.prototype.onOpen = function() {
				if(a("socket open"), this.readyState = "open", r.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.upgrade && this.transport.pause) {
					a("starting upgrade probes");
					for(var t = 0, e = this.upgrades.length; t < e; t++) this.probe(this.upgrades[t])
				}
			}, r.prototype.onPacket = function(t) {
				if("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch(a('socket receive: type "%s", data "%s"', t.type, t.data), this.emit("packet", t), this.emit("heartbeat"), t.type) {
					case "open":
						this.onHandshake(JSON.parse(t.data));
						break;
					case "pong":
						this.setPing(), this.emit("pong");
						break;
					case "error":
						var e = new Error("server error");
						e.code = t.data, this.onError(e);
						break;
					case "message":
						this.emit("data", t.data), this.emit("message", t.data)
				} else a('packet received with socket readyState "%s"', this.readyState)
			}, r.prototype.onHandshake = function(t) {
				this.emit("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.onOpen(), "closed" !== this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat))
			}, r.prototype.onHeartbeat = function(t) {
				clearTimeout(this.pingTimeoutTimer);
				var e = this;
				e.pingTimeoutTimer = setTimeout(function() {
					"closed" !== e.readyState && e.onClose("ping timeout")
				}, t || e.pingInterval + e.pingTimeout)
			}, r.prototype.setPing = function() {
				var t = this;
				clearTimeout(t.pingIntervalTimer), t.pingIntervalTimer = setTimeout(function() {
					a("writing ping packet - expecting pong within %sms", t.pingTimeout), t.ping(), t.onHeartbeat(t.pingTimeout)
				}, t.pingInterval)
			}, r.prototype.ping = function() {
				var t = this;
				this.sendPacket("ping", function() {
					t.emit("ping")
				})
			}, r.prototype.onDrain = function() {
				this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush()
			}, r.prototype.flush = function() {
				"closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (a("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"))
			}, r.prototype.write = r.prototype.send = function(t, e, n) {
				return this.sendPacket("message", t, e, n), this
			}, r.prototype.sendPacket = function(t, e, n, r) {
				if("function" == typeof e && (r = e, e = void 0), "function" == typeof n && (r = n, n = null), "closing" !== this.readyState && "closed" !== this.readyState) {
					n = n || {}, n.compress = !1 !== n.compress;
					var o = {
						type: t,
						data: e,
						options: n
					};
					this.emit("packetCreate", o), this.writeBuffer.push(o), r && this.once("flush", r), this.flush()
				}
			}, r.prototype.close = function() {
				function t() {
					r.onClose("forced close"), a("socket closing - telling transport to close"), r.transport.close()
				}

				function e() {
					r.removeListener("upgrade", e), r.removeListener("upgradeError", e), t()
				}

				function n() {
					r.once("upgrade", e), r.once("upgradeError", e)
				}
				if("opening" === this.readyState || "open" === this.readyState) {
					this.readyState = "closing";
					var r = this;
					this.writeBuffer.length ? this.once("drain", function() {
						this.upgrading ? n() : t()
					}) : this.upgrading ? n() : t()
				}
				return this
			}, r.prototype.onError = function(t) {
				a("socket error %j", t), r.priorWebsocketSuccess = !1, this.emit("error", t), this.onClose("transport error", t)
			}, r.prototype.onClose = function(t, e) {
				if("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
					a('socket close with reason: "%s"', t);
					var n = this;
					clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", t, e), n.writeBuffer = [], n.prevBufferLen = 0
				}
			}, r.prototype.filterUpgrades = function(t) {
				for(var e = [], n = 0, r = t.length; n < r; n++) ~c(this.transports, t[n]) && e.push(t[n]);
				return e
			}
		}).call(e, function() {
			return this
		}())
	}, function(t, e, n) {
		(function(t) {
			function r(e) {
				var n, r = !1,
					a = !1,
					c = !1 !== e.jsonp;
				if(t.location) {
					var p = "https:" === location.protocol,
						u = location.port;
					u || (u = p ? 443 : 80), r = e.hostname !== location.hostname || u !== e.port, a = e.secure !== p
				}
				if(e.xdomain = r, e.xscheme = a, n = new o(e), "open" in n && !e.forceJSONP) return new i(e);
				if(!c) throw new Error("JSONP disabled");
				return new s(e)
			}
			var o = n(17),
				i = n(19),
				s = n(33),
				a = n(34);
			e.polling = r, e.websocket = a
		}).call(e, function() {
			return this
		}())
	}, function(t, e, n) {
		(function(e) {
			var r = n(18);
			t.exports = function(t) {
				var n = t.xdomain,
					o = t.xscheme,
					i = t.enablesXDR;
				try {
					if("undefined" != typeof XMLHttpRequest && (!n || r)) return new XMLHttpRequest
				} catch(s) {}
				try {
					if("undefined" != typeof XDomainRequest && !o && i) return new XDomainRequest
				} catch(s) {}
				if(!n) try {
					return new(e[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP");
				} catch(s) {}
			}
		}).call(e, function() {
			return this
		}())
	}, function(t, e) {
		try {
			t.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest
		} catch(n) {
			t.exports = !1
		}
	}, function(t, e, n) {
		(function(e) {
			function r() {}

			function o(t) {
				if(c.call(this, t), this.requestTimeout = t.requestTimeout, this.extraHeaders = t.extraHeaders, e.location) {
					var n = "https:" === location.protocol,
						r = location.port;
					r || (r = n ? 443 : 80), this.xd = t.hostname !== e.location.hostname || r !== t.port, this.xs = t.secure !== n
				}
			}

			function i(t) {
				this.method = t.method || "GET", this.uri = t.uri, this.xd = !!t.xd, this.xs = !!t.xs, this.async = !1 !== t.async, this.data = void 0 !== t.data ? t.data : null, this.agent = t.agent, this.isBinary = t.isBinary, this.supportsBinary = t.supportsBinary, this.enablesXDR = t.enablesXDR, this.requestTimeout = t.requestTimeout, this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, this.extraHeaders = t.extraHeaders, this.create()
			}

			function s() {
				for(var t in i.requests) i.requests.hasOwnProperty(t) && i.requests[t].abort()
			}
			var a = n(17),
				c = n(20),
				p = n(8),
				u = n(31),
				h = n(3)("engine.io-client:polling-xhr");
			t.exports = o, t.exports.Request = i, u(o, c), o.prototype.supportsBinary = !0, o.prototype.request = function(t) {
				return t = t || {}, t.uri = this.uri(), t.xd = this.xd, t.xs = this.xs, t.agent = this.agent || !1, t.supportsBinary = this.supportsBinary, t.enablesXDR = this.enablesXDR, t.pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized, t.requestTimeout = this.requestTimeout, t.extraHeaders = this.extraHeaders, new i(t)
			}, o.prototype.doWrite = function(t, e) {
				var n = "string" != typeof t && void 0 !== t,
					r = this.request({
						method: "POST",
						data: t,
						isBinary: n
					}),
					o = this;
				r.on("success", e), r.on("error", function(t) {
					o.onError("xhr post error", t)
				}), this.sendXhr = r
			}, o.prototype.doPoll = function() {
				h("xhr poll");
				var t = this.request(),
					e = this;
				t.on("data", function(t) {
					e.onData(t)
				}), t.on("error", function(t) {
					e.onError("xhr poll error", t)
				}), this.pollXhr = t
			}, p(i.prototype), i.prototype.create = function() {
				var t = {
					agent: this.agent,
					xdomain: this.xd,
					xscheme: this.xs,
					enablesXDR: this.enablesXDR
				};
				t.pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized;
				var n = this.xhr = new a(t),
					r = this;
				try {
					h("xhr open %s: %s", this.method, this.uri), n.open(this.method, this.uri, this.async);
					try {
						if(this.extraHeaders) {
							n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0);
							for(var o in this.extraHeaders) this.extraHeaders.hasOwnProperty(o) && n.setRequestHeader(o, this.extraHeaders[o])
						}
					} catch(s) {}
					if("POST" === this.method) try {
						this.isBinary ? n.setRequestHeader("Content-type", "application/octet-stream") : n.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
					} catch(s) {}
					try {
						n.setRequestHeader("Accept", "*/*")
					} catch(s) {}
					"withCredentials" in n && (n.withCredentials = !0), this.requestTimeout && (n.timeout = this.requestTimeout), this.hasXDR() ? (n.onload = function() {
						r.onLoad()
					}, n.onerror = function() {
						r.onError(n.responseText)
					}) : n.onreadystatechange = function() {
						if(2 === n.readyState) {
							var t;
							try {
								t = n.getResponseHeader("Content-Type")
							} catch(e) {}
							"application/octet-stream" === t && (n.responseType = "arraybuffer")
						}
						4 === n.readyState && (200 === n.status || 1223 === n.status ? r.onLoad() : setTimeout(function() {
							r.onError(n.status)
						}, 0))
					}, h("xhr data %s", this.data), n.send(this.data)
				} catch(s) {
					return void setTimeout(function() {
						r.onError(s)
					}, 0)
				}
				e.document && (this.index = i.requestsCount++, i.requests[this.index] = this)
			}, i.prototype.onSuccess = function() {
				this.emit("success"), this.cleanup()
			}, i.prototype.onData = function(t) {
				this.emit("data", t), this.onSuccess()
			}, i.prototype.onError = function(t) {
				this.emit("error", t), this.cleanup(!0)
			}, i.prototype.cleanup = function(t) {
				if("undefined" != typeof this.xhr && null !== this.xhr) {
					if(this.hasXDR() ? this.xhr.onload = this.xhr.onerror = r : this.xhr.onreadystatechange = r, t) try {
						this.xhr.abort()
					} catch(n) {}
					e.document && delete i.requests[this.index], this.xhr = null
				}
			}, i.prototype.onLoad = function() {
				var t;
				try {
					var e;
					try {
						e = this.xhr.getResponseHeader("Content-Type")
					} catch(n) {}
					t = "application/octet-stream" === e ? this.xhr.response || this.xhr.responseText : this.xhr.responseText
				} catch(n) {
					this.onError(n)
				}
				null != t && this.onData(t)
			}, i.prototype.hasXDR = function() {
				return "undefined" != typeof e.XDomainRequest && !this.xs && this.enablesXDR
			}, i.prototype.abort = function() {
				this.cleanup()
			}, i.requestsCount = 0, i.requests = {}, e.document && (e.attachEvent ? e.attachEvent("onunload", s) : e.addEventListener && e.addEventListener("beforeunload", s, !1))
		}).call(e, function() {
			return this
		}())
	}, function(t, e, n) {
		function r(t) {
			var e = t && t.forceBase64;
			u && !e || (this.supportsBinary = !1), o.call(this, t)
		}
		var o = n(21),
			i = n(30),
			s = n(22),
			a = n(31),
			c = n(32),
			p = n(3)("engine.io-client:polling");
		t.exports = r;
		var u = function() {
			var t = n(17),
				e = new t({
					xdomain: !1
				});
			return null != e.responseType
		}();
		a(r, o), r.prototype.name = "polling", r.prototype.doOpen = function() {
			this.poll()
		}, r.prototype.pause = function(t) {
			function e() {
				p("paused"), n.readyState = "paused", t()
			}
			var n = this;
			if(this.readyState = "pausing", this.polling || !this.writable) {
				var r = 0;
				this.polling && (p("we are currently polling - waiting to pause"), r++, this.once("pollComplete", function() {
					p("pre-pause polling complete"), --r || e()
				})), this.writable || (p("we are currently writing - waiting to pause"), r++, this.once("drain", function() {
					p("pre-pause writing complete"), --r || e()
				}))
			} else e()
		}, r.prototype.poll = function() {
			p("polling"), this.polling = !0, this.doPoll(), this.emit("poll")
		}, r.prototype.onData = function(t) {
			var e = this;
			p("polling got data %s", t);
			var n = function(t, n, r) {
				return "opening" === e.readyState && e.onOpen(), "close" === t.type ? (e.onClose(), !1) : void e.onPacket(t)
			};
			s.decodePayload(t, this.socket.binaryType, n), "closed" !== this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" === this.readyState ? this.poll() : p('ignoring poll - transport state "%s"', this.readyState))
		}, r.prototype.doClose = function() {
			function t() {
				p("writing close packet"), e.write([{
					type: "close"
				}])
			}
			var e = this;
			"open" === this.readyState ? (p("transport open - closing"), t()) : (p("transport not open - deferring close"), this.once("open", t))
		}, r.prototype.write = function(t) {
			var e = this;
			this.writable = !1;
			var n = function() {
				e.writable = !0, e.emit("drain")
			};
			s.encodePayload(t, this.supportsBinary, function(t) {
				e.doWrite(t, n)
			})
		}, r.prototype.uri = function() {
			var t = this.query || {},
				e = this.secure ? "https" : "http",
				n = "";
			!1 !== this.timestampRequests && (t[this.timestampParam] = c()), this.supportsBinary || t.sid || (t.b64 = 1), t = i.encode(t), this.port && ("https" === e && 443 !== Number(this.port) || "http" === e && 80 !== Number(this.port)) && (n = ":" + this.port), t.length && (t = "?" + t);
			var r = this.hostname.indexOf(":") !== -1;
			return e + "://" + (r ? "[" + this.hostname + "]" : this.hostname) + n + this.path + t
		}
	}, function(t, e, n) {
		function r(t) {
			this.path = t.path, this.hostname = t.hostname, this.port = t.port, this.secure = t.secure, this.query = t.query, this.timestampParam = t.timestampParam, this.timestampRequests = t.timestampRequests, this.readyState = "", this.agent = t.agent || !1, this.socket = t.socket, this.enablesXDR = t.enablesXDR, this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, this.forceNode = t.forceNode, this.extraHeaders = t.extraHeaders, this.localAddress = t.localAddress
		}
		var o = n(22),
			i = n(8);
		t.exports = r, i(r.prototype), r.prototype.onError = function(t, e) {
			var n = new Error(t);
			return n.type = "TransportError", n.description = e, this.emit("error", n), this
		}, r.prototype.open = function() {
			return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this
		}, r.prototype.close = function() {
			return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this
		}, r.prototype.send = function(t) {
			if("open" !== this.readyState) throw new Error("Transport not open");
			this.write(t)
		}, r.prototype.onOpen = function() {
			this.readyState = "open", this.writable = !0, this.emit("open")
		}, r.prototype.onData = function(t) {
			var e = o.decodePacket(t, this.socket.binaryType);
			this.onPacket(e)
		}, r.prototype.onPacket = function(t) {
			this.emit("packet", t)
		}, r.prototype.onClose = function() {
			this.readyState = "closed", this.emit("close")
		}
	}, function(t, e, n) {
		(function(t) {
			function r(t, n) {
				var r = "b" + e.packets[t.type] + t.data.data;
				return n(r)
			}

			function o(t, n, r) {
				if(!n) return e.encodeBase64Packet(t, r);
				var o = t.data,
					i = new Uint8Array(o),
					s = new Uint8Array(1 + o.byteLength);
				s[0] = v[t.type];
				for(var a = 0; a < i.length; a++) s[a + 1] = i[a];
				return r(s.buffer)
			}

			function i(t, n, r) {
				if(!n) return e.encodeBase64Packet(t, r);
				var o = new FileReader;
				return o.onload = function() {
					t.data = o.result, e.encodePacket(t, n, !0, r)
				}, o.readAsArrayBuffer(t.data)
			}

			function s(t, n, r) {
				if(!n) return e.encodeBase64Packet(t, r);
				if(g) return i(t, n, r);
				var o = new Uint8Array(1);
				o[0] = v[t.type];
				var s = new k([o.buffer, t.data]);
				return r(s)
			}

			function a(t) {
				try {
					t = d.decode(t, {
						strict: !1
					})
				} catch(e) {
					return !1
				}
				return t
			}

			function c(t, e, n) {
				for(var r = new Array(t.length), o = l(t.length, n), i = function(t, n, o) {
						e(n, function(e, n) {
							r[t] = n, o(e, r)
						})
					}, s = 0; s < t.length; s++) i(s, t[s], o)
			}
			var p, u = n(23),
				h = n(9),
				f = n(24),
				l = n(25),
				d = n(26);
			t && t.ArrayBuffer && (p = n(28));
			var y = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent),
				m = "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent),
				g = y || m;
			e.protocol = 3;
			var v = e.packets = {
					open: 0,
					close: 1,
					ping: 2,
					pong: 3,
					message: 4,
					upgrade: 5,
					noop: 6
				},
				b = u(v),
				w = {
					type: "error",
					data: "parser error"
				},
				k = n(29);
			e.encodePacket = function(e, n, i, a) {
				"function" == typeof n && (a = n, n = !1), "function" == typeof i && (a = i, i = null);
				var c = void 0 === e.data ? void 0 : e.data.buffer || e.data;
				if(t.ArrayBuffer && c instanceof ArrayBuffer) return o(e, n, a);
				if(k && c instanceof t.Blob) return s(e, n, a);
				if(c && c.base64) return r(e, a);
				var p = v[e.type];
				return void 0 !== e.data && (p += i ? d.encode(String(e.data), {
					strict: !1
				}) : String(e.data)), a("" + p)
			}, e.encodeBase64Packet = function(n, r) {
				var o = "b" + e.packets[n.type];
				if(k && n.data instanceof t.Blob) {
					var i = new FileReader;
					return i.onload = function() {
						var t = i.result.split(",")[1];
						r(o + t)
					}, i.readAsDataURL(n.data)
				}
				var s;
				try {
					s = String.fromCharCode.apply(null, new Uint8Array(n.data))
				} catch(a) {
					for(var c = new Uint8Array(n.data), p = new Array(c.length), u = 0; u < c.length; u++) p[u] = c[u];
					s = String.fromCharCode.apply(null, p)
				}
				return o += t.btoa(s), r(o)
			}, e.decodePacket = function(t, n, r) {
				if(void 0 === t) return w;
				if("string" == typeof t) {
					if("b" === t.charAt(0)) return e.decodeBase64Packet(t.substr(1), n);
					if(r && (t = a(t), t === !1)) return w;
					var o = t.charAt(0);
					return Number(o) == o && b[o] ? t.length > 1 ? {
						type: b[o],
						data: t.substring(1)
					} : {
						type: b[o]
					} : w
				}
				var i = new Uint8Array(t),
					o = i[0],
					s = f(t, 1);
				return k && "blob" === n && (s = new k([s])), {
					type: b[o],
					data: s
				}
			}, e.decodeBase64Packet = function(t, e) {
				var n = b[t.charAt(0)];
				if(!p) return {
					type: n,
					data: {
						base64: !0,
						data: t.substr(1)
					}
				};
				var r = p.decode(t.substr(1));
				return "blob" === e && k && (r = new k([r])), {
					type: n,
					data: r
				}
			}, e.encodePayload = function(t, n, r) {
				function o(t) {
					return t.length + ":" + t
				}

				function i(t, r) {
					e.encodePacket(t, !!s && n, !1, function(t) {
						r(null, o(t))
					})
				}
				"function" == typeof n && (r = n, n = null);
				var s = h(t);
				return n && s ? k && !g ? e.encodePayloadAsBlob(t, r) : e.encodePayloadAsArrayBuffer(t, r) : t.length ? void c(t, i, function(t, e) {
					return r(e.join(""))
				}) : r("0:")
			}, e.decodePayload = function(t, n, r) {
				if("string" != typeof t) return e.decodePayloadAsBinary(t, n, r);
				"function" == typeof n && (r = n, n = null);
				var o;
				if("" === t) return r(w, 0, 1);
				for(var i, s, a = "", c = 0, p = t.length; c < p; c++) {
					var u = t.charAt(c);
					if(":" === u) {
						if("" === a || a != (i = Number(a))) return r(w, 0, 1);
						if(s = t.substr(c + 1, i), a != s.length) return r(w, 0, 1);
						if(s.length) {
							if(o = e.decodePacket(s, n, !1), w.type === o.type && w.data === o.data) return r(w, 0, 1);
							var h = r(o, c + i, p);
							if(!1 === h) return
						}
						c += i, a = ""
					} else a += u
				}
				return "" !== a ? r(w, 0, 1) : void 0
			}, e.encodePayloadAsArrayBuffer = function(t, n) {
				function r(t, n) {
					e.encodePacket(t, !0, !0, function(t) {
						return n(null, t)
					})
				}
				return t.length ? void c(t, r, function(t, e) {
					var r = e.reduce(function(t, e) {
							var n;
							return n = "string" == typeof e ? e.length : e.byteLength, t + n.toString().length + n + 2
						}, 0),
						o = new Uint8Array(r),
						i = 0;
					return e.forEach(function(t) {
						var e = "string" == typeof t,
							n = t;
						if(e) {
							for(var r = new Uint8Array(t.length), s = 0; s < t.length; s++) r[s] = t.charCodeAt(s);
							n = r.buffer
						}
						e ? o[i++] = 0 : o[i++] = 1;
						for(var a = n.byteLength.toString(), s = 0; s < a.length; s++) o[i++] = parseInt(a[s]);
						o[i++] = 255;
						for(var r = new Uint8Array(n), s = 0; s < r.length; s++) o[i++] = r[s]
					}), n(o.buffer)
				}) : n(new ArrayBuffer(0))
			}, e.encodePayloadAsBlob = function(t, n) {
				function r(t, n) {
					e.encodePacket(t, !0, !0, function(t) {
						var e = new Uint8Array(1);
						if(e[0] = 1, "string" == typeof t) {
							for(var r = new Uint8Array(t.length), o = 0; o < t.length; o++) r[o] = t.charCodeAt(o);
							t = r.buffer, e[0] = 0
						}
						for(var i = t instanceof ArrayBuffer ? t.byteLength : t.size, s = i.toString(), a = new Uint8Array(s.length + 1), o = 0; o < s.length; o++) a[o] = parseInt(s[o]);
						if(a[s.length] = 255, k) {
							var c = new k([e.buffer, a.buffer, t]);
							n(null, c)
						}
					})
				}
				c(t, r, function(t, e) {
					return n(new k(e))
				})
			}, e.decodePayloadAsBinary = function(t, n, r) {
				"function" == typeof n && (r = n, n = null);
				for(var o = t, i = []; o.byteLength > 0;) {
					for(var s = new Uint8Array(o), a = 0 === s[0], c = "", p = 1; 255 !== s[p]; p++) {
						if(c.length > 310) return r(w, 0, 1);
						c += s[p]
					}
					o = f(o, 2 + c.length), c = parseInt(c);
					var u = f(o, 0, c);
					if(a) try {
						u = String.fromCharCode.apply(null, new Uint8Array(u))
					} catch(h) {
						var l = new Uint8Array(u);
						u = "";
						for(var p = 0; p < l.length; p++) u += String.fromCharCode(l[p])
					}
					i.push(u), o = f(o, c)
				}
				var d = i.length;
				i.forEach(function(t, o) {
					r(e.decodePacket(t, n, !0), o, d)
				})
			}
		}).call(e, function() {
			return this
		}())
	}, function(t, e) {
		t.exports = Object.keys || function(t) {
			var e = [],
				n = Object.prototype.hasOwnProperty;
			for(var r in t) n.call(t, r) && e.push(r);
			return e
		}
	}, function(t, e) {
		t.exports = function(t, e, n) {
			var r = t.byteLength;
			if(e = e || 0, n = n || r, t.slice) return t.slice(e, n);
			if(e < 0 && (e += r), n < 0 && (n += r), n > r && (n = r), e >= r || e >= n || 0 === r) return new ArrayBuffer(0);
			for(var o = new Uint8Array(t), i = new Uint8Array(n - e), s = e, a = 0; s < n; s++, a++) i[a] = o[s];
			return i.buffer
		}
	}, function(t, e) {
		function n(t, e, n) {
			function o(t, r) {
				if(o.count <= 0) throw new Error("after called too many times");
				--o.count, t ? (i = !0, e(t), e = n) : 0 !== o.count || i || e(null, r)
			}
			var i = !1;
			return n = n || r, o.count = t, 0 === t ? e() : o
		}

		function r() {}
		t.exports = n
	}, function(t, e, n) {
		var r;
		(function(t, o) {
			! function(i) {
				function s(t) {
					for(var e, n, r = [], o = 0, i = t.length; o < i;) e = t.charCodeAt(o++), e >= 55296 && e <= 56319 && o < i ? (n = t.charCodeAt(o++), 56320 == (64512 & n) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e), o--)) : r.push(e);
					return r
				}

				function a(t) {
					for(var e, n = t.length, r = -1, o = ""; ++r < n;) e = t[r], e > 65535 && (e -= 65536, o += w(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), o += w(e);
					return o
				}

				function c(t, e) {
					if(t >= 55296 && t <= 57343) {
						if(e) throw Error("Lone surrogate U+" + t.toString(16).toUpperCase() + " is not a scalar value");
						return !1
					}
					return !0
				}

				function p(t, e) {
					return w(t >> e & 63 | 128)
				}

				function u(t, e) {
					if(0 == (4294967168 & t)) return w(t);
					var n = "";
					return 0 == (4294965248 & t) ? n = w(t >> 6 & 31 | 192) : 0 == (4294901760 & t) ? (c(t, e) || (t = 65533), n = w(t >> 12 & 15 | 224), n += p(t, 6)) : 0 == (4292870144 & t) && (n = w(t >> 18 & 7 | 240), n += p(t, 12), n += p(t, 6)), n += w(63 & t | 128)
				}

				function h(t, e) {
					e = e || {};
					for(var n, r = !1 !== e.strict, o = s(t), i = o.length, a = -1, c = ""; ++a < i;) n = o[a], c += u(n, r);
					return c
				}

				function f() {
					if(b >= v) throw Error("Invalid byte index");
					var t = 255 & g[b];
					if(b++, 128 == (192 & t)) return 63 & t;
					throw Error("Invalid continuation byte")
				}

				function l(t) {
					var e, n, r, o, i;
					if(b > v) throw Error("Invalid byte index");
					if(b == v) return !1;
					if(e = 255 & g[b], b++, 0 == (128 & e)) return e;
					if(192 == (224 & e)) {
						if(n = f(), i = (31 & e) << 6 | n, i >= 128) return i;
						throw Error("Invalid continuation byte")
					}
					if(224 == (240 & e)) {
						if(n = f(), r = f(), i = (15 & e) << 12 | n << 6 | r, i >= 2048) return c(i, t) ? i : 65533;
						throw Error("Invalid continuation byte")
					}
					if(240 == (248 & e) && (n = f(), r = f(), o = f(), i = (7 & e) << 18 | n << 12 | r << 6 | o, i >= 65536 && i <= 1114111)) return i;
					throw Error("Invalid UTF-8 detected")
				}

				function d(t, e) {
					e = e || {};
					var n = !1 !== e.strict;
					g = s(t), v = g.length, b = 0;
					for(var r, o = [];
						(r = l(n)) !== !1;) o.push(r);
					return a(o)
				}
				var y = "object" == typeof e && e,
					m = ("object" == typeof t && t && t.exports == y && t, "object" == typeof o && o);
				m.global !== m && m.window !== m || (i = m);
				var g, v, b, w = String.fromCharCode,
					k = {
						version: "2.1.2",
						encode: h,
						decode: d
					};
				r = function() {
					return k
				}.call(e, n, e, t), !(void 0 !== r && (t.exports = r))
			}(this)
		}).call(e, n(27)(t), function() {
			return this
		}())
	}, function(t, e) {
		t.exports = function(t) {
			return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children = [], t.webpackPolyfill = 1), t
		}
	}, function(t, e) {
		! function() {
			"use strict";
			for(var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = new Uint8Array(256), r = 0; r < t.length; r++) n[t.charCodeAt(r)] = r;
			e.encode = function(e) {
				var n, r = new Uint8Array(e),
					o = r.length,
					i = "";
				for(n = 0; n < o; n += 3) i += t[r[n] >> 2], i += t[(3 & r[n]) << 4 | r[n + 1] >> 4], i += t[(15 & r[n + 1]) << 2 | r[n + 2] >> 6], i += t[63 & r[n + 2]];
				return o % 3 === 2 ? i = i.substring(0, i.length - 1) + "=" : o % 3 === 1 && (i = i.substring(0, i.length - 2) + "=="), i
			}, e.decode = function(t) {
				var e, r, o, i, s, a = .75 * t.length,
					c = t.length,
					p = 0;
				"=" === t[t.length - 1] && (a--, "=" === t[t.length - 2] && a--);
				var u = new ArrayBuffer(a),
					h = new Uint8Array(u);
				for(e = 0; e < c; e += 4) r = n[t.charCodeAt(e)], o = n[t.charCodeAt(e + 1)], i = n[t.charCodeAt(e + 2)], s = n[t.charCodeAt(e + 3)], h[p++] = r << 2 | o >> 4, h[p++] = (15 & o) << 4 | i >> 2, h[p++] = (3 & i) << 6 | 63 & s;
				return u
			}
		}()
	}, function(t, e) {
		(function(e) {
			function n(t) {
				for(var e = 0; e < t.length; e++) {
					var n = t[e];
					if(n.buffer instanceof ArrayBuffer) {
						var r = n.buffer;
						if(n.byteLength !== r.byteLength) {
							var o = new Uint8Array(n.byteLength);
							o.set(new Uint8Array(r, n.byteOffset, n.byteLength)), r = o.buffer
						}
						t[e] = r
					}
				}
			}

			function r(t, e) {
				e = e || {};
				var r = new i;
				n(t);
				for(var o = 0; o < t.length; o++) r.append(t[o]);
				return e.type ? r.getBlob(e.type) : r.getBlob()
			}

			function o(t, e) {
				return n(t), new Blob(t, e || {})
			}
			var i = e.BlobBuilder || e.WebKitBlobBuilder || e.MSBlobBuilder || e.MozBlobBuilder,
				s = function() {
					try {
						var t = new Blob(["hi"]);
						return 2 === t.size
					} catch(e) {
						return !1
					}
				}(),
				a = s && function() {
					try {
						var t = new Blob([new Uint8Array([1, 2])]);
						return 2 === t.size
					} catch(e) {
						return !1
					}
				}(),
				c = i && i.prototype.append && i.prototype.getBlob;
			t.exports = function() {
				return s ? a ? e.Blob : o : c ? r : void 0
			}()
		}).call(e, function() {
			return this
		}())
	}, function(t, e) {
		e.encode = function(t) {
			var e = "";
			for(var n in t) t.hasOwnProperty(n) && (e.length && (e += "&"), e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
			return e
		}, e.decode = function(t) {
			for(var e = {}, n = t.split("&"), r = 0, o = n.length; r < o; r++) {
				var i = n[r].split("=");
				e[decodeURIComponent(i[0])] = decodeURIComponent(i[1])
			}
			return e
		}
	}, function(t, e) {
		t.exports = function(t, e) {
			var n = function() {};
			n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t
		}
	}, function(t, e) {
		"use strict";

		function n(t) {
			var e = "";
			do e = s[t % a] + e, t = Math.floor(t / a); while (t > 0);
			return e
		}

		function r(t) {
			var e = 0;
			for(u = 0; u < t.length; u++) e = e * a + c[t.charAt(u)];
			return e
		}

		function o() {
			var t = n(+new Date);
			return t !== i ? (p = 0, i = t) : t + "." + n(p++)
		}
		for(var i, s = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), a = 64, c = {}, p = 0, u = 0; u < a; u++) c[s[u]] = u;
		o.encode = n, o.decode = r, t.exports = o
	}, function(t, e, n) {
		(function(e) {
			function r() {}

			function o(t) {
				i.call(this, t), this.query = this.query || {}, a || (e.___eio || (e.___eio = []), a = e.___eio), this.index = a.length;
				var n = this;
				a.push(function(t) {
					n.onData(t)
				}), this.query.j = this.index, e.document && e.addEventListener && e.addEventListener("beforeunload", function() {
					n.script && (n.script.onerror = r)
				}, !1)
			}
			var i = n(20),
				s = n(31);
			t.exports = o;
			var a, c = /\n/g,
				p = /\\n/g;
			s(o, i), o.prototype.supportsBinary = !1, o.prototype.doClose = function() {
				this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), i.prototype.doClose.call(this)
			}, o.prototype.doPoll = function() {
				var t = this,
					e = document.createElement("script");
				this.script && (this.script.parentNode.removeChild(this.script), this.script = null), e.async = !0, e.src = this.uri(), e.onerror = function(e) {
					t.onError("jsonp poll error", e)
				};
				var n = document.getElementsByTagName("script")[0];
				n ? n.parentNode.insertBefore(e, n) : (document.head || document.body).appendChild(e), this.script = e;
				var r = "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent);
				r && setTimeout(function() {
					var t = document.createElement("iframe");
					document.body.appendChild(t), document.body.removeChild(t)
				}, 100)
			}, o.prototype.doWrite = function(t, e) {
				function n() {
					r(), e()
				}

				function r() {
					if(o.iframe) try {
						o.form.removeChild(o.iframe)
					} catch(t) {
						o.onError("jsonp polling iframe removal error", t)
					}
					try {
						var e = '<iframe src="javascript:0" name="' + o.iframeId + '">';
						i = document.createElement(e)
					} catch(t) {
						i = document.createElement("iframe"), i.name = o.iframeId, i.src = "javascript:0"
					}
					i.id = o.iframeId, o.form.appendChild(i), o.iframe = i
				}
				var o = this;
				if(!this.form) {
					var i, s = document.createElement("form"),
						a = document.createElement("textarea"),
						u = this.iframeId = "eio_iframe_" + this.index;
					s.className = "socketio", s.style.position = "absolute", s.style.top = "-1000px", s.style.left = "-1000px", s.target = u, s.method = "POST", s.setAttribute("accept-charset", "utf-8"), a.name = "d", s.appendChild(a), document.body.appendChild(s), this.form = s, this.area = a
				}
				this.form.action = this.uri(), r(), t = t.replace(p, "\\\n"), this.area.value = t.replace(c, "\\n");
				try {
					this.form.submit()
				} catch(h) {}
				this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
					"complete" === o.iframe.readyState && n()
				} : this.iframe.onload = n
			}
		}).call(e, function() {
			return this
		}())
	}, function(t, e, n) {
		(function(e) {
			function r(t) {
				var e = t && t.forceBase64;
				e && (this.supportsBinary = !1), this.perMessageDeflate = t.perMessageDeflate, this.usingBrowserWebSocket = h && !t.forceNode, this.protocols = t.protocols, this.usingBrowserWebSocket || (l = o), i.call(this, t)
			}
			var o, i = n(21),
				s = n(22),
				a = n(30),
				c = n(31),
				p = n(32),
				u = n(3)("engine.io-client:websocket"),
				h = e.WebSocket || e.MozWebSocket;
			if("undefined" == typeof window) try {
				o = n(35)
			} catch(f) {}
			var l = h;
			l || "undefined" != typeof window || (l = o), t.exports = r, c(r, i), r.prototype.name = "websocket", r.prototype.supportsBinary = !0, r.prototype.doOpen = function() {
				if(this.check()) {
					var t = this.uri(),
						e = this.protocols,
						n = {
							agent: this.agent,
							perMessageDeflate: this.perMessageDeflate
						};
					n.pfx = this.pfx, n.key = this.key, n.passphrase = this.passphrase, n.cert = this.cert, n.ca = this.ca, n.ciphers = this.ciphers, n.rejectUnauthorized = this.rejectUnauthorized, this.extraHeaders && (n.headers = this.extraHeaders), this.localAddress && (n.localAddress = this.localAddress);
					try {
						this.ws = this.usingBrowserWebSocket ? e ? new l(t, e) : new l(t) : new l(t, e, n)
					} catch(r) {
						return this.emit("error", r)
					}
					void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners()
				}
			}, r.prototype.addEventListeners = function() {
				var t = this;
				this.ws.onopen = function() {
					t.onOpen()
				}, this.ws.onclose = function() {
					t.onClose()
				}, this.ws.onmessage = function(e) {
					t.onData(e.data)
				}, this.ws.onerror = function(e) {
					t.onError("websocket error", e)
				}
			}, r.prototype.write = function(t) {
				function n() {
					r.emit("flush"), setTimeout(function() {
						r.writable = !0, r.emit("drain")
					}, 0)
				}
				var r = this;
				this.writable = !1;
				for(var o = t.length, i = 0, a = o; i < a; i++) ! function(t) {
					s.encodePacket(t, r.supportsBinary, function(i) {
						if(!r.usingBrowserWebSocket) {
							var s = {};
							if(t.options && (s.compress = t.options.compress), r.perMessageDeflate) {
								var a = "string" == typeof i ? e.Buffer.byteLength(i) : i.length;
								a < r.perMessageDeflate.threshold && (s.compress = !1)
							}
						}
						try {
							r.usingBrowserWebSocket ? r.ws.send(i) : r.ws.send(i, s)
						} catch(c) {
							u("websocket closed before onclose event")
						}--o || n()
					})
				}(t[i])
			}, r.prototype.onClose = function() {
				i.prototype.onClose.call(this)
			}, r.prototype.doClose = function() {
				"undefined" != typeof this.ws && this.ws.close()
			}, r.prototype.uri = function() {
				var t = this.query || {},
					e = this.secure ? "wss" : "ws",
					n = "";
				this.port && ("wss" === e && 443 !== Number(this.port) || "ws" === e && 80 !== Number(this.port)) && (n = ":" + this.port), this.timestampRequests && (t[this.timestampParam] = p()), this.supportsBinary || (t.b64 = 1), t = a.encode(t), t.length && (t = "?" + t);
				var r = this.hostname.indexOf(":") !== -1;
				return e + "://" + (r ? "[" + this.hostname + "]" : this.hostname) + n + this.path + t
			}, r.prototype.check = function() {
				return !(!l || "__initialize" in l && this.name === r.prototype.name)
			}
		}).call(e, function() {
			return this
		}())
	}, function(t, e) {}, function(t, e) {
		var n = [].indexOf;
		t.exports = function(t, e) {
			if(n) return t.indexOf(e);
			for(var r = 0; r < t.length; ++r)
				if(t[r] === e) return r;
			return -1
		}
	}, function(t, e, n) {
		"use strict";

		function r(t, e, n) {
			this.io = t, this.nsp = e, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, n && n.query && (this.query = n.query), this.io.autoConnect && this.open()
		}
		var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
				return typeof t
			} : function(t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			},
			i = n(7),
			s = n(8),
			a = n(38),
			c = n(39),
			p = n(40),
			u = n(3)("socket.io-client:socket"),
			h = n(30);
		t.exports = e = r;
		var f = {
				connect: 1,
				connect_error: 1,
				connect_timeout: 1,
				connecting: 1,
				disconnect: 1,
				error: 1,
				reconnect: 1,
				reconnect_attempt: 1,
				reconnect_failed: 1,
				reconnect_error: 1,
				reconnecting: 1,
				ping: 1,
				pong: 1
			},
			l = s.prototype.emit;
		s(r.prototype), r.prototype.subEvents = function() {
			if(!this.subs) {
				var t = this.io;
				this.subs = [c(t, "open", p(this, "onopen")), c(t, "packet", p(this, "onpacket")), c(t, "close", p(this, "onclose"))]
			}
		}, r.prototype.open = r.prototype.connect = function() {
			return this.connected ? this : (this.subEvents(), this.io.open(), "open" === this.io.readyState && this.onopen(), this.emit("connecting"), this)
		}, r.prototype.send = function() {
			var t = a(arguments);
			return t.unshift("message"), this.emit.apply(this, t), this
		}, r.prototype.emit = function(t) {
			if(f.hasOwnProperty(t)) return l.apply(this, arguments), this;
			var e = a(arguments),
				n = {
					type: i.EVENT,
					data: e
				};
			return n.options = {}, n.options.compress = !this.flags || !1 !== this.flags.compress, "function" == typeof e[e.length - 1] && (u("emitting packet with ack id %d", this.ids), this.acks[this.ids] = e.pop(), n.id = this.ids++), this.connected ? this.packet(n) : this.sendBuffer.push(n), delete this.flags, this
		}, r.prototype.packet = function(t) {
			t.nsp = this.nsp, this.io.packet(t)
		}, r.prototype.onopen = function() {
			if(u("transport is open - connecting"), "/" !== this.nsp)
				if(this.query) {
					var t = "object" === o(this.query) ? h.encode(this.query) : this.query;
					u("sending connect packet with query %s", t), this.packet({
						type: i.CONNECT,
						query: t
					})
				} else this.packet({
					type: i.CONNECT
				})
		}, r.prototype.onclose = function(t) {
			u("close (%s)", t), this.connected = !1, this.disconnected = !0, delete this.id, this.emit("disconnect", t)
		}, r.prototype.onpacket = function(t) {
			if(t.nsp === this.nsp) switch(t.type) {
				case i.CONNECT:
					this.onconnect();
					break;
				case i.EVENT:
					this.onevent(t);
					break;
				case i.BINARY_EVENT:
					this.onevent(t);
					break;
				case i.ACK:
					this.onack(t);
					break;
				case i.BINARY_ACK:
					this.onack(t);
					break;
				case i.DISCONNECT:
					this.ondisconnect();
					break;
				case i.ERROR:
					this.emit("error", t.data)
			}
		}, r.prototype.onevent = function(t) {
			var e = t.data || [];
			u("emitting event %j", e), null != t.id && (u("attaching ack callback to event"), e.push(this.ack(t.id))), this.connected ? l.apply(this, e) : this.receiveBuffer.push(e)
		}, r.prototype.ack = function(t) {
			var e = this,
				n = !1;
			return function() {
				if(!n) {
					n = !0;
					var r = a(arguments);
					u("sending ack %j", r), e.packet({
						type: i.ACK,
						id: t,
						data: r
					})
				}
			}
		}, r.prototype.onack = function(t) {
			var e = this.acks[t.id];
			"function" == typeof e ? (u("calling ack %s with %j", t.id, t.data), e.apply(this, t.data), delete this.acks[t.id]) : u("bad ack %s", t.id)
		}, r.prototype.onconnect = function() {
			this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered()
		}, r.prototype.emitBuffered = function() {
			var t;
			for(t = 0; t < this.receiveBuffer.length; t++) l.apply(this, this.receiveBuffer[t]);
			for(this.receiveBuffer = [], t = 0; t < this.sendBuffer.length; t++) this.packet(this.sendBuffer[t]);
			this.sendBuffer = []
		}, r.prototype.ondisconnect = function() {
			u("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect")
		}, r.prototype.destroy = function() {
			if(this.subs) {
				for(var t = 0; t < this.subs.length; t++) this.subs[t].destroy();
				this.subs = null
			}
			this.io.destroy(this)
		}, r.prototype.close = r.prototype.disconnect = function() {
			return this.connected && (u("performing disconnect (%s)", this.nsp), this.packet({
				type: i.DISCONNECT
			})), this.destroy(), this.connected && this.onclose("io client disconnect"), this
		}, r.prototype.compress = function(t) {
			return this.flags = this.flags || {}, this.flags.compress = t, this
		}
	}, function(t, e) {
		function n(t, e) {
			var n = [];
			e = e || 0;
			for(var r = e || 0; r < t.length; r++) n[r - e] = t[r];
			return n
		}
		t.exports = n
	}, function(t, e) {
		"use strict";

		function n(t, e, n) {
			return t.on(e, n), {
				destroy: function() {
					t.removeListener(e, n)
				}
			}
		}
		t.exports = n
	}, function(t, e) {
		var n = [].slice;
		t.exports = function(t, e) {
			if("string" == typeof e && (e = t[e]), "function" != typeof e) throw new Error("bind() requires a function");
			var r = n.call(arguments, 2);
			return function() {
				return e.apply(t, r.concat(n.call(arguments)))
			}
		}
	}, function(t, e) {
		function n(t) {
			t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0
		}
		t.exports = n, n.prototype.duration = function() {
			var t = this.ms * Math.pow(this.factor, this.attempts++);
			if(this.jitter) {
				var e = Math.random(),
					n = Math.floor(e * this.jitter * t);
				t = 0 == (1 & Math.floor(10 * e)) ? t - n : t + n
			}
			return 0 | Math.min(t, this.max)
		}, n.prototype.reset = function() {
			this.attempts = 0
		}, n.prototype.setMin = function(t) {
			this.ms = t
		}, n.prototype.setMax = function(t) {
			this.max = t
		}, n.prototype.setJitter = function(t) {
			this.jitter = t
		}
	}])
});
//# sourceMappingURL=socket.io.js.map
! function(n) {
	"use strict";

	function t(n, t) {
		var r = (65535 & n) + (65535 & t);
		return(n >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r
	}

	function r(n, t) {
		return n << t | n >>> 32 - t
	}

	function e(n, e, o, u, c, f) {
		return t(r(t(t(e, n), t(u, f)), c), o)
	}

	function o(n, t, r, o, u, c, f) {
		return e(t & r | ~t & o, n, t, u, c, f)
	}

	function u(n, t, r, o, u, c, f) {
		return e(t & o | r & ~o, n, t, u, c, f)
	}

	function c(n, t, r, o, u, c, f) {
		return e(t ^ r ^ o, n, t, u, c, f)
	}

	function f(n, t, r, o, u, c, f) {
		return e(r ^ (t | ~o), n, t, u, c, f)
	}

	function i(n, r) {
		n[r >> 5] |= 128 << r % 32, n[14 + (r + 64 >>> 9 << 4)] = r;
		var e, i, a, d, h, l = 1732584193,
			g = -271733879,
			v = -1732584194,
			m = 271733878;
		for(e = 0; e < n.length; e += 16) i = l, a = g, d = v, h = m, g = f(g = f(g = f(g = f(g = c(g = c(g = c(g = c(g = u(g = u(g = u(g = u(g = o(g = o(g = o(g = o(g, v = o(v, m = o(m, l = o(l, g, v, m, n[e], 7, -680876936), g, v, n[e + 1], 12, -389564586), l, g, n[e + 2], 17, 606105819), m, l, n[e + 3], 22, -1044525330), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 4], 7, -176418897), g, v, n[e + 5], 12, 1200080426), l, g, n[e + 6], 17, -1473231341), m, l, n[e + 7], 22, -45705983), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 8], 7, 1770035416), g, v, n[e + 9], 12, -1958414417), l, g, n[e + 10], 17, -42063), m, l, n[e + 11], 22, -1990404162), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 12], 7, 1804603682), g, v, n[e + 13], 12, -40341101), l, g, n[e + 14], 17, -1502002290), m, l, n[e + 15], 22, 1236535329), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 1], 5, -165796510), g, v, n[e + 6], 9, -1069501632), l, g, n[e + 11], 14, 643717713), m, l, n[e], 20, -373897302), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 5], 5, -701558691), g, v, n[e + 10], 9, 38016083), l, g, n[e + 15], 14, -660478335), m, l, n[e + 4], 20, -405537848), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 9], 5, 568446438), g, v, n[e + 14], 9, -1019803690), l, g, n[e + 3], 14, -187363961), m, l, n[e + 8], 20, 1163531501), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 13], 5, -1444681467), g, v, n[e + 2], 9, -51403784), l, g, n[e + 7], 14, 1735328473), m, l, n[e + 12], 20, -1926607734), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 5], 4, -378558), g, v, n[e + 8], 11, -2022574463), l, g, n[e + 11], 16, 1839030562), m, l, n[e + 14], 23, -35309556), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 1], 4, -1530992060), g, v, n[e + 4], 11, 1272893353), l, g, n[e + 7], 16, -155497632), m, l, n[e + 10], 23, -1094730640), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 13], 4, 681279174), g, v, n[e], 11, -358537222), l, g, n[e + 3], 16, -722521979), m, l, n[e + 6], 23, 76029189), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 9], 4, -640364487), g, v, n[e + 12], 11, -421815835), l, g, n[e + 15], 16, 530742520), m, l, n[e + 2], 23, -995338651), v = f(v, m = f(m, l = f(l, g, v, m, n[e], 6, -198630844), g, v, n[e + 7], 10, 1126891415), l, g, n[e + 14], 15, -1416354905), m, l, n[e + 5], 21, -57434055), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 12], 6, 1700485571), g, v, n[e + 3], 10, -1894986606), l, g, n[e + 10], 15, -1051523), m, l, n[e + 1], 21, -2054922799), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 8], 6, 1873313359), g, v, n[e + 15], 10, -30611744), l, g, n[e + 6], 15, -1560198380), m, l, n[e + 13], 21, 1309151649), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 4], 6, -145523070), g, v, n[e + 11], 10, -1120210379), l, g, n[e + 2], 15, 718787259), m, l, n[e + 9], 21, -343485551), l = t(l, i), g = t(g, a), v = t(v, d), m = t(m, h);
		return [l, g, v, m]
	}

	function a(n) {
		var t, r = "",
			e = 32 * n.length;
		for(t = 0; t < e; t += 8) r += String.fromCharCode(n[t >> 5] >>> t % 32 & 255);
		return r
	}

	function d(n) {
		var t, r = [];
		for(r[(n.length >> 2) - 1] = void 0, t = 0; t < r.length; t += 1) r[t] = 0;
		var e = 8 * n.length;
		for(t = 0; t < e; t += 8) r[t >> 5] |= (255 & n.charCodeAt(t / 8)) << t % 32;
		return r
	}

	function h(n) {
		return a(i(d(n), 8 * n.length))
	}

	function l(n, t) {
		var r, e, o = d(n),
			u = [],
			c = [];
		for(u[15] = c[15] = void 0, o.length > 16 && (o = i(o, 8 * n.length)), r = 0; r < 16; r += 1) u[r] = 909522486 ^ o[r], c[r] = 1549556828 ^ o[r];
		return e = i(u.concat(d(t)), 512 + 8 * t.length), a(i(c.concat(e), 640))
	}

	function g(n) {
		var t, r, e = "";
		for(r = 0; r < n.length; r += 1) t = n.charCodeAt(r), e += "0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t);
		return e
	}

	function v(n) {
		return unescape(encodeURIComponent(n))
	}

	function m(n) {
		return h(v(n))
	}

	function p(n) {
		return g(m(n))
	}

	function s(n, t) {
		return l(v(n), v(t))
	}

	function C(n, t) {
		return g(s(n, t))
	}

	function A(n, t, r) {
		return t ? r ? s(t, n) : C(t, n) : r ? m(n) : p(n)
	}
	"function" == typeof define && define.amd ? define(function() {
		return A
	}) : "object" == typeof module && module.exports ? module.exports = A : n.md5 = A
}(this);
//# sourceMappingURL=md5.min.js.map
Signal_ = function(e) {
	function n(e) {
		var n, t, i;
		for(i = e.length; i; i--) n = Math.floor(Math.random() * i), t = e[i - 1], e[i - 1] = e[n], e[n] = t
	}

	function t(e, n, t) {
		var i = new XMLHttpRequest,
			o = !1,
			s = setTimeout(function() {
				o = !0, i.abort(), t("timeout", "")
			}, n);
		i.open("GET", e), i.onreadystatechange = function() {
			4 === i.readyState && (o || (clearTimeout(s), 200 === i.status && t("", i.responseText)))
		}, i.send(null)
	}

	function i(e, n, t) {
		var i = e.split(n, t),
			o = 0;
		for(var s in i) o += n.length + i[s].length;
		return i.push(e.substr(o)), i
	}
	this.lbs_url1 = ["https://lbs-1-sig.agora.io", "https://lbs-2-sig.agora.io"], this.lbs_url2 = ["https://lbs-3-sig.agora.io", "https://lbs-4-sig.agora.io"], this.vid = e, this.appid = e;
	var o = this,
		s = function(s, a) {
			this.onLoginSuccess = "", this.onLoginFailed = "", this.onLogout = "", this.onInviteReceived = "", this.onMessageInstantReceive = "", this.account = s, this.state = "session_state_logining", this.line = "", this.uid = 0, this.dbg = !1;
			var r = this;
			r.lbs_state = "requesting";
			var l = [];
			n(l), r.idx = 0, r.socket = null;
			var c = function() {
					if(r.dbg) {
						var e = [];
						for(var n in arguments) e.push(arguments[n]);
						console.log.apply(null, ["Agora sig dbg :"].concat(e))
					}
				},
				h = function(e) {
					return "wss://" + (e[0].replace(/\./g, "-") + "-sig-web.agora.io") + ":" + (e[1] + 1) + "/"
				};
			r.logout = function() {
				"session_state_logined" == r.state && r.onLogout ? r.call2("user_logout", {
					line: r.line
				}, function(e, n) {
					r.fire_logout(101), r.socket.close()
				}) : "session_state_logining" == r.state && (r.state, r.fire_logout(101))
			}, r.fire_logout = function(e) {
				e || (e = 0);
				try {
					"session_state_logined" == r.state && r.onLogout && r.onLogout(e)
				} catch(e) {
					console.error(e)
				} finally {
					r.state = "session_state_logout"
				}
			};
			var u = function(n, i, o) {
					"requesting" == r.lbs_state && t(i[o] + "/getaddr?vid=" + e, 5e3, function(e, t) {
						if(e) n - 1 > 0 ? u(n - 1, i, (o + 1) % i.length) : r.fire_login_failed(201);
						else {
							if("requesting" != r.lbs_state) return;
							r.lbs_state = "completed", l = JSON.parse(t).web, f(), f()
						}
					})
				},
				f = function() {
					if("session_state_logining" == r.state) var n = new function() {
						var e = h(l[r.idx]);
						r.idx += 1;
						var t = new WebSocket(e);
						t.state = "CONNECTING", setTimeout(function() {
							t.readyState != t.CONNECTING || t.close()
						}, 6e3), t.onopen = function(e) {
							if("session_state_logout" == r.state) t.close();
							else if("session_state_logining" == r.state && null == r.socket) {
								r.socket = n, t.state = "OPEN", c("on conn open"), r.go_login();
								for(var i in s) t.send(JSON.stringify(s[i]))
							} else t.close()
						}, t.onclose = function(e) {
							"OPEN" == t.state && (o("_close", ""), c("on conn close")), "CONNECTING" == t.state && f()
						}, t.onmessage = function(e) {
							var n = e.data,
								t = JSON.parse(n);
							t[0];
							o(t[0], t[1])
						}, t.onerror = function(e) {
							t.state = "CLOSED", r.idx < l.length && e.target.readyState == e.target.CLOSED ? f() : (c("on conn error"), "session_state_logined" == r.state ? r.fire_logout("conn error") : "session_state_logining" == r.state && r.fire_login_failed(201))
						};
						var i = {},
							o = function(e, n) {
								e in i && i[e](n)
							},
							s = [];
						this.on = function(e, n) {
							i[e] = n
						}, this.emit = function(e, n) {
							0 != t.readyState ? t.send(JSON.stringify([e, n])) : s.push([e, n])
						}, this.close = function() {
							t.close()
						}
					};
					var t = 0,
						o = function() {
							setTimeout(function() {
								"session_state_logined" == r.state && (c("send ping", ++t), r.socket.emit("ping", t), o())
							}, 1e4)
						};
					r.go_login = function() {
						"" == r.line ? (r.socket.emit("login", {
							vid: e,
							account: s,
							uid: 0,
							token: a,
							device: "websdk",
							ip: ""
						}), r.socket.on("login_ret", function(e) {
							var n = e[0],
								t = JSON.parse(e[1]);
							if(c("login ret", n, t), n || "ok" != t.result) {
								"" == n && (n = t.reason);
								try {
									if(r.onLoginFailed) {
										var i = "kick" == n ? 207 : "TokenErrorExpired" == n ? 204 : n.startsWith("TokenError") ? 206 : 201;
										r.fire_login_failed(i)
									}
								} catch(i) {
									console.error(i)
								}
							} else {
								r.uid = t.uid, r.line = t.line, r.state = "session_state_logined", o(), N();
								try {
									r.onLoginSuccess && r.onLoginSuccess(r.uid)
								} catch(i) {
									console.error(i)
								} finally {
									C()
								}
							}
						})) : r.socket.emit("line_login", {
							line: r.line
						});
						var n = 0,
							t = {},
							l = {};
						r.call2 = function(e, i, o) {
							t[++n] = [e, i, o], c("call ", [e, n, i]), r.socket.emit("call2", [e, n, i])
						}, r.socket.on("call2-ret", function(e) {
							var n = e[0],
								i = e[1],
								o = e[2];
							if(n in t) {
								var s = t[n][2];
								if("" == i) try {
									"ok" != (o = JSON.parse(o)).result && (i = o.data.result)
								} catch(e) {
									i = "wrong resp:" + o
								}
								s && s(i, o)
							}
						});
						var h, u = function(e, n) {
								return "" == e
							},
							f = function(e) {
								if(e.startsWith("msg-v2 ")) {
									var n = i(e, " ", 6);
									if(7 == n.length) return [n[1], n[4], n[6]]
								}
								return null
							};
						r.socket.on("pong", function(e) {
							c("recv pong")
						}), r.socket.on("close", function(e) {
							r.fire_logout(0), r.socket.close()
						}), r.socket.on("_close", function(e) {
							r.fire_logout(0)
						}), r.fire_login_failed = function(e) {
							try {
								"session_state_logining" == r.state && r.onLoginFailed && r.onLoginFailed(e)
							} catch(e) {
								console.error(e)
							} finally {
								r.state = "session_state_logout"
							}
						};
						var v = function(e) {
								var n = e,
									t = n[0],
									i = n[1],
									o = n[2];
								if("instant" == i) try {
									r.onMessageInstantReceive && r.onMessageInstantReceive(t, 0, o)
								} catch(e) {
									console.error(e)
								}
								if(i.startsWith("voip_")) {
									var s, a = JSON.parse(o),
										c = a.channel,
										h = a.peer,
										u = a.extra,
										f = a.peeruid;
									if("voip_invite" == i) s = new S(c, h, f, u), r.call2("voip_invite_ack", {
										line: r.line,
										channelName: c,
										peer: h,
										extra: ""
									});
									else if(!(s = l[c + h])) return;
									if("voip_invite" == i) try {
										r.onInviteReceived && r.onInviteReceived(s)
									} catch(e) {
										console.error(e)
									}
									if("voip_invite_ack" == i) try {
										s.onInviteReceivedByPeer && s.onInviteReceivedByPeer(u)
									} catch(e) {
										console.error(e)
									}
									if("voip_invite_accept" == i) try {
										s.onInviteAcceptedByPeer && s.onInviteAcceptedByPeer(u)
									} catch(e) {
										console.error(e)
									}
									if("voip_invite_refuse" == i) try {
										s.onInviteRefusedByPeer && s.onInviteRefusedByPeer(u)
									} catch(e) {
										console.error(e)
									}
									if("voip_invite_failed" == i) try {
										s.onInviteFailed && s.onInviteFailed(u)
									} catch(e) {
										console.error(e)
									}
									if("voip_invite_bye" == i) try {
										s.onInviteEndByPeer && s.onInviteEndByPeer(u)
									} catch(e) {
										console.error(e)
									}
									if("voip_invite_msg" == i) try {
										s.onInviteMsg && s.onInviteMsg(u)
									} catch(e) {
										console.error(e)
									}
								}
							},
							g = function() {
								return Date.now()
							},
							_ = 0,
							d = 0,
							p = 0,
							y = 0,
							m = 0,
							I = !1,
							C = function() {
								I || (I = !0, r.call2("user_getmsg", {
									line: r.line,
									ver_clear: _,
									max: 30
								}, function(e, n) {
									if("" == e) {
										var t = n;
										_ = t.ver_clear, p = _;
										for(var i in t.msgs) {
											var o = t.msgs[i][0],
												s = t.msgs[i][1];
											v(f(s)), _ = o
										}(30 == t.msgs.length || _ < d) && C(), y = g()
									}
									I = !1, m = g()
								}))
							},
							k = function() {
								m = g()
							},
							N = function() {
								setTimeout(function() {
									if("session_state_logout" != r.state) {
										if("session_state_logined" == r.state) {
											var e = g();
											p < _ && e - m > 1e3 ? C() : e - m >= 6e4 && C()
										}
										N()
									}
								}, 100)
							};
						r.socket.on("notify", function(e) {
							c("recv notify ", e), "string" == typeof e && (e = (e = i(e, " ", 2)).slice(1));
							var n = e[0];
							if("channel2" == n) {
								var t = e[1],
									o = e[2];
								if(0 != h.m_channel_msgid && h.m_channel_msgid + 1 > o) return void c("ignore channel msg", t, o, h.m_channel_msgid);
								h.m_channel_msgid = o;
								var s = f(e[3]);
								if(s) {
									s[0];
									var a = s[1],
										r = s[2],
										l = JSON.parse(r);
									if("channel_msg" == a) try {
										h.onMessageChannelReceive && h.onMessageChannelReceive(l.account, l.uid, l.msg)
									} catch(n) {
										console.error(n)
									}
									if("channel_user_join" == a) try {
										h.onChannelUserJoined && h.onChannelUserJoined(l.account, l.uid)
									} catch(n) {
										console.error(n)
									}
									if("channel_user_leave" == a) try {
										h.onChannelUserLeaved && h.onChannelUserLeaved(l.account, l.uid)
									} catch(n) {
										console.error(n)
									}
									if("channel_attr_update" == a) try {
										h.onChannelAttrUpdated && h.onChannelAttrUpdated(l.name, l.value, l.type)
									} catch(n) {
										console.error(n)
									}
								}
							}
							if("msg" == n && (d = e[1], C()), "recvmsg" == n) {
								var u = JSON.parse(e[1]),
									g = u[0],
									p = u[1];
								g == _ + 1 ? (v(f(p)), _ = g, k()) : (d = g, C())
							}
						}), r.messageInstantSend = function(e, n, t) {
							r.call2("user_sendmsg", {
								line: r.line,
								peer: e,
								flag: "v1:E:3600",
								t: "instant",
								content: n
							}, function(e, n) {
								t && t(!u(e))
							})
						}, r.invoke = function(e, n, t) {
							if(e.startsWith("io.agora.signal.")) {
								var i = e.split(".")[3];
								n.line = r.line, r.call2(i, n, function(e, n) {
									t && t(e, n)
								})
							}
						};
						var S = function(e, n, t) {
							this.onInviteReceivedByPeer = "", this.onInviteAcceptedByPeer = "", this.onInviteRefusedByPeer = "", this.onInviteFailed = "", this.onInviteEndByPeer = "", this.onInviteEndByMyself = "", this.onInviteMsg = "";
							var i = this;
							this.channelName = e, this.peer = n, this.extra = t, l[e + n] = i, this.channelInviteUser2 = function() {
								t = t || "", r.call2("voip_invite", {
									line: r.line,
									channelName: e,
									peer: n,
									extra: t
								}, function(e, n) {
									if(u(e));
									else try {
										i.onInviteFailed(e)
									} catch(e) {
										console.error(e)
									}
								})
							}, this.channelInviteAccept = function(t) {
								t = t || "", r.call2("voip_invite_accept", {
									line: r.line,
									channelName: e,
									peer: n,
									extra: t
								})
							}, this.channelInviteRefuse = function(t) {
								t = t || "", r.call2("voip_invite_refuse", {
									line: r.line,
									channelName: e,
									peer: n,
									extra: t
								})
							}, this.channelInviteDTMF = function(t) {
								r.call2("voip_invite_msg", {
									line: r.line,
									channelName: e,
									peer: n,
									extra: JSON.stringify({
										msgtype: "dtmf",
										msgdata: t
									})
								})
							}, this.channelInviteEnd = function(t) {
								t = t || "", r.call2("voip_invite_bye", {
									line: r.line,
									channelName: e,
									peer: n,
									extra: t
								});
								try {
									i.onInviteEndByMyself && i.onInviteEndByMyself("")
								} catch(e) {
									console.error(e)
								}
							}
						};
						r.channelInviteUser2 = function(e, n, t) {
							var i = new S(e, n, t);
							return i.channelInviteUser2(), i
						}, r.channelJoin = function(e) {
							if("session_state_logined" == r.state) return h = new function() {
								this.onChannelJoined = "", this.onChannelJoinFailed = "", this.onChannelLeaved = "", this.onChannelUserList = "", this.onChannelUserJoined = "", this.onChannelUserLeaved = "", this.onChannelUserList = "", this.onChannelAttrUpdated = "", this.onMessageChannelReceive = "", this.name = e, this.state = "joining", this.m_channel_msgid = 0, this.messageChannelSend = function(n, t) {
									r.call2("channel_sendmsg", {
										line: r.line,
										name: e,
										msg: n
									}, function(e, n) {
										t && t()
									})
								}, this.channelLeave = function(n) {
									r.call2("channel_leave", {
										line: r.line,
										name: e
									}, function(e, t) {
										if(h.state = "leaved", n) n();
										else try {
											h.onChannelLeaved && h.onChannelLeaved(0)
										} catch(e) {
											console.error(e)
										}
									})
								}, this.channelSetAttr = function(n, t, i) {
									r.call2("channel_set_attr", {
										line: r.line,
										channel: e,
										name: n,
										value: t
									}, function(e, n) {
										i && i()
									})
								}, this.channelDelAttr = function(n, t) {
									r.call2("channel_del_attr", {
										line: r.line,
										channel: e,
										name: n
									}, function(e, n) {
										t && t()
									})
								}, this.channelClearAttr = function(n) {
									r.call2("channel_clear_attr", {
										line: r.line,
										channel: e
									}, function(e, t) {
										n && n()
									})
								}
							}, r.call2("channel_join", {
								line: r.line,
								name: e
							}, function(e, n) {
								if("" == e) {
									h.state = "joined";
									try {
										h.onChannelJoined && h.onChannelJoined()
									} catch(e) {
										console.error(e)
									}
									var t = n;
									try {
										h.onChannelUserList && h.onChannelUserList(t.list)
									} catch(e) {
										console.error(e)
									}
									try {
										if(h.onChannelAttrUpdated)
											for(var i in t.attrs) h.onChannelAttrUpdated("update", i, t.attrs[i])
									} catch(e) {
										console.error(e)
									}
								} else try {
									h.onChannelJoinFailed && h.onChannelJoinFailed(e)
								} catch(e) {
									console.error(e)
								}
							}), h;
							c("You should log in first.")
						}
					}
				};
			r.socket = null, n(o.lbs_url1), n(o.lbs_url2), u(2, o.lbs_url1, 0), u(2, o.lbs_url2, 0)
		};
	this.login = function(e, n) {
		return new s(e, n)
	}
}, Signal = function(e) {
	return new Signal_(e)
};
/*!
 * toe.js
 * version 3.0.6
 * author: Damien Antipa
 * https://github.com/dantipa/toe.js
 */
(function(t, n) {
	function e(n, e, o, a) {
		t.each(c, function(t, i) {
			i[n].call(this, e, o, a)
		})
	}

	function o(t) {
		var n = u.Event(t);
		r = u.State(n), e("touchstart", t, r, n)
	}

	function a(t) {
		if(r) {
			var n = u.Event(t);
			r.move.push(n), e("touchmove", t, r, n)
		}
	}

	function i(t) {
		var n = u.Event(t);
		r.end = n, e("touchend", t, r, n)
	}
	var r, c = {},
		u = {
			active: !1,
			on: function() {
				t(document).on("touchstart MSPointerDown pointerdown", o).on("touchmove MSPointerMove MSPointerHover pointermove", a).on("touchend touchcancel MSPointerUp MSPointerCancel pointerup pointercancel", i), u.active = !0
			},
			off: function() {
				t(document).off("touchstart MSPointerDown pointerdown", o).off("touchmove MSPointerMove MSPointerHover pointermove ", a).off("touchend touchcancel MSPointerUp MSPointerCancel pointerup pointercancel", i), u.active = !1
			},
			track: function(t, n) {
				c[t] = n
			},
			addEventParam: function(n, e) {
				var o = t(n.target),
					a = o.offset(),
					i = {
						pageX: n.point[0].x,
						pageY: n.point[0].y,
						offsetX: a.left - n.point[0].x,
						offsetY: a.top - n.point[0].y
					};
				return t.extend(i, e)
			},
			Event: function(n) {
				var e = {
						type: n.type,
						timestamp: (new Date).getTime(),
						target: n.target,
						point: []
					},
					o = [];
				return n.type.indexOf("touch") > -1 ? o = n.changedTouches || n.originalEvent.changedTouches || n.touches || n.originalEvent.touches : n.type.match(/.*?pointer.*?/i) && (o = [n.originalEvent]), t.each(o, function(t, n) {
					e.point.push({
						x: n.pageX,
						y: n.pageY
					})
				}), e
			},
			State: function(t) {
				return t.point[0], {
					start: t,
					move: [],
					end: null
				}
			},
			calc: {
				getDuration: function(t, n) {
					return n.timestamp - t.timestamp
				},
				getDistance: function(t, n) {
					return Math.sqrt(Math.pow(n.x - t.x, 2) + Math.pow(n.y - t.y, 2))
				},
				getAngle: function(t, n) {
					return 180 * Math.atan2(n.y - t.y, n.x - t.x) / Math.PI
				},
				getDirection: function(t) {
					return -45 > t && t > -135 ? "up" : t >= -45 && 45 >= t ? "right" : t >= 45 && 135 > t ? "down" : t >= 135 || -135 >= t ? "left" : "unknown"
				},
				getScale: function(t, n) {
					var e = t.point,
						o = n.point;
					return 2 === e.length && 2 === o.length ? (Math.sqrt(Math.pow(o[0].x - o[1].x, 2) + Math.pow(o[0].y - o[1].y, 2)) / Math.sqrt(Math.pow(e[0].x - e[1].x, 2) + Math.pow(e[0].y - e[1].y, 2))).toFixed(2) : 0
				},
				getRotation: function(t, n) {
					var e = t.point,
						o = n.point;
					return 2 === e.length && 2 === o.length ? (180 * Math.atan2(o[0].y - o[1].y, o[0].x - o[1].x) / Math.PI - 180 * Math.atan2(e[0].y - e[1].y, e[0].x - e[1].x) / Math.PI).toFixed(2) : 0
				}
			}
		};
	u.on(), t.toe = u
})(jQuery, this),
function(t, n) {
	var e = "swipe",
		o = {
			distance: 40,
			duration: 1200,
			direction: "all"
		};
	n.track(e, {
		touchstart: function(t, n, o) {
			n[e] = {
				finger: o.point.length
			}
		},
		touchmove: function(t, n, o) {
			n[e].finger = o.point.length > n[e].finger ? o.point.length : n[e].finger
		},
		touchend: function(a, i, r) {
			var c, u, g = t.extend(o, a.data);
			c = n.calc.getDuration(i.start, r), u = n.calc.getDistance(i.start.point[0], r.point[0]), g.duration > c && u > g.distance && (i[e].angle = n.calc.getAngle(i.start.point[0], r.point[0]), i[e].direction = n.calc.getDirection(i[e].angle), i[e].distance = u, ("all" === g.direction || i[e].direction === g.direction) && t(a.target).trigger(t.Event(e, n.addEventParam(i.start, i[e]))))
		}
	})
}(jQuery, jQuery.toe, this),
function(t, n) {
	var e = document.documentElement.clientWidth,
		o = document.documentElement.clientHeight,
		a = Math.sqrt(e * o),
		i = .02 * a,
		r = "tap",
		c = {
			distance: i,
			duration: 300,
			finger: 1
		};
	n.track(r, {
		touchstart: function(t, n, e) {
			n[r] = {
				finger: e.point.length
			}
		},
		touchmove: function(t, n, e) {
			n[r].finger = e.point.length > n[r].finger ? e.point.length : n[r].finger
		},
		touchend: function(e, o, a) {
			var i, u, g = t.extend(c, e.data);
			i = n.calc.getDuration(o.start, a), u = n.calc.getDistance(o.start.point[0], a.point[0]), g.duration > i && g.distance > u && o[r].finger === g.finger && t(e.target).trigger(t.Event(r, n.addEventParam(o.start, o[r])))
		}
	})
}(jQuery, jQuery.toe, this),
function(t, n) {
	var e, o, a = "taphold",
		i = {
			distance: 20,
			duration: 500,
			finger: 1
		};
	n.track(a, {
		touchstart: function(r, c, u) {
			var g = t.extend(i, r.data);
			o = !1, c[a] = {
				finger: u.point.length
			}, clearTimeout(e), e = setTimeout(function() {
				!o && n.active && c[a].finger === g.finger && t(r.target).trigger(t.Event(a, n.addEventParam(u, c[a])))
			}, g.duration)
		},
		touchmove: function(e, r, c) {
			var u, g = t.extend(i, e.data);
			r[a].finger = c.point.length > r[a].finger ? c.point.length : r[a].finger, u = n.calc.getDistance(r.start.point[0], c.point[0]), u > g.distance && (o = !0)
		},
		touchend: function() {
			o = !0, clearTimeout(e)
		}
	})
}(jQuery, jQuery.toe, this),
function(t, n) {
	var e, o = "transform",
		a = {
			scale: .1,
			rotation: 15
		};
	n.track(o, {
		touchstart: function(t, n, a) {
			e = !1, n[o] = {
				start: a,
				move: []
			}
		},
		touchmove: function(i, r, c) {
			var u = t.extend(a, i.data);
			2 === c.point.length && (r[o].move.push(c), 2 !== r[o].start.point.length && 2 === c.point.length && (r[o].start = t.extend({}, c)), r[o].rotation = n.calc.getRotation(r[o].start, c), r[o].scale = n.calc.getScale(r[o].start, c), (Math.abs(1 - r[o].scale) > u.scale || Math.abs(r[o].rotation) > u.rotation) && (e || (t(i.target).trigger(t.Event("transformstart", r[o])), e = !0), t(i.target).trigger(t.Event("transform", r[o]))))
		},
		touchend: function(a, i, r) {
			e && (e = !1, 2 !== r.point.length && (i.end = t.extend({}, i[o].move[i[o].move.length - 1])), i[o].rotation = n.calc.getRotation(i[o].start, i.end), i[o].scale = n.calc.getScale(i[o].start, i.end), t(a.target).trigger(t.Event("transformend", i[o])))
		}
	})
}(jQuery, jQuery.toe, this);
var SignalingToken = (function() {
	var exports = {};

	exports.get = function(appid, appcertificate, account, validDays) {
		var expiredTime = parseInt(new Date().getTime() / 1000) + 3600 * 24 * validDays;
		var token_items = [];

		//append SDK VERSION
		token_items.push("1");

		//append appid
		token_items.push(appid);

		//expired time
		token_items.push(expiredTime);

		//md5 account + appid + appcertificate + expiredtime
		token_items.push(md5(account + appid + appcertificate + expiredTime));

		return token_items.join(":");
	}

	//convenience function to get token valid within 1 day
	exports.get1DayToken = function(appid, appcertificate, account) {
		return this.get(appid, appcertificate, account, 1);
	}

	return exports;
}());