import { useNavigate } from "react-router-dom";

import "../../pages/Home/Home.css";

export default function SideBar () {
    const navigate = useNavigate();

    return (
        <div className="menu">
            <div>todo</div>
            <div>
                <button onClick={() => navigate("/calendar")}>
                    calendar
                </button>
            </div>
            <div>my husky</div>
            <div>shop</div>
        </div>
    );
}