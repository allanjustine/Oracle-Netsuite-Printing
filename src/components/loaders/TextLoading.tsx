export default function TextLoading() {
  const loadingText = [
    "U",
    "p",
    "l",
    "o",
    "a",
    "d",
    "i",
    "n",
    "g",
    ".",
    ".",
    ".",
  ];

  return (
    <div className="flex">
      {loadingText.map((letter, index: any) => (
        <span
          key={index}
          className="animate-bounce"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {letter}
        </span>
      ))}
    </div>
  );
}
