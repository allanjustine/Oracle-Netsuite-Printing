export default function TableLoader({ colSpan }: any) {
  return Array.from({ length: 5 }).map((_, index) => (
    <tr key={index}>
      <td colSpan={colSpan}>
        <p
          className="w-full h-10 bg-slate-300 animate-pulse rounded-md"
          style={{ animationDelay: `${index * 0.2}s`, animationDuration: "1.5s" }}
        ></p>
      </td>
    </tr>
  ));
}
