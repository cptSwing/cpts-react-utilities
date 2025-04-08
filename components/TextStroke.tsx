import { CSSProperties, FC } from 'react';

/**
 * Returns a Span element with stroked text, using -webkit-text-stroke. Draws the stroke behind the \<span\>, using a :before pseudo-element.
 *
 * @param {string} text
 * @param {string} [strokeWidth='1rem'] px, em, rem
 * @param {string} [strokeColor='white'] hexCode, rgb(a) value, or css color name such as 'red'
 * @param {string} [classNames=''] additional classes to add
 */
const TextStroke: FC<{
	text: string;
	strokeWidth?: CSSProperties['WebkitTextStrokeWidth'];
	strokeColor?: CSSProperties['WebkitTextStrokeColor'];
	classNames?: string;
}> = ({ text, strokeWidth = '1rem', strokeColor = 'white', classNames = '' }) => {
	return (
		<>
			<style
				dangerouslySetInnerHTML={{
					__html: `.react-text-stroke:before {
                                    content: "${text}";
                                    position: absolute;
                                    display: block;
                                    left: 0;
                                    top: 0;
                                    -webkit-text-stroke-width: ${strokeWidth};
                                    -webkit-text-stroke-color: ${strokeColor};
                                    z-index: -1;
                            }`,
				}}
			/>
			<span className={`react-text-stroke ${classNames}`}>{text}</span>
		</>
	);
};

export default TextStroke;
