import { useNavigate } from "react-router-dom";

export default function SideBar () {
    const navigate = useNavigate();

    return (
        <>
            <div>todo</div>
            <div>
                <button onClick={() => navigate("/calendar")}>
                    calendar
                </button>
            </div>
            <div>my husky</div>
            <div>shop</div>
        </>
    );
}