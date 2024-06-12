export const Menu = ({ setPageNo }) => {
    const spaceKit = () => {
        setPageNo(1);
    };
    const spaceBorn = () => {
        setPageNo(2);
    };
    return (
        <div>
            <h1>menu</h1>
            <button onClick={spaceKit}>宇宙を始める</button>
            <button onClick={spaceBorn}>惑星爆誕</button>
        </div>
    );
};
