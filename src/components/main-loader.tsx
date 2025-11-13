import layout from '#@/styles/layout.module.css';

export const TableLoader = () => {
  return (
    <td>
      <div className={layout.loader}></div>;
    </td>
  );
};

export function Loader() {
  return <div className={layout.loader}></div>;
}
