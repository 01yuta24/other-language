export const SpaceBornArea = ({ setPageNo }) => {
  const spaceMenu = () => {
    setPageNo(0);
  };
  const spaceKit = () => {
    setPageNo(1);
  };
  return (
    <>
      <div>爆誕</div>
      <div>
        <h1>menu</h1>
        <button onClick={spaceMenu}>メニューに戻る</button>
        <button onClick={spaceKit}>宇宙を始める</button>
      </div>
    </>
  );
};
