function FPB(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function KPK(a, b) {
    return (a * b) / FPB(a, b);
}

function Turunan(persamaan) {
    const turunan = persamaan
        .map((coef, idx) => {
            const pangkat = persamaan.length - idx - 1;
            const hasil = coef * pangkat;
            if (pangkat === 0 || hasil === 0) return null;
            const newPangkat = pangkat - 1;
            return `${hasil}${newPangkat > 1 ? "x^" + newPangkat : (newPangkat === 1 ? "x" : "")}`;
        })
        .filter(Boolean)
        .join(" + ")
        .replace(/\+ -/g, "- ");
    return turunan;
}

function Integral(persamaan) {
    const integral = persamaan
        .map((coef, idx) => {
            const pangkat = persamaan.length - idx;
            const hasil = coef / pangkat;
            return `${hasil}${pangkat > 1 ? "x^" + pangkat : "x"}`;
        })
        .join(" + ")
        .replace(/\+ -/g, "- ");
    return integral + " + C";
}

module.exports = {
    FPB,
    KPK,
    Turunan,
    Integral
};
