/**/

var Omiruku = function (options) {
    
    this.name = options.name;

    this.karada = options.karada;
    this.atk    = options.atk;

    this.coef = options.coef || 0;
    this.star = options.star || 3;

    this.initCoef();

};

Omiruku.prototype.initCoef = function () {

    // 0 - eraly, 1 - avg, 2 - late
    var coefs = [1.9, 2.0, 2.1];
    this.coef = coefs[this.coef] || 2.0;

    this.maxAtk = this.atk * this.coef;
    this.maxKarada = this.karada * this.coef;
    
    console.log('========================================');
    console.log(this.name);
    console.log(
        'atk'      , this.atk, 
        'karada'   , this.karada, 
        'coef:'    , this.coef, 
        'maxAtk'   , this.maxAtk, 
        'maxKarada', this.maxKarada
    );
    
    // 0 1 2 3 4 5 star
    var levels = [0, 0, 40, 50, 60, 70],
        maxLevel = levels[this.star];

    console.log('star - maxlevel: ', this.star, '-', maxLevel);

    this.acAtk = Math.floor(this.atk / (maxLevel - 1) * (this.coef - 1));
    this.acKarada = Math.floor(this.karada / (maxLevel - 1) * (this.coef - 1));
};

Omiruku.prototype.computeAwakAtk = function (awakCount) {
    return this.maxAtk + this.acAtk * awakCount * 5;
};

Omiruku.prototype.computeAwakKarada = function (awakCount) {
    return this.maxKarada + this.acKarada * awakCount * 5;
};

Omiruku.prototype.compute = function () {
    var karadas = [],
        atks = [];

    for (var i = 1; i <= 15; i++) {
        atks.push(this.computeAwakAtk(i));
        karadas.push(this.computeAwakKarada(i));
    }
    
    console.log('hp:', karadas.join(' '));
    console.log('atk:', atks.join(' '));
    console.log('========================================');
    console.log('\n');
};

var vier = new Omiruku({
    name: 'jiuhao',
    atk: 3100, //6510
    karada: 2600, //5460
    coef: 2,
    star: 5
});

vier.compute();

vier = new Omiruku({
    name: 'suowalei',
    atk: 3260, //6510
    karada: 960, //5460
    coef: 2,
    star: 2
});

vier.compute();

vier = new Omiruku({
    name: 'keleier',
    atk: 2480, //6510
    karada: 930, //5460
    coef: 0,
    star: 2
});

vier.compute();

vier = new Omiruku({
    name: 'suowalei3',
    atk: 3900,
    karada: 1180, 
    coef: 2,
    star: 3
});

vier.compute();

vier = new Omiruku({
    name: 'chunmiao',
    atk: 1450,
    karada: 2520, 
    coef: 2,
    star: 3
});

vier.compute();

vier = new Omiruku({
    name: 'nvpu',
    atk: 1280,
    karada: 2400, 
    coef: 0,
    star: 2
});

vier.compute();