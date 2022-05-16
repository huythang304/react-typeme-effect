import React from 'react'
import { CursorConfig } from '../../types/interface';

const CONFIGURATION_DEFAULTS: CursorConfig = {
    blink: true,
    blinkDelay: 500,
    element: '|',
    cursorClassName: '',
    cursorWrapper: 'span'
};

const Cursor = (props?: Partial<CursorConfig>) => {

    /**
     * Use defaults, override defaults where ever the user set something in the config
     */
    const resolvedConfig: Required<CursorConfig> = {
        ...CONFIGURATION_DEFAULTS,
        ...props,
    };

    /**
     * Start the cursor animation blink
     */
    const [showBlinker, setShowBlinker] = React.useState(true);

    React.useEffect(() => {
        if (!resolvedConfig.blink) {
            return;
        }

        const timer = setTimeout(() => {
            setShowBlinker((showBlinker) => !showBlinker);
        }, resolvedConfig.blinkDelay);

        return () => clearTimeout(timer);

    }, [showBlinker]);

    const Wrapper = resolvedConfig.cursorWrapper;

    return (
        <Wrapper className={resolvedConfig.cursorClassName}>{showBlinker ? resolvedConfig.element : " "}</Wrapper>
    )
}

export default Cursor