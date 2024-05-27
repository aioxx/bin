class cardgener {
    constructor() {
        this.bin = "425451";
        this.month = "";
        this.year = "";
        this.cvv = "";
        this.quantity = 10;
        this.isDateEnabled = !0;
        this.isCvvEnabled = !0;
        this.length = 16;
        this.months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    }
    formatPlaceholder2(bin){
        var t = "";
        bin = bin.replace(/\s+/g, ""),
        /^3/.exec(bin) ? this.length = 15 : this.length = 16,
        bin = bin.replace(/X/g, "x").replace(/[^0-9x]/g, "");
        for (var e = 0; e < this.length - bin.length; e++)
            t += "x";
        bin += t
        return bin;
    }
    pushData(data){
        console.log(data);
    }  
    generate_array(){
        var list =[];
        for (var x = 0; x < this.quantity; x++){
            var cc = {
                number:this.generateCreditCardNumber(),
                month: this.generateMonth(),
                year:this.generateYear(),
                cvv:this.generateCvv(),
            };
            list.push(cc);
        }
        return list;
    }
    generate() {
        if (!(this.bin.length < 6)) {
            var list="";
            for (var x = 0; x < this.quantity; x++){
                list = list + this.generateCreditCardNumber()+' | '+"".concat(this.generateMonth(), "/").concat(this.generateYear())+' | '+this.generateCvv()+ "\n";
            }
                
            return list;
        } else {
            return false;
        }
    }
    generateCreditCardNumber() {
        for (var i = 500; i >= 1; i--) {
            var x = this.methods().sbtStringSpRnd(this.formatPlaceholder2(this.bin), "x", "0123456789")
                , t = this.methods().sbtString(x, " -/abcdefghijklmnopqrstuvwyzABCDEFGHIJLMNOPQRSTUVWYZ")
                , e = this.methods().chkLCD(t)
                , r = this.methods().chkCCCksum(t, this.methods().rnd(0, 9));
            if (e && r)
                break
        }
        return x
    }
    generateTest() {
        var x = this
            , t = ""
            , e = this.bin.split("")
            , r = 0;
        e.forEach((function (e, n) {
            t.length < x.length && (0 === r && "x" === e.toLowerCase() ? (t += e.toString(),
                r++) : "x" !== e.toLowerCase() ? t += e.toString() : (t += x.rand(0, 9).toString(),
                    r++))
        }
        )),
            console.log("RANDOM CC", t, t.length);
        var n = 0
            , c = 0
            , o = this.reverseString(t.replace("x", ""));
        for (console.log(t),
            console.log(o),
            console.log(o.length); c < this.length - 1;) {
            var l = 2 * o[c];
            l > 9 && (l -= 9),
                console.log("ODD", l, o[c]),
                n += l,
                console.log("SUM", n, o[c]),
                c != this.length - 2 && (n += parseInt(o[c + 1])),
                console.log("SUM", n, o[c + 1]),
                c += 2
        }
        var d = (10 * (Math.floor(n / 10) + 1) - n) % 10;
        return console.log("CHECK DIGIT", d),
            t += isNaN(d) ? "" : d.toString(),
            console.log("TEST", t.replace("x", d.toString())),
            t.replace("x", "")
    }
    generateMonth() {
        return "" !== this.month ? this.pad(this.month, 2) : this.pad(this.rand(1, 12), 2)
    }
    generateYear() {
        return "" !== this.year ? this.year : parseInt((new Date).getFullYear()) + parseInt(this.rand(2, 5))
    }
    generateCvv() {
        return this.cvv ? this.cvv : this.generateRandomNumberByLength(15 === this.length ? 4 : 3)
    }
    generateRandomNumberByLength(x) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return t.length === x ? t : this.generateRandomNumberByLength(x, t + this.rand(0, 9).toString())
    }
    formatPlaceholder(x) {
        var t = "";
        if (!(event.target.value.length < 6)) {
            this.bin = this.bin.replace(/\s+/g, ""),
                /^3/.exec(this.bin) ? this.length = 15 : this.length = 16,
                this.bin = this.bin.replace(/X/g, "x").replace(/[^0-9x]/g, "");
            for (var e = 0; e < this.length - this.bin.length; e++)
                t += "x";
            this.bin += t
        }
    }
    rand(x, t) {
        return 0 == x ? Math.floor(Math.random() * t + 0) : Math.floor(Math.random() * (t - x + 1)) + x
    }
    reverseString(x) {
        return x.split("").reverse().join("")
    }
    pad(x, t) {
        var e = "0" + x;
        return e.substr(e.length - t)
    }
    fapfap(x, t, e) {
        for (var r = Math.floor(Math.random() * (t + 1 - 2)) + 2, i = e; i >= 1; i--) {
            var n = this.sbtStringSpRnd(x, "x", "0123456789")
                , c = this.sbtString(n, " -/abcdefghijklmnopqrstuvwyzABCDEFGHIJLMNOPQRSTUVWYZ")
                , o = this.chkLCD(c)
                , l = this.chkCCCksum(c, r);
            if (o && l)
                break
        }
        return n
    }
    methods(){
        return {
            rnd: function(x, t) {
                return Math.floor(Math.random() * (t + 1 - x)) + x
            },
            unilenS: function(x, ul, t, p) {
                var e = "" + x;
                ul *= 1,
                "" != t && null != t || (t = "0"),
                "" != p && null != p || (p = 0);
                var r = e.length;
                if (r < ul)
                    for (var i = 1; i <= ul - r; i++)
                        0 == p ? e = "" + t + e : e += "" + t;
                return e
            },
            chkCard: function(x) {
                x += "",
                null != c[1] && null != c[1] && "" != c[1] || mkCClist();
                var t = 0
                  , e = "Unknown"
                  , r = sbtString(x, " -/abcdefghijklmnopqrstuvwyzABCDEFGHIJLMNOPQRSTUVWYZ");
                "4" == leftS(r, 1) && (r = leftS(r, 8));
                for (var i = 1; i <= tw; i++) {
                    var n = sbtString(c[i], " -/abcdefghijklmnopqrstuvwyzABCDEFGHIJLMNOPQRSTUVWYZ");
                    if ("4" == leftS(r, 1) && (n = leftS(n, 8)),
                    cmpPattern(r, n)) {
                        t = i;
                        break
                    }
                }
                return t > 0 && (e = cd[i]),
                e
            },
            chkCCCksum: function(x, t) {
                for (var e = !1, r = "", n = 1, i = 1; i <= x.length - 1; i++) {
                    var c = this.midS(x, i, 1) * this.midS("21", n, 1);
                    r += "" + (c = this.sumDigits(c)),
                    ++n > "21".length && (n = 1)
                }
                var o = this.sumDigits(r, -1);
                return (10 * this.sumDigits(o, -1) - o) % 10 == this.rightS(x, 1) && (e = !0),
                e
            },
            chkLCD: function(x) {
                var t = !1;
                x += "";
                for (var e = this.isdiv(x.length, 2), r = 0, i = 1; i <= x.length; i++) {
                    var n = this.midS(x, i, 1);
                    this.isdiv(i, 2) != e && (n *= 2) > 9 && (n -= 9),
                    r += 1 * n
                }
                return this.isdiv(r, 10) && (t = !0),
                t
            },
            leftS: function(x, t) {
                var e = "";
                return t >= 1 && (e = (x += "").substring(0, t)),
                e
            },
            rightS: function(x, t) {
                x += "";
                var e = "";
                return t >= 1 && (e = x.substring(x.length - t, x.length)),
                e
            },
            midS: function(x, t, e) {
                x += "";
                return null != e && "" != e || (e = x.length),
                e *= 1,
                (t *= 1) < 0 && t++,
                x.substring(t - 1, t - 1 + e)
            },
            linstr: function(x, t) {
                t += "";
                var e = !1;
                return leftS(x += "", t.length) == t && (e = !0),
                e
            },
            sbtString: function(x, t) {
                var e = "";
                x += "",
                t += "";
                for (var i = 1; i <= x.length; i++) {
                    var r = x.substring(i - 1, i);
                    -1 == t.indexOf(r) && (e += r)
                }
                return e
            },
            sbtStringSpRnd: function(x, t, e) {
                null != e && "" != e || (e = "0123456789");
                var r = "";
                e += "";
                for (var i = 1; i <= x.length; i++) {
                    var n = x.substring(i - 1, i);
                    r += -1 == t.indexOf(n) ? n : this.midS(e, Math.floor(Math.random() * (e.length - 1)) + 1, 1)
                }
                return r
            },
            cmpPattern: function(a, p, x) {
                if ("" != x && null != x || (x = "x"),
                "X" == x && (x = "x"),
                x = "" + x.substring(0, 1),
                a += "",
                p += "",
                r = !1,
                mc = 0,
                a.length == p.length)
                    for (var i = 1; i <= a.length; i++)
                        a1 = this.midS(a, i, 1),
                        p1 = this.midS(p, i, 1),
                        a1 != p1 && p1 != x || mc++;
                return mc == a.length && (r = !0),
                r
            },
            isdiv: function(a, b) {
                null == b && (b = 2);
                var x = !1;
                return (a *= 1) / (b *= 1) == Math.floor(a / b) && (x = !0),
                x
            },
            sumDigits: function(x, t) {
                if (0 != t && null != t || (t = 1),
                x += "",
                t > 0)
                    for (; x.length > t; ) {
                        for (var e = 0, i = 1; i <= x.length; i++)
                            e += 1 * this.midS(x, i, 1);
                        x = "" + e
                    }
                else
                    for (var r = 1; r <= Math.abs(t); r++) {
                        for (e = 0,
                        i = 1; i <= x.length; i++)
                            e += 1 * this.midS(x, i, 1);
                        x = "" + e
                    }
                return e = x
            },
            makeArray: function(x) {
                this.length = x;
                for (var i = 1; i <= x; i++)
                    this[i] = 0;
                return this
            },
            _rand: function(x, t) {
                return Math.floor(Math.random() * (t - x + 1) + x)
            },
            mkCClist: function() {
                tw = 450,
                c = new makeArray(tw),
                cd = new makeArray(tw);
                var i = 1;
                c[i] = "37xxxxxxxxxxxxx",
                cd[i] = "AmEx",
                i++,
                c[i] = "3782xxxxxxxxxxx",
                cd[i] = "AmEx Small Corporate Card",
                i++,
                c[i] = "3787xxxxxxxxxxx",
                cd[i] = "AmEx Small Corporate Card",
                i++,
                c[i] = "37x8xxxxxxxxxxx",
                cd[i] = "AmEx Gold",
                i++,
                c[i] = "37x37xxxxxxxxxx",
                cd[i] = "AmEx Platinum",
                i++,
                c[i] = "37xxxxxxxx11xxx",
                cd[i] = "AmEx issued since 1995",
                i++,
                c[i] = "30xxxxxxxxxxxx",
                cd[i] = "Diners Club",
                i++,
                c[i] = "31xxxxxxxxxxxx",
                cd[i] = "Diners Club",
                i++,
                c[i] = "35xxxxxxxxxxxx",
                cd[i] = "Diners Club",
                i++,
                c[i] = "36xxxxxxxxxxxx",
                cd[i] = "Diners Club",
                i++,
                c[i] = "38xxxxxxxxxxxx",
                cd[i] = "Carte Blanche",
                i++,
                c[i] = "35xxxxxxxxxxxxxx",
                cd[i] = "JCB (Japanese Credit Bureau)",
                i++,
                c[i] = "400314xxxxxxxxxx",
                cd[i] = "Visa Debit-Banca Monte Dei Paschi Di Siena (Italy)",
                i++,
                c[i] = "400315xxxxxxxxxx",
                cd[i] = "Visa-Banca Monte Dei Paschi Di Siena (Italy)",
                i++,
                c[i] = "40240238xxxxxxxx",
                cd[i] = "Visa Gold-Bank of America",
                i++,
                c[i] = "4019xxxxxxxxxxxx",
                cd[i] = "Visa CV/Gold-Bank of America",
                i++,
                c[i] = "4024xxxxxxxxxxxx",
                cd[i] = "Visa PV-Bank of America",
                i++,
                c[i] = "4040xxxxxxxxxxxx",
                cd[i] = "Visa CV-Wells Fargo",
                i++,
                c[i] = "4048xxxxxxxxxxxx",
                cd[i] = "Visa CV",
                i++,
                c[i] = "40240071xxxxxxxx",
                cd[i] = "Visa-Wells Fargo",
                i++,
                c[i] = "4013xxxxxxxxxxxx",
                cd[i] = "Visa-Citibank",
                i++,
                c[i] = "4019xxxxxxxxxxxx",
                cd[i] = "Visa-Bank of America",
                i++,
                c[i] = "402360xxxxxxxxxx",
                cd[i] = "Visa Electron Prepaid-Poste Italiane (Italy)",
                i++,
                c[i] = "4024xxxxxxxxxxxx",
                cd[i] = "Visa-Bank of America",
                i++,
                c[i] = "4027xxxxxxxxxxxx",
                cd[i] = "Visa-Rockwell Federal Credit Union",
                i++,
                c[i] = "4032xxxxxxxxxxxx",
                cd[i] = "Visa-Household Bank",
                i++,
                c[i] = "4052xxxxxxxxxxxx",
                cd[i] = "Visa-First Cincinnati",
                i++,
                c[i] = "4060xxxxxxxxxxxx",
                cd[i] = "Visa-Associates National Bank",
                i++,
                c[i] = "4070xxxxxxxxxxxx",
                cd[i] = "Visa-Security Pacific",
                i++,
                c[i] = "4071xxxxxxxxxxxx",
                cd[i] = "Visa-Colonial National Bank",
                i++,
                c[i] = "4094xxxxxxxxxxxx",
                cd[i] = "Visa-A.M.C. Federal Credit Union",
                i++,
                c[i] = "4113xxxxxxxxxxxx",
                cd[i] = "Visa-Valley National Bank",
                i++,
                c[i] = "4114xxxxxxxxxxxx",
                cd[i] = "Visa-Chemical Bank",
                i++,
                c[i] = "4121xxxxxxxxxxxx",
                cd[i] = "Visa-Pennsylvania State Employees Credit Union",
                i++,
                c[i] = "4121xxxxxxxxxxxx",
                cd[i] = "Visa CV-Signet Bank",
                i++,
                c[i] = "4122xxxxxxxxxxxx",
                cd[i] = "Visa-Union Trust",
                i++,
                c[i] = "4125xxxxxxxxxxxx",
                cd[i] = "Visa-Marine Midland",
                i++,
                c[i] = "4128xxxxxxxxx",
                cd[i] = "Visa CV-Citibank",
                i++,
                c[i] = "4128xxxxxxxxxxxx",
                cd[i] = "Visa CV-Citibank",
                i++,
                c[i] = "4131xxxxxxxxxxxx",
                cd[i] = "Visa-State Street Bank",
                i++,
                c[i] = "4225xxxxxxxxxxxx",
                cd[i] = "Visa-Chase Manhattan Bank",
                i++,
                c[i] = "4226xxxxxxxxxxxx",
                cd[i] = "Visa-Chase Manhattan Bank",
                i++,
                c[i] = "4231xxxxxxxxxxxx",
                cd[i] = "Visa-Chase Lincoln First Classic",
                i++,
                c[i] = "4232xxxxxxxxxxxx",
                cd[i] = "Visa-Chase Lincoln First Classic",
                i++,
                c[i] = "4239xxxxxxxxxxxx",
                cd[i] = "Visa-Corestates",
                i++,
                c[i] = "4241xxxxxxxxxxxx",
                cd[i] = "Visa-National Westminster Bank",
                i++,
                c[i] = "4250xxxxxxxxxxxx",
                cd[i] = "Visa-First Chicago Bank",
                i++,
                c[i] = "4253xxxxxxxxxxxx",
                cd[i] = "Visa-Consumers Edge",
                i++,
                c[i] = "42545123xxxxxxxx",
                cd[i] = "Visa Premier card-Security First",
                i++,
                c[i] = "4254xxxxxxxxxxxx",
                cd[i] = "Visa-Security First",
                i++,
                c[i] = "4271382xxxxxxxxx",
                cd[i] = "Visa PV-Citibank",
                i++,
                c[i] = "4271xxxxxxxxxxxx",
                cd[i] = "Visa-Citibank/Citicorp",
                i++,
                c[i] = "4301xxxxxxxxxxxx",
                cd[i] = "Visa-Monogram Bank",
                i++,
                c[i] = "4302xxxxxxxxxxxx",
                cd[i] = "Visa-H.H.B.C.",
                i++,
                c[i] = "4311xxxxxxxxxxxx",
                cd[i] = "Visa-First National Bank of Louisville",
                i++,
                c[i] = "4317xxxxxxxxxxxx",
                cd[i] = "Visa-Gold Dome",
                i++,
                c[i] = "4327xxxxxxxxxxxx",
                cd[i] = "Visa-First Atlanta",
                i++,
                c[i] = "4332xxxxxxxxxxxx",
                cd[i] = "Visa-First American Bank",
                i++,
                c[i] = "4339xxxxxxxxxxxx",
                cd[i] = "Visa-Primerica Bank",
                i++,
                c[i] = "4342xxxxxxxxxxxx",
                cd[i] = "Visa-N.C.M.B. / Nations Bank",
                i++,
                c[i] = "4356xxxxxxxxxxxx",
                cd[i] = "Visa-National Bank of Delaware",
                i++,
                c[i] = "4368xxxxxxxxxxxx",
                cd[i] = "Visa-National West",
                i++,
                c[i] = "4387xxxxxxxxxxxx",
                cd[i] = "Visa-Bank One",
                i++,
                c[i] = "4388xxxxxxxxxxxx",
                cd[i] = "Visa-First Signature Bank & Trust",
                i++,
                c[i] = "4401xxxxxxxxxxxx",
                cd[i] = "Visa-Gary-Wheaton Bank",
                i++,
                c[i] = "4413xxxxxxxxxxxx",
                cd[i] = "Visa-Firstier Bank Lincoln",
                i++,
                c[i] = "4418xxxxxxxxxxxx",
                cd[i] = "Visa-Bank of Omaha",
                i++,
                c[i] = "4421xxxxxxxxxxxx",
                cd[i] = "Visa-Indiana National Bank",
                i++,
                c[i] = "4424xxxxxxxxxxxx",
                cd[i] = "Visa-Security Pacific National Bank",
                i++,
                c[i] = "4428xxxxxxxxxxxx",
                cd[i] = "Visa-Bank of Hoven",
                i++,
                c[i] = "4436xxxxxxxxxxxx",
                cd[i] = "Visa-Security Bank & Trust",
                i++,
                c[i] = "4443xxxxxxxxxxxx",
                cd[i] = "Visa-Merril Lynch Bank & Trust",
                i++,
                c[i] = "4447xxxxxxxxxxxx",
                cd[i] = "Visa-AmeriTrust",
                i++,
                c[i] = "4448020xxxxxx",
                cd[i] = "Visa Premier card",
                i++,
                c[i] = "4452xxxxxxxxxxxx",
                cd[i] = "Visa-Empire Affiliates Federal Credit Union",
                i++,
                c[i] = "4498xxxxxxxxxxxx",
                cd[i] = "Visa-Republic Savings",
                i++,
                c[i] = "4502xxxxxxxxxxxx",
                cd[i] = "Visa-C.I.B.C.",
                i++,
                c[i] = "4503xxxxxxxxxxxx",
                cd[i] = "Visa-Canadian Imperial Bank",
                i++,
                c[i] = "4506xxxxxxxxxxxx",
                cd[i] = "Visa-Belgium A.S.L.K.",
                i++,
                c[i] = "4510xxxxxxxxxxxx",
                cd[i] = "Visa-Royal Bank of Canada",
                i++,
                c[i] = "4520xxxxxxxxxxxx",
                cd[i] = "Visa-Toronto Dominion of Canada",
                i++,
                c[i] = "4537xxxxxxxxxxxx",
                cd[i] = "Visa-Bank of Nova Scotia",
                i++,
                c[i] = "4538xxxxxxxxxxxx",
                cd[i] = "Visa-Bank of Nova Scotia",
                i++,
                c[i] = "4539xxxxxxxxxxxx",
                cd[i] = "Visa-Barclays (UK)",
                i++,
                c[i] = "4543xxxxxxxxxxxx",
                cd[i] = "Visa-First Direct",
                i++,
                c[i] = "4544xxxxxxxxxxxx",
                cd[i] = "Visa-T.S.B. Bank",
                i++,
                c[i] = "4556xxxxxxxxxxxx",
                cd[i] = "Visa-Citibank",
                i++,
                c[i] = "4564xxxxxxxxxxxx",
                cd[i] = "Visa-Bank of Queensland",
                i++,
                c[i] = "4673xxxxxxxxxxxx",
                cd[i] = "Visa-First Card",
                i++,
                c[i] = "4678xxxxxxxxxxxx",
                cd[i] = "Visa-Home Federal",
                i++,
                c[i] = "4707xxxxxxxxxxxx",
                cd[i] = "Visa-Tompkins County Trust",
                i++,
                c[i] = "47121250xxxxxxxx",
                cd[i] = "Visa-IBM Credit Union",
                i++,
                c[i] = "4719xxxxxxxxxxxx",
                cd[i] = "Visa-Rocky Mountain",
                i++,
                c[i] = "4721xxxxxxxxxxxx",
                cd[i] = "Visa-First Security",
                i++,
                c[i] = "4722xxxxxxxxxxxx",
                cd[i] = "Visa-West Bank",
                i++,
                c[i] = "4726xxxxxxxxxxxx",
                cd[i] = "Visa CV-Wells Fargo",
                i++,
                c[i] = "4783xxxxxxxxxxxx",
                cd[i] = "Visa-AT&T's Universal Card",
                i++,
                c[i] = "4784xxxxxxxxxxxx",
                cd[i] = "Visa-AT&T's Universal Card",
                i++,
                c[i] = "4800xxxxxxxxxxxx",
                cd[i] = "Visa-M.B.N.A. North America",
                i++,
                c[i] = "4811xxxxxxxxxxxx",
                cd[i] = "Visa-Bank of Hawaii",
                i++,
                c[i] = "4819xxxxxxxxxxxx",
                cd[i] = "Visa-Macom Federal Credit Union",
                i++,
                c[i] = "4820xxxxxxxxxxxx",
                cd[i] = "Visa-IBM Mid America Federal Credit Union",
                i++,
                c[i] = "4833xxxxxxxxxxxx",
                cd[i] = "Visa-U.S. Bank",
                i++,
                c[i] = "4842xxxxxxxxxxxx",
                cd[i] = "Visa-Security Pacific Washington",
                i++,
                c[i] = "4897xxxxxxxxxxxx",
                cd[i] = "Visa-Village Bank of Chicago",
                i++,
                c[i] = "4921xxxxxxxxxxxx",
                cd[i] = "Visa-Hong Kong National Bank",
                i++,
                c[i] = "4929xxxxxxxxxxxx",
                cd[i] = "Visa CV-Barclay Card (UK)",
                i++,
                c[i] = "45399710xxxxxxxx",
                cd[i] = "Visa-Banco di Napoli (Italy)",
                i++,
                c[i] = "4557xxxxxxxxxxxx",
                cd[i] = "Visa-BNL (Italy)",
                i++,
                c[i] = "4908xxxxxxxxxxxx",
                cd[i] = "Visa-Carta Moneta-CARIPLO/Intesa (Italy)",
                i++,
                c[i] = "4xxx9x604015xxxx",
                cd[i] = "Visa-Carta SÃƒÂ¬-Unipol Banca (Italy)",
                i++,
                c[i] = "4xxx9x144046xxxx",
                cd[i] = "Visa-Carta SÃƒÂ¬-Banco di Sardegna (Italy)",
                i++,
                c[i] = "4xxx9xxx40xxxxxx",
                cd[i] = "Visa-Carta SÃƒÂ¬ (Italy)",
                i++,
                c[i] = "4532xxxxxxxxxxxx",
                cd[i] = "Visa-Credito Italiano (Italy)",
                i++,
                c[i] = "45475900xxxxxxxx",
                cd[i] = "Visa Gold-bank ganadero BBV (Colombia)",
                i++,
                c[i] = "4916xxxxxxxxxxxx",
                cd[i] = "Visa-MBNA Bank",
                i++,
                c[i] = "4xxxxxxxxxxxxx",
                cd[i] = "Visa",
                i++,
                c[i] = "4xxxxxxxxxxxxxxx",
                cd[i] = "Visa",
                i++,
                c[i] = "5031xxxxxxxxxxxx",
                cd[i] = "MasterCard-Maryland of North America",
                i++,
                c[i] = "5100xxxxxxxxxxxx",
                cd[i] = "MasterCard-Southwestern States Bankard Association",
                i++,
                c[i] = "5110xxxxxxxxxxxx",
                cd[i] = "MasterCard-Universal Travel Voucher",
                i++,
                c[i] = "5120xxxxxxxxxxxx",
                cd[i] = "MasterCard-Western States Bankard Association",
                i++,
                c[i] = "5130xxxxxxxxxxxx",
                cd[i] = "MasterCard-Eurocard France",
                i++,
                c[i] = "5140xxxxxxxxxxxx",
                cd[i] = "MasterCard-Mountain States Bankard Association",
                i++,
                c[i] = "5150xxxxxxxxxxxx",
                cd[i] = "MasterCard-Credit Systems Inc.",
                i++,
                c[i] = "5160xxxxxxxxxxxx",
                cd[i] = "MasterCard-Westpac Banking Corporation",
                i++,
                c[i] = "5170xxxxxxxxxxxx",
                cd[i] = "MasterCard-Midamerica Bankard Association",
                i++,
                c[i] = "5172xxxxxxxxxxxx",
                cd[i] = "MasterCard-First Bank Card Center",
                i++,
                c[i] = "518xxxxxxxxxxxxx",
                cd[i] = "MasterCard-Computer Communications of America",
                i++,
                c[i] = "519xxxxxxxxxxxxx",
                cd[i] = "MasterCard-Bank of Montreal",
                i++,
                c[i] = "5201xxxxxxxxxxxx",
                cd[i] = "MasterCard-Mellon Bank N.A.",
                i++,
                c[i] = "5202xxxxxxxxxxxx",
                cd[i] = "MasterCard-Central Trust Company N.A.",
                i++,
                c[i] = "5204xxxxxxxxxxxx",
                cd[i] = "MasterCard-Security Pacific National Bank",
                i++,
                c[i] = "5205xxxxxxxxxxxx",
                cd[i] = "MasterCard-Promocion y Operacion S.A.",
                i++,
                c[i] = "5206xxxxxxxxxxxx",
                cd[i] = "MasterCard-Banco Nacional do Mexico",
                i++,
                c[i] = "5207xxxxxxxxxxxx",
                cd[i] = "MasterCard-New England Bankard Association",
                i++,
                c[i] = "5208xxxxxxxxxxxx",
                cd[i] = "MasterCard-Million Card Service Co. Ltd.",
                i++,
                c[i] = "5209xxxxxxxxxxxx",
                cd[i] = "MasterCard-The Citizens & Southern National Bank",
                i++,
                c[i] = "5210xxxxxxxxxxxx",
                cd[i] = "MasterCard-Kokunai Shinpan Company Ltd.",
                i++,
                c[i] = "5211xxxxxxxxxxxx",
                cd[i] = "MasterCard-Chemical Bank Delaware",
                i++,
                c[i] = "5212xxxxxxxxxxxx",
                cd[i] = "MasterCard-F.C.C. National Bank",
                i++,
                c[i] = "5213xxxxxxxxxxxx",
                cd[i] = "MasterCard-The Bankcard Association Inc.",
                i++,
                c[i] = "5215xxxxxxxxxxxx",
                cd[i] = "MasterCard-Marine Midland Bank N.A.",
                i++,
                c[i] = "5216xxxxxxxxxxxx",
                cd[i] = "MasterCard-Old Kent Bank & Trust Co.",
                i++,
                c[i] = "5217xxxxxxxxxxxx",
                cd[i] = "MasterCard-Union Trust",
                i++,
                c[i] = "5218xxxxxxxxxxxx",
                cd[i] = "MasterCard-Citibank/Citicorp",
                i++,
                c[i] = "5219xxxxxxxxxxxx",
                cd[i] = "MasterCard-Central Finance Co. Ltd.",
                i++,
                c[i] = "5220xxxxxxxxxxxx",
                cd[i] = "MasterCard-Sovran Bank/Central South",
                i++,
                c[i] = "5221xxxxxxxxxxxx",
                cd[i] = "MasterCard-Standard Bank of South Africa Ltd.",
                i++,
                c[i] = "5222xxxxxxxxxxxx",
                cd[i] = "MasterCard-Security Bank & Trust Company",
                i++,
                c[i] = "5223xxxxxxxxxxxx",
                cd[i] = "MasterCard-Trustmark National Bank",
                i++,
                c[i] = "5224xxxxxxxxxxxx",
                cd[i] = "MasterCard-Midland Bank",
                i++,
                c[i] = "5225xxxxxxxxxxxx",
                cd[i] = "MasterCard-First Pennsylvania Bank N.A.",
                i++,
                c[i] = "5226xxxxxxxxxxxx",
                cd[i] = "MasterCard-Eurocard Ab",
                i++,
                c[i] = "5227xxxxxxxxxxxx",
                cd[i] = "MasterCard-Rocky Mountain Bankcard System Inc.",
                i++,
                c[i] = "5228xxxxxxxxxxxx",
                cd[i] = "MasterCard-First Union National Bank of North Carolina",
                i++,
                c[i] = "5229xxxxxxxxxxxx",
                cd[i] = "MasterCard-Sunwest Bank of Albuquerque N.A.",
                i++,
                c[i] = "5230xxxxxxxxxxxx",
                cd[i] = "MasterCard-Harris Trust & Savings Bank",
                i++,
                c[i] = "5231xxxxxxxxxxxx",
                cd[i] = "MasterCard-Badische Beamtenbank EG",
                i++,
                c[i] = "5232xxxxxxxxxxxx",
                cd[i] = "MasterCard-Eurocard Deutschland",
                i++,
                c[i] = "5233xxxxxxxxxxxx",
                cd[i] = "MasterCard-Computer Systems Association Inc.",
                i++,
                c[i] = "5234xxxxxxxxxxxx",
                cd[i] = "MasterCard-Citibank Arizona",
                i++,
                c[i] = "5235xxxxxxxxxxxx",
                cd[i] = "MasterCard-Financial Transaction System Inc.",
                i++,
                c[i] = "5236xxxxxxxxxxxx",
                cd[i] = "MasterCard-First Tennessee Bank N.A.",
                i++,
                c[i] = "5254xxxxxxxxxxxx",
                cd[i] = "MasterCard-Bank of America",
                i++,
                c[i] = "5273xxxxxxxxxxxx",
                cd[i] = "MasterCard(can be Gold)-Bank of America",
                i++,
                c[i] = "5286xxxxxxxxxxxx",
                cd[i] = "MasterCard-Home Federal",
                i++,
                c[i] = "5291xxxxxxxxxxxx",
                cd[i] = "MasterCard-Signet Bank",
                i++,
                c[i] = "5329xxxxxxxxxxxx",
                cd[i] = "MasterCard-Maryland of North America",
                i++,
                c[i] = "533875xxxxxxxxxx",
                cd[i] = "MasterCard Prepaid-PayPal / Lottomaticard (Italy)",
                i++,
                c[i] = "5410xxxxxxxxxxxx",
                cd[i] = "MasterCard-Wells Fargo",
                i++,
                c[i] = "5412xxxxxxxxxxxx",
                cd[i] = "MasterCard-Wells Fargo",
                i++,
                c[i] = "5419xxxxxxxxxxxx",
                cd[i] = "MasterCard-Bank of Hoven",
                i++,
                c[i] = "5424xxxxxxxxxxxx",
                cd[i] = "MasterCard-Citibank/Citicorp",
                i++,
                c[i] = "543013xxxxxxxxxx",
                cd[i] = "MasterCard-BNL/BNP Paribas (Italy)",
                i++,
                c[i] = "5434xxxxxxxxxxxx",
                cd[i] = "MasterCard-National Westminster Bank",
                i++,
                c[i] = "5465xxxxxxxxxxxx",
                cd[i] = "MasterCard-Chase Manhattan",
                i++,
                c[i] = "52550114xxxxxxxx",
                cd[i] = "MasterCard-Banco di Sardegna (Italy)",
                i++,
                c[i] = "530693xxxxxxxxxx",
                cd[i] = "MasterCard-Bancolombia Cadenalco (Colombia)",
                i++,
                c[i] = "5406251xxxxxxxxx",
                cd[i] = "MasterCard-Banco de Occidente (Colombia)",
                i++,
                c[i] = "5426xxxxxxxxxxxx",
                cd[i] = "MasterCard-Granahorrar (Colombia)",
                i++,
                c[i] = "5406xxxxxxxxxxxx",
                cd[i] = "MasterCard-Granahorrar (Colombia)",
                i++,
                c[i] = "581149xxxxxxxxxx",
                cd[i] = "Maestro-BNL/BNP Paribas (Italy)",
                i++,
                c[i] = "5xxxxxxxxxxxxxxx",
                cd[i] = "MasterCard/Access/Eurocard",
                i++,
                c[i] = "6013xxxxxxxxxxxx",
                cd[i] = "Discover-MBNA Bank",
                i++,
                c[i] = "60xxxxxxxxxxxxxx",
                cd[i] = "Discover",
                i++,
                mxcards = i - 1
            }
        }
    }
}

var c = new cardgener();

const verify = async (bin) => {
    AMP.setState({text: 'Waiting...!'});
    var res = await fetch('https://cardgener.com/app/check?bin='+bin);
    var data = await res.json();
    if(res.status!=200) return AMP.setState({text: 'There was an error or maintenance!'});

    var res = await fetch('https://public-sonjj.p.rapidapi.com/cardgener/check?bin='+bin+'&key='+data.items+'&rapidapi-key=f871a22852mshc3ccc49e34af1e8p126682jsn734696f1f081');
    var data = await res.json();
    if(res.status!=200) return AMP.setState({text: 'Invalid BIN'});

    
    var result ='Brand: '+data.items.brand+' | Type: '+data.items.type+' | Level: '+data.items.level+' | Country: '+data.items.country+' | Bank: '+data.items.bank;
    AMP.setState({text: result});
}

function getList(){
    
    c.bin = document.querySelector("#bin").value.trim();
    if(c.bin.trim()!=""){
        verify(c.bin);
        var list={
            items:c.generate_array()
        }
    }else{
        var list = {items:[]}
    }
    return list;
}
exportFunction('getList', getList);
