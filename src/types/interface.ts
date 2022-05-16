export interface TypeEffectConfig {
    /**
     * Amount of milliseconds delay at the start of the type effect
     */
    startDelay: number;

    /**
     * The effect loop
     */
    loop: boolean;

    /**
     * Time delay between each loop if `loop` option is true
     */
    loopDelay: number;

    /**
     * Amount of milliseconds delay beteen each char.
     */
    typingSpeed: number;

    /**
     * Amount of milliseconds delay beteen each char.
     */
    eraseSpeed: number | null;

    /**
     *  That text that will be typed and erased. Can be either an array of strings or just a string.
     */
    words: string | string[];
}

export interface CursorConfig {

    /**
     * Should the cursor blink?
     */
    blink: boolean;

    /**
     * Time between each cursor blink in milliseconds
     */
    blinkDelay: number;

    /**
     * Change the cursor style available if cursor is enabled
     */
    element: string;

    /**
     * Field to set classes for the cursor
     */
    cursorClassName: string;

    /**
     * HTML elements that Animation is wrapped around
     */
    cursorWrapper: keyof JSX.IntrinsicElements;
}

export interface TypingConfig extends TypeEffectConfig {

    /**
     * Field to set classes for the HTML Element
     */
    className: string;

    /**
     * Show / Hide a cursor
     */
    showCursor: boolean;

    /**
     * HTML elements that Animation is wrapped around
     */
    typingWrapper: keyof JSX.IntrinsicElements;

    /**
     * Field to set classes for the cursor
     */
    cursor: CursorConfig;
}