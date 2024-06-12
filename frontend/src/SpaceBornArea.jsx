import { Slider } from '@nextui-org/react';
import { Button } from '@nextui-org/button';

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
                <Button>Press me</Button>
                <Slider
                    label="Select a value"
                    showTooltip={true}
                    step={0.1}
                    formatOptions={{ style: 'percent' }}
                    maxValue={1}
                    minValue={0}
                    marks={[
                        {
                            value: 0.2,
                            label: '20%',
                        },
                        {
                            value: 0.5,
                            label: '50%',
                        },
                        {
                            value: 0.8,
                            label: '80%',
                        },
                    ]}
                    defaultValue={0.2}
                    className="max-w-md"
                />
            </div>
        </>
    );
};
