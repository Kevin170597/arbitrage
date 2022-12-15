import './LoadingIcon.css';

export const LoadingIcon = (props: any) => {

    return (
        <svg className="spinner"
            width={100}
            height={100}
            fill="#000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            {...props}
        >
            <path
                d="M50 17.5A32.5 32.5 0 0 0 17.5 50a3.75 3.75 0 0 1-7.5 0 40 40 0 1 1 40 40 3.75 3.75 0 1 1 0-7.5 32.5 32.5 0 0 0 0-65Z"
                fill={props.fill}
            />
        </svg>
    )
}