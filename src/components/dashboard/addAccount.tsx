import { styles } from "../../styles/styles";

export default function AddAccountCard(){
    return (
        <button className={styles.button.default} onClick={handleClick}>
            <h1 className="text-center">Add Account</h1>
        </button>
    );
}

function handleClick(){
    alert("button clicked!!!!");
}