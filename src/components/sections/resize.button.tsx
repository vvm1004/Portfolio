interface IPros {
    btnText?: string;
    btnIcons?: React.ReactNode;
    btnStyle?: React.CSSProperties;
    onClick? : () => void
}
const ResizeButton = (props: IPros) => {
    const { onClick, btnText, btnIcons, btnStyle } = props;

    return (
        <button onClick={onClick} className="resize-button" style={btnStyle}>
            <span style={{ textTransform: "uppercase" }}>{btnText}</span>
            <>{btnIcons}</>
        </button>
    )
}

export default ResizeButton;