import UserStore from "../store/UserStore.js";

const SubmitButtonComponent = (props) => {

    const { IsFormSubmit } = UserStore();

    return (
        <button
            type="submit"
            disabled={IsFormSubmit}
            onClick={props.onClick}
            className={`${props.className} flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed`}
        >
            {IsFormSubmit ? (
                <>
                    <div className="w-5 h-5 border-[3px] border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Processing...</span>
                </>
            ) : (
                props.text
            )}
        </button>
    );
};

export default SubmitButtonComponent;