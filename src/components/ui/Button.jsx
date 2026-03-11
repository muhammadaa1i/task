const variantMap = {
  primary:
    'border-transparent bg-(--accent) text-white shadow-[0_10px_25px_rgba(14,163,113,0.3)] hover:bg-(--accent-dark)',
  secondary: 'border-(--stroke) bg-white text-(--text) hover:bg-slate-50',
}

export default function Button({
  as = 'button',
  variant = 'primary',
  fullWidth = false,
  className = '',
  children,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5 ${variantMap[variant] ?? variantMap.primary} ${fullWidth ? 'w-full' : ''} ${className}`.trim()

  if (as === 'a') {
    return (
      <a className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
