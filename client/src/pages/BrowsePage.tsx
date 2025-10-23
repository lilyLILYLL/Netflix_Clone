import { useAppSelector, type RootState, useAppDisptach } from "../redux";
import { Button, Header } from "../components";
import { useNavigate } from "react-router-dom";

export function BrowsePage() {
    const auth = useAppSelector((state: RootState) => state.userSlice);
    const dispatch = useAppDisptach();
    const navigate = useNavigate();
    console.log(auth);

    return (
        <div>
            <div className="w-[95%]   "></div>
        </div>
    );
}
