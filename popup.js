const parse = v => parseFloat(v.toString().replace(',', '.'));
const modo = document.getElementById('modo');
const boxP = document.getElementById('boxPorc');
const boxF = document.getElementById('boxFinal');
const res = document.getElementById('res');

modo.onchange = () => {
  const p = modo.value === 'porc';
  boxP.classList.toggle('hidden', !p);
  boxF.classList.toggle('hidden', p);
  res.textContent = '';
};

document.getElementById('calc').onclick = () => {
  const o = parse(document.getElementById('orig').value);
  if (isNaN(o) || o <= 0) return res.textContent = 'Preço inválido';

  if (modo.value === 'porc') {
    const d = parse(document.getElementById('porc').value);
    if (isNaN(d) || d < 0 || d > 100) return res.textContent = '% entre 0 e 100';
    const f = o * (1 - d / 100);
    res.textContent = `💰 Final: R$ ${f.toFixed(2)}`;
  } else {
    const f = parse(document.getElementById('final').value);
    if (isNaN(f) || f <= 0 || f >= o) return res.textContent = 'Preço final inválido';
    const d = ((o - f) / o) * 100;
    res.textContent = `📉 Desconto: ${d.toFixed(1)}%`;
  }
};