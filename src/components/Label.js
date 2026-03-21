import React from 'react';

const PRESETS = {
  purple: { bg: 'rgba(115,103,240,0.15)', text: '#7367F0', border: 'rgba(115,103,240,0.35)' },
  blue:   { bg: 'rgba(59,130,246,0.12)',  text: '#3b82f6', border: 'rgba(59,130,246,0.35)' },
  green:  { bg: 'rgba(34,197,94,0.12)',   text: '#16a34a', border: 'rgba(34,197,94,0.35)'  },
  red:    { bg: 'rgba(239,68,68,0.12)',   text: '#dc2626', border: 'rgba(239,68,68,0.35)'  },
  yellow: { bg: 'rgba(234,179,8,0.12)',   text: '#ca8a04', border: 'rgba(234,179,8,0.35)'  },
  gray:   { bg: 'rgba(107,114,128,0.12)', text: '#6b7280', border: 'rgba(107,114,128,0.35)' },
};

export default function Label({ color, bg, text, border, children }) {
  const preset = PRESETS[color];

  const style = {
    display: 'inline-block',
    padding: '0.1em 0.55em',
    fontSize: '0.78em',
    fontWeight: 500,
    lineHeight: 1.6,
    borderRadius: '3px',
    border: `1px solid ${border ?? preset?.border ?? 'rgba(107,114,128,0.3)'}`,
    backgroundColor: bg ?? preset?.bg ?? 'transparent',
    color: text ?? preset?.text ?? 'inherit',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
  };

  return <span style={style}>{children}</span>;
}
