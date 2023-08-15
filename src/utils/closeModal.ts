import { ActionCreatorWithPayload, Dispatch} from "@reduxjs/toolkit";

export function closeModal(backgroundId: string, action: ActionCreatorWithPayload<boolean>, dispatch: Dispatch)
{
    document.getElementById(backgroundId)?.classList.add("modal-background-wrapper-fade-out");
    document.getElementById(backgroundId)?.classList.remove("modal-background-wrapper");
    setTimeout(() => {
        dispatch(action(false));
    }, 500)
}