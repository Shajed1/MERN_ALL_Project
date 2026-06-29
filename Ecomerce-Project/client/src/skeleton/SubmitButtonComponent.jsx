import UserStore from "../store/UserStore.js";

const SubmitButtonComponent = (props) => {

    const { IsFormSubmit } = UserStore();

    if (IsFormSubmit) {
        return (
            <button
                type={props.type || "button"}
                disabled
                className={`${props.className} flex items-center justify-center gap-2`}
            >
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Please Wait...</span>
            </button>
        );
    }

    return (
        <button
            type={props.type || "button"}
            onClick={props.onClick}
            className={props.className}
        >
            {props.text}
        </button>
    );
};

export default SubmitButtonComponent;