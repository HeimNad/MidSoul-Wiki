import React, { useId } from 'react';

// 解析单个颜色值：null → 跳过，字符串 → 只改背景，对象 → 背景+文字
function parse(val) {
  if (!val) return null;
  if (typeof val === 'string') return { bg: val };
  return val;
}

export default function ColorTable({ header, cols, rows, cells, hideHeader, noFirstCol, children }) {
  const id = useId().replace(/:/g, '');
  const rules = [];
  const sel = `#t${id}`;

  header?.forEach((val, i) => {
    const c = parse(val);
    if (!c) return;
    const s = `${sel} thead th:nth-child(${i + 1})`;
    if (c.bg)   rules.push(`${s} { background-color: ${c.bg} !important; }`);
    if (c.text) rules.push(`${s} { color: ${c.text} !important; }`);
  });

  cols?.forEach((val, i) => {
    const c = parse(val);
    if (!c) return;
    const s = `${sel} tbody td:nth-child(${i + 1})`;
    if (c.bg)   rules.push(`${s} { background-color: ${c.bg} !important; }`);
    if (c.text) rules.push(`${s} { color: ${c.text} !important; }`);
  });

  rows?.forEach((val, i) => {
    const c = parse(val);
    if (!c) return;
    const s = `${sel} tbody tr:nth-child(${i + 1}) td`;
    if (c.bg)   rules.push(`${s} { background-color: ${c.bg} !important; }`);
    if (c.text) rules.push(`${s} { color: ${c.text} !important; }`);
  });

  cells?.forEach(([row, col, val]) => {
    const c = parse(val);
    if (!c) return;
    const s = `${sel} tbody tr:nth-child(${row}) td:nth-child(${col})`;
    if (c.bg)   rules.push(`${s} { background-color: ${c.bg} !important; }`);
    if (c.text) rules.push(`${s} { color: ${c.text} !important; }`);
  });

  if (hideHeader) rules.push(`${sel} thead { display: none; }`);
  if (noFirstCol) rules.push(
    `${sel} tbody td:first-child, ${sel} thead th:first-child { background: none !important; }`
  );

  return (
    <div id={`t${id}`}>
      {rules.length > 0 && <style>{rules.join('\n')}</style>}
      {children}
    </div>
  );
}
