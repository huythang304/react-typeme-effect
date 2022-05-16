import React from 'react'
import { useTypeEffect } from '../../hook/useTypeEffect';
import { TypingConfig } from '../../types/interface';
import Cursor from '../Cursor';

const CONFIGURATION_DEFAULTS: TypingConfig = {
    words: "",
    loop: false,
    loopDelay: 100,
    startDelay: 100,
    typingSpeed: 100,
    eraseSpeed: null,
    showCursor: true,
    cursor: {
        blink: true,
        blinkDelay: 100,
        element: '|',
        cursorClassName: '',
        cursorWrapper: 'span'
    },
    className: '',
    typingWrapper: 'div'
};

const TypingWriter = (props?: Partial<TypingConfig>) => {

    /**
     * Use defaults, override defaults where ever the user set something in the config =)
     */
    const resolvedConfig: Required<TypingConfig> = {
        ...CONFIGURATION_DEFAULTS,
        ...props,
    };

    const { textValue: typedText } = useTypeEffect({
        words: resolvedConfig.words,
        startDelay: resolvedConfig.startDelay,
        typingSpeed: resolvedConfig.typingSpeed,
        eraseSpeed: resolvedConfig.eraseSpeed,
        loop: resolvedConfig.loop,
        loopDelay: resolvedConfig.loopDelay,
    });

    const Wrapper = resolvedConfig.typingWrapper;

    return (
        <Wrapper className={resolvedConfig.className} key={resolvedConfig.className}>
            {typedText} {resolvedConfig.showCursor && <Cursor {...resolvedConfig.cursor} />}
        </Wrapper>

    )
}

export default TypingWriter
