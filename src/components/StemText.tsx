type Props = {
  text: string;
  className?: string;
};

/** Renders stem text. `[[word]]` = underline, `**word**` = bold. */
export function StemText({ text, className }: Props) {
  const parts = text.split(/(\[\[.+?\]\]|\*\*.+?\*\*)/g);

  return (
    <p className={className}>
      {parts.map((part, i) => {
        if (part.startsWith('[[') && part.endsWith(']]')) {
          return <u key={i}>{part.slice(2, -2)}</u>;
        }
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        return <span key={i}>{part}</span>;
      })}
    </p>
  );
}
